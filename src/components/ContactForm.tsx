import { useState } from 'react';
import { siteConfig } from '../config/site';

interface ContactFormProps {
  onSuccess?: () => void;
  defaultType?: 'General Enquiry' | 'Class Issue';
}

export default function ContactForm({ onSuccess, defaultType = 'General Enquiry' }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: defaultType,
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    if (siteConfig.integrations.googleSheetsApiUrl === "#" || !siteConfig.integrations.googleSheetsApiUrl) {
      setStatus('error');
      setErrorMessage('Form submission is not configured yet. Please try again later.');
      return;
    }

    try {
      // Create FormData to send as x-www-form-urlencoded
      const data = new URLSearchParams();
      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('phone', formData.phone);
      data.append('type', formData.type);
      data.append('message', formData.message);
      // Automatically record timestamp on the backend

      const response = await fetch(siteConfig.integrations.googleSheetsApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: data.toString(),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', type: defaultType, message: '' });
        if (onSuccess) {
          setTimeout(onSuccess, 3000); // Trigger success callback after showing message for 3s
        }
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setErrorMessage('Failed to send your message. Please try contacting us via phone or email directly.');
    }
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center h-full p-8 text-center animate-[fadeInUp_0.3s_ease-out_forwards]">
        <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center text-3xl mb-4">
          ✓
        </div>
        <h3 className="text-2xl font-serif font-bold text-white mb-2">Message Sent!</h3>
        <p className="text-gray-400">
          Thank you for reaching out. We will get back to you shortly.
        </p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-6 text-gold-500 hover:text-gold-400 underline text-sm"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col h-full overflow-y-auto p-4 md:p-6 space-y-4 custom-scrollbar">
      {status === 'error' && (
        <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-3 rounded-lg text-sm mb-2">
          {errorMessage}
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name *</label>
        <input 
          type="text" 
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full bg-dark-900/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-gold-500 transition-colors"
          placeholder="John Doe"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">Phone Number *</label>
          <input 
            type="tel" 
            id="phone"
            name="phone"
            required
            pattern="[0-9\+\-\s]+"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-dark-900/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-gold-500 transition-colors"
            placeholder="+91 98765 43210"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
          <input 
            type="email" 
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-dark-900/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-gold-500 transition-colors"
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="type" className="block text-sm font-medium text-gray-300 mb-1">Query Type</label>
        <select 
          id="type"
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="w-full bg-dark-900/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-gold-500 transition-colors appearance-none"
        >
          <option value="General Enquiry">General Enquiry</option>
          <option value="Admissions">Admissions</option>
          <option value="Class Issue">Class Issue</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="flex-grow flex flex-col">
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message *</label>
        <textarea 
          id="message"
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-dark-900/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-gold-500 transition-colors resize-none flex-grow"
          placeholder="How can we help you?"
        ></textarea>
      </div>

      <button 
        type="submit" 
        disabled={status === 'submitting'}
        className="w-full btn-primary py-3 flex justify-center items-center mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? (
          <div className="w-5 h-5 border-2 border-dark-900 border-t-transparent rounded-full animate-spin"></div>
        ) : (
          'Submit Query'
        )}
      </button>
    </form>
  );
}
