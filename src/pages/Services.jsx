import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Smartphone, 
  Laptop, 
  Shield, 
  Tablet, 
  HardDrive, 
  Cpu,
  Battery,
  Settings,
  Zap,
  MessageCircle,
  Clock,
  ShieldCheck,
  MapPin
} from 'lucide-react'

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'All Services', icon: Settings },
    { id: 'phone', label: 'Phone', icon: Smartphone },
    { id: 'laptop', label: 'Laptop', icon: Laptop },
    { id: 'apple', label: 'Apple', icon: Shield },
    { id: 'other', label: 'Other', icon: MapPin }
  ]

  const services = [
    {
      id: 'phone-repair',
      icon: Smartphone,
      title: 'Phone Screen Replacement',
      description: 'Professional screen replacement for all smartphone models with original quality displays.',
      price: 'GHC 120 - GHC 400',
      duration: '1-2 hours',
      category: 'phone',
      features: ['OEM Quality Screens', 'Touch Sensitivity Test', 'Water Seal Replacement']
    },
    {
      id: 'battery-replacement',
      icon: Battery,
      title: 'Battery Replacement',
      description: 'High-capacity battery replacement with improved battery life.',
      price: 'GHC 80 - GHC 250',
      duration: '45 mins',
      category: 'phone',
      features: ['Genuine Batteries', 'Battery Health Check', 'Performance Test']
    },
    {
      id: 'laptop-repair',
      icon: Laptop,
      title: 'Laptop Hardware Repair',
      description: 'Complete laptop diagnostics and hardware repair solutions.',
      price: 'GHC 200 - GHC 800',
      duration: '2-6 hours',
      category: 'laptop',
      features: ['Free Diagnostics', 'Component-Level Repair', 'Data Protection']
    },
    {
      id: 'icloud-removal',
      icon: Shield,
      title: 'iCloud Activation Lock',
      description: 'Professional iCloud unlock services with guaranteed success rate.',
      price: 'GHC 200 - GHC 350',
      duration: '24-48 hours',
      category: 'apple',
      features: ['100% Success Rate', 'No Data Loss', 'Permanent Solution']
    },
    {
      id: 'data-recovery',
      icon: HardDrive,
      title: 'Data Recovery Service',
      description: 'Recover lost or deleted data from any storage device.',
      price: 'GHC 300 - GHC 1000',
      duration: '24-72 hours',
      category: 'other',
      features: ['Advanced Tools', 'High Success Rate', 'Secure Process']
    },
    {
      id: 'motherboard-repair',
      icon: Cpu,
      title: 'Motherboard Repair',
      description: 'Micro-soldering and component level repair for circuit boards.',
      price: 'GHC 400 - GHC 1200',
      duration: '3-8 hours',
      category: 'laptop',
      features: ['Micro-soldering', 'Component Replacement', 'Board Testing']
    },
    {
      id: 'tablet-repair',
      icon: Tablet,
      title: 'Tablet Repairs',
      description: 'iPad and Android tablet repair services.',
      price: 'GHC 150 - GHC 500',
      duration: '1-4 hours',
      category: 'other',
      features: ['All Models', 'Screen Repair', 'Battery Service']
    },
    {
      id: 'software-issues',
      icon: Zap,
      title: 'Software & OS Issues',
      description: 'Operating system installation, updates, and virus removal.',
      price: 'GHC 50 - GHC 200',
      duration: '1-3 hours',
      category: 'laptop',
      features: ['Virus Removal', 'OS Installation', 'Driver Updates']
    }
  ]

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory)

  const handleBookService = (service) => {
    const message = `Hi Ashman! I need help with: ${service.title}\nPrice Range: ${service.price}\nPlease contact me.`;
    const whatsappUrl = `https://wa.me/233539913517?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-neutral-900">Our </span>
            <span className="gradient-text">Services</span>
          </h1>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Premium repair services with genuine parts, expert technicians, and warranty on all repairs.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg'
                    : 'bg-white text-neutral-700 hover:bg-neutral-50 border border-neutral-200'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="service-card group"
            >
              <div className="p-8">
                {/* Category Badge */}
                <span className="inline-block px-3 py-1 bg-neutral-100 text-neutral-600 rounded-full text-xs font-medium mb-4">
                  {service.category.charAt(0).toUpperCase() + service.category.slice(1)}
                </span>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-neutral-700" />
                </div>
                
                {/* Title & Description */}
                <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-neutral-600 mb-6">
                  {service.description}
                </p>

                {/* Price & Duration */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <div className="text-2xl font-bold text-neutral-900">
                      {service.price}
                    </div>
                    <div className="text-sm text-neutral-500">Price Range</div>
                  </div>
                  <div className="flex items-center text-neutral-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="font-medium">{service.duration}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="font-semibold text-neutral-900 mb-3">Includes:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-neutral-700">
                        <ShieldCheck className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleBookService(service)}
                  className="w-full bg-gradient-to-r from-neutral-900 to-neutral-800 text-white py-3 px-6 rounded-xl font-semibold hover:from-neutral-800 hover:to-neutral-900 transition-all duration-300 flex items-center justify-center space-x-3"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Get Quote</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-neutral-900 to-neutral-800 rounded-3xl p-10 text-white"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Can't Find Your Specific Issue?
            </h2>
            <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
              Contact us directly for personalized assistance. We repair virtually any device issue.
            </p>
            <a
              href="https://wa.me/233539913517?text=Hi%20Ashman!%20I%20have%20a%20device%20issue%20not%20listed.%20Can%20you%20help?"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center space-x-3 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700"
            >
              <MessageCircle className="w-6 h-6" />
              <span className="text-lg">Describe Your Issue</span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Services