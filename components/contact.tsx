'use client'

import { motion } from 'framer-motion'
import { Mail, MessageSquare, Phone, Linkedin, Github } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ivanjerad00@gmail.com',
      href: 'mailto:ivanjerad00@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+94 740 779 470',
      href: 'tel:+94740779470',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'ivan-manamperi',
      href: 'https://linkedin.com/in/ivan-manamperi',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/ivan',
      href: 'https://github.com',
    },
  ]

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          <p className="text-foreground/70 text-lg mt-6">Have a project in mind? Let&apos;s collaborate and create something amazing together!</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-8">Let&apos;s Connect</h3>

            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="group glass-card cursor-pointer flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-blue-500/30 transition-all">
                    <Icon className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white mb-1">{info.label}</h4>
                    <p className="text-foreground/70 text-sm break-all">{info.value}</p>
                  </div>
                </motion.a>
              )
            })}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-12 pt-6 border-t border-white/10"
            >
              <p className="text-foreground/70 text-sm mb-4">Follow me on social media</p>
              <div className="flex gap-4">
                {[Github, Linkedin, Mail].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center text-accent hover:shadow-lg hover:shadow-blue-500/30 transition-all"
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass-card">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
                    required
                  ></textarea>
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)' }}
                  whileTap={{ scale: 0.95 }}
                  viewport={{ once: true }}
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
