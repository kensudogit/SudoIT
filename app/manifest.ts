import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '須藤技術士事務所 / ITエンジニア事務所',
    short_name: '須藤技術士事務所',
    description: '個人事業主 ITエンジニアとして、Webシステム開発・AWSクラウド構築・DX支援を行う須藤技術士事務所のポートフォリオサイトです。',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#667eea',
    icons: [
      {
        src: '/logo.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}

