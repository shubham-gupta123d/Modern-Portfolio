import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Filter } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: 'Real-Estate-Website',
      description: 'I developed a dynamic Real Estate website using React.js, featuring smooth navigation, a custom animated cursor, and a modern UI that delivers a sleek, responsive user experience. 🏡⚡',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Animated Cursor'],
      category: 'React',
      liveUrl: 'https://49ba1a1e.real-estate-web-react.pages.dev/',
      githubUrl: 'https://github.com/shubham-gupta123d/Animated-Real-Estate-website-React-',
      featured: true,
    },
    {
      title: 'E-Commerce Website',
      description: 'Developed a fully responsive eCommerce website, enhancing user experience and accessibility across various devices🚀',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
      category: 'HTML5',
      liveUrl: 'https://shubham-gupta123d.github.io/E_Commerce_Website/',
      githubUrl: 'https://github.com/shubham-gupta123d/E_Commerce_Website',
      featured: true,
    },
    {
      title: 'Fitness Gym Website',
      description: 'I developed a gym website using Next.js, Tailwind CSS, TypeScript,and Framer Motion, featuring a modern UI, smooth animations, responsive design, and an engaging user experience to attract more clients.🚀',
      image: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg',
      technologies: ['Next', 'Tailwind CSS', 'TypeScript', 'Framer Motion'],
      category: 'JavaScript',
      liveUrl: 'https://usa-gym.devfrend.com/',
      githubUrl: 'https://github.com/shubham-gupta123d/Gym-Website',
      featured: false,
    },
    {
      title: 'Coffee Website',
      description: 'I built a modern Coffee Shop website using Next.js, Tailwind CSS, JavaScript, and Framer Motion, featuring responsive design, smooth animations, and a visually rich user interface to create an immersive browsing experience.🏡⚡',
      image: 'https://images.pexels.com/photos/3584926/pexels-photo-3584926.jpeg',
      technologies: ['Next', 'Tailwind CSS', 'TypeScript','Framer Motion'],
      category: 'Next',
      liveUrl: 'https://coffee-webiste-eight.vercel.app/',
      githubUrl: 'https://github.com/shubham-gupta123d/Coffee-Webiste',
      featured: false,
    },
    {
      title: 'Recipe Builder Website',
      description: 'I developed a Recipe Builder website using React.js and Tailwind CSS, featuring functionality to create, view, and manage recipes with ingredients and instructions, along with a responsive and user-friendly interface.🚀',
      image: 'https://images.pexels.com/photos/33247516/pexels-photo-33247516.jpeg',
      technologies: ['React', 'JavaScript', 'Tailwind CSS'],
      category: 'React',
      liveUrl: 'https://shubham-gupta123d.github.io/Recipe-Builder/',
      githubUrl: 'https://github.com/shubham-gupta123d/Recipe-Builder',
      featured: false,
    },
    {
      title: 'Currency & Flag Convertor',
      description: ' developed a Currency and Flag Converter website using HTML5, CSS3, and JavaScript, featuring functionality to convert currencies with real-time exchange rates and display country flags, along with a responsive and user-friendly interface. 🌍🚀',
      image: 'https://images.pexels.com/photos/4386400/pexels-photo-4386400.jpeg',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      category: 'JavaScript',
      liveUrl: 'https://shubham-gupta123d.github.io/Currency_And_Flag_Convertor/',
      githubUrl: 'https://github.com/shubham-gupta123d/Currency_And_Flag_Convertor',
      featured: true,
    },
  ];

  const categories = ['All', 'React', 'JavaScript', 'Next', 'HTML5',];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 mx-auto mt-4"></div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                    >
                      <ExternalLink size={16} />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                    >
                      <Github size={16} />
                    </motion.a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/shubham-gupta123d"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-teal-500/25 transition-all duration-300"
          >
            <Github size={20} />
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;