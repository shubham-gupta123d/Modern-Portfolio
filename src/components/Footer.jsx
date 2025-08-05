import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/shubham-gupta123d', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/shubham-gupta-4715842aa/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:shubhamgupta7667@gmail.com', label: 'Email' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Back to Top Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-teal-500 to-cyan-600 p-3 rounded-full shadow-lg hover:shadow-teal-500/25 transition-all duration-300"
      >
        <ArrowUp size={20} />
      </motion.button>

      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-teal-400 mb-4"
            >
              &lt;/&gt; Shubham Kumar
            </motion.div>
            <p className="text-gray-300 leading-relaxed">
              Frontend developer passionate about building clean, responsive, and interactive web experiences using React, Next.js, and modern web technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {['About', 'Services', 'Projects', 'Contact'].map((link) => (
                <motion.a
                  key={link}
                  whileHover={{ x: 5 }}
                  href={`#${link.toLowerCase()}`}
                  className="block text-gray-300 hover:text-teal-400 transition-colors duration-300"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-2 text-gray-300">
              <p>shubhamgupta7667@gmail.com</p>
              <p>+91 9155244664</p>
              <p>Pune, India</p>
            </div>

            <div className="flex gap-4 mt-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:text-teal-400 hover:bg-gray-700 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-300 mb-4 md:mb-0">
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="mx-2 text-red-400"
              >
                <Heart size={16} fill="currentColor" />
              </motion.div>
              <span>by Shubham Kumar</span>
            </div>

            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
