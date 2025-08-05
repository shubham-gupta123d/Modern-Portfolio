import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const Timeline = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timelineData = [
    {
      type: 'work',
      title: 'Frontend React/Next Developer',
      company: 'Devfrend Web Solution.',
      location: 'Delhi (Remote)',
      period: '2025(May) - Present',
      description: 'Contributed to front-end development projects using React, Next.js, and modern web technologies while learning and applying best practices in real-world scenarios. Also supported team members by sharing knowledge and collaborating effectively.',
      icon: Briefcase,
      color: 'from-teal-500 to-cyan-500',
    },
    {
  type: 'work',
  title: 'Software Engineering Virtual Intern ',
  company: 'Forage (Virtual Experience Program)',
  location: 'Remote',
  period: 'March 2025 – April 2025',
  description: 'Completed hands-on backend development tasks including REST API controller setup and integration. Gained practical experience in scalable microservice architecture and backend service fundamentals.',
  icon: Briefcase,
  color: 'from-blue-500 to-indigo-500',
},

    {
  type: 'education',
  title: 'Bachelor of Computer Applications (BCA)',
  company: 'DAV Institute of Engineering and Technology',
  location: 'Jalandhar, Punjab',
  period: '2021 – 2024',
  description: 'Graduated with a strong focus on software development, data structures, and web technologies. Participated in coding workshops and completed multiple front-end and Java-based projects.',
  icon: GraduationCap,
  color: 'from-purple-500 to-pink-500',
},

    {
  type: 'work',
  title: 'Web & Java Developer Intern',
  company: 'Octanet Services Pvt Ltd',
  location: 'Remote',
  period: 'September 2024 – February 2025',
  description: 'Actively contributed to web development and Java-based projects while showcasing strong dedication, professionalism, and a willingness to learn. Successfully engaged in assigned tasks and demonstrated enthusiasm for real-world software development practices.',
  icon: Briefcase,
  color: 'from-yellow-500 to-orange-500',
},

  ];

  return (
    <section id="timeline" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
           Intern Experience & Education
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My journey through education and professional experience
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 mx-auto mt-4"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-teal-400 to-cyan-500 hidden lg:block"></div>

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center mr-4`}>
                        <item.icon className="text-white" size={20} />
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Calendar size={16} className="mr-1" />
                        {item.period}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    
                    <div className="text-teal-600 dark:text-teal-400 font-medium mb-1">
                      {item.company}
                    </div>
                    
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                      {item.location}
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </div>

                {/* Timeline Node */}
                <div className="hidden lg:flex w-2/12 justify-center">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`w-4 h-4 rounded-full bg-gradient-to-r ${item.color} border-4 border-white dark:border-gray-900 shadow-lg`}
                  />
                </div>

                {/* Spacer */}
                <div className="w-full lg:w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;