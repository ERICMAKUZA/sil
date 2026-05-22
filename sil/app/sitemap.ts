import { MetadataRoute } from 'next'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.synaptixinnovationlabs.co.zw'

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString()

  // Main pages
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ]

  // Service pages with their metadata
  const servicePages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/services/website-development`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services/custom-software-development`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services/mobile-app-development`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services/data-analytics`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ]

  // Homepage sections (for reference, these are anchor links)
  // #services, #work, #faq, #about, #contact
  // Note: Search engines typically don't index anchor links separately,
  // but the main page includes all this content

  return [...mainPages, ...servicePages]
}
