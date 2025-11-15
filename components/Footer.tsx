import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>須藤技術士事務所</h3>
            <p className={styles.footerDescription}>
              個人事業主 ITエンジニアとして、Webシステム開発・AWSクラウド構築・DX支援を中心に活動しています。
            </p>
          </div>
          <div className={styles.footerSection}>
            <h4 className={styles.footerSubtitle}>リンク</h4>
            <ul className={styles.footerLinks}>
              <li><Link href="/">ホーム</Link></li>
              <li><Link href="/blog">ブログ</Link></li>
              <li><a href="https://lapras.com/public/AAKGQ0N" target="_blank" rel="noopener noreferrer">LAPRAS</a></li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h4 className={styles.footerSubtitle}>お問い合わせ</h4>
            <p className={styles.footerContact}>
              <a href="mailto:kensudo@jcom.zaq.ne.jp">kensudo@jcom.zaq.ne.jp</a>
            </p>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>© {currentYear} 須藤技術士事務所 / ITエンジニア事務所 – 個人事業主 ITエンジニア</p>
        </div>
      </div>
    </footer>
  )
}

