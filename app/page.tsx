import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Works from '@/components/Works'
import Profile from '@/components/Profile'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import SkipToContent from '@/components/SkipToContent'
import ScrollToTop from '@/components/ScrollToTop'

export default function Home() {
  return (
    <>
      <SkipToContent />
      <Header />
      <main id="main-content">
        <Hero />
        <Services />
        <Works />
        <Profile />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}

export const metadata = {
  title: '須藤技術士事務所 / ITエンジニア事務所 | ポートフォリオ',
  description: '個人事業主 ITエンジニアとして、Webシステム開発・AWSクラウド構築・DX支援を行う須藤技術士事務所のポートフォリオサイトです。',
}

