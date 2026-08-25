import { useState, useRef, useEffect } from 'react';
import { FaTimes, FaPaperPlane, FaRobot, FaChevronRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

type Message = {
  id: string;
  sender: 'bot' | 'user';
  text: string | React.ReactNode;
};

const FAQ_RESPONSES: Record<string, string> = {
  "Free Demo": "Yes! We offer a FREE demo class so you can experience our teaching style before committing. No payment required — just bring your curiosity about chess! Navigate to our Contact page to schedule yours today.",
  "Fees": "Our fee structure is highly competitive and varies slightly based on the program level (Foundation to Champion) and whether you choose group or individual sessions. Please contact us on WhatsApp for the exact fee structure.",
  "Programs": "We offer structured programs for all levels: Foundation, Beginner, Intermediate, Advanced, Master, and Champion. We also prepare students for Arena Tournaments!",
  "Class Issue": "We're sorry to hear you're experiencing an issue. Please contact our support team directly via WhatsApp or email us at checkmatechess16@gmail.com so we can resolve this immediately."
};

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: "Hi! How can I help you today? Choose a topic below or type your question."
    }
  ]);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleOptionClick = (option: string) => {
    // Add user message
    const userMsg: Message = { id: Date.now().toString(), sender: 'user', text: option };
    setMessages(prev => [...prev, userMsg]);

    // Add bot response
    setTimeout(() => {
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: FAQ_RESPONSES[option] || "I can help with that! Please contact us on WhatsApp for more details."
      };
      setMessages(prev => [...prev, botMsg]);
    }, 600);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), sender: 'user', text: inputText };
    setMessages(prev => [...prev, userMsg]);
    setInputText('');

    // Generic bot response for typed text
    setTimeout(() => {
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: "I am an automated assistant. For complex queries or specific issues, please reach out to us directly on WhatsApp or via our Contact page!"
      };
      setMessages(prev => [...prev, botMsg]);
    }, 800);
  };

  return (
    <div className="fixed bottom-20 right-4 md:bottom-24 md:right-5 z-50 flex flex-col items-end">
      
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-dark-900 rounded-2xl shadow-2xl overflow-hidden mb-4 border border-gray-400/20 flex flex-col"
            style={{ width: 'min(calc(100vw - 2rem), 380px)', height: 'min(calc(100vh - 8rem), 550px)' }}
          >
            {/* Header */}
            <div className="bg-gold-500 text-[#ffffff] p-4 flex justify-between items-center relative shadow-md z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <FaRobot className="text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-lg leading-tight">Checkmate Assistant</h3>
                  <p className="text-xs text-[#ffffff]/80">Ask anything about our academy</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-[#ffffff] hover:text-[#ffffff]/70 transition-colors p-2"
                aria-label="Close"
              >
                <FaTimes />
              </button>
            </div>

            {/* Quick Options Scroll */}
            <div className="bg-gold-600 p-3 flex gap-2 overflow-x-auto custom-scrollbar shadow-inner z-0">
              {Object.keys(FAQ_RESPONSES).map(option => (
                <button
                  key={option}
                  onClick={() => handleOptionClick(option)}
                  className="whitespace-nowrap bg-dark-900 hover:bg-dark-800 text-gold-500 hover:text-white text-sm px-4 py-1.5 rounded-full transition-colors flex items-center gap-2 border border-gold-500/50 shadow-sm font-semibold"
                >
                  <FaChevronRight className="text-xs" /> {option}
                </button>
              ))}
            </div>
            
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-dark-800/50">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex flex-col max-w-[85%] ${msg.sender === 'user' ? 'ml-auto items-end' : 'mr-auto items-start'}`}
                >
                  <div 
                    className={`px-4 py-3 rounded-2xl ${
                      msg.sender === 'user' 
                        ? 'bg-gold-500 text-[#ffffff] rounded-tr-sm' 
                        : 'bg-dark-800 text-white rounded-tl-sm border border-gray-400/20'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 bg-dark-900 border-t border-gray-400/20">
              <form onSubmit={handleSendMessage} className="relative">
                <input 
                  type="text" 
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Ask a question..."
                  className="w-full bg-dark-800 text-white placeholder-gray-400 rounded-full py-3 pl-4 pr-12 focus:outline-none focus:ring-1 focus:ring-gold-500 border border-gray-400/20"
                />
                <button 
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-gold-500 hover:bg-gold-600 text-[#ffffff] rounded-full flex items-center justify-center transition-colors"
                  disabled={!inputText.trim()}
                >
                  <FaPaperPlane className="text-sm mr-0.5" />
                </button>
              </form>
              <p className="text-[10px] text-gray-500 text-center mt-2">
                Automated assistant. For emergencies, use WhatsApp.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gold-500 text-[#ffffff] p-3 md:p-4 rounded-full shadow-lg shadow-gold-500/40 hover:shadow-gold-500/60 transition-all duration-300 hover:scale-110 flex items-center justify-center group"
        aria-label="Open Chatbot"
      >
        {isOpen ? <FaTimes className="text-2xl" /> : <FaRobot className="text-2xl" />}
        
        {/* Tooltip */}
        {!isOpen && (
          <span className="absolute right-full mr-4 bg-dark-800 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl border border-white/10">
            Ask our Assistant!
          </span>
        )}
      </button>

    </div>
  );
}
