import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Wrench, Phone, ArrowRight } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-br from-primary-600 to-purple-600 rounded-xl">
              <Wrench className="h-7 w-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-neutral-900">
                Ashman<span className="gradient-text">Repairs</span>
              </h1>
              <p className="text-xs text-neutral-500">Professional Device Care</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="relative group"
              >
                <span className={`text-sm font-medium transition-colors duration-300 ${
                  location.pathname === item.path 
                    ? 'text-primary-600' 
                    : 'text-neutral-700 hover:text-primary-600'
                }`}>
                  {item.name}
                </span>
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-accent-500 transition-all duration-300 group-hover:w-full ${
                  location.pathname === item.path && 'w-full'
                }`} />
              </Link>
            ))}
            
            <a
              href="https://wa.me/233539913517"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center space-x-2"
            >
              <Phone size={20} />
              <span>WhatsApp</span>
              <ArrowRight size={20} />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors"
          >
            {isOpen ? <X size={24} className="text-neutral-700" /> : <Menu size={24} className="text-neutral-700" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-neutral-200"
          >
            <div className="max-w-7xl mx-auto px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block py-3 px-4 rounded-lg text-base font-medium transition-all ${
                    location.pathname === item.path
                      ? 'bg-gradient-to-r from-primary-50 to-accent-50 text-primary-600 border-l-4 border-primary-600'
                      : 'text-neutral-700 hover:bg-neutral-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://wa.me/233539913517"
                target="_blank"
                rel="noopener noreferrer"
                className="block btn-primary text-center"
                onClick={() => setIsOpen(false)}
              >
                Contact on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar