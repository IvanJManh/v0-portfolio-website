'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Premium Luxury Travel Website',
      description: 'Full-featured luxury travel website with dark theme and glassmorphism design. Showcases exclusive destinations, premium packages, and unforgettable experiences with smooth animations, full-screen imagery, and seamless booking flows.',
      tech: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
      liveLink: '#',
      githubLink: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'Micro Skill Builder App',
      description: 'AI-powered communication improvement app using phone camera to analyze posture, voice, and facial expressions for real-time feedback on presentation skills.',
      tech: ['Flutter', 'Firebase', 'TensorFlow Lite', 'OpenAI Whisper', 'MediaPipe'],
      liveLink: '#',
      githubLink: '#',
      featured: true,
    },
    {
      id: 3,
      title: 'Mental Health Awareness Website',
      description: 'Responsive multi-page website with animated splash screen, secure sign-up forms, custom page editor, and volunteer engagement features focusing on mental health advocacy.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Form Validation'],
      liveLink: '#',
      githubLink: '#',
      featured: false,
    },
    {
      id: 4,
      title: 'Gem Luster E-commerce Platform',
      description: 'Mobile-first e-commerce prototype connecting Sri Lankan gem vendors with global buyers. Features 3D gem previews, certified listings, and secure chat functionality.',
      tech: ['Figma', 'UX Research', 'Requirements Gathering', 'SDLC'],
      liveLink: '#',
      githubLink: '#',
      featured: false,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-2 gap-6">
            {projects.slice(0, 2).map((project) => (
              <div
                key={project.id}
                className="glass-card group cursor-pointer hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 flex flex-col"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="h-48 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-lg mb-6 flex items-center justify-center relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="text-center relative z-10">
                    <div className="text-5xl font-bold mb-2">
                      {project.id === 1 ? '✈️' : '🎤'}
                    </div>
                    <p className="text-foreground/80 text-xs font-semibold">
                      {project.id === 1 ? 'Travel Platform' : 'AI Communications'}
                    </p>
                  </div>
                </motion.div>

                <div className="flex flex-col justify-between flex-grow">
                  <div>
                    <div className="inline-block mb-3">
                      <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/50 rounded-full text-xs font-semibold text-blue-300">Featured Project</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-foreground/80 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <div className="mb-5">
                      <h4 className="text-xs font-semibold text-accent mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <motion.span
                            key={t}
                            whileHover={{ scale: 1.05 }}
                            className="px-2 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded text-foreground/70 hover:text-accent transition-colors"
                          >
                            {t}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3 pt-4 border-t border-white/10">
                      <motion.a
                        href={project.liveLink}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center gap-2 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-semibold rounded hover:shadow-lg hover:shadow-blue-500/30 transition-all"
                      >
                        Live Demo <ExternalLink size={16} />
                      </motion.a>
                      <motion.a
                        href={project.githubLink}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center gap-2 py-2 glassmorphism text-white text-sm font-semibold rounded hover:bg-white/10 transition-all"
                      >
                        GitHub <Github size={16} />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Other Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.slice(2).map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="glass-card h-full flex flex-col cursor-pointer hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
                <div className="h-40 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-lg mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold gradient-text">{project.id}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                  {project.title}
                </h3>

                <p className="text-foreground/70 text-sm mb-6 flex-grow line-clamp-3">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-accent mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 text-xs bg-white/5 border border-white/10 rounded text-foreground/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4 border-t border-white/10">
                  <motion.a
                    href={project.liveLink}
                    whileHover={{ scale: 1.05 }}
                    className="flex-1 flex items-center justify-center gap-1 py-2 text-sm font-semibold text-accent hover:bg-white/5 rounded transition-colors"
                  >
                    Live <ExternalLink size={14} />
                  </motion.a>
                  <motion.a
                    href={project.githubLink}
                    whileHover={{ scale: 1.05 }}
                    className="flex-1 flex items-center justify-center gap-1 py-2 text-sm font-semibold text-accent hover:bg-white/5 rounded transition-colors"
                  >
                    Code <Github size={14} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
