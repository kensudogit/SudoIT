import styles from './Profile.module.css'

export default function Profile() {
  return (
    <section id="profile" className={styles.profile}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>プロフィール・技術スタック</h2>
        <div className={styles.grid}>
          <div className={`${styles.card} hover-lift`}>
            <div className={styles.cardTitle}>代表プロフィール</div>
            <p className={styles.cardText}>
              個人事業主 ITエンジニアとして、Webシステム開発・AWSクラウド構築・DX支援を中心に活動しています。
              中小企業〜中堅企業の「IT専任担当者がいない」「どこから手を付けてよいかわからない」といった悩みに寄り添い、
              現場にフィットするシステムと運用を一緒に作ることを大切にしています。
            </p>
            <ul className={styles.list}>
              <li>2018年：個人事業主として独立</li>
              <li>不動産、製造、教育、サービス業などの案件に従事</li>
              <li>レガシー環境からクラウドネイティブまで幅広く対応</li>
            </ul>
            <div className={styles.linkSection}>
              <p className={styles.linkLabel}>▶ LAPRAS 公開プロフィール：</p>
              <a
                href="https://lapras.com/public/AAKGQ0N"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                https://lapras.com/public/AAKGQ0N
              </a>
            </div>
          </div>

          <div className={`${styles.card} hover-lift`}>
            <div className={styles.cardTitle}>技術スタック</div>
            <p className={styles.cardText}>
              代表的な技術・ツールは以下の通りです。案件に応じて新技術のキャッチアップも積極的に行っています。
            </p>
            <div className={styles.techStack}>
              <div className={styles.techRow}>
                <span className={styles.badge}>Backend</span>
                <span className={styles.techText}>Python / Java（Spring Boot） / Node.js</span>
              </div>
              <div className={styles.techRow}>
                <span className={styles.badge}>Frontend</span>
                <span className={styles.techText}>React / Next.js / Vue.js</span>
              </div>
              <div className={styles.techRow}>
                <span className={styles.badge}>Database</span>
                <span className={styles.techText}>PostgreSQL / MySQL / DynamoDB</span>
              </div>
              <div className={styles.techRow}>
                <span className={styles.badge}>Cloud・Infra</span>
                <span className={styles.techText}>
                  AWS（EC2 / RDS / Lambda / API Gateway） / Docker / Kubernetes
                </span>
              </div>
              <div className={styles.techRow}>
                <span className={styles.badge}>Other</span>
                <span className={styles.techText}>スクレイピング / 機械学習 / CI/CD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

