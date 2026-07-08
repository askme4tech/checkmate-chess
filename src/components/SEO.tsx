import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../config/site';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  schema?: any;
}

export default function SEO({ title, description, keywords, schema }: SEOProps) {
  const metaTitle = title ? `${title} | ${siteConfig.academyName}` : siteConfig.seo.defaultTitle;
  const metaDescription = description || siteConfig.seo.defaultDescription;
  const metaKeywords = keywords || siteConfig.seo.keywords;
  const url = siteConfig.seo.url;

  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={metaTitle} />
      <meta property="twitter:description" content={metaDescription} />

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
