'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './LazyImage.module.css'

interface LazyImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
}

export default function LazyImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
}: LazyImageProps) {
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

