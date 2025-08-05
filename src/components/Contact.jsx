import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const accessKey = "6c1be7f8-fd59-4e20-8c60-e50ef244ab7e";

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'shubhamgupta7667@gmail.com',
      href: 'mailto:shubhamgupta7667@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9155244664',
      href: 'tel:+919155244664',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Pune, India',
      href: null,
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    formData.append("access_key", accessKey);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        e.target.reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ready to start your next project? Let's work together to create something amazing.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 mx-auto mt-4"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 10 }}
                  className="flex items-center mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                    <info.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{info.label}</div>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-gray-900 dark:text-white font-medium hover:text-teal-500 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-gray-900 dark:text-white font-medium">{info.value}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-teal-500 to-cyan-600 rounded-2xl p-8 text-white">
              <h4 className="text-xl font-bold mb-4">Let's Start a Project</h4>
              <p className="mb-6 opacity-90">
                I'm always interested in new opportunities and exciting projects.
                Whether you have a question or just want to say hi, I'll get back to you!
              </p>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm">Available for new projects</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="access_key" value={accessKey} />

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                  placeholder="Project Subject"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-teal-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>

            {submitStatus && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 p-4 rounded-lg flex items-center gap-2 ${
                  submitStatus === 'success'
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                    : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                }`}
              >
                {submitStatus === 'success' ? (
                  <>
                    <CheckCircle size={20} />
                    Message sent successfully! I'll get back to you soon.
                  </>
                ) : (
                  <>
                    <AlertCircle size={20} />
                    Something went wrong. Please try again.
                  </>
                )}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
