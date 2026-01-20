import React, { useState } from 'react';
import { Github, Linkedin, Moon, Sun } from 'lucide-react';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.contact || !formData.message) {
      setFormStatus({ type: 'error', message: 'Please fill in all fields' });
      return;
    }

    setIsSubmitting(true);
    setFormStatus({ type: '', message: '' });

    try {
      // Using EmailJS-like approach with mailto as fallback
      const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nContact: ${formData.contact}\n\nMessage:\n${formData.message}`
      );
      
      // Replace with your email
      const yourEmail = 'your.email@example.com';
      
      // Open default email client
      window.location.href = `mailto:${yourEmail}?subject=${subject}&body=${body}`;
      
      setFormStatus({ 
        type: 'success', 
        message: 'Email client opened! Please send the email to complete your message.' 
      });
      
      // Reset form
      setFormData({ name: '', contact: '', message: '' });
    } catch (error) {
      setFormStatus({ 
        type: 'error', 
        message: 'Something went wrong. Please try again or email directly.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const expertise = [
    {
      title: 'Front End Web Development',
      icon: '⚛️',
      description: 'I have built diverse web applications using modern frontend technologies such as React, HTML, CSS, and JavaScript. I have a strong proficiency in creating responsive, user-friendly interfaces with excellent user experience.',
      techStack: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'SASS', 'Tailwind CSS', 'Bootstrap', 'Redux']
    },
    {
      title: 'DevOps & Automation',
      icon: '🐳',
      description: 'Once the application is built, I help clients set up DevOps testing, CI/CD pipelines, and deployment automation to support the successful Go-Live.',
      techStack: ['Git', 'GitHub Actions', 'Docker', 'AWS', 'Azure', 'Linux', 'Snowflake', 'Pandas', 'Selenium']
    },
    {
      title: 'GenAI & LLM',
      icon: '🐍',
      description: 'Stay relevant in the market by leveraging the latest AI models in your projects. I have professional experience building enterprise grade GenAI-enabled solutions to empower intelligent decision making.',
      techStack: ['OpenAI', 'Groq', 'LangChain', 'Qdrant', 'Hugging Face', 'LlamaIndex', 'Streamlit']
    }
  ];

  const careerHistory = [
    {
      title: 'Technology Consultant',
      location: 'Dallas, TX',
      period: '2022 - present',
      description: 'Full-stack Web Development, GenAI/LLM, Project Management, Business Development'
    },
    {
      title: 'Full Stack Engineer',
      location: 'Laie, HI',
      period: '2020 - 2022',
      description: 'Frontend Development, Backend Development, User Experience, Team Leading'
    },
    {
      title: 'Staff Engineer Intern',
      location: 'Laie, HI',
      period: '2021 - 2021',
      description: 'Full-stack Development, API Development, User Experience'
    }
  ];

  const projects = [
    {
      title: 'Filmate AI',
      description: 'Developed movie finder app with semantic search and sentiment analysis using OpenAI GPT-3.5 Turbo, Qdrant, React, and Flask.',
      image: '🎬',
      link: '#'
    },
    {
      title: 'StayFit',
      description: 'Developed exercise task based website for users to keep track of their daily exercise count with interactive features.',
      image: '💪',
      link: '#'
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-opacity-80 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-700 transition-colors"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <div className="flex gap-8">
            {['Expertise', 'History', 'Projects', 'Contact'].map((item) => (
              
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById(item.toLowerCase());
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                  setActiveSection(item.toLowerCase());
                }}
                className="hover:text-purple-400 transition-colors cursor-pointer"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute w-full h-full" viewBox="0 0 1440 800">
            <path
              d="M0,400 Q360,200 720,400 T1440,400 L1440,800 L0,800 Z"
              fill="url(#gradient1)"
              opacity="0.3"
            >
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0; 50,0; 0,0"
                dur="10s"
                repeatCount="indefinite"
              />
            </path>
            <path
              d="M0,500 Q360,300 720,500 T1440,500 L1440,800 L0,800 Z"
              fill="url(#gradient2)"
              opacity="0.3"
            >
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0; -50,0; 0,0"
                dur="15s"
                repeatCount="indefinite"
              />
            </path>
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl">
          <div className="flex justify-center gap-4 mb-6">
            <Github className="cursor-pointer hover:text-purple-400 transition-colors" size={28} />
            <Linkedin className="cursor-pointer hover:text-purple-400 transition-colors" size={28} />
          </div>
          <div className="w-32 h-32 rounded-full bg-gray-700 mx-auto mb-6 overflow-hidden">
            <div className="w-full h-full flex items-center justify-center text-6xl">👤</div>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-4">Sanjid Islam Joy</h1>
          <p className="text-xl text-purple-400 mb-8">Front End Developer</p>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 px-6" id="expertise">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <div
                key={index}
                className={`p-8 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} hover:transform hover:scale-105 transition-all duration-300`}
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="mb-6 text-gray-400">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Background */}
      <section className="py-20 px-6" id="history">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-16">Educational Background</h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-purple-500"></div>
            {careerHistory.map((job, index) => (
              <div key={index} className="relative mb-12 ml-20">
                <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold">{job.title}</h3>
                      <p className="text-gray-400">{job.location}</p>
                    </div>
                    <span className="text-sm text-purple-400">{job.period}</span>
                  </div>
                  <p className="text-gray-400 mt-3">{job.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6" id="projects">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Personal Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`rounded-lg overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} hover:transform hover:scale-105 transition-all duration-300 cursor-pointer`}
              >
                <div className="h-64 flex items-center justify-center text-8xl bg-gradient-to-br from-purple-500 to-pink-500">
                  {project.image}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6" id="contact">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
          <p className="text-gray-400 mb-8">Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          
          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name *"
                className={`px-4 py-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} focus:outline-none focus:ring-2 focus:ring-purple-500`}
                required
              />
              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleInputChange}
                placeholder="Email / Phone *"
                className={`px-4 py-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} focus:outline-none focus:ring-2 focus:ring-purple-500`}
                required
              />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Message *"
              rows="6"
              className={`w-full px-4 py-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4`}
              required
            ></textarea>
            
            {formStatus.message && (
              <div className={`mb-4 p-4 rounded ${
                formStatus.type === 'success' 
                  ? 'bg-green-500 bg-opacity-20 text-green-400 border border-green-500' 
                  : 'bg-red-500 bg-opacity-20 text-red-400 border border-red-500'
              }`}>
                {formStatus.message}
              </div>
            )}
            
            <div className="flex justify-end">
              <button 
                type="submit"
                disabled={isSubmitting}
                className={`px-8 py-3 bg-white text-gray-900 rounded font-semibold transition-colors ${
                  isSubmitting 
                    ? 'opacity-50 cursor-not-allowed' 
                    : 'hover:bg-gray-200'
                }`}
              >
                {isSubmitting ? 'SENDING...' : 'SEND ➤'}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center border-t border-gray-700">
        <div className="flex justify-center gap-6 mb-4">
          <Github className="cursor-pointer hover:text-purple-400 transition-colors" size={24} />
          <Linkedin className="cursor-pointer hover:text-purple-400 transition-colors" size={24} />
        </div>
        <p className="text-gray-400">© 2024 All rights reserved to Sanjid Islam Joy</p>
      </footer>
    </div>
  );
};

export default Portfolio;