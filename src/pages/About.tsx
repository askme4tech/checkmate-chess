import { motion } from 'framer-motion';
import { siteConfig } from '../config/site';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';

export default function About() {
  return (
    <PageTransition>
      <SEO title="About Us" description="Learn about the mission, vision, and benefits of joining CHECK MATE School of Chess." />
      
      {/* Header */}
      <section className="py-20 bg-dark-800/30">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">About the Academy</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Shaping minds and building champions since our inception.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-10"
            >
              <h2 className="text-3xl font-serif font-bold text-gold-500 mb-6 relative inline-block">
                Our Mission
                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gold-600 rounded-full"></span>
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                To popularize chess and utilize its educational benefits to foster intellectual growth, critical thinking, and character development in individuals of all ages. We strive to provide world-class chess education in a supportive and engaging environment.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-10"
            >
              <h2 className="text-3xl font-serif font-bold text-gold-500 mb-6 relative inline-block">
                Our Vision
                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gold-600 rounded-full"></span>
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                To be the premier chess academy that not only produces grandmasters and state champions but also equips every student with the mental tools necessary to succeed in all aspects of life.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits / Why Chess */}
      <section className="py-20 bg-dark-800/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Why Chess?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Chess is recognized worldwide as an excellent tool for cognitive development.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {siteConfig.benefits.map((benefit, index) => (
              <motion.div 
                key={benefit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass border-white/5 p-8 text-center rounded-2xl hover:border-gold-500/30 transition-colors"
              >
                <h3 className="text-xl font-serif text-gold-400">{benefit}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
