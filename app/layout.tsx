import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '須藤技術士事務所 / ITエンジニア事務所 | ポートフォリオ',
  description: '個人事業主 ITエンジニアとして、Webシステム開発・AWSクラウド構築・DX支援を行う須藤技術士事務所のポートフォリオサイトです。',
  viewport: 'width=device-width, initial-scale=1',
}

interface RootLayoutProps {
  readonly children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}

