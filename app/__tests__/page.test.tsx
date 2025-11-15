import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from '../page'

// コンポーネントのモック
vi.mock('@/components/Header', () => ({
  default: () => <header data-testid="header">Header</header>,
}))

vi.mock('@/components/Hero', () => ({
  default: () => <section data-testid="hero">Hero</section>,
}))

vi.mock('@/components/Services', () => ({
  default: () => <section data-testid="services">Services</section>,
}))

vi.mock('@/components/Works', () => ({
  default: () => <section data-testid="works">Works</section>,
}))

vi.mock('@/components/Profile', () => ({
  default: () => <section data-testid="profile">Profile</section>,
}))

vi.mock('@/components/Contact', () => ({
  default: () => <section data-testid="contact">Contact</section>,
}))

vi.mock('@/components/Footer', () => ({
  default: () => <footer data-testid="footer">Footer</footer>,
}))

vi.mock('@/components/SkipToContent', () => ({
  default: () => <div data-testid="skip-to-content">SkipToContent</div>,
}))

vi.mock('@/components/ScrollToTop', () => ({
  default: () => <div data-testid="scroll-to-top">ScrollToTop</div>,
}))

describe('Home Page', () => {
  it('すべての主要コンポーネントが表示される', () => {
    render(<Home />)
    expect(screen.getByTestId('header')).toBeInTheDocument()
    expect(screen.getByTestId('hero')).toBeInTheDocument()
    expect(screen.getByTestId('services')).toBeInTheDocument()
    expect(screen.getByTestId('works')).toBeInTheDocument()
    expect(screen.getByTestId('profile')).toBeInTheDocument()
    expect(screen.getByTestId('contact')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })

  it('main要素にmain-contentのIDが設定される', () => {
    render(<Home />)
    const main = screen.getByRole('main')
    expect(main).toHaveAttribute('id', 'main-content')
  })

  it('SkipToContentコンポーネントが表示される', () => {
    render(<Home />)
    expect(screen.getByTestId('skip-to-content')).toBeInTheDocument()
  })

  it('ScrollToTopコンポーネントが表示される', () => {
    render(<Home />)
    expect(screen.getByTestId('scroll-to-top')).toBeInTheDocument()
  })
})

