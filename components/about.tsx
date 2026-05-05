'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-foreground/80 leading-relaxed">
              I&apos;m a motivated and reliable Computer Science undergraduate with a passion for collaborative environments and achieving shared goals. I have strong expertise in frontend development, focusing on creating user-friendly and interactive interfaces.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              Known for excellent teamwork, communication, and adaptability, developed through active involvement in event planning, sports coordination, and volunteer initiatives. I enjoy working with diverse teams to deliver successful outcomes.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              My journey in tech combines a passion for crafting beautiful, functional interfaces with full-stack development capabilities. Whether it&apos;s frontend brilliance or backend robustness, I&apos;m committed to delivering quality solutions.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass-card text-center"
              >
                <div className="text-3xl font-bold text-accent">5+</div>
                <div className="text-sm text-foreground/70 mt-2">Projects Completed</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass-card text-center"
              >
                <div className="text-3xl font-bold text-accent">10+</div>
                <div className="text-sm text-foreground/70 mt-2">Technologies</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-card">
              <h3 className="text-xl font-semibold text-accent mb-4">Education</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-accent pl-4">
                  <h4 className="font-semibold text-lg">B.Sc (Hons) Computer Science</h4>
                  <p className="text-foreground/70">University of Westminster (2023 - 2028)</p>
                  <p className="text-sm text-foreground/60">Affiliated with Informatics Institute of Technology</p>
                </div>
                <div className="border-l-2 border-cyan-400 pl-4">
                  <h4 className="font-semibold text-lg">Foundation Certificate in CS</h4>
                  <p className="text-foreground/70">IIT Galle (2023)</p>
                </div>
              </div>
            </div>

            <div className="glass-card">
              <h3 className="text-xl font-semibold text-accent mb-4">Strengths</h3>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Critical Thinking & Problem Solving
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Teamwork & Leadership
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Adaptability & Communication
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  User-Focused Design Thinking
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
