import { describe, it, expect, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import LazyImage from '../LazyImage'

// Next.js Imageのモック
vi.mock('next/image', () => ({
  default: ({ src, alt, onLoad, onError, ...props }: any) => (
    <img
      src={src}
      alt={alt}
      onLoad={onLoad}
      onError={onError}
      {...props}
      data-testid="next-image"
    />
  ),
}))

describe('LazyImage', () => {
  it('画像が正しく表示される', () => {
    render(
      <LazyImage
        src="/test-image.jpg"
        alt="テスト画像"
        width={100}
        height={100}
      />
    )
    const image = screen.getByTestId('next-image')
    expect(image).toHaveAttribute('src', '/test-image.jpg')
    expect(image).toHaveAttribute('alt', 'テスト画像')
  })

  it('画像読み込みエラー時にエラーメッセージが表示される', async () => {
    render(
      <LazyImage
        src="/invalid-image.jpg"
        alt="無効な画像"
        width={100}
        height={100}
      />
    )
    const image = screen.getByTestId('next-image')
    
    // エラーイベントを発火
    const errorEvent = new Event('error')
    image.dispatchEvent(errorEvent)

    await waitFor(() => {
      expect(screen.getByText('画像を読み込めませんでした')).toBeInTheDocument()
    })
  })

  it('カスタムクラス名が適用される', () => {
    const { container } = render(
      <LazyImage
        src="/test-image.jpg"
        alt="テスト画像"
        width={100}
        height={100}
        className="custom-class"
      />
    )
    expect(container.querySelector('.custom-class')).toBeInTheDocument()
  })

  it('widthとheightが正しく設定される', () => {
    render(
      <LazyImage
        src="/test-image.jpg"
        alt="テスト画像"
        width={200}
        height={150}
      />
    )
    const wrapper = screen.getByTestId('next-image').parentElement
    expect(wrapper).toHaveStyle({ width: '200px', height: '150px' })
  })
})

