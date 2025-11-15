import type { Metadata, Viewport } from 'next'
import './globals.css'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: {
    default: '須藤技術士事務所 / ITエンジニア事務所 | ポートフォリオ',
    template: '%s | 須藤技術士事務所',
  },
  description: '個人事業主 ITエンジニアとして、Webシステム開発・AWSクラウド構築・DX支援を行う須藤技術士事務所のポートフォリオサイトです。要件定義から設計・開発・AWSインフラ構築・運用まで一気通貫でご支援します。',
  keywords: ['ITエンジニア', 'Webシステム開発', 'AWS', 'クラウド構築', 'DX支援', 'システム開発', '個人事業主', '須藤技術士事務所'],
  authors: [{ name: '須藤技術士事務所' }],
  creator: '須藤技術士事務所',
  publisher: '須藤技術士事務所',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://sudoit-portfolio.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://sudoit-portfolio.vercel.app',
    siteName: '須藤技術士事務所',
    title: '須藤技術士事務所 / ITエンジニア事務所 | ポートフォリオ',
    description: '個人事業主 ITエンジニアとして、Webシステム開発・AWSクラウド構築・DX支援を行う須藤技術士事務所のポートフォリオサイトです。',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: '須藤技術士事務所 / ITエンジニア事務所',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '須藤技術士事務所 / ITエンジニア事務所',
    description: '個人事業主 ITエンジニアとして、Webシステム開発・AWSクラウド構築・DX支援を行います。',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
}

/**
 * ルートレイアウトコンポーネントのプロパティ
 */
interface RootLayoutProps {
  /** レイアウト内に表示する子要素 */
  readonly children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ja">
      <body>
        <StructuredData />
        {children}
      </body>
    </html>
  )
}

