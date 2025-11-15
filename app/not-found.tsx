import Link from 'next/link'
import styles from './not-found.module.css'

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>404</h1>
        <h2 className={styles.subtitle}>ページが見つかりません</h2>
        <p className={styles.description}>
          お探しのページは存在しないか、移動または削除された可能性があります。
        </p>
        <div className={styles.actions}>
          <Link href="/" className={styles.primaryButton}>
            ホームに戻る
          </Link>
          <Link href="/blog" className={styles.secondaryButton}>
            ブログを見る
          </Link>
        </div>
      </div>
    </div>
  )
}

