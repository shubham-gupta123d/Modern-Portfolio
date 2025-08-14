import React from "react";
import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter, Github } from "lucide-react";
import profileImage from "../assets/Shubham-Img.jpg";

const Index = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Text Content */}
      <div className="w-full md:w-1/2 bg-gray-900 flex flex-col justify-center px-10 py-16 text-white">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-lg"
        >
          <p className="uppercase tracking-widest text-sm text-teal-400">
        React.js Front-End Developer | Basic Java + MySQL Backend Knowledge
          </p>
          <h1 className="text-5xl font-extrabold text-white leading-tight mt-3">
            Shubham <br /> Kumar
          </h1>
          <p className="text-gray-300 mt-4 text-base leading-relaxed">
         I'm Shubham Kumar, a Full Stack Java + React Developer with 8+ months of hands-on experience building responsive frontends using React.js, Next.js, and Tailwind CSS, and developing robust backends using Java, Spring Boot, and REST APIs.


          </p>
        <button
  onClick={() => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  }}
  className="mt-6 px-6 py-3 bg-teal-500 text-white font-semibold rounded hover:bg-teal-600 transition duration-300"
>
  Explore More
</button>

        </motion.div>
      </div>

      {/* Right Side - Image + Contact Info */}
      <div className="w-full md:w-1/2 bg-gray-800 flex flex-col justify-start items-center text-white px-6 pt-20 pb-16">
        {/* Centered Image */}
       <div className="w-[280px] h-[360px] rounded overflow-hidden shadow-lg bg-gradient-to-tr from-teal-600 via-gray-900 to-gray-800 p-1">
  <img
    src={profileImage}
    alt="Shubham Kumar"
    className="w-full h-full object-cover rounded"
  />
</div>

        {/* Contact Info Section */}
        <div className="text-center space-y-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider">Email</p>
            <p className="text-sm text-gray-300">shubhamgupta7667@gmail.com</p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider">Phone</p>
            <p className="text-sm text-gray-300">+91 91552 44664</p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider">Social Media</p>
            <div className="flex justify-center items-center space-x-4 mt-2 text-white text-lg">
              <a href="https://www.instagram.com/royal_guptaa/" className="hover:text-teal-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/people/Shubham-Gupta/pfbid02CwksXV7wvB6nfumX9xnkep6LsTDTy1A4xjSZWfRj3AK2wrogTmHEZVw2yzEYqzsWl/?rdid=bcU42zOEh5I8tbh5&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BAd6sVjzc%2F" className="hover:text-teal-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://github.com/shubham-gupta123d" className="hover:text-teal-400 transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
