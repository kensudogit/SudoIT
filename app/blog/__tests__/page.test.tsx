import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import BlogPage from '../page'

// Next.jsのモック
vi.mock('next/link', () => ({
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}))

vi.mock('@/components/SkipToContent', () => ({
  default: () => <div data-testid="skip-to-content">SkipToContent</div>,
}))

vi.mock('@/components/ScrollToTop', () => ({
  default: () => <div data-testid="scroll-to-top">ScrollToTop</div>,
}))

describe('BlogPage', () => {
  it('タイトルが表示される', () => {
    render(<BlogPage />)
    expect(screen.getByText('技術ブログ')).toBeInTheDocument()
  })

  it('サブタイトルが表示される', () => {
    render(<BlogPage />)
    expect(screen.getByText(/ITエンジニアとしての実践的な知見や開発手法を共有します/)).toBeInTheDocument()
  })

  it('すべてのブログ記事が表示される', () => {
    render(<BlogPage />)
    expect(screen.getByText('要件定義書駆動開発：実践ガイド')).toBeInTheDocument()
    expect(screen.getByText('AI駆動開発：実務で使える実践テクニック')).toBeInTheDocument()
    expect(screen.getByText('マイクロサービスアーキテクチャ：構成と構築手順')).toBeInTheDocument()
  })

  it('各ブログ記事のカテゴリが表示される', () => {
    render(<BlogPage />)
    expect(screen.getByText('開発手法')).toBeInTheDocument()
    expect(screen.getByText('AI・自動化')).toBeInTheDocument()
    expect(screen.getByText('アーキテクチャ')).toBeInTheDocument()
  })

  it('各ブログ記事の日付が表示される', () => {
    render(<BlogPage />)
    expect(screen.getByText('2024-01-15')).toBeInTheDocument()
    expect(screen.getByText('2024-01-20')).toBeInTheDocument()
    expect(screen.getByText('2024-01-25')).toBeInTheDocument()
  })

  it('各ブログ記事の「続きを読む」リンクが表示される', () => {
    render(<BlogPage />)
    const readMoreLinks = screen.getAllByText('続きを読む →')
    expect(readMoreLinks).toHaveLength(3)
  })

  it('外部リンクバナーが表示される', () => {
    render(<BlogPage />)
    expect(screen.getByText('YouTube急上昇動画ファインダー')).toBeInTheDocument()
    expect(screen.getByText('AIスコアリングでトレンド動画を効率的に発見')).toBeInTheDocument()
  })

  it('SkipToContentコンポーネントが表示される', () => {
    render(<BlogPage />)
    expect(screen.getByTestId('skip-to-content')).toBeInTheDocument()
  })

  it('ScrollToTopコンポーネントが表示される', () => {
    render(<BlogPage />)
    expect(screen.getByTestId('scroll-to-top')).toBeInTheDocument()
  })
})

