import { notFound } from 'next/navigation'
import Link from 'next/link'
import SkipToContent from '@/components/SkipToContent'
import ScrollToTop from '@/components/ScrollToTop'
import styles from '../article.module.css'
import RequirementsDrivenDevelopment from '@/components/blog/RequirementsDrivenDevelopment'
import AIDrivenDevelopment from '@/components/blog/AIDrivenDevelopment'
import MicroservicesArchitecture from '@/components/blog/MicroservicesArchitecture'

const blogPosts: Record<string, React.ComponentType> = {
  'requirements-driven-development': RequirementsDrivenDevelopment,
  'ai-driven-development': AIDrivenDevelopment,
  'microservices-architecture': MicroservicesArchitecture,
}

interface PageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: PageProps) {
  const PostComponent = blogPosts[params.slug]

  if (!PostComponent) {
    notFound()
  }

  return (
    <>
      <SkipToContent />
      <div className={styles.container} id="main-content">
        <div className={styles.backLink}>
          <Link href="/blog">← ブログ一覧に戻る</Link>
        </div>
        <article className={styles.article}>
          <PostComponent />
        </article>
      </div>
      <ScrollToTop />
    </>
  )
}

export function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }))
}

