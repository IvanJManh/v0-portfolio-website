'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/ivan-manamperi', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:ivanjerad00@gmail.com', label: 'Email' },
  ]

  return (
    <footer className="bg-background/80 backdrop-blur-md border-t border-white/10 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold gradient-text mb-2">Ivan Jerad</h3>
            <p className="text-foreground/70 text-sm">Frontend Developer & Computer Science Student</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <motion.a
                    href={`#${link.toLowerCase()}`}
                    whileHover={{ x: 5, color: '#06b6d4' }}
                    className="text-foreground/70 hover:text-accent text-sm transition-colors"
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-white mb-4">Follow Me</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center text-accent hover:shadow-lg hover:shadow-blue-500/30 transition-all"
                    title={social.label}
                  >
                    <Icon size={20} />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-4 text-foreground/60 text-sm"
          >
            <p>&copy; {currentYear} Ivan Jerad. All rights reserved.</p>
            <p>Crafted with passion by <span className="gradient-text font-semibold">Ivan Jerad</span></p>
            <p>Designed &amp; Built with <span className="text-accent">React</span> &amp; <span className="text-accent">Tailwind CSS</span></p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
