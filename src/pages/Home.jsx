import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Smartphone, 
  Laptop, 
  Shield, 
  Clock, 
  CheckCircle, 
  MessageCircle,
  ArrowRight,
  Award,
  Users,
  Sparkles
} from 'lucide-react'
import ServiceCard from '../components/ServiceCard'

const Home = () => {
  const services = [
    {
      icon: Smartphone,
      title: 'Phone Repairs',
      description: 'Expert screen replacements, battery fixes, and water damage recovery',
      price: 'GHC 150',
      duration: '1-2 hours',
      features: ['Premium parts', '6-month warranty', 'Same-day service'],
    },
    {
      icon: Laptop,
      title: 'Laptop Repairs',
      description: 'Complete laptop diagnostics and hardware solutions',
      price: 'GHC 300',
      duration: '2-4 hours',
      features: ['Free diagnostics', 'Data backup', 'All brands'],
    },
    {
      icon: Shield,
      title: 'iCloud Removal',
      description: 'Professional iCloud unlock with guaranteed success',
      price: 'GHC 250',
      duration: '24 hours',
      features: ['100% success', 'No data loss', 'Permanent solution'],
    }
  ]

  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients', color: 'from-blue-500/20 to-cyan-500/20' },
    { icon: Award, value: '98%', label: 'Success Rate', color: 'from-purple-500/20 to-pink-500/20' },
    { icon: Clock, value: '15 Min', label: 'Avg. Response', color: 'from-orange-500/20 to-red-500/20' },
    { icon: CheckCircle, value: '2 Years', label: 'Experience', color: 'from-emerald-500/20 to-teal-500/20' }
  ]

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* Hero Section - FIXED */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 z-10"
            style={{
              background: 'linear-gradient(to right, rgba(17, 24, 39, 0.9), rgba(17, 24, 39, 0.7), rgba(17, 24, 39, 0.9))'
            }}
          />
          <img 
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Tech Repair Background"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center' }}
          />
        </div>

        {/* Hero Content - FIXED PADDING */}
        <div className="relative z-20 w-full px-4 sm:px-6 lg:px-8 pt-20 pb-32 text-center">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
                style={{ backdropFilter: 'blur(8px)' }}
              >
                <Sparkles className="w-4 h-4" style={{ color: '#f59e0b' }} />
                <span className="text-sm font-medium text-white">Professional Device Repair Service</span>
              </motion.span>
              
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6">
                <span className="text-white">Expert </span>
                <span 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text"
                  style={{ WebkitBackgroundClip: 'text', color: 'transparent' }}
                >
                  Device Repairs
                </span>
                <br />
                <span className="text-white">You Can Trust</span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 sm:mb-10 max-w-3xl mx-auto px-4">
                Professional phone & laptop repairs with warranty. Fast, reliable, and premium service in Ghana.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://wa.me/233539913517?text=Hi%20Ashman!%20I%27m%20interested%20in%20your%20repair%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative overflow-hidden px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 active:scale-95 w-full sm:w-auto"
                  style={{
                    background: 'linear-gradient(to right, #2563eb, #1d4ed8)',
                    color: 'white'
                  }}
                >
                  <span className="relative flex items-center justify-center gap-2 sm:gap-3">
                    <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                    <span className="text-base sm:text-lg">Book on WhatsApp</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform" />
                  </span>
                </motion.a>
                
                <Link
                  to="/services"
                  className="relative overflow-hidden border-2 border-blue-600 text-blue-600 px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 hover:-translate-y-1 active:scale-95 w-full sm:w-auto"
                >
                  <span className="relative flex items-center justify-center gap-2 sm:gap-3">
                    <span className="text-base sm:text-lg">Explore Services</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform" />
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats Section - MOVED BELOW CONTENT ON MOBILE */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 sm:pb-12">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  className="rounded-2xl p-3 sm:p-4 md:p-6 text-center backdrop-blur-lg"
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(12px)'
                  }}
                >
                  <div 
                    className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl mb-2 sm:mb-3 md:mb-4"
                    style={{
                      background: stat.color.includes('blue') 
                        ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(6, 182, 212, 0.2))'
                        : stat.color.includes('purple')
                        ? 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.2))'
                        : stat.color.includes('orange')
                        ? 'linear-gradient(135deg, rgba(249, 115, 22, 0.2), rgba(239, 68, 68, 0.2))'
                        : 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(20, 184, 166, 0.2))'
                    }}
                  >
                    <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview - FIXED SPACING */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              <span className="text-gray-900">Premium </span>
              <span 
                className="bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text"
                style={{ WebkitBackgroundClip: 'text', color: 'transparent' }}
              >
                Repair Services
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              We provide comprehensive repair solutions using genuine parts and certified technicians.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              to="/services"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-base sm:text-lg group"
            >
              View All Services
              <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - FIXED SPACING */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24"
        style={{
          background: 'linear-gradient(to right, #111827, #1f2937)'
        }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
              Ready to Fix Your Device?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto px-4">
              Contact us now for a free diagnostic and quote. We're here to help 24/7.
            </p>
            <a
              href="https://wa.me/233539913517"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
              style={{
                background: 'linear-gradient(to right, #f59e0b, #d97706)',
                color: 'white'
              }}
            >
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-base sm:text-lg">Get Instant Help on WhatsApp</span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home