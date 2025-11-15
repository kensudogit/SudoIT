'use client'

import { useEffect, useState } from 'react'
import styles from './Header.module.css'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <div className={styles.navBrand}>
            <div className={styles.navTitle}>須藤技術士事務所 / ITエンジニア事務所</div>
            <div className={styles.navSub}>個人事業主 ITエンジニア | Webシステム開発 / AWS / DX支援</div>
          </div>
          <div className={styles.navLinks}>
            <button onClick={() => scrollToSection('works')} className={styles.navLink}>
              実績
            </button>
            <button onClick={() => scrollToSection('services')} className={styles.navLink}>
              サービス
            </button>
            <button onClick={() => scrollToSection('profile')} className={styles.navLink}>
              プロフィール
            </button>
            <button onClick={() => scrollToSection('contact')} className={styles.navLink}>
              お問い合わせ
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}

