import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../config/site';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import { FaChevronDown } from 'react-icons/fa';

export default function FAQ() {
  const faqs = [
    {
      q: "What is the right age to start learning chess?",
      a: "We recommend starting as early as 5 years old. At this age, children can easily grasp the basic movements and rules. However, it's never too late to start!"
    },
    {
      q: "Do I need to have prior knowledge to join?",
      a: "Not at all. We have specific beginner batches that start from the absolute basics, including how the pieces move and the rules of the game."
    },
    {
      q: "What is the duration of the classes?",
      a: "Regular and online classes are typically 1 to 1.5 hours per session, held twice a week. Weekend batches have longer 2-hour sessions."
    },
    {
      q: "Do you provide online classes?",
      a: "Yes, we provide interactive online classes for students worldwide, maintaining the same quality of instruction as our physical branches."
    },
    {
      q: "Will my child participate in tournaments?",
      a: "Yes, we highly encourage tournament participation once the student reaches the intermediate level. We guide them in local, state, and national tournaments."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <PageTransition>
      <SEO title="FAQ" description="Frequently asked questions about our chess classes." schema={faqSchema} />
      
      <section className="py-20 bg-dark-800/30 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">FAQ</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Find answers to common questions about our academy.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass border border-white/10 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full text-left p-6 flex justify-between items-center bg-white/5 hover:bg-white/10 transition-colors focus:outline-none"
                >
                  <span className="font-serif text-lg text-white font-medium pr-8">{faq.q}</span>
                  <FaChevronDown 
                    className={`text-gold-500 transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-6 pt-2 text-gray-400 border-t border-white/5">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-gray-400 mb-6">Still have questions?</p>
            <a href={`mailto:${siteConfig.contact.email}`} className="btn-secondary">Email Us</a>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
