import { NextRequest, NextResponse } from 'next/server';

interface UserInfo {
  department?: string;
  position?: string;
  lastName: string;
  firstName: string;
  email: string;
  additionalRequirements?: string;
}

function generatePrompt(userInfo: UserInfo): string {
  return `
あなたは須藤技術士事務所のシニアITコンサルタントです。以下のユーザー情報を基に、商用レベルの詳細なITサービス提案資料を作成してください。

【ユーザー情報】
- 部署: ${userInfo.department || '未指定'}
- 役職: ${userInfo.position || '未指定'}
- 姓: ${userInfo.lastName}
- 名: ${userInfo.firstName}
- メールアドレス: ${userInfo.email}
- 追加要件・ご要望: ${userInfo.additionalRequirements || 'なし'}

【商用レベルの提案内容を作成してください】

1. **サービス概要**
   - 業界の現状と課題分析
   - デジタル変革の必要性
   - 須藤技術士事務所の強みと実績
   - 競合他社との差別化ポイント

2. **推奨サービス**
   - ユーザーの部署・役職に特化したサービス提案
   - 技術スタックとアーキテクチャ設計
   - 段階的な導入ロードマップ
   - 予算とスケジュールの概算

3. **期待される効果**
   - 定量的なROI計算（コスト削減、売上向上、効率化）
   - KPI設定と測定方法
   - 競合優位性の獲得
   - リスク軽減効果

4. **導入ステップ**
   - フェーズ別の詳細計画
   - 必要なリソースと体制
   - マイルストーンとチェックポイント
   - 変更管理とユーザートレーニング

5. **サポート体制**
   - 24/7サポート体制
   - SLA（サービスレベル合意）
   - 定期メンテナンスとアップデート
   - 継続的な改善と最適化

6. **リスク管理**
   - セキュリティ対策
   - データ保護とコンプライアンス
   - 災害復旧計画
   - 事業継続性の確保

7. **投資対効果**
   - 初期投資と運用コスト
   - 3年間のROI予測
   - 競合他社との比較
   - 長期的な価値創出

【要求事項】
- 商用レベルの専門性と具体性を重視
- 業界の最新動向とベストプラクティスを反映
- 具体的な数値と事例を含める
- 実現可能性とリスクを考慮した現実的な提案
- 日本語で作成し、専門用語は適切に説明
- 追加要件・ご要望を特に重視し、それに応じた具体的な提案を含める

必ず以下のJSON形式で回答してください。他のテキストは一切含めず、JSONのみを返してください：

{
  "serviceOverview": "詳細なサービス概要（業界分析、課題、強み、差別化）",
  "recommendedServices": "推奨サービス（技術スタック、アーキテクチャ、ロードマップ、予算）",
  "expectedEffects": "期待される効果（ROI計算、KPI、競合優位性、リスク軽減）",
  "implementationSteps": "導入ステップ（フェーズ別計画、リソース、マイルストーン、変更管理）",
  "supportSystem": "サポート体制（24/7サポート、SLA、メンテナンス、継続改善）",
  "riskManagement": "リスク管理（セキュリティ、データ保護、災害復旧、事業継続性）",
  "investmentReturn": "投資対効果（初期投資、3年ROI、競合比較、長期価値）",
  "additionalRequirementsResponse": "追加要件・ご要望への具体的な回答と提案"
}

重要：回答は上記のJSON形式のみとし、説明文やその他のテキストは一切含めないでください。
  `;
}

export async function POST(request: NextRequest) {
  try {
    const userInfo: UserInfo = await request.json();

    // バリデーション
    if (!userInfo.lastName || !userInfo.firstName || !userInfo.email) {
      return NextResponse.json(
        { error: '必須項目が不足しています。' },
        { status: 400 }
      );
    }

    // OpenAI APIキーを環境変数から取得
    const apiKey = process.env.OPENAI_API_KEY || process.env.NEXT_PUBLIC_OPENAI_API_KEY;
    
    if (!apiKey) {
      return NextResponse.json(
        { error: 'OpenAI APIキーが設定されていません' },
        { status: 500 }
      );
    }

    // OpenAI APIを呼び出し
    const prompt = generatePrompt(userInfo);
    
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'あなたは須藤技術士事務所のITコンサルタントです。ユーザーの情報を基に、パーソナライズされたITサービス提案資料を作成してください。'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        max_tokens: 2000,
        temperature: 0.7
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('OpenAI API error:', errorData);
      return NextResponse.json(
        { error: `OpenAI APIエラー: ${response.status} ${response.statusText}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    
    // レスポンスの検証
    if (!data || !data.choices || !data.choices[0] || !data.choices[0].message) {
      return NextResponse.json(
        { error: 'OpenAI APIからの無効なレスポンス形式' },
        { status: 500 }
      );
    }
    
    const aiResponse = data.choices[0].message.content;

    // JSONレスポンスをパース
    let parsedContent;
    try {
      parsedContent = JSON.parse(aiResponse);
    } catch (parseError) {
      console.warn('Failed to parse AI response as JSON:', parseError);
      // JSONパースに失敗した場合は、テキストをそのまま使用
      parsedContent = {
        serviceOverview: aiResponse,
        recommendedServices: 'AI生成された推奨サービス情報',
        expectedEffects: 'AI生成された期待効果情報',
        implementationSteps: 'AI生成された導入ステップ情報',
        supportSystem: 'AI生成されたサポート体制情報',
        riskManagement: 'AI生成されたリスク管理情報',
        investmentReturn: 'AI生成された投資対効果情報',
        additionalRequirementsResponse: userInfo.additionalRequirements || 'なし'
      };
    }

    return NextResponse.json({ content: parsedContent });
  } catch (error: any) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: `サーバーエラー: ${error.message}` },
      { status: 500 }
    );
  }
}

