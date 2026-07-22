import { Link } from 'react-router-dom';
import { motion, useInView, animate } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { siteConfig } from '../config/site';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import { FaChessKing, FaChessKnight, FaChessPawn, FaTrophy, FaGlobe, FaUserTie, FaGraduationCap } from 'react-icons/fa';

function Counter({ from = 0, to, suffix = "" }: { from?: number; to: number; suffix?: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView && nodeRef.current) {
      const controls = animate(from, to, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.round(value) + suffix;
          }
        }
      });
      return () => controls.stop();
    }
  }, [from, to, inView, suffix]);

  return <span ref={nodeRef}>{from}{suffix}</span>;
}

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
      <section className="relative md:min-h-screen md:flex md:items-center pt-28 md:pt-24 pb-16 overflow-hidden bg-dark-900">
        <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
          <FaChessKing className="absolute top-20 right-4 md:right-10 text-[10rem] md:text-[15rem] lg:text-[20rem] animate-float text-gold-500" style={{ animationDelay: '0s' }} />
          <FaChessKnight className="absolute bottom-10 left-[-2rem] md:left-[-5rem] text-[12rem] md:text-[18rem] lg:text-[25rem] animate-float text-white" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Typography & Buttons */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-sans font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
                Master the <br className="hidden md:block" />
                <span className="text-gold-500 uppercase">Board.</span><br />
                Conquer the <br className="hidden md:block" />
                <span className="text-gold-500 uppercase">Game.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-400 mb-10 font-sans leading-relaxed">
                Expert chess coaching in Coimbatore and online. We build strategic minds, sharp focus, and <span className="font-bold text-gold-500">lifelong champions</span>.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-4 items-start sm:items-center">
                <Link to="/contact" className="btn-primary text-lg px-8 py-4 rounded-full flex items-center gap-2 group shadow-lg shadow-gold-500/20">
                  Start Your Journey 
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </Link>
                <Link to="/courses" className="btn-secondary text-lg px-8 py-4 rounded-full flex items-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-dark-900 transition-all">
                  <FaGraduationCap className="text-xl" />
                  Explore Classes
                </Link>
              </div>
            </motion.div>
            
            {/* Right Column - Dynamic Composition (Seamless Blend) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative hidden lg:flex justify-center items-center h-[600px] mt-10 lg:mt-0 w-full"
            >
              {/* Floating feature cards */}
              <motion.div 
                animate={{ y: [0, -10, 0] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 left-[-10px] bg-transparent flex flex-col items-center z-20 min-w-[140px] cursor-pointer group"
              >
                <span className="text-sm font-bold text-white/80 mb-2 text-center drop-shadow-md">Laser Focus</span>
                <motion.div 
                  whileHover={{ scale: 1.3, rotate: [0, 15, -15, 0], transition: { duration: 0.3 } }}
                  whileTap={{ scale: 1.3, rotate: [0, 15, -15, 0] }}
                  className="text-5xl text-gold-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                >
                  🎯
                </motion.div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 15, 0] }} 
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-12 left-[-30px] bg-transparent flex flex-col items-center z-20 min-w-[140px] cursor-pointer group"
              >
                <span className="text-sm font-bold text-white/80 mb-2 text-center drop-shadow-md">Master Strategy</span>
                <motion.div 
                  whileHover={{ y: -15, x: 15, transition: { type: "spring", stiffness: 300 } }}
                  whileTap={{ y: -15, x: 15 }}
                  className="text-5xl text-gold-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                >
                  ♟️
                </motion.div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, -15, 0] }} 
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-12 right-[-20px] bg-transparent flex flex-col items-center z-20 min-w-[140px] cursor-pointer group"
              >
                <span className="text-sm font-bold text-white/80 mb-2 text-center drop-shadow-md">Mental<br/>Agility</span>
                <motion.div 
                  whileHover={{ scale: [1, 1.2, 1], transition: { repeat: Infinity, duration: 0.6 } }}
                  whileTap={{ scale: [1, 1.2, 1], transition: { repeat: Infinity, duration: 0.6 } }}
                  className="text-5xl text-gold-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                >
                  🧠
                </motion.div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }} 
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute bottom-28 right-[-40px] bg-transparent flex flex-col items-center z-20 min-w-[140px] cursor-pointer group"
              >
                <span className="text-sm font-bold text-white/80 mb-2 text-center drop-shadow-md">Tournament<br/>Success</span>
                <motion.div 
                  whileHover={{ rotate: [0, -15, 15, -15, 15, 0], scale: 1.2, transition: { duration: 0.5 } }}
                  whileTap={{ rotate: [0, -15, 15, -15, 15, 0], scale: 1.2 }}
                  className="text-5xl text-gold-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                >
                  🏆
                </motion.div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, -8, 0] }} 
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-[-10px] right-24 bg-transparent flex flex-col items-center z-20 min-w-[140px] cursor-pointer group"
              >
                <span className="text-sm font-bold text-white/80 mb-2 text-center drop-shadow-md">Sportsmanship</span>
                <motion.div 
                  whileHover={{ rotate: [0, 20, -20, 20, -20, 0], transition: { duration: 0.5 } }}
                  whileTap={{ rotate: [0, 20, -20, 20, -20, 0] }}
                  className="text-5xl text-gold-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                >
                  🤝
                </motion.div>
              </motion.div>

              {/* Main Center Image - Seamlessly Blended */}
              <div className="relative z-10 w-full h-[600px] flex items-center justify-center">
                <img 
                  src="/images/custom-triumph.png" 
                  alt="Triumphant King" 
                  className="w-[140%] h-[140%] max-w-none object-contain transition-all duration-1000 ease-in-out hover:scale-105 grayscale hover:grayscale-0 z-10 mix-blend-multiply"
                  style={{ 
                    maskImage: 'radial-gradient(circle at center, black 40%, transparent 70%)', 
                    WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 70%)' 
                  }}
                />
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
              <p className="text-4xl md:text-5xl font-serif font-bold mb-2"><Counter to={10} suffix="+" /></p>
              <p className="text-sm font-bold uppercase tracking-widest">Expert Coaches</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-serif font-bold mb-2"><Counter to={500} suffix="+" /></p>
              <p className="text-sm font-bold uppercase tracking-widest">Students Worldwide</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-serif font-bold mb-2"><Counter to={4} /></p>
              <p className="text-sm font-bold uppercase tracking-widest">Physical Branches</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-serif font-bold mb-2"><Counter to={100} suffix="%" /></p>
              <p className="text-sm font-bold uppercase tracking-widest">Result Oriented</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Grid (ChessKlub Style) */}
      <section className="py-24 relative bg-dark-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">The Path to Mastery</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">A structured journey from total beginner to tournament-ready champion.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Beginner */}
            <div className="glass-card border-white/5 p-10 text-center group">
              <div className="w-24 h-24 mx-auto bg-dark-800 rounded-full flex items-center justify-center border border-gold-500/30 mb-8 group-hover:bg-gold-500 transition-colors">
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <FaChessPawn className="text-5xl text-gold-500 group-hover:text-dark-900 transition-colors" />
                </motion.div>
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
            <div className="glass-card border-gold-500 p-10 text-center transform md:-translate-y-4 group">
              <div className="w-24 h-24 mx-auto bg-gold-500 rounded-full flex items-center justify-center border-4 border-dark-900 mb-8">
                <motion.div
                  animate={{ y: [0, -12, 0], rotate: [0, 10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <FaChessKnight className="text-5xl text-dark-900" />
                </motion.div>
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
            <div className="glass-card border-white/5 p-10 text-center group">
              <div className="w-24 h-24 mx-auto bg-dark-800 rounded-full flex items-center justify-center border border-gold-500/30 mb-8 group-hover:bg-gold-500 transition-colors">
                <motion.div
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <FaChessKing className="text-5xl text-gold-500 group-hover:text-dark-900 transition-colors" />
                </motion.div>
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

      {/* Champions & Achievements */}
      <section className="py-24 relative bg-dark-900 border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Shaping Champions</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">Our students consistently dominate local, state, and national tournaments.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-10 text-center flex flex-col items-center">
              <span className="text-6xl mb-4">🥇</span>
              <h3 className="text-4xl font-bold text-gold-500 font-serif mb-2">50+</h3>
              <p className="text-white uppercase tracking-widest text-sm">State Level Medals</p>
            </div>
            <div className="glass-card p-10 text-center flex flex-col items-center border-gold-500/50">
              <span className="text-6xl mb-4">🏆</span>
              <h3 className="text-4xl font-bold text-gold-500 font-serif mb-2">15+</h3>
              <p className="text-white uppercase tracking-widest text-sm">Internationally Rated Players</p>
            </div>
            <div className="glass-card p-10 text-center flex flex-col items-center">
              <span className="text-6xl mb-4">⭐</span>
              <h3 className="text-4xl font-bold text-gold-500 font-serif mb-2">Top 10</h3>
              <p className="text-white uppercase tracking-widest text-sm">National Rankings</p>
            </div>
          </div>
        </div>
      </section>

      {/* Parent Testimonials */}
      <section className="py-24 relative bg-dark-800 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">What Parents Say</h2>
            <div className="flex justify-center gap-1 text-gold-500 text-xl mb-4">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "Since joining Checkmate, my son's focus and academic performance have skyrocketed. The coaches are phenomenal with kids!", author: "Priya M.", role: "Parent of 8yo" },
              { text: "The internal tournaments give them the perfect competitive edge. My daughter just got her first FIDE rating thanks to this academy.", author: "Rajesh K.", role: "Parent of 12yo" },
              { text: "Best chess academy. The structured curriculum and gamified approach makes learning complex tactics fun for children.", author: "Ananya S.", role: "Parent of 10yo" }
            ].map((review, i) => (
              <div key={i} className="glass-card p-8 relative">
                <div className="text-4xl text-gold-500/20 absolute top-4 right-6 font-serif">"</div>
                <p className="text-gray-300 italic mb-6 relative z-10">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-dark-900 border border-gold-500/50 flex items-center justify-center font-bold text-gold-500">
                    {review.author[0]}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">{review.author}</h4>
                    <p className="text-gold-500 text-xs">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Box Features */}
      <section className="py-24 relative bg-dark-900 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Why Choose CHECK MATE?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">A premium learning ecosystem designed exclusively for serious improvement.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="glass-card p-8 md:col-span-2 bg-gradient-to-br from-dark-800 to-dark-900 flex flex-col justify-center">
              <FaUserTie className="text-4xl text-gold-500 mb-4" />
              <h3 className="text-2xl font-serif text-white mb-2">FIDE Rated Masters</h3>
              <p className="text-gray-400">Learn directly from internationally recognized and highly experienced mentors who have produced national champions.</p>
            </div>
            
            <div className="glass-card p-8 bg-gold-500 text-dark-900">
              <FaTrophy className="text-4xl mb-4" />
              <h3 className="text-2xl font-serif font-bold mb-2">Weekly Tournaments</h3>
              <p className="text-dark-900/80 font-medium">Test your skills in our intense internal practice arenas.</p>
            </div>
            
            <div className="glass-card p-8 bg-dark-800">
              <FaGlobe className="text-4xl text-gold-500 mb-4" />
              <h3 className="text-2xl font-serif text-white mb-2">Hybrid Learning</h3>
              <p className="text-gray-400">Attend physically in Coimbatore or join live interactive online sessions globally.</p>
            </div>
            
            <div className="glass-card p-8 md:col-span-2 bg-dark-900 border-gold-500/30">
              <FaGraduationCap className="text-4xl text-gold-500 mb-4" />
              <h3 className="text-2xl font-serif text-white mb-2">International Curriculum</h3>
              <p className="text-gray-400">Our syllabus strictly adheres to international standards, taking students from basic piece movements to deep opening theory and endgame mastery.</p>
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
