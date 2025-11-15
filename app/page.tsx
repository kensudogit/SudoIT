import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Works from '@/components/Works'
import Profile from '@/components/Profile'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Works />
        <Profile />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

