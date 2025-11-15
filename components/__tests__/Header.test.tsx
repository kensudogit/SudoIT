import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import Header from '../Header'

// Next.jsのモック
vi.mock('next/image', () => ({
  default: ({ src, alt, ...props }: { src: string; alt: string }) => (
    <img src={src} alt={alt} {...props} />
  ),
}))

vi.mock('next/link', () => ({
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}))

vi.mock('next/navigation', () => ({
  usePathname: () => '/',
}))

describe('Header', () => {
  it('ロゴとブランド名が表示される', () => {
    render(<Header />)
    expect(screen.getByText('須藤技術士事務所 / ITエンジニア事務所')).toBeInTheDocument()
  })

  it('ナビゲーションリンクが表示される', () => {
    render(<Header />)
    expect(screen.getByText('ブログ')).toBeInTheDocument()
    expect(screen.getByText('実績')).toBeInTheDocument()
    expect(screen.getByText('サービス')).toBeInTheDocument()
    expect(screen.getByText('プロフィール')).toBeInTheDocument()
    expect(screen.getByText('お問い合わせ')).toBeInTheDocument()
  })

  it('メインナビゲーションのaria-labelが設定されている', () => {
    render(<Header />)
    expect(screen.getByLabelText('メインナビゲーション')).toBeInTheDocument()
  })
})

