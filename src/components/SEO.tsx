import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../config/site';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  schema?: any;
  path?: string;
}

export default function SEO({ title, description, keywords, schema, path = "" }: SEOProps) {
  const metaTitle = title ? `${title} | ${siteConfig.academyName}` : siteConfig.seo.defaultTitle;
  const metaDescription = description || siteConfig.seo.defaultDescription;
  const metaKeywords = keywords || siteConfig.seo.keywords;
  
  // Ensure the canonical URL is correct for the specific page
  const baseUrl = siteConfig.seo.url.replace(/\/$/, ""); // Remove trailing slash if any
  const pagePath = path.startsWith('/') ? path : `/${path}`;
  const canonicalUrl = path ? `${baseUrl}${pagePath}` : baseUrl;

  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      {/* Fallback image for social sharing if you have one */}
      <meta property="og:image" content={`${baseUrl}/logo-transparent.png`} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={metaTitle} />
      <meta property="twitter:description" content={metaDescription} />
      <meta property="twitter:image" content={`${baseUrl}/logo-transparent.png`} />

      {/* Theme Color for mobile browsers */}
      <meta name="theme-color" content="#F59E0B" />

      {/* Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
