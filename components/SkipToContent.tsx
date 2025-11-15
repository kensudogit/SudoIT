'use client'

import { useEffect } from 'react'
import styles from './SkipToContent.module.css'

export default function SkipToContent() {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab' && !e.shiftKey && document.activeElement === document.body) {
        const skipLink = document.getElementById('skip-to-content')
        if (skipLink) {
          skipLink.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <a href="#main-content" id="skip-to-content" className={styles.skipLink}>
      メインコンテンツへスキップ
    </a>
  )
}

