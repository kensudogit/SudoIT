import Link from 'next/link'
import SkipToContent from '@/components/SkipToContent'
import ScrollToTop from '@/components/ScrollToTop'
import styles from './blog.module.css'

const blogPosts = [
  {
    slug: 'requirements-driven-development',
    title: '要件定義書駆動開発：実践ガイド',
    description: '要件定義書を中心とした開発手法の実践的な進め方と、プロジェクト成功のための具体的な手順を詳しく解説します。',
    date: '2024-01-15',
    category: '開発手法',
    readTime: '15分',
  },
  {
    slug: 'ai-driven-development',
    title: 'AI駆動開発：実務で使える実践テクニック',
    description: 'AIを開発の中心に据えた効率的な開発手法。コード生成、テスト自動化、ドキュメント作成など、実務で即活用できる方法を解説します。',
    date: '2024-01-20',
    category: 'AI・自動化',
    readTime: '20分',
  },
  {
    slug: 'microservices-architecture',
    title: 'マイクロサービスアーキテクチャ：構成と構築手順',
    description: 'マイクロサービスアーキテクチャの設計から実装、運用まで。AWS/Docker/Kubernetesを使った実践的な構築手順を詳細に解説します。',
    date: '2024-01-25',
    category: 'アーキテクチャ',
    readTime: '25分',
  },
]

export default function BlogPage() {
  return (
    <>
      <SkipToContent />
      <div className={styles.container} id="main-content">
      <div className={styles.header}>
        <h1 className={styles.title}>技術ブログ</h1>
        <p className={styles.subtitle}>
          ITエンジニアとしての実践的な知見や開発手法を共有します
        </p>
      </div>

      <div className={styles.externalLinkBanner}>
        <a
          href="https://express-p6yebqya7-kensudogits-projects.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.externalLink}
        >
          <div className={styles.externalLinkContent}>
            <div className={styles.externalLinkIcon}>🎬</div>
            <div className={styles.externalLinkText}>
              <div className={styles.externalLinkTitle}>YouTube急上昇動画ファインダー</div>
              <div className={styles.externalLinkDesc}>AIスコアリングでトレンド動画を効率的に発見</div>
            </div>
            <div className={styles.externalLinkArrow}>→</div>
          </div>
        </a>
      </div>

      <div className={styles.postsGrid}>
        {blogPosts.map((post) => (
          <article key={post.slug} className={styles.postCard}>
            <div className={styles.postMeta}>
              <span className={styles.category}>{post.category}</span>
              <span className={styles.readTime}>{post.readTime}</span>
            </div>
            <h2 className={styles.postTitle}>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className={styles.postDescription}>{post.description}</p>
            <div className={styles.postFooter}>
              <time className={styles.postDate}>{post.date}</time>
              <Link href={`/blog/${post.slug}`} className={styles.readMore}>
                続きを読む →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
    <ScrollToTop />
    </>
  )
}

