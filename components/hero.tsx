'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen pt-24 pb-12 relative overflow-hidden flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-accent text-lg font-semibold mb-4"
            >
              Hello, I&apos;m Ivan Jerad
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Frontend Developer &{' '}
              <span className="gradient-text">CS Undergraduate</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-foreground/70 mb-8 leading-relaxed"
            >
              I build modern, responsive, and user-friendly web &amp; mobile applications. Passionate about creating exceptional digital experiences with clean code and intuitive design.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg flex items-center justify-center gap-2 hover:shadow-lg transition-all"
              >
                View Projects <ArrowRight size={20} />
              </motion.a>

              <motion.a
                href="https://drive.google.com/file/d/1your-cv-link/view"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 glassmorphism text-white font-semibold rounded-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
              >
                Download CV <Download size={20} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - Animated Code Block */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="glass-card font-mono text-sm">
              <div className="text-cyan-400 mb-4">// Frontend Developer</div>
              <div className="text-foreground/70">
                <span className="text-purple-400">const</span>{' '}
                <span className="text-yellow-400">developer</span>
                <span className="text-foreground/70"> = {'{'}{'}'}</span>
              </div>
              <div className="text-foreground/70 ml-4 my-2">
                <span className="text-blue-400">name</span>: <span className="text-green-400">"Ivan Jerad"</span>,
              </div>
              <div className="text-foreground/70 ml-4">
                <span className="text-blue-400">passion</span>: <span className="text-green-400">"Building amazing web apps"</span>,
              </div>
              <div className="text-foreground/70 ml-4">
                <span className="text-blue-400">skills</span>: [<span className="text-green-400">'React'</span>, <span className="text-green-400">'Next.js'</span>, <span className="text-green-400">'Tailwind'</span>]
              </div>
              <div className="text-foreground/70">{'}'}</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-accent rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-accent rounded-full"></div>
        </div>
      </motion.div>
    </section>
  )
}
