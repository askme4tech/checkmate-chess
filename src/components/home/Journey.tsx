import { motion } from 'framer-motion';
import { FaChessPawn, FaChessKnight, FaChessRook, FaChessQueen } from 'react-icons/fa';

export default function Journey() {
  const steps = [
    {
      id: '01',
      title: 'DISCOVER',
      subtitle: 'The First Move',
      desc: 'Learn the board, pieces and basic principles.',
      icon: FaChessPawn,
    },
    {
      id: '02',
      title: 'BUILD',
      subtitle: 'The Thinker',
      desc: 'Develop tactics, calculation and positional understanding.',
      icon: FaChessKnight,
    },
    {
      id: '03',
      title: 'COMPETE',
      subtitle: 'The Competitor',
      desc: 'Apply skills through tournaments and serious practice.',
      icon: FaChessRook,
    },
    {
      id: '04',
      title: 'MASTER',
      subtitle: 'The Strategist',
      desc: 'Advanced preparation for ambitious competitive players.',
      icon: FaChessQueen,
    }
  ];

  return (
    <section className="py-24 bg-dark-900 relative overflow-hidden">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '4rem 4rem' }}>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Every Champion Starts With One Move.</h2>
          <p className="text-xl text-gray-400">The Check Mate Journey</p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10 transform md:-translate-x-1/2"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <div key={step.id} className="relative flex items-center mb-16 md:mb-24 last:mb-0">
                
                {/* Desktop Layout */}
                <div className={`hidden md:flex w-full items-center ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className={`w-1/2 ${isEven ? 'text-right pr-16' : 'text-left pl-16'}`}
                  >
                    <div className="text-gold-500 font-bold mb-2">{step.id} — {step.title}</div>
                    <h3 className="text-3xl font-bold text-white mb-3">{step.subtitle}</h3>
                    <p className="text-gray-400 text-lg">{step.desc}</p>
                  </motion.div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-dark-800 rounded-full border-2 border-gold-500 flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.3)] z-10">
                    <Icon className="text-2xl text-gold-500" />
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden flex w-full">
                  <div className="relative mr-8">
                     <div className="w-16 h-16 bg-dark-800 rounded-full border-2 border-gold-500 flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.3)] z-10 relative">
                      <Icon className="text-2xl text-gold-500" />
                    </div>
                  </div>
                  <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex-1 pt-2"
                  >
                    <div className="text-gold-500 font-bold mb-1">{step.id} — {step.title}</div>
                    <h3 className="text-2xl font-bold text-white mb-2">{step.subtitle}</h3>
                    <p className="text-gray-400">{step.desc}</p>
                  </motion.div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
