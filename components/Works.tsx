import styles from './Works.module.css'

const works = [
  {
    title: '不動産販売管理システムの新規開発',
    subtitle: 'Spring Boot / PostgreSQL / AWS / Docker',
    description:
      '不動産会社向けに、顧客管理・案件管理・契約管理を一元管理するWebシステムを新規開発。要件定義〜設計〜実装〜AWSインフラ構築まで一気通貫で担当。',
    items: [
      '紙ベースの管理を90%削減',
      '検索・集計性能の改善により、営業資料作成時間を大幅短縮',
      'コンテナ化により、ステージング環境の再現性を向上',
    ],
  },
  {
    title: 'WordPress×AWS マーケティング自動化基盤',
    subtitle: 'AWS Lambda / DynamoDB / API Gateway / Python',
    description:
      'WordPressの記事・問い合わせデータをAWS上で集約・分析し、メルマガやキャンペーン施策に活用する基盤を構築。マーケティング担当者がノーコードで活用できる設計を意識。',
    items: [
      '問い合わせ率が従来比120%向上',
      'レポート作成の自動化により、担当者の作業時間を削減',
      'スケーラビリティの高いサーバーレス構成を採用',
    ],
  },
  {
    title: 'レガシー業務システムのWeb化・モダナイズ',
    subtitle: 'Java / Spring / React / 既存AS/400・VB系からの移行',
    description:
      '長年運用されてきたオンプレ業務システム（AS/400, VB.NET等）をWebシステムへ段階的に移行。現場負荷を抑えながら、UI刷新・保守性改善を実現。',
    items: [
      '保守コスト約30%削減',
      '属人化していたバッチ処理の見える化・標準化',
      '将来的なクラウド移行も見据えたアーキテクチャ設計',
    ],
  },
  {
    title: 'AI・スクレイピングを用いたデータ収集・分析基盤',
    subtitle: 'Python / BeautifulSoup / 機械学習',
    description:
      'Web上の公開情報を自動収集し、業界動向や競合情報を可視化する内部利用向けツールを開発。',
    items: [
      '手作業での情報収集をほぼゼロに',
      '定期レポートを自動生成し、経営層への共有を効率化',
    ],
  },
]

export default function Works() {
  return (
    <section id="works" className={styles.works}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>開発実績（抜粋）</h2>
          <p className={styles.sectionDesc}>
            NDAの範囲内で公開可能な実績を記載しています。詳細は個別にお打ち合わせ時にご紹介可能です。
          </p>
        </div>
        <div className={styles.grid}>
          {works.map((work) => (
            <div
              key={work.title}
              className={`${styles.card} hover-lift`}
            >
              <div className={styles.cardHeader}>
                <div className={styles.cardTitle}>{work.title}</div>
                <div className={styles.cardSub}>{work.subtitle}</div>
              </div>
              <p className={styles.cardDescription}>{work.description}</p>
              <ul className={styles.list}>
                {work.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

