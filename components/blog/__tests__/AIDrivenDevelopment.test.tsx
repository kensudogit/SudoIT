import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import AIDrivenDevelopment from '../AIDrivenDevelopment'

// ShareButtonsのモック
vi.mock('@/components/ShareButtons', () => ({
  default: () => <div data-testid="share-buttons">ShareButtons</div>,
}))

describe('AIDrivenDevelopment', () => {
  it('タイトルが表示される', () => {
    render(<AIDrivenDevelopment />)
    expect(screen.getByText('AI駆動開発：実務で使える実践テクニック')).toBeInTheDocument()
  })

  it('カテゴリと日付が表示される', () => {
    render(<AIDrivenDevelopment />)
    expect(screen.getByText('AI・自動化')).toBeInTheDocument()
    expect(screen.getByText('2024-01-20')).toBeInTheDocument()
  })

  it('読了時間が表示される', () => {
    render(<AIDrivenDevelopment />)
    expect(screen.getByText(/読了時間: 20分/)).toBeInTheDocument()
  })

  it('主要セクションが表示される', () => {
    render(<AIDrivenDevelopment />)
    expect(screen.getByText('1. AI駆動開発とは')).toBeInTheDocument()
    expect(screen.getByText('2. AIツールの選定と導入')).toBeInTheDocument()
    expect(screen.getByText('3. コード生成の実践')).toBeInTheDocument()
  })

  it('ShareButtonsコンポーネントが表示される', () => {
    render(<AIDrivenDevelopment />)
    expect(screen.getByTestId('share-buttons')).toBeInTheDocument()
  })
})

