import { motion } from 'framer-motion';
import { siteConfig } from '../config/site';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';

export default function Videos() {
  // Normally you would fetch from YouTube API.
  // We use dummy embed IDs for the layout.
  const featuredVideoId = "dQw4w9WgXcQ"; // Placeholder
  const recentVideoIds = ["jNQXAC9IVRw", "M7FIvfx5J10", "tPEE9ZwTmy0"]; // Placeholders

  return (
    <PageTransition>
      <SEO title="Videos & Tutorials" description="Watch our latest chess tutorials, tournament highlights, and featured matches." />
      
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

      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          
          {/* Featured Video */}
          <div className="mb-16">
            <h2 className="text-2xl font-serif font-bold text-white mb-6 border-l-4 border-gold-500 pl-4">Featured Match</h2>
            <div className="glass-card p-2 md:p-4 rounded-2xl overflow-hidden aspect-video relative">
               <iframe 
                 className="absolute inset-0 w-full h-full rounded-xl"
                 src={`https://www.youtube.com/embed/${featuredVideoId}`} 
                 title="YouTube video player" 
                 frameBorder="0" 
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                 allowFullScreen
               ></iframe>
            </div>
          </div>

          {/* Recent Videos Grid */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-white mb-6 border-l-4 border-gold-500 pl-4">Latest Uploads</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentVideoIds.map((id, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-2 rounded-xl overflow-hidden aspect-video relative group"
                >
                  <iframe 
                    className="absolute inset-0 w-full h-full rounded-lg"
                    src={`https://www.youtube.com/embed/${id}`} 
                    title={`YouTube video ${index + 1}`} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </section>
    </PageTransition>
  );
}
