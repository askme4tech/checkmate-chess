import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { siteConfig } from '../config/site';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import { FaChessKing, FaChessKnight, FaChessPawn, FaTrophy, FaGlobe, FaUserTie, FaGraduationCap } from 'react-icons/fa';

export default function Home() {
  return (
    <PageTransition>
      <SEO 
        schema={{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": siteConfig.academyName,
          "description": siteConfig.seo.defaultDescription,
          "url": siteConfig.seo.url,
          "telephone": siteConfig.contact.phones[0],
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "80, Maniyam Vellpan Street, K.K. Pudur",
            "addressLocality": "Coimbatore",
            "postalCode": "641038",
            "addressCountry": "IN"
          }
        }}
      />
      
      {/* Huge Hero Section - ChessKlub Style */}
      <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-dark-900">
        <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
          <FaChessKing className="absolute top-20 right-10 text-[20rem] animate-float text-gold-500" style={{ animationDelay: '0s' }} />
          <FaChessKnight className="absolute bottom-10 left-[-5rem] text-[25rem] animate-float text-white" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-2 bg-gold-500/10 border border-gold-500/30 text-gold-400 font-sans tracking-widest text-sm mb-6 rounded-none">
                PREMIER CHESS ACADEMY
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6">
                Online & In-Person <br/><span className="text-gold-500">Chess Coaching</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-10 tracking-wide font-sans">
                Join our expert-led programs designed for beginners to advanced players. Master the game of kings with top-rated coaches.
              </p>

              <div className="flex flex-wrap gap-6">
                <Link to="/contact" className="btn-primary text-lg px-10 py-4">Book a Free Trial</Link>
                <Link to="/courses" className="btn-secondary text-lg px-10 py-4">View Curriculum</Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="aspect-square bg-dark-800 border-2 border-gold-500/20 p-4 relative z-10 shadow-2xl">
                <img src="https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=800&q=80" alt="Chess Match" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700" />
                <div className="absolute -bottom-10 -left-10 bg-dark-900 border border-gold-500 p-6 shadow-xl">
                  <p className="text-4xl font-serif text-gold-500 font-bold mb-1">500+</p>
                  <p className="text-sm tracking-widest text-white uppercase">Active Students</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-gold-500 text-dark-900 py-12 relative z-20 border-y-4 border-white/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-dark-900/20">
            <div>
              <p className="text-4xl md:text-5xl font-serif font-bold mb-2">10+</p>
              <p className="text-sm font-bold uppercase tracking-widest">Expert Coaches</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-serif font-bold mb-2">500+</p>
              <p className="text-sm font-bold uppercase tracking-widest">Students Worldwide</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-serif font-bold mb-2">4</p>
              <p className="text-sm font-bold uppercase tracking-widest">Physical Branches</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-serif font-bold mb-2">100%</p>
              <p className="text-sm font-bold uppercase tracking-widest">Result Oriented</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Grid (ChessKlub Style) */}
      <section className="py-24 relative bg-dark-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Structured Curriculum</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">Our training programs are carefully designed for different skill levels to ensure continuous improvement.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Beginner */}
            <div className="bg-dark-900 border-2 border-white/5 p-10 text-center hover:border-gold-500/50 transition-colors group">
              <div className="w-24 h-24 mx-auto bg-dark-800 rounded-full flex items-center justify-center border border-gold-500/30 mb-8 group-hover:bg-gold-500 transition-colors">
                <FaChessPawn className="text-5xl text-gold-500 group-hover:text-dark-900 transition-colors" />
              </div>
              <h3 className="text-3xl font-serif text-white mb-4">Beginner</h3>
              <p className="text-gray-400 mb-8 h-24">Learn the rules, piece movements, basic checkmates, and fundamental opening principles.</p>
              <ul className="text-left space-y-3 mb-8 text-sm text-gray-300">
                <li className="flex items-center gap-2"><span className="text-gold-500">✓</span> Piece Movements & Captures</li>
                <li className="flex items-center gap-2"><span className="text-gold-500">✓</span> Basic Checkmate Patterns</li>
                <li className="flex items-center gap-2"><span className="text-gold-500">✓</span> Opening Principles</li>
              </ul>
              <Link to="/courses" className="text-gold-500 font-bold uppercase tracking-widest text-sm hover:text-white transition-colors">Learn More →</Link>
            </div>

            {/* Intermediate */}
            <div className="bg-dark-900 border-2 border-gold-500 p-10 text-center transform md:-translate-y-4 shadow-[0_0_30px_rgba(245,158,11,0.1)] group">
              <div className="w-24 h-24 mx-auto bg-gold-500 rounded-full flex items-center justify-center border-4 border-dark-900 mb-8">
                <FaChessKnight className="text-5xl text-dark-900" />
              </div>
              <h3 className="text-3xl font-serif text-white mb-4">Intermediate</h3>
              <p className="text-gray-400 mb-8 h-24">Master tactics, combinations, positional understanding, and essential endgame techniques.</p>
              <ul className="text-left space-y-3 mb-8 text-sm text-gray-300">
                <li className="flex items-center gap-2"><span className="text-gold-500">✓</span> Tactical Motifs (Pins, Forks)</li>
                <li className="flex items-center gap-2"><span className="text-gold-500">✓</span> Positional Evaluation</li>
                <li className="flex items-center gap-2"><span className="text-gold-500">✓</span> Essential Endgames</li>
              </ul>
              <Link to="/courses" className="text-gold-500 font-bold uppercase tracking-widest text-sm hover:text-white transition-colors">Learn More →</Link>
            </div>

            {/* Advanced */}
            <div className="bg-dark-900 border-2 border-white/5 p-10 text-center hover:border-gold-500/50 transition-colors group">
              <div className="w-24 h-24 mx-auto bg-dark-800 rounded-full flex items-center justify-center border border-gold-500/30 mb-8 group-hover:bg-gold-500 transition-colors">
                <FaChessKing className="text-5xl text-gold-500 group-hover:text-dark-900 transition-colors" />
              </div>
              <h3 className="text-3xl font-serif text-white mb-4">Advanced</h3>
              <p className="text-gray-400 mb-8 h-24">Tournament preparation, opening repertoire building, and complex calculation exercises.</p>
              <ul className="text-left space-y-3 mb-8 text-sm text-gray-300">
                <li className="flex items-center gap-2"><span className="text-gold-500">✓</span> Opening Repertoire</li>
                <li className="flex items-center gap-2"><span className="text-gold-500">✓</span> Complex Calculation</li>
                <li className="flex items-center gap-2"><span className="text-gold-500">✓</span> Tournament Psychology</li>
              </ul>
              <Link to="/courses" className="text-gold-500 font-bold uppercase tracking-widest text-sm hover:text-white transition-colors">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 relative bg-dark-900 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Why Choose CHECK MATE?</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                We provide a comprehensive learning ecosystem combining world-class instruction, regular practice tournaments, and personalized feedback.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: <FaUserTie />, title: "FIDE Rated Coaches", desc: "Learn from internationally recognized and highly experienced mentors." },
                  { icon: <FaGlobe />, title: "Online & In-Person", desc: "Flexible learning options. Attend physically or join our live interactive online classes." },
                  { icon: <FaTrophy />, title: "Regular Tournaments", desc: "Test your skills in our weekly internal practice tournaments." },
                  { icon: <FaGraduationCap />, title: "FIDE Curriculum", desc: "Syllabus strictly adhering to international standards." },
                ].map((feature, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-12 h-12 bg-dark-800 border border-gold-500/30 flex items-center justify-center text-gold-500 flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1 font-serif">{feature.title}</h4>
                      <p className="text-gray-400 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-dark-800 aspect-square p-2 border border-white/10">
                <img src="https://images.unsplash.com/photo-1580541832626-2a71562bf530?auto=format&fit=crop&w=600&q=80" alt="Student Playing" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all" />
              </div>
              <div className="bg-dark-800 aspect-square p-2 border border-white/10 translate-y-8">
                <img src="https://images.unsplash.com/photo-1610633389178-57f12e8ba325?auto=format&fit=crop&w=600&q=80" alt="Online Class" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-dark-800">
        <div className="absolute inset-0 bg-gradient-to-r from-gold-600/10 to-dark-900/90"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center border-y border-gold-500/20 py-16 bg-dark-900/50 backdrop-blur-sm">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Ready to Make Your Move?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Book a free demo class today and let our experts evaluate your child's chess skills.
          </p>
          <Link to="/contact" className="btn-primary text-xl px-16 py-5">
            Book a Free Demo Class
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
