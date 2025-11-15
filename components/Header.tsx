'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Header.module.css'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    if (pathname !== '/') {
      window.location.href = `/#${id}`
      return
    }
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <nav className={styles.nav} aria-label="メインナビゲーション">
          <Link href="/" className={styles.navBrand}>
            <div className={styles.logoContainer}>
              <Image
                src="/logo.png"
                alt="須藤技術士事務所 ロゴ"
                width={40}
                height={40}
                className={styles.logo}
                priority
              />
              <div className={styles.brandText}>
                <div className={styles.navTitle}>須藤技術士事務所 / ITエンジニア事務所</div>
                <div className={styles.navSub}>個人事業主 ITエンジニア | Webシステム開発 / AWS / DX支援</div>
              </div>
            </div>
          </Link>
          <div className={styles.navLinks}>
            <Link href="/blog" className={styles.navLink}>
              ブログ
            </Link>
            <button onClick={() => scrollToSection('works')} className={styles.navLink} aria-label="実績セクションへ移動">
              実績
            </button>
            <button onClick={() => scrollToSection('services')} className={styles.navLink} aria-label="サービスセクションへ移動">
              サービス
            </button>
            <button onClick={() => scrollToSection('profile')} className={styles.navLink} aria-label="プロフィールセクションへ移動">
              プロフィール
            </button>
            <button onClick={() => scrollToSection('contact')} className={styles.navLink} aria-label="お問い合わせセクションへ移動">
              お問い合わせ
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}

