import React from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, CheckCircle, Clock } from 'lucide-react'

const ServiceCard = ({ service, index }) => {
  const handleBookService = () => {
    const message = `Hi Ashman! I'm interested in your ${service.title} service (${service.price}). Please contact me.`;
    const whatsappUrl = `https://wa.me/233539913517?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank')
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
    >
      <div className="p-4 sm:p-6 lg:p-8">
        {/* Icon */}
        <div 
          className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300"
          style={{
            background: 'linear-gradient(to right, gray, #000)'
          }}
        >
          <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
        </div>
        
        {/* Title & Description */}
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
          {service.title}
        </h3>
        <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
          {service.description}
        </p>

        {/* Price & Duration */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 lg:mb-8 gap-2">
          <div>
            <div 
              className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1"
              style={{
                background: 'linear-gradient(to right, #2563eb, #1d4ed8)',
                WebkitBackgroundClip: 'text',
                color: 'transparent'
              }}
            >
              {service.price}
            </div>
            <div className="text-xs sm:text-sm text-gray-500">Starting from</div>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="w-4 h-4 mr-2" />
            <span className="font-medium text-sm sm:text-base">{service.duration}</span>
          </div>
        </div>

        {/* Features */}
        <div className="mb-4 sm:mb-6 lg:mb-8">
          <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 lg:mb-4">What's Included:</h4>
          <ul className="space-y-1 sm:space-y-2 lg:space-y-3">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-start">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 mt-0.5 flex-shrink-0" style={{ color: '#10b981' }} />
                <span className="text-xs sm:text-sm lg:text-base text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleBookService}
          className="w-full text-white py-2 sm:py-3 lg:py-4 px-4 sm:px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3"
          style={{
            background: 'linear-gradient(to right, #111827, #1f2937)'
          }}
        >
          <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-sm sm:text-base">Book This Service</span>
          <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
        </motion.button>
      </div>
    </motion.div>
  )
}

export default ServiceCard