import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MessageCircle, ArrowRight, Sparkles } from 'lucide-react'
import androidImg from '../assets/android_img.webp'
import androidAccountDecoding from '../assets/android_decode.jpeg'
import macbookIcloudImg from '../assets/macbook_icloud.jpeg'
import iphone_activation from '../assets/iphone_1.jpeg'


const Home = () => {
  const services = [
    {
      id: 1,
      title: 'Macbook iCloud removal',
      image: macbookIcloudImg,
      
    },
    {
      id: 2,
      title: 'Android Decoding',
      image: androidAccountDecoding,
      
    },
    {
      id: 3,
      title: 'iPhone iCloud bypass ',
      image: iphone_activation,

    }
  ]

  return (
    <div>
      {/* Hero Section - FIXED */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/90 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Tech Repair Background"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 w-full px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12 text-center">
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
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4 sm:mb-6"
              >
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span className="text-sm font-medium text-white">Professional Device Repair Service</span>
              </motion.span>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                <span className="text-white">Expert </span>
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Device Repairs
                </span>
                <br />
                <span className="text-white">You Can Trust</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
                Professional phone & laptop repairs. Fast, reliable service in Ghana.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://wa.me/233539913517?text=Hi%20Ashman!%20I'm%20interested%20in%20your%20repair%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 sm:px-6 py-3 sm:py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 active:scale-95 w-full sm:w-auto flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span className="text-sm sm:text-base">Book on WhatsApp</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.a>
                
                <Link
                  to="/services"
                  className="border-2 border-white text-white px-5 sm:px-6 py-3 sm:py-4 rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 hover:-translate-y-1 active:scale-95 w-full sm:w-auto flex items-center justify-center gap-2"
                >
                  <span className="text-sm sm:text-base">Explore Services</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats Section - MOVED COMPLETELY BELOW */}
        <div className="absolute bottom-4 sm:bottom-8 left-0 right-0 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {[
                { value: '315+', label: 'Happy Clients' },
                { value: '98%', label: 'Success Rate' },
                { value: 'Instant', label: 'Response Time' },
                { value: '6 Years', label: 'Experience' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 sm:p-4 text-center"
                >
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview - IMAGE BACKGROUNDS */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              <span className="text-gray-900">Premium </span>
              <span className="bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                Repair Services
              </span>
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
              Quality repairs with warranty. Contact us for details.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service) => (
              <Link
                key={service.id}
                to="/services"
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="aspect-[4/3] relative">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                    <h3 className="text-lg sm:text-xl font-bold mb-1">{service.title}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-sm sm:text-base font-semibold">{service.price}</span>
                      <span className="text-xs sm:text-sm bg-white/20 px-2 py-1 rounded">View Details</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8 sm:mt-12"
          >
            <Link
              to="/services"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm sm:text-base group"
            >
              View All Services
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">
              Ready to Fix Your Device?
            </h2>
            <p className="text-gray-300 mb-6 sm:mb-8 max-w-xl mx-auto text-sm sm:text-base">
              Contact us now for a free diagnostic and quote.
            </p>
            <a
              href="https://wa.me/233539913517"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-5 sm:px-6 py-3 sm:py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm sm:text-base">Get Instant Help</span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home