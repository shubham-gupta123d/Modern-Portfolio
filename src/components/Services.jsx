import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Smartphone, Globe, Zap, Database, Paintbrush } from 'lucide-react';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Creating responsive and interactive user interfaces using modern frameworks like React, Next, and Tailwind CSS.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Building robust server-side applications with Java, Spring Boot, and database integration.',
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Developing cross-platform mobile applications using React Native and Flutter.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Globe,
      title: 'Web Applications',
      description: 'Full-stack web development with modern tools and best practices for scalable solutions.',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Paintbrush,
      title: 'UI/UX Design',
      description: 'Designing beautiful and intuitive user interfaces with focus on user experience.',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Zap,
      title: 'API Integration',
      description: 'Seamless integration of third-party APIs and services to enhance application functionality.',
      color: 'from-yellow-500 to-orange-500',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Services
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I offer a comprehensive range of development services to bring your ideas to life
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 mx-auto mt-4"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="text-white" size={28} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {service.description}
              </p>
              
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className={`h-1 bg-gradient-to-r ${service.color} mt-6 rounded-full`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;