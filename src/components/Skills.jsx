import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 80, color: 'from-blue-500 to-grey-600' },
        { name: 'JavaScript', level: 85, color: 'from-yellow-500 to-pink-600' },
         { name: 'NEXT', level: 75, color: 'from-cyan-500 to-teal-500' },
        { name: 'HTML/CSS', level: 90, color: 'from-orange-500 to-red-500' },
        { name: 'Tailwind CSS', level: 90, color: 'from-teal-500 to-cyan-500' },
        { name: 'TypeScript', level: 65, color: 'from-blue-600 to-red-700' }
       
      ],
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Java', level: 75, color: 'from-green-500 to-green-600' },
        { name: 'Spring', level: 55, color: 'from-blue-500 to-yellow-500' },
        { name: 'Sprig Boot', level: 60, color: 'from-red-500 to-orange-500' },
        { name: 'MySQl', level: 70, color: 'from-green-600 to-green-600' },
        { name: "Rest API's", level: 60, color: 'from-pink-600 to-purple-700' },
        { name: "JDBC", level: 65, color: 'from-green-600 to-yellow-750' },
      ],
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', level: 90, color: 'from-orange-500 to-red-500' },
        { name: 'DSA', level: 50, color: 'from-yellow-500 to-blue-600' },
        { name: 'JSON', level: 65, color: 'from-orange-400 to-orange-500' },
        { name: 'Wordpress', level: 65, color: 'from-purple-500 to-pink-500' },
        { name: 'VS Code', level: 95, color: 'from-blue-600 to-blue-700' },
        { name: 'PostMan', level: 70, color: 'from-red-600 to-blue-700' },
      ],
    },
  ];

  const techStack = [
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Next', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"  },
    { name: 'Tailwind', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"   },
    { name: 'Java', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"  },
    { name: 'Spring', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg"},
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg'},
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to create amazing digital experiences
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 mx-auto mt-4"></div>
        </motion.div>

        {/* Tech Stack Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-8 mb-16"
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex flex-col items-center p-4 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <img src={tech.icon} alt={tech.name} className="w-12 h-12 mb-2" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Categories */}
        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + categoryIndex * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ 
                          duration: 1, 
                          delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.1 
                        }}
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;