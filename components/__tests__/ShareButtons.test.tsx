import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ShareButtons from '../ShareButtons'

describe('ShareButtons', () => {
  beforeEach(() => {
    // window.location.hrefをモック
    Object.defineProperty(window, 'location', {
      value: {
        href: 'https://example.com/test',
      },
      writable: true,
    })
  })

  it('シェアラベルが表示される', () => {
    render(<ShareButtons title="テストタイトル" url="https://example.com" />)
    expect(screen.getByText('シェア:')).toBeInTheDocument()
  })

  it('Twitterシェアリンクが正しく生成される', () => {
    render(<ShareButtons title="テストタイトル" url="https://example.com" />)
    const twitterLink = screen.getByLabelText('Twitterでシェア')
    expect(twitterLink).toHaveAttribute('href', expect.stringContaining('twitter.com/intent/tweet'))
    expect(twitterLink).toHaveAttribute('target', '_blank')
    expect(twitterLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('Facebookシェアリンクが正しく生成される', () => {
    render(<ShareButtons title="テストタイトル" url="https://example.com" />)
    const facebookLink = screen.getByLabelText('Facebookでシェア')
    expect(facebookLink).toHaveAttribute('href', expect.stringContaining('facebook.com/sharer'))
    expect(facebookLink).toHaveAttribute('target', '_blank')
  })

  it('LinkedInシェアリンクが正しく生成される', () => {
    render(<ShareButtons title="テストタイトル" url="https://example.com" />)
    const linkedinLink = screen.getByLabelText('LinkedInでシェア')
    expect(linkedinLink).toHaveAttribute('href', expect.stringContaining('linkedin.com/sharing'))
    expect(linkedinLink).toHaveAttribute('target', '_blank')
  })

  it('はてなブックマークリンクが正しく生成される', () => {
    render(<ShareButtons title="テストタイトル" url="https://example.com" />)
    const hatenaLink = screen.getByLabelText('はてなブックマークに追加')
    expect(hatenaLink).toHaveAttribute('href', expect.stringContaining('b.hatena.ne.jp/entry'))
    expect(hatenaLink).toHaveAttribute('target', '_blank')
  })

  it('Share APIが利用可能な場合、シェアボタンが表示される', () => {
    // Share APIをモック
    Object.defineProperty(navigator, 'share', {
      value: vi.fn(),
      writable: true,
    })

    render(<ShareButtons title="テストタイトル" url="https://example.com" />)
    expect(screen.getByLabelText('シェア')).toBeInTheDocument()
  })
})

