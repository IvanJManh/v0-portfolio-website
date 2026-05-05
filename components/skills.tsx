'use client'

import { motion } from 'framer-motion'
import { Code2, Database, Smartphone, Wrench } from 'lucide-react'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code2,
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Backend',
      icon: Database,
      skills: ['Java', 'Python', 'Firebase', 'Node.js', 'REST APIs'],
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      title: 'Mobile',
      icon: Smartphone,
      skills: ['Flutter', 'React Native'],
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: 'Tools & Platforms',
      icon: Wrench,
      skills: ['Git', 'Figma', 'VS Code', 'Vercel', 'ClickUp', 'Firebase'],
      color: 'from-pink-500 to-pink-600',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills &amp; <span className="gradient-text">Technologies</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group"
              >
                <div className="glass-card h-full cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="text-white" size={24} />
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>

                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2"
                      >
                        <span className="w-2 h-2 bg-accent rounded-full"></span>
                        <span className="text-foreground/80 text-sm">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 glass-card"
        >
          <h3 className="text-2xl font-semibold text-accent mb-6">Professional Skills</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-white mb-4">Technical</h4>
              <div className="flex flex-wrap gap-2">
                {['Web Development', 'Mobile Apps', 'UI/UX Design', 'Database Design', 'API Development', 'Version Control'].map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full text-sm text-foreground hover:border-blue-500 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Soft Skills</h4>
              <div className="flex flex-wrap gap-2">
                {['Teamwork', 'Leadership', 'Communication', 'Problem Solving', 'Adaptability', 'Critical Thinking'].map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-sm text-foreground hover:border-cyan-500 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
