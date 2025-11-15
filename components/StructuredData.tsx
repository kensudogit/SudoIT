'use client'

import { useEffect } from 'react'

export default function StructuredData() {
  useEffect(() => {
    const organizationSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: '須藤技術士事務所',
      alternateName: 'ITエンジニア事務所',
      description: '個人事業主 ITエンジニアとして、Webシステム開発・AWSクラウド構築・DX支援を行う技術士事務所',
      url: 'https://sudoit-portfolio.vercel.app',
      logo: 'https://sudoit-portfolio.vercel.app/logo.png',
      address: {
        '@type': 'PostalAddress',
        addressLocality: '三鷹市',
        addressRegion: '東京都',
        addressCountry: 'JP',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'kensudo@jcom.zaq.ne.jp',
        contactType: 'customer service',
      },
      sameAs: [
        'https://lapras.com/public/AAKGQ0N',
      ],
    }

    const personSchema = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: '須藤',
      jobTitle: 'ITエンジニア',
      worksFor: {
        '@type': 'Organization',
        name: '須藤技術士事務所',
      },
      url: 'https://sudoit-portfolio.vercel.app',
      sameAs: [
        'https://lapras.com/public/AAKGQ0N',
      ],
    }

    const websiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: '須藤技術士事務所',
      url: 'https://sudoit-portfolio.vercel.app',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://sudoit-portfolio.vercel.app/blog?q={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    }

    const scripts = [
      { id: 'org-schema', data: organizationSchema },
      { id: 'person-schema', data: personSchema },
      { id: 'website-schema', data: websiteSchema },
    ]

    scripts.forEach(({ id, data }) => {
      if (document.getElementById(id)) return
      
      const script = document.createElement('script')
      script.id = id
      script.type = 'application/ld+json'
      script.text = JSON.stringify(data)
      document.head.appendChild(script)
    })

    return () => {
      scripts.forEach(({ id }) => {
        const script = document.getElementById(id)
        if (script) script.remove()
      })
    }
  }, [])

  return null
}
