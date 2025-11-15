'use client'

import { useEffect, useState } from 'react'
import styles from './ShareButtons.module.css'

interface ShareButtonsProps {
  title: string
  url: string
}

export default function ShareButtons({ title, url }: ShareButtonsProps) {
  const [currentUrl, setCurrentUrl] = useState('')
  const [hasShareAPI, setHasShareAPI] = useState(false)

  useEffect(() => {
    setCurrentUrl(window.location.href)
    setHasShareAPI(typeof navigator !== 'undefined' && 'share' in navigator)
  }, [])

  const shareUrl = url || currentUrl
  const encodedTitle = encodeURIComponent(title)
  const encodedUrl = encodeURIComponent(shareUrl)

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    hatena: `https://b.hatena.ne.jp/entry/${encodedUrl}`,
  }

  const handleShare = async () => {
    if (typeof navigator !== 'undefined' && 'share' in navigator) {
      try {
        await navigator.share({
          title,
          url: shareUrl,
        })
      } catch (err) {
        // ユーザーがキャンセルした場合など
      }
    }
  }

  return (
    <div className={styles.shareButtons}>
      <span className={styles.shareLabel}>シェア:</span>
      <div className={styles.buttons}>
        {hasShareAPI && (
          <button
            onClick={handleShare}
            className={styles.shareButton}
            aria-label="シェア"
            title="シェア"
          >
            📤
          </button>
        )}
        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.shareButton}
          aria-label="Twitterでシェア"
          title="Twitterでシェア"
        >
          🐦
        </a>
        <a
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.shareButton}
          aria-label="Facebookでシェア"
          title="Facebookでシェア"
        >
          📘
        </a>
        <a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.shareButton}
          aria-label="LinkedInでシェア"
          title="LinkedInでシェア"
        >
          💼
        </a>
        <a
          href={shareLinks.hatena}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.shareButton}
          aria-label="はてなブックマークに追加"
          title="はてなブックマークに追加"
        >
          B!
        </a>
      </div>
    </div>
  )
}

