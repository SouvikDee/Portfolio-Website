
import React, { useState } from 'react';
import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:souvik@example.com',
      color: 'hover:text-red-500'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-16 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology and development.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send me a message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-lg font-semibold transition-colors"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Let's connect
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                  Whether you have a project in mind, want to collaborate, or just 
                  want to say hello, I'd love to hear from you. I'm currently 
                  available for freelance projects and full-time opportunities.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Find me on
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                      title={social.name}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
                <h4 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2">
                  Quick Response
                </h4>
                <p className="text-blue-700 dark:text-blue-300 text-sm">
                  I typically respond to messages within 24 hours. For urgent 
                  inquiries, feel free to reach out on LinkedIn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
