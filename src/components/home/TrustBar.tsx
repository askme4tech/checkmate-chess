import { motion, useInView, animate } from 'framer-motion';
import { useRef, useEffect } from 'react';

function Counter({ from = 0, to, suffix = "" }: { from?: number; to: number; suffix?: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView && nodeRef.current) {
      const controls = animate(from, to, {
        duration: 2.0,
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

export default function TrustBar() {
  const stats = [
    { number: 500, suffix: '+', label: 'Students Trained' },
    { number: 100, suffix: '+', label: 'Tournament Players' },
    { number: 50, suffix: '+', label: 'Champions' },
    { number: 12, suffix: '+', label: 'Years Experience' },
  ];

  return (
    <section className="py-16 bg-dark-800 border-y border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-2 font-mono">
                <Counter to={stat.number} suffix={stat.suffix} />
              </div>
              <div className="text-sm md:text-base text-gray-400 font-medium tracking-wider uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
