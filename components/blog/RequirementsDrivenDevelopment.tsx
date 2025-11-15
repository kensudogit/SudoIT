import styles from './article-content.module.css'
import ShareButtons from '@/components/ShareButtons'

export default function RequirementsDrivenDevelopment() {
  const title = '要件定義書駆動開発：実践ガイド'
  const url = 'https://sudoit-portfolio.vercel.app/blog/requirements-driven-development'

  return (
    <>
      <header className={styles.header}>
        <div className={styles.meta}>
          <span className={styles.category}>開発手法</span>
          <time className={styles.date}>2024-01-15</time>
          <span className={styles.readTime}>読了時間: 15分</span>
        </div>
        <h1 className={styles.title}>要件定義書駆動開発：実践ガイド</h1>
        <p className={styles.subtitle}>
          要件定義書を中心とした開発手法の実践的な進め方と、プロジェクト成功のための具体的な手順を詳しく解説します。
        </p>
      </header>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2>1. 要件定義書駆動開発とは</h2>
          <p>
            要件定義書駆動開発（Requirements-Driven Development, RDD）は、要件定義書を開発プロセスの中心に据え、
            すべての開発活動を要件定義書に基づいて進める開発手法です。この手法により、開発チーム全体が同じ目標を共有し、
            要件の漏れや誤解を防ぐことができます。
          </p>

          <h3>1.1 要件定義書駆動開発のメリット</h3>
          <ul>
            <li><strong>要件の明確化</strong>：開発前に要件を明確に定義することで、後戻りを最小限に抑えられます</li>
            <li><strong>コミュニケーションの向上</strong>：ステークホルダー、プロジェクトマネージャー、開発者が同じドキュメントを参照します</li>
            <li><strong>品質の向上</strong>：要件に基づいたテスト設計により、品質を担保できます</li>
            <li><strong>進捗管理の容易さ</strong>：要件ごとに進捗を管理できるため、プロジェクトの可視性が向上します</li>
            <li><strong>保守性の向上</strong>：要件と実装の対応関係が明確になり、保守が容易になります</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>2. 要件定義書の作成手順</h2>

          <h3>2.1 要件収集フェーズ</h3>
          <p>まず、ステークホルダーから要件を収集します。以下の手法を組み合わせて実施します：</p>

          <div className={styles.codeBlock}>
            <h4>要件収集のチェックリスト</h4>
            <ul>
              <li>ステークホルダーインタビュー（経営層、現場担当者、エンドユーザー）</li>
              <li>既存システム・業務フローの分析</li>
              <li>競合システムの調査</li>
              <li>ワークショップによる要件の洗い出し</li>
              <li>プロトタイプによる要件の確認</li>
            </ul>
          </div>

          <h3>2.2 要件定義書の構造</h3>
          <p>要件定義書は以下の構造で作成します：</p>

          <div className={styles.codeBlock}>
            <pre>{`1. プロジェクト概要
   1.1 背景・目的
   1.2 スコープ
   1.3 制約事項

2. 機能要件
   2.1 ユーザー管理機能
   2.2 データ入力機能
   2.3 レポート機能
   ...

3. 非機能要件
   3.1 パフォーマンス要件
   3.2 セキュリティ要件
   3.3 可用性要件
   3.4 保守性要件

4. システム構成
   4.1 アーキテクチャ
   4.2 技術スタック
   4.3 インフラ構成

5. データモデル
   5.1 ER図
   5.2 データ辞書

6. 画面設計
   6.1 画面一覧
   6.2 画面遷移図
   6.3 画面詳細仕様

7. API設計
   7.1 API一覧
   7.2 API詳細仕様

8. テスト計画
   8.1 テスト方針
   8.2 テスト項目`}</pre>
          </div>
        </section>

        <section className={styles.section}>
          <h2>3. 要件定義書の記述方法</h2>

          <h3>3.1 機能要件の記述</h3>
          <p>機能要件は、以下の形式で記述します：</p>

          <div className={styles.exampleBox}>
            <h4>記述例：ユーザー登録機能</h4>
            <p><strong>要件ID</strong>: REQ-001</p>
            <p><strong>要件名</strong>: ユーザー登録機能</p>
            <p><strong>優先度</strong>: 高</p>
            <p><strong>説明</strong>: 新規ユーザーがシステムに登録できる機能を提供する</p>
            <p><strong>前提条件</strong>: ユーザーが登録画面にアクセスできること</p>
            <p><strong>入力</strong>:
              <ul>
                <li>メールアドレス（必須、形式チェックあり）</li>
                <li>パスワード（必須、8文字以上、英数字混合）</li>
                <li>氏名（必須、最大50文字）</li>
              </ul>
            </p>
            <p><strong>処理</strong>:
              <ul>
                <li>メールアドレスの重複チェック</li>
                <li>パスワードの強度チェック</li>
                <li>ユーザー情報をデータベースに保存</li>
                <li>確認メールを送信</li>
              </ul>
            </p>
            <p><strong>出力</strong>:
              <ul>
                <li>登録成功時：確認メール送信完了メッセージ</li>
                <li>登録失敗時：エラーメッセージ（重複、形式エラーなど）</li>
              </ul>
            </p>
            <p><strong>例外処理</strong>:
              <ul>
                <li>データベース接続エラー時：エラーログを記録し、ユーザーにエラーメッセージを表示</li>
                <li>メール送信失敗時：ユーザー登録は完了するが、警告ログを記録</li>
              </ul>
            </p>
          </div>

          <h3>3.2 非機能要件の記述</h3>
          <p>非機能要件は、測定可能な指標で記述します：</p>

          <div className={styles.exampleBox}>
            <h4>記述例：パフォーマンス要件</h4>
            <ul>
              <li><strong>レスポンスタイム</strong>: 通常操作で2秒以内、検索処理で5秒以内</li>
              <li><strong>スループット</strong>: 同時100ユーザーで1秒あたり50リクエストを処理可能</li>
              <li><strong>データベースクエリ</strong>: 単一クエリは100ms以内</li>
              <li><strong>ページロード時間</strong>: 初回ロード3秒以内、2回目以降1秒以内</li>
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <h2>4. 要件定義書を活用した開発プロセス</h2>

          <h3>4.1 開発フェーズでの活用</h3>
          <p>要件定義書は以下のように開発プロセスで活用します：</p>

          <div className={styles.processBox}>
            <div className={styles.processStep}>
              <h4>ステップ1: 要件の理解と確認</h4>
              <p>開発チーム全員で要件定義書を読み込み、不明点を洗い出します。必要に応じてステークホルダーに確認します。</p>
            </div>

            <div className={styles.processStep}>
              <h4>ステップ2: 設計書の作成</h4>
              <p>要件定義書を基に、詳細設計書を作成します。各要件に対して実装方法を設計します。</p>
            </div>

            <div className={styles.processStep}>
              <h4>ステップ3: 実装</h4>
              <p>設計書に基づいて実装を行います。要件IDをコメントやコミットメッセージに含めることで、トレーサビリティを確保します。</p>
              <div className={styles.codeBlock}>
                <pre>{`// REQ-001: ユーザー登録機能
public class UserRegistrationService {
    public RegistrationResult register(UserRegistrationRequest request) {
        // メールアドレスの重複チェック
        if (userRepository.existsByEmail(request.getEmail())) {
            return RegistrationResult.error("メールアドレスが既に登録されています");
        }
        // パスワードの強度チェック
        if (!isPasswordStrong(request.getPassword())) {
            return RegistrationResult.error("パスワードは8文字以上、英数字混合で入力してください");
        }
        // ユーザー情報を保存
        User user = new User(request);
        userRepository.save(user);
        // 確認メールを送信
        emailService.sendConfirmationEmail(user);
        return RegistrationResult.success();
    }
}`}</pre>
              </div>
            </div>

            <div className={styles.processStep}>
              <h4>ステップ4: テスト設計と実行</h4>
              <p>要件定義書の各要件に対して、テストケースを作成します。要件IDとテストケースを紐付けることで、要件カバレッジを管理できます。</p>
              <div className={styles.codeBlock}>
                <pre>{`// REQ-001 のテストケース
@Test
public void testUserRegistration_Success() {
    // Given: 有効なユーザー情報
    UserRegistrationRequest request = new UserRegistrationRequest(
        "test@example.com", "Password123", "山田太郎"
    );
    
    // When: ユーザー登録を実行
    RegistrationResult result = service.register(request);
    
    // Then: 登録が成功し、確認メールが送信される
    assertTrue(result.isSuccess());
    verify(emailService).sendConfirmationEmail(any(User.class));
}

@Test
public void testUserRegistration_DuplicateEmail() {
    // Given: 既に登録されているメールアドレス
    userRepository.save(new User("test@example.com", ...));
    UserRegistrationRequest request = new UserRegistrationRequest(
        "test@example.com", "Password123", "山田太郎"
    );
    
    // When: ユーザー登録を実行
    RegistrationResult result = service.register(request);
    
    // Then: エラーが返される
    assertFalse(result.isSuccess());
    assertEquals("メールアドレスが既に登録されています", result.getErrorMessage());
}`}</pre>
              </div>
            </div>

            <div className={styles.processStep}>
              <h4>ステップ5: 要件の検証</h4>
              <p>実装が要件を満たしているか、ステークホルダーと一緒に確認します。要件定義書を参照しながら、デモンストレーションを行います。</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>5. 要件管理と変更管理</h2>

          <h3>5.1 要件のトレーサビリティ</h3>
          <p>要件から実装、テストまで一貫して追跡できるように、要件IDを活用します：</p>

          <div className={styles.traceabilityTable}>
            <table>
              <thead>
                <tr>
                  <th>要件ID</th>
                  <th>要件名</th>
                  <th>設計書</th>
                  <th>実装ファイル</th>
                  <th>テストケース</th>
                  <th>ステータス</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>REQ-001</td>
                  <td>ユーザー登録機能</td>
                  <td>DES-001</td>
                  <td>UserRegistrationService.java</td>
                  <td>TC-001, TC-002</td>
                  <td>完了</td>
                </tr>
                <tr>
                  <td>REQ-002</td>
                  <td>ログイン機能</td>
                  <td>DES-002</td>
                  <td>AuthenticationService.java</td>
                  <td>TC-003, TC-004</td>
                  <td>実装中</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>5.2 要件変更の管理</h3>
          <p>要件変更は避けられませんが、以下のプロセスで管理します：</p>
          <ol>
            <li><strong>変更要求の提出</strong>：ステークホルダーが変更要求を提出</li>
            <li><strong>影響範囲の分析</strong>：変更による影響範囲（設計、実装、テスト）を分析</li>
            <li><strong>コスト・スケジュールへの影響評価</strong>：変更によるコストとスケジュールへの影響を評価</li>
            <li><strong>変更承認</strong>：プロジェクトマネージャーが承認</li>
            <li><strong>要件定義書の更新</strong>：要件定義書を更新し、バージョン管理</li>
            <li><strong>関係者への通知</strong>：変更内容を関係者に通知</li>
          </ol>
        </section>

        <section className={styles.section}>
          <h2>6. 実践的なTips</h2>

          <h3>6.1 要件定義書の品質向上</h3>
          <ul>
            <li><strong>具体例を入れる</strong>：抽象的な記述だけでなく、具体例を入れることで理解を深めます</li>
            <li><strong>図表を活用する</strong>：フローチャート、シーケンス図、画面遷移図などで視覚的に表現します</li>
            <li><strong>用語集を作成する</strong>：プロジェクト固有の用語を定義し、共通理解を図ります</li>
            <li><strong>レビューを実施する</strong>：複数の目でレビューし、不備を早期に発見します</li>
          </ul>

          <h3>6.2 ツールの活用</h3>
          <p>要件管理を効率化するために、以下のツールを活用します：</p>
          <ul>
            <li><strong>要件管理ツール</strong>：Jira、Redmine、Azure DevOpsなどで要件を管理</li>
            <li><strong>ドキュメント管理</strong>：Confluence、Notionなどで要件定義書を管理</li>
            <li><strong>バージョン管理</strong>：Gitで要件定義書の変更履歴を管理</li>
            <li><strong>トレーサビリティマトリクス</strong>：Excelや専用ツールで要件と実装の対応関係を管理</li>
          </ul>

          <h3>6.3 よくある失敗と対策</h3>
          <div className={styles.warningBox}>
            <h4>失敗パターン1: 要件が抽象的すぎる</h4>
            <p><strong>問題</strong>：要件が「使いやすいシステム」など抽象的で、実装時に解釈が分かれる</p>
            <p><strong>対策</strong>：具体的な指標を設定する（例：「3クリック以内で目的の機能にアクセスできる」）</p>
          </div>

          <div className={styles.warningBox}>
            <h4>失敗パターン2: 要件の更新が追いつかない</h4>
            <p><strong>問題</strong>：開発中に要件が変更されるが、要件定義書が更新されず、実装と乖離する</p>
            <p><strong>対策</strong>：要件変更のたびに必ず要件定義書を更新し、バージョン管理する</p>
          </div>

          <div className={styles.warningBox}>
            <h4>失敗パターン3: 非機能要件が軽視される</h4>
            <p><strong>問題</strong>：機能要件に注力し、パフォーマンスやセキュリティなどの非機能要件が後回しになる</p>
            <p><strong>対策</strong>：非機能要件も要件定義書に明記し、設計・実装・テストの各段階で確認する</p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>7. クローズ環境への導入手順</h2>
          <p>
            要件定義書駆動開発で開発したシステムを、セキュリティ要件が厳しいクローズ環境（オンプレミス、エアギャップ環境など）
            に導入する際の詳細な手順を解説します。クローズ環境では、インターネット接続が制限されているため、
            事前の準備と段階的な導入が重要です。
          </p>

          <h3>7.1 導入前の準備</h3>

          <h4>7.1.1 資材の整理と確認</h4>
          <p>クローズ環境に持ち込む前に、以下の資材を整理します：</p>

          <div className={styles.codeBlock}>
            <h4>導入資材チェックリスト</h4>
            <pre>{`□ アプリケーション資材
  - 実行可能ファイル（JAR/WAR/EARなど）
  - 設定ファイル（application.properties, application.ymlなど）
  - 静的リソース（HTML, CSS, JavaScript, 画像など）
  - データベースマイグレーションスクリプト（Flyway, Liquibaseなど）

□ インフラ資材
  - Dockerイメージ（tar形式でエクスポート）
  - Kubernetesマニフェスト（YAMLファイル）
  - サーバー設定ファイル（nginx.conf, systemd unitなど）
  - ネットワーク設定（ファイアウォールルールなど）

□ データベース資材
  - スキーマ定義SQL
  - 初期データSQL
  - バックアップ・リストアスクリプト

□ ドキュメント
  - 要件定義書（最新版）
  - 設計書（アーキテクチャ、データベース設計など）
  - 運用手順書（起動、停止、バックアップなど）
  - トラブルシューティングガイド
  - API仕様書

□ テスト資材
  - テストケース一覧
  - テストデータ
  - テスト実行スクリプト

□ セキュリティ関連
  - 証明書（SSL/TLS証明書など）
  - 暗号化キー（環境変数として管理）
  - セキュリティ設定ファイル`}</pre>
          </div>

          <h4>7.1.2 依存関係の確認</h4>
          <p>クローズ環境で利用可能なミドルウェアとバージョンを確認します：</p>

          <div className={styles.exampleBox}>
            <h4>依存関係確認表</h4>
            <div className={styles.codeBlock}>
              <pre>{`| ミドルウェア | 開発環境バージョン | クローズ環境バージョン | 対応状況 |
|------------|------------------|---------------------|---------|
| Java       | OpenJDK 17       | OpenJDK 11          | 要確認  |
| PostgreSQL | 14.5            | 12.8                | 要確認  |
| Redis      | 7.0              | 6.2                 | 要確認  |
| Nginx      | 1.22             | 1.20                | 要確認  |
| Docker     | 20.10            | 19.03               | 要確認  |`}</pre>
            </div>
            <p>バージョン差異がある場合は、動作確認テストを実施します。</p>
          </div>

          <h4>7.1.3 ネットワーク要件の確認</h4>
          <p>クローズ環境のネットワーク構成を確認します：</p>
          <ul>
            <li><strong>サーバー間通信</strong>：アプリケーションサーバー、データベースサーバー、キャッシュサーバー間の通信ポート</li>
            <li><strong>外部連携</strong>：外部システムとの連携が必要な場合の通信方式（ファイル転送、メッセージキューなど）</li>
            <li><strong>ファイアウォール</strong>：必要なポートの開放申請</li>
            <li><strong>プロキシ設定</strong>：外部接続が必要な場合のプロキシ設定</li>
          </ul>

          <h3>7.2 資材のパッケージング</h3>

          <h4>7.2.1 アプリケーションのパッケージング</h4>
          <p>開発環境から資材をエクスポートし、クローズ環境に持ち込める形式にパッケージングします：</p>

          <div className={styles.codeBlock}>
            <h4>パッケージングスクリプト例（Linux/Mac）</h4>
            <pre>{`#!/bin/bash
# package-for-deployment.sh

set -e

PACKAGE_NAME="myapp-$(date +%Y%m%d-%H%M%S)"
PACKAGE_DIR="./packages/\${PACKAGE_NAME}"

# ディレクトリ作成
mkdir -p "\${PACKAGE_DIR}"/{app,db,config,docs,scripts}

# アプリケーション資材のコピー
echo "パッケージング中..."

# 1. 実行可能ファイル
cp target/myapp-*.jar "\${PACKAGE_DIR}/app/"

# 2. 設定ファイル
cp -r src/main/resources/* "\${PACKAGE_DIR}/config/"

# 3. データベースマイグレーション
cp -r db/migration/* "\${PACKAGE_DIR}/db/"

# 4. ドキュメント
cp docs/requirements.pdf "\${PACKAGE_DIR}/docs/"
cp docs/architecture.pdf "\${PACKAGE_DIR}/docs/"
cp docs/operation-manual.pdf "\${PACKAGE_DIR}/docs/"

# 5. デプロイスクリプト
cat > "\${PACKAGE_DIR}/scripts/deploy.sh" << 'EOF'
#!/bin/bash
# デプロイスクリプト
set -e
echo "デプロイを開始します..."
# デプロイ処理
EOF
chmod +x "\${PACKAGE_DIR}/scripts/deploy.sh"

# 6. チェックサムの生成
find "\${PACKAGE_DIR}" -type f -exec md5sum {} \\; > "\${PACKAGE_DIR}/checksums.md5"

# 7. パッケージの圧縮
cd packages
tar -czf "\${PACKAGE_NAME}.tar.gz" "\${PACKAGE_NAME}"
cd ..

echo "パッケージング完了: packages/\${PACKAGE_NAME}.tar.gz"
echo "チェックサム: $(md5sum packages/\${PACKAGE_NAME}.tar.gz | cut -d' ' -f1)"`}</pre>
          </div>

          <h4>7.2.2 Dockerイメージのエクスポート</h4>
          <p>Dockerを使用している場合、イメージをtar形式でエクスポートします：</p>

          <div className={styles.codeBlock}>
            <pre>{`# Dockerイメージのエクスポート
docker save myapp:latest | gzip > myapp-latest.tar.gz

# 複数イメージを一度にエクスポート
docker save \\
  myapp:latest \\
  postgres:12.8 \\
  redis:6.2 \\
  nginx:1.20 | gzip > all-images.tar.gz

# イメージの確認
docker images | grep -E "myapp|postgres|redis|nginx"

# エクスポートしたイメージのサイズ確認
ls -lh *.tar.gz`}</pre>
          </div>

          <h4>7.2.3 依存ライブラリのバンドル</h4>
          <p>Maven/Gradleの依存ライブラリをバンドルします：</p>

          <div className={styles.codeBlock}>
            <pre>{`# Mavenの場合
mvn dependency:copy-dependencies -DoutputDirectory=libs

# Gradleの場合
./gradlew dependencies --configuration runtimeClasspath > dependencies.txt
./gradlew copyDependencies

# 依存ライブラリをパッケージに含める
cp -r libs "\${PACKAGE_DIR}/libs/"`}</pre>
          </div>

          <h3>7.3 クローズ環境への転送</h3>

          <h4>7.3.1 転送方法の選択</h4>
          <p>クローズ環境のセキュリティポリシーに応じて、適切な転送方法を選択します：</p>

          <div className={styles.processBox}>
            <div className={styles.processStep}>
              <h4>方法1: 物理メディア経由</h4>
              <p>最もセキュアな方法。USBメモリ、DVD、外付けHDDなどに資材をコピーし、物理的に持ち込みます。</p>
              <div className={styles.codeBlock}>
                <pre>{`# 1. メディアのフォーマット（必要に応じて）
sudo mkfs.ext4 /dev/sdb1

# 2. マウント
sudo mount /dev/sdb1 /mnt/usb

# 3. 資材のコピー
sudo cp packages/\${PACKAGE_NAME}.tar.gz /mnt/usb/
sudo cp all-images.tar.gz /mnt/usb/

# 4. チェックサムの確認
md5sum /mnt/usb/*.tar.gz > /mnt/usb/checksums.md5

# 5. アンマウント
sudo umount /mnt/usb`}</pre>
              </div>
            </div>

            <div className={styles.processStep}>
              <h4>方法2: セキュアファイル転送</h4>
              <p>クローズ環境が限定的なネットワーク接続を許可している場合、SFTP/SCPを使用します。</p>
              <div className={styles.codeBlock}>
                <pre>{`# SCPでの転送
scp -i ~/.ssh/deploy_key \\
    packages/\${PACKAGE_NAME}.tar.gz \\
    user@closed-env-server:/tmp/

# SFTPでの転送
sftp -i ~/.ssh/deploy_key user@closed-env-server
> put packages/\${PACKAGE_NAME}.tar.gz /tmp/
> put all-images.tar.gz /tmp/
> quit

# 転送後のチェックサム確認（クローズ環境側で実行）
md5sum /tmp/*.tar.gz`}</pre>
              </div>
            </div>

            <div className={styles.processStep}>
              <h4>方法3: 専用転送ツール</h4>
              <p>企業のセキュリティポリシーに準拠した専用転送ツールを使用します。</p>
              <ul>
                <li>セキュアファイル転送サーバー（MFT: Managed File Transfer）</li>
                <li>暗号化された転送ツール</li>
                <li>承認フロー付き転送システム</li>
              </ul>
            </div>
          </div>

          <h4>7.3.2 転送前の検証</h4>
          <p>転送前に以下を確認します：</p>
          <ul>
            <li><strong>チェックサムの生成</strong>：転送前と転送後の整合性確認のため</li>
            <li><strong>ウイルススキャン</strong>：セキュリティポリシーに従い、ウイルススキャンを実施</li>
            <li><strong>暗号化</strong>：必要に応じて、資材を暗号化して転送</li>
            <li><strong>転送ログ</strong>：転送日時、ファイル名、サイズを記録</li>
          </ul>

          <h3>7.4 クローズ環境での展開</h3>

          <h4>7.4.1 環境の準備</h4>
          <p>クローズ環境で展開前に、以下を準備します：</p>

          <div className={styles.codeBlock}>
            <h4>環境準備チェックリスト</h4>
            <pre>{`□ サーバーリソースの確認
  - CPU: 最低4コア推奨
  - メモリ: 最低8GB推奨
  - ディスク: 最低100GBの空き容量

□ ミドルウェアのインストール確認
  - Java (バージョン確認)
  - PostgreSQL (バージョン確認)
  - Redis (バージョン確認)
  - Nginx (バージョン確認)
  - Docker (バージョン確認、必要に応じて)

□ ネットワーク設定
  - ファイアウォールルールの設定
  - ポートの開放確認
  - DNS設定（必要に応じて）

□ ディレクトリ構造の作成
  - アプリケーション配置ディレクトリ
  - ログディレクトリ
  - バックアップディレクトリ
  - 設定ファイルディレクトリ

□ ユーザー・権限の設定
  - アプリケーション実行ユーザーの作成
  - ファイル・ディレクトリの権限設定`}</pre>
          </div>

          <h4>7.4.2 資材の展開</h4>
          <p>転送した資材を展開します：</p>

          <div className={styles.codeBlock}>
            <h4>展開スクリプト例</h4>
            <pre>{`#!/bin/bash
# deploy.sh - クローズ環境での展開スクリプト

set -e

# 変数設定
APP_DIR="/opt/myapp"
LOG_DIR="/var/log/myapp"
BACKUP_DIR="/var/backup/myapp"
PACKAGE_FILE="/tmp/myapp-*.tar.gz"

# 1. チェックサムの確認
echo "チェックサムを確認中..."
cd /tmp
md5sum -c checksums.md5 || { echo "チェックサム不一致！"; exit 1; }

# 2. 既存のバックアップ
if [ -d "\${APP_DIR}" ]; then
    echo "既存環境をバックアップ中..."
    BACKUP_NAME="backup-$(date +%Y%m%d-%H%M%S)"
    mkdir -p "\${BACKUP_DIR}"
    tar -czf "\${BACKUP_DIR}/\${BACKUP_NAME}.tar.gz" "\${APP_DIR}"
fi

# 3. ディレクトリの作成
echo "ディレクトリを作成中..."
mkdir -p "\${APP_DIR}"/{bin,lib,config,logs}
mkdir -p "\${LOG_DIR}"
mkdir -p "\${BACKUP_DIR}"

# 4. パッケージの展開
echo "パッケージを展開中..."
tar -xzf \${PACKAGE_FILE} -C /tmp/
PACKAGE_DIR=$(ls -td /tmp/myapp-* | head -1)

# 5. アプリケーション資材の配置
echo "アプリケーション資材を配置中..."
cp "\${PACKAGE_DIR}/app/"*.jar "\${APP_DIR}/bin/"
cp -r "\${PACKAGE_DIR}/libs/"* "\${APP_DIR}/lib/" 2>/dev/null || true
cp -r "\${PACKAGE_DIR}/config/"* "\${APP_DIR}/config/"

# 6. 設定ファイルの環境固有設定
echo "設定ファイルを調整中..."
sed -i "s|spring.datasource.url=jdbc:postgresql://localhost|spring.datasource.url=jdbc:postgresql://\${DB_HOST}|g" \\
    "\${APP_DIR}/config/application.properties"
sed -i "s|spring.datasource.username=.*|spring.datasource.username=\${DB_USER}|g" \\
    "\${APP_DIR}/config/application.properties"
sed -i "s|spring.datasource.password=.*|spring.datasource.password=\${DB_PASSWORD}|g" \\
    "\${APP_DIR}/config/application.properties"

# 7. 権限の設定
echo "権限を設定中..."
chown -R myapp:myapp "\${APP_DIR}"
chown -R myapp:myapp "\${LOG_DIR}"
chmod +x "\${APP_DIR}/bin/"*.jar

# 8. systemdサービスの設定
echo "systemdサービスを設定中..."
cat > /etc/systemd/system/myapp.service << EOF
[Unit]
Description=My Application
After=network.target postgresql.service

[Service]
Type=simple
User=myapp
WorkingDirectory=\${APP_DIR}
ExecStart=/usr/bin/java -jar \${APP_DIR}/bin/myapp.jar \\
    --spring.config.location=\${APP_DIR}/config/application.properties
Restart=always
RestartSec=10
StandardOutput=journal
StandardError=journal

[Install]
WantedBy=multi-user.target
EOF

systemctl daemon-reload
systemctl enable myapp

echo "展開完了！"
echo "次に、systemctl start myapp でアプリケーションを起動してください"`}</pre>
          </div>

          <h4>7.4.3 Dockerイメージのインポート</h4>
          <p>Dockerを使用する場合、エクスポートしたイメージをインポートします：</p>

          <div className={styles.codeBlock}>
            <pre>{`# Dockerイメージのインポート
docker load < all-images.tar.gz

# インポート確認
docker images

# Docker Composeを使用する場合
# docker-compose.ymlを配置
cp docker-compose.yml /opt/myapp/

# 環境変数ファイルの作成
cat > /opt/myapp/.env << EOF
DB_HOST=postgres
DB_PORT=5432
DB_NAME=myapp
DB_USER=myapp_user
DB_PASSWORD=secure_password
REDIS_HOST=redis
REDIS_PORT=6379
EOF

# コンテナの起動
cd /opt/myapp
docker-compose up -d

# コンテナの状態確認
docker-compose ps
docker-compose logs -f`}</pre>
          </div>

          <h3>7.5 データベースのセットアップ</h3>

          <h4>7.5.1 データベースの作成</h4>
          <div className={styles.codeBlock}>
            <pre>{`# PostgreSQLの場合
# 1. データベースユーザーの作成
sudo -u postgres psql << EOF
CREATE USER myapp_user WITH PASSWORD 'secure_password';
CREATE DATABASE myapp_db OWNER myapp_user;
GRANT ALL PRIVILEGES ON DATABASE myapp_db TO myapp_user;
\\q
EOF

# 2. スキーマの適用
psql -h localhost -U myapp_user -d myapp_db -f schema.sql

# 3. マイグレーションの実行（Flywayの場合）
cd /opt/myapp
java -jar flyway.jar \\
    -url=jdbc:postgresql://localhost:5432/myapp_db \\
    -user=myapp_user \\
    -password=secure_password \\
    -locations=filesystem:db/migration \\
    migrate

# 4. 初期データの投入
psql -h localhost -U myapp_user -d myapp_db -f initial_data.sql`}</pre>
          </div>

          <h4>7.5.2 データベースのバックアップ設定</h4>
          <div className={styles.codeBlock}>
            <pre>{`# バックアップスクリプトの作成
cat > /opt/myapp/scripts/backup-db.sh << 'EOF'
#!/bin/bash
BACKUP_DIR="/var/backup/myapp/db"
DATE=$(date +%Y%m%d-%H%M%S)
BACKUP_FILE="\${BACKUP_DIR}/myapp_db_\${DATE}.sql"

mkdir -p "\${BACKUP_DIR}"

# データベースのバックアップ
pg_dump -h localhost -U myapp_user myapp_db > "\${BACKUP_FILE}"

# 古いバックアップの削除（30日以上）
find "\${BACKUP_DIR}" -name "*.sql" -mtime +30 -delete

echo "バックアップ完了: \${BACKUP_FILE}"
EOF

chmod +x /opt/myapp/scripts/backup-db.sh

# cronに登録（毎日2時にバックアップ）
echo "0 2 * * * /opt/myapp/scripts/backup-db.sh" | crontab -`}</pre>
          </div>

          <h3>7.6 アプリケーションの起動と検証</h3>

          <h4>7.6.1 起動前チェック</h4>
          <div className={styles.codeBlock}>
            <h4>起動前チェックリスト</h4>
            <pre>{`□ 設定ファイルの確認
  - データベース接続情報
  - 外部API連携情報（必要に応じて）
  - ログレベル設定
  - セキュリティ設定

□ リソースの確認
  - ディスク容量
  - メモリ使用量
  - ポートの空き状況

□ 依存サービスの確認
  - データベースが起動しているか
  - Redisが起動しているか（使用する場合）
  - 外部システムへの接続確認（必要に応じて）

□ 権限の確認
  - ファイル・ディレクトリの読み書き権限
  - ネットワークアクセス権限`}</pre>
          </div>

          <h4>7.6.2 アプリケーションの起動</h4>
          <div className={styles.codeBlock}>
            <pre>{`# systemdを使用する場合
sudo systemctl start myapp

# 起動状態の確認
sudo systemctl status myapp

# ログの確認
sudo journalctl -u myapp -f

# 手動起動の場合（デバッグ用）
cd /opt/myapp
java -jar bin/myapp.jar \\
    --spring.config.location=config/application.properties \\
    --logging.config=config/logback.xml`}</pre>
          </div>

          <h4>7.6.3 動作確認</h4>
          <div className={styles.codeBlock}>
            <h4>動作確認チェックリスト</h4>
            <pre>{`□ ヘルスチェックエンドポイント
  curl http://localhost:8080/actuator/health

□ 主要機能の動作確認
  - ユーザー登録機能
  - ログイン機能
  - データ取得機能
  - データ更新機能

□ ログの確認
  - エラーログの有無
  - 警告ログの確認
  - パフォーマンスログの確認

□ パフォーマンスの確認
  - レスポンスタイム
  - メモリ使用量
  - CPU使用率
  - データベース接続数`}</pre>
          </div>

          <h3>7.7 本番環境への切り替え</h3>

          <h4>7.7.1 段階的な切り替え</h4>
          <p>本番環境への切り替えは、段階的に実施します：</p>

          <div className={styles.processBox}>
            <div className={styles.processStep}>
              <h4>フェーズ1: 検証環境での動作確認</h4>
              <p>クローズ環境内の検証環境で、すべての機能をテストします。</p>
            </div>

            <div className={styles.processStep}>
              <h4>フェーズ2: ステージング環境での確認</h4>
              <p>本番環境と同等の構成で、負荷テストや統合テストを実施します。</p>
            </div>

            <div className={styles.processStep}>
              <h4>フェーズ3: 本番環境への展開</h4>
              <p>メンテナンスウィンドウを設け、本番環境に展開します。</p>
            </div>

            <div className={styles.processStep}>
              <h4>フェーズ4: ロールバック計画</h4>
              <p>問題が発生した場合のロールバック手順を準備しておきます。</p>
            </div>
          </div>

          <h4>7.7.2 ロールバック手順</h4>
          <div className={styles.codeBlock}>
            <pre>{`#!/bin/bash
# rollback.sh - ロールバックスクリプト

set -e

APP_DIR="/opt/myapp"
BACKUP_DIR="/var/backup/myapp"

# 1. アプリケーションの停止
echo "アプリケーションを停止中..."
sudo systemctl stop myapp

# 2. 最新のバックアップを確認
LATEST_BACKUP=$(ls -t \${BACKUP_DIR}/backup-*.tar.gz | head -1)
echo "ロールバック先: \${LATEST_BACKUP}"

# 3. 現在の環境をバックアップ（念のため）
CURRENT_BACKUP="rollback-backup-$(date +%Y%m%d-%H%M%S).tar.gz"
tar -czf "\${BACKUP_DIR}/\${CURRENT_BACKUP}" "\${APP_DIR}"

# 4. アプリケーションディレクトリの削除
rm -rf "\${APP_DIR}"

# 5. バックアップからの復元
tar -xzf "\${LATEST_BACKUP}" -C /

# 6. アプリケーションの起動
sudo systemctl start myapp

# 7. 動作確認
sleep 10
sudo systemctl status myapp

echo "ロールバック完了"`}</pre>
          </div>

          <h3>7.8 導入後の運用</h3>

          <h4>7.8.1 監視設定</h4>
          <p>アプリケーションの監視を設定します：</p>

          <div className={styles.codeBlock}>
            <pre>{`# ログローテーション設定（logrotate）
cat > /etc/logrotate.d/myapp << EOF
/var/log/myapp/*.log {
    daily
    rotate 30
    compress
    delaycompress
    missingok
    notifempty
    create 0644 myapp myapp
    sharedscripts
    postrotate
        systemctl reload myapp > /dev/null 2>&1 || true
    endscript
}
EOF

# ディスク使用量監視スクリプト
cat > /opt/myapp/scripts/check-disk.sh << 'EOF'
#!/bin/bash
THRESHOLD=80
USAGE=$(df -h / | awk 'NR==2 {print $5}' | sed 's/%//')

if [ \${USAGE} -gt \${THRESHOLD} ]; then
    echo "警告: ディスク使用量が\${USAGE}%です" | mail -s "Disk Usage Alert" admin@example.com
fi
EOF

chmod +x /opt/myapp/scripts/check-disk.sh`}</pre>
          </div>

          <h4>7.8.2 定期メンテナンス</h4>
          <p>定期メンテナンスのタスクを設定します：</p>

          <div className={styles.codeBlock}>
            <h4>定期メンテナンスタスク</h4>
            <pre>{`# crontab設定例
# 毎日2時にデータベースバックアップ
0 2 * * * /opt/myapp/scripts/backup-db.sh

# 毎週日曜日3時にログのアーカイブ
0 3 * * 0 /opt/myapp/scripts/archive-logs.sh

# 毎日1時にディスク使用量チェック
0 1 * * * /opt/myapp/scripts/check-disk.sh

# 毎月1日にセキュリティアップデート確認
0 4 1 * * /opt/myapp/scripts/check-security-updates.sh`}</pre>
          </div>

          <h3>7.9 トラブルシューティング</h3>

          <h4>7.9.1 よくある問題と対処法</h4>

          <div className={styles.warningBox}>
            <h4>問題1: アプリケーションが起動しない</h4>
            <p><strong>確認事項</strong>：</p>
            <ul>
              <li>Javaのバージョンが正しいか（java -version）</li>
              <li>設定ファイルのパスが正しいか</li>
              <li>データベースに接続できるか</li>
              <li>ポートが既に使用されていないか（netstat -tlnp | grep 8080）</li>
              <li>ログファイルでエラー内容を確認（journalctl -u myapp -n 100）</li>
            </ul>
          </div>

          <div className={styles.warningBox}>
            <h4>問題2: データベース接続エラー</h4>
            <p><strong>確認事項</strong>：</p>
            <ul>
              <li>PostgreSQLが起動しているか（systemctl status postgresql）</li>
              <li>接続情報（ホスト、ポート、ユーザー名、パスワード）が正しいか</li>
              <li>ファイアウォールでポート5432が開放されているか</li>
              <li>データベースユーザーの権限が適切か</li>
            </ul>
            <p><strong>対処法</strong>：</p>
            <div className={styles.codeBlock}>
              <pre>{`# 接続テスト
psql -h localhost -U myapp_user -d myapp_db -c "SELECT 1;"

# ログの確認
tail -f /var/log/postgresql/postgresql-*.log`}</pre>
            </div>
          </div>

          <div className={styles.warningBox}>
            <h4>問題3: パフォーマンスの問題</h4>
            <p><strong>確認事項</strong>：</p>
            <ul>
              <li>メモリ使用量（free -h）</li>
              <li>CPU使用率（top, htop）</li>
              <li>ディスクI/O（iostat）</li>
              <li>データベースのスロークエリログ</li>
              <li>アプリケーションのスレッドダンプ</li>
            </ul>
            <p><strong>対処法</strong>：</p>
            <div className={styles.codeBlock}>
              <pre>{`# スレッドダンプの取得
jstack $(pgrep -f myapp.jar) > thread-dump.txt

# ヒープダンプの取得
jmap -dump:format=b,file=heap-dump.hprof $(pgrep -f myapp.jar)

# データベースのスロークエリ確認
psql -U myapp_user -d myapp_db -c "
SELECT query, calls, total_time, mean_time 
FROM pg_stat_statements 
ORDER BY mean_time DESC 
LIMIT 10;
"`}</pre>
            </div>
          </div>

          <h3>7.10 セキュリティ考慮事項</h3>

          <h4>7.10.1 セキュリティ設定</h4>
          <div className={styles.codeBlock}>
            <pre>{`# 1. アプリケーション実行ユーザーの作成（rootで実行しない）
useradd -r -s /bin/false myapp

# 2. ファイル権限の設定
chown -R myapp:myapp /opt/myapp
chmod 750 /opt/myapp
chmod 640 /opt/myapp/config/*.properties

# 3. パスワードの環境変数化（application.propertiesではなく環境変数で管理）
export DB_PASSWORD=$(cat /etc/myapp/db_password.txt)
java -jar myapp.jar --spring.datasource.password=\${DB_PASSWORD}

# 4. SSL/TLS証明書の設定
# Nginxでリバースプロキシを設定し、SSL終端
cat > /etc/nginx/sites-available/myapp << EOF
server {
    listen 443 ssl http2;
    server_name myapp.example.com;
    
    ssl_certificate /etc/ssl/certs/myapp.crt;
    ssl_certificate_key /etc/ssl/private/myapp.key;
    
    location / {
        proxy_pass http://localhost:8080;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
    }
}
EOF`}</pre>
          </div>

          <h4>7.10.2 セキュリティチェックリスト</h4>
          <div className={styles.codeBlock}>
            <pre>{`□ 認証・認可の設定
  - パスワードポリシーの適用
  - セッションタイムアウトの設定
  - CSRF対策の有効化

□ データの暗号化
  - 通信の暗号化（HTTPS）
  - データベース接続の暗号化
  - 機密情報の暗号化保存

□ ログの管理
  - 機密情報をログに出力しない
  - ログファイルのアクセス制御
  - ログの定期削除

□ アップデート管理
  - セキュリティパッチの適用計画
  - 依存ライブラリの脆弱性チェック
  - アップデート手順の文書化`}</pre>
          </div>

          <h3>7.11 まとめ</h3>
          <p>
            クローズ環境への導入は、事前の準備と段階的なアプローチが成功の鍵です。
            要件定義書に基づいて開発した資材を、適切にパッケージングし、セキュアに転送し、
            段階的に展開することで、リスクを最小限に抑えながら導入できます。
          </p>
          <p>重要なポイント：</p>
          <ul>
            <li>導入前の十分な準備と資材の整理</li>
            <li>チェックサムによる整合性確認</li>
            <li>段階的な展開と動作確認</li>
            <li>ロールバック計画の準備</li>
            <li>セキュリティ設定の徹底</li>
            <li>運用監視とメンテナンス計画</li>
          </ul>
        </section>

        <ShareButtons title={title} url={url} />

        <section className={styles.section}>
          <h2>8. まとめ</h2>
          <p>
            要件定義書駆動開発は、プロジェクトの成功を左右する重要な手法です。要件定義書を適切に作成し、
            開発プロセス全体で活用することで、以下の効果が得られます：
          </p>
          <ul>
            <li>要件の漏れや誤解の防止</li>
            <li>開発チーム全体の方向性の統一</li>
            <li>品質の向上とテストの効率化</li>
            <li>保守性の向上</li>
            <li>クローズ環境への安全な導入</li>
          </ul>
          <p>
            要件定義書は「作って終わり」ではなく、開発プロセス全体で「生きているドキュメント」として活用することが重要です。
            定期的に見直し、更新を続けることで、プロジェクトの成功確率を高めることができます。
          </p>
        </section>
      </div>
    </>
  )
}

