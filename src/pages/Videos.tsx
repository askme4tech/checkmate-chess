import { motion } from 'framer-motion';
import { siteConfig } from '../config/site';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';

export default function Videos() {
  // Video content is coming soon
  return (
    <PageTransition>
      <SEO 
        title="Chess Videos & Tutorials | Checkmate Chess Academy" 
        description="Watch our latest chess tutorials, tournament highlights, and featured matches from Checkmate School of Chess." 
        path="/videos" 
      />
      
      <section className="py-20 bg-dark-800/30 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Video Showcase</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-6">
            Watch our latest tutorials, tournament highlights, and featured matches.
          </p>
          {siteConfig.integrations.youtubeChannelUrl !== "#" && (
            <a href={siteConfig.integrations.youtubeChannelUrl} target="_blank" rel="noreferrer" className="btn-secondary inline-block">
              Subscribe to our YouTube Channel
            </a>
          )}
        </div>
      </section>

      <section className="py-12 min-h-[40vh] flex flex-col items-center justify-center">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="glass-card p-12 max-w-2xl mx-auto rounded-3xl border-gold-500/30">
            <div className="text-6xl mb-6">🎥</div>
            <h2 className="text-3xl font-serif font-bold text-gold-500 mb-4">Coming Soon</h2>
            <p className="text-gray-400 text-lg">
              We are currently curating our best chess tutorials, match analyses, and tournament highlights. Check back soon for high-quality video content!
            </p>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
