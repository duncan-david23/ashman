import React from 'react'
import { Link } from 'react-router-dom'
import { Wrench, Facebook, Instagram, Twitter, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-primary-600 to-purple-600 rounded-xl">
                <Wrench className="h-7 w-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">
                  Ashman<span className="text-primary-400"> R & S</span>
                </h2>
                <p className="text-sm text-neutral-400">Professional Device Care</p>
              </div>
            </Link>
            <p className="text-neutral-400 mb-8">
              Premium device repair services. Serving Ghana with expertise and care.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-neutral-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-neutral-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-neutral-700 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-neutral-700 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-neutral-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              <li className="text-neutral-400">MacBook Remote Management Control / MDM Removal</li>
              <li className="text-neutral-400">Android Google Account Removal</li>
              <li className="text-neutral-400">iPhone SIM Unlocking</li>
              <li className="text-neutral-400">Laptop Windows Activation Key</li>
              <li className="text-neutral-400">Antivirus Products Key</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="text-neutral-400">
                <span className="block text-sm text-neutral-500">Phone</span>
                +233539913517
              </li>
              <li className="text-neutral-400">
                <span className="block text-sm text-neutral-500">Email</span>
                contact@ashmanrepairs.com
              </li>
              <li className="text-neutral-400">
                <span className="block text-sm text-neutral-500">Hours</span>
                Mon-Sat: 8AM - 8PM
                <br />
                Sun: 10AM - 4PM
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-neutral-800 mt-12 pt-8 text-center text-neutral-500 text-sm">
          <p>&copy; {currentYear} Ashman Repairs And Services. All rights reserved.</p>
          <p className="mt-2">Serving Ghana with professional device repair services</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer