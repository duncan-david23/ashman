import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import macbookIcloudImg from '../assets/macbook_icloud.webp'
import macbookRemoteManagementImg from '../assets/mdm-screen.png'
import androidImg from '../assets/android_img.webp'
import iphoneSimUnlockImg from '../assets/unlock-sim-iphone.jpg'
import windowsActivation from '../assets/windows_activation.webp'
import antivirusImg from '../assets/antivirus_key.png'


const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'phone', label: 'Phone' },
    { id: 'laptop', label: 'Laptop' },
    { id: 'apple', label: 'Apple' },
    { id: 'other', label: 'Other' }
  ]

  const services = [
    {
      id: 'iphone-icloud-remove',
      title: 'iPhones iCloud Permanent Remove',
      image: 'https://certo-software.imgix.net/app/uploads/2023/03/How-To-Fix-A-Hacked-iCloud-Account.jpg?w=2000&h=&auto=format',
      category: 'apple'
    },
    {
      id: 'iphone-icloud-bypass',
      title: 'iPhone iCloud Bypass',
      image: 'https://certo-software.imgix.net/app/uploads/2023/03/How-To-Fix-A-Hacked-iCloud-Account.jpg?w=2000&h=&auto=format',
      category: 'apple'
    },
    {
      id: 'macbook-icloud-removal',
      title: 'MacBook iCloud Removal',
      image: macbookIcloudImg,
      category: 'apple'
    },
    {
      id: 'macbook-mdm-removal',
      title: 'MacBook Remote Management Control / MDM Removal',
      image: macbookRemoteManagementImg,
      category: 'apple'
    },
    {
      id: 'android-google-account-removal',
      title: 'Android Google Account Removal',
      image: androidImg,
      category: 'phone'
    },
    {
      id: 'android-mdm-removal',
      title: 'Android Remote Management Control / MDM Removal',
      image: androidImg,
      category: 'phone'
    },
    {
      id: 'iphone-sim-unlock',
      title: 'iPhone SIM Unlocking',
      image: iphoneSimUnlockImg,
      category: 'phone'
    },
    {
      id: 'android-decoding',
      title: 'Android Decoding',
      image: androidImg,
      category: 'phone'
    },
    {
      id: 'laptop-windows-key',
      title: 'Laptop Windows Activation Key',
      image: windowsActivation,
      category: 'laptop'
    },
    {
      id: 'antivirus-key',
      title: 'Antivirus Products Key',
      image: antivirusImg,
      category: 'other'
    }
  ]

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory)

  const handleBookService = (service) => {
    const message = `Hi Ashman! I need help with: ${service.title}\nPlease contact me.`;
    const whatsappUrl = `https://wa.me/233539913517?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="pt-16 sm:pt-20 pb-12 mt-[20px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            <span className="text-gray-900">Our </span>
            <span className="bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
            Premium repair services with warranty and expert technicians.
          </p>
        </motion.div>

        {/* Category Filter - FIXED ACTIVE STATE */}
        <div className="mb-8 sm:mb-12">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all text-sm sm:text-base ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md border border-blue-700'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid with Image Backgrounds */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg border border-gray-300 hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Image Background */}
              <div className="aspect-[4/3] relative">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="bg-white/90 text-gray-800 px-2 py-1 rounded text-xs font-medium">
                    {service.category.charAt(0).toUpperCase() + service.category.slice(1)}
                  </span>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-lg font-bold mb-1">{service.title}</h3>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold">{service.price}</span>
                    <span className="text-sm bg-white/20 px-2 py-1 rounded">{service.duration}</span>
                  </div>
                  
                  {/* Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleBookService(service)}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-sm">Book This Service</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              Can't Find Your Specific Issue?
            </h2>
            <p className="text-gray-300 mb-4 sm:mb-6 max-w-xl mx-auto text-sm sm:text-base">
              Contact us directly for personalized assistance.
            </p>
            <a
              href="https://wa.me/233539913517?text=Hi%20Ashman!%20I%20have%20a%20device%20issue%20not%20listed.%20Can%20you%20help?"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-5 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm sm:text-base">Describe Your Issue</span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Services