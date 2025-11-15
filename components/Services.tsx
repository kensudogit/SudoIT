import styles from './Services.module.css'

const services = [
  {
    title: 'Web・業務システム開発',
    subtitle: 'Spring Boot / Python / React / Vue など',
    items: [
      '業務システム・管理画面の新規開発',
      '既存システムの機能追加・改修',
      '要件整理〜運用設計まで対応',
    ],
    icon: '💻',
  },
  {
    title: 'AWSクラウド構築・移行',
    subtitle: 'EC2 / RDS / Lambda / API Gateway',
    items: [
      '新規システムのAWS設計・構築',
      'オンプレ／レガシーからクラウド移行',
      'セキュリティ・コスト最適化の提案',
    ],
    icon: '☁️',
  },
  {
    title: 'DX・業務効率化支援',
    subtitle: '紙・Excel業務の見直し〜システム化',
    items: [
      '現状業務の棚卸し・課題整理',
      '自動化シナリオの設計',
      '段階的なDXロードマップの作成',
    ],
    icon: '🚀',
  },
]

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>提供サービス</h2>
          <p className={styles.sectionDesc}>
            要件定義から開発・インフラ構築・運用まで、一気通貫でご支援します。
            <br />
            部分的なスポット支援や、既存ベンダーとの協業も可能です。
          </p>
        </div>
        <div className={styles.grid}>
          {services.map((service) => (
            <div
              key={service.title}
              className={`${styles.card} hover-lift`}
            >
              <div className={styles.cardIcon}>{service.icon}</div>
              <div className={styles.cardTitle}>{service.title}</div>
              <div className={styles.cardSub}>{service.subtitle}</div>
              <ul className={styles.list}>
                {service.items.map((item) => (
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

