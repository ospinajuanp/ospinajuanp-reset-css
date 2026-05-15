import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        crawlDelay: 2
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/playground']
      }
    ],
    sitemap: 'https://ospinajuanp-reset-css.vercel.app/sitemap.xml'
  }
}