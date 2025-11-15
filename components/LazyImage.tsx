'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './LazyImage.module.css'

/**
 * 遅延読み込み画像コンポーネントのプロパティ
 */
interface LazyImageProps {
  /** 画像のソースURL */
  src: string
  /** 画像の代替テキスト */
  alt: string
  /** 画像の幅（ピクセル） */
  width: number
  /** 画像の高さ（ピクセル） */
  height: number
  /** 追加のCSSクラス名 */
  className?: string
  /** 優先読み込みフラグ（trueの場合、画像を優先的に読み込む） */
  priority?: boolean
}

export default function LazyImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
}: Readonly<LazyImageProps>) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return (
      <div
        className={`${styles.placeholder} ${className}`}
        style={{ width, height }}
        aria-label={alt}
      >
        <span>画像を読み込めませんでした</span>
      </div>
    )
  }

  return (
    <div className={`${styles.imageWrapper} ${className}`} style={{ width, height }}>
      {isLoading && (
        <div className={styles.loader}>
          <div className={styles.spinner}></div>
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`${styles.image} ${isLoading ? styles.hidden : ''}`}
        priority={priority}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false)
          setHasError(true)
        }}
      />
    </div>
  )
}

