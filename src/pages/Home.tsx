import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import { siteConfig } from '../config/site';

// Home Sections
import Hero from '../components/home/Hero';
import TrustBar from '../components/home/TrustBar';
import Journey from '../components/home/Journey';
import ResultsWall from '../components/home/ResultsWall';
// TODO: import other sections as they are built

export default function Home() {
  return (
    <PageTransition>
      <SEO 
        path="/"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "EducationalOrganization",
              "name": siteConfig.academyName,
              "description": siteConfig.seo.defaultDescription,
              "url": siteConfig.seo.url,
              "logo": `${siteConfig.seo.url}/logo-transparent.png`,
              "sameAs": [
                siteConfig.social.instagram,
                siteConfig.social.facebook,
                siteConfig.social.youtube,
                siteConfig.social.twitter
              ].filter(url => url !== "#")
            }
          ]
        }}
      />
      
      <main className="bg-dark-900 min-h-screen">
        <Hero />
        <TrustBar />
        <Journey />
        <ResultsWall />
      </main>

    </PageTransition>
  );
}
