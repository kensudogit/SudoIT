import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <div className={`${styles.badge} animate-fade-in`}>
              <span className={styles.badgeDot}></span>
              個人事業主 ITエンジニア / 開発〜クラウドまで一気通貫
            </div>
            <h1 className={`${styles.heroTitle} animate-fade-in-up`}>
              中小企業の「困った」をITで解決する
              <br />
              <span className={styles.gradientText}>あなた専属のエンジニアパートナー</span>
            </h1>
            <p className={`${styles.heroSubtitle} animate-fade-in-up`}>
              要件定義から設計・開発・AWSインフラ構築・運用まで。
              <br />
              不動産・製造・教育など、業務システムの0→1と改善を支援します。
            </p>
            <div className={`${styles.heroTags} animate-fade-in-up`}>
              <span className={styles.tag}>Webシステム開発</span>
              <span className={styles.tag}>AWS / クラウド</span>
              <span className={styles.tag}>DX支援</span>
              <span className={styles.tag}>既存システムモダナイズ</span>
              <span className={styles.tag}>Python / Java / React</span>
            </div>
            <div className={`${styles.heroActions} animate-fade-in-up`}>
              <a href="#contact" className={styles.btnPrimary}>
                案件・ご相談はこちら
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#works" className={styles.btnOutline}>
                開発実績を見る
              </a>
            </div>
          </div>

          <aside className={`${styles.heroSide} animate-fade-in`}>
            <div className={styles.heroSideTitle}>事業情報</div>
            <div className={styles.heroSideContent}>
              <div className={styles.heroSideRow}>
                <div className={styles.label}>事業者</div>
                <div className={styles.value}>須藤技術士事務所</div>
              </div>
              <div className={styles.heroSideRow}>
                <div className={styles.label}>所在地</div>
                <div className={styles.value}>東京都三鷹市</div>
              </div>
              <div className={styles.heroSideRow}>
                <div className={styles.label}>開業</div>
                <div className={styles.value}>2018年4月</div>
              </div>
              <div className={styles.heroSideRow}>
                <div className={styles.label}>対応範囲</div>
                <div className={styles.value}>全国（リモート）</div>
              </div>
            </div>
            <a
              href="https://lapras.com/public/AAKGQ0N"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.pillLink}
            >
              LAPRAS 公開プロフィールを見る
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 2H11V8M11 2L5 8M11 2L5 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </aside>
        </div>
      </div>
    </section>
  )
}

