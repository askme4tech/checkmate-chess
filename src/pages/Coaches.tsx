import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import { FaUserCircle } from 'react-icons/fa';

export default function Coaches() {
  // Coach profiles are coming soon

  return (
    <PageTransition>
      <SEO 
        title="Our Coaches | Expert Chess Trainers | Coimbatore" 
        description="Meet the expert coaches at CHECK MATE School of Chess in Coimbatore. Learn from experienced titled players and professional chess trainers." 
        path="/coaches" 
      />
      
      <section className="py-20 bg-dark-800/30 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Our Coaches</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Learn from experienced titled players and professional chess trainers.
          </p>
        </div>
      </section>

      <section className="py-12 min-h-[40vh] flex flex-col items-center justify-center">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="glass-card p-12 max-w-2xl mx-auto rounded-3xl border-gold-500/30">
            <div className="text-6xl mb-6">♟️</div>
            <h2 className="text-3xl font-serif font-bold text-gold-500 mb-4">Coming Soon</h2>
            <p className="text-gray-400 text-lg">
              We are currently updating our coaches' profiles. Soon you'll be able to meet the talented FIDE-rated masters and professional trainers who make our academy great!
            </p>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
