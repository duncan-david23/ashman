import React from 'react'
import { motion } from 'framer-motion'
import { 
  User, 
  Award, 
  Clock, 
  Shield, 
  MessageCircle,
  MapPin,
  Phone,
  Mail,
  CheckCircle,
  Heart,
  Target,
  Wrench
} from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Quality First',
      description: 'We use only genuine parts and follow industry best practices for all repairs.',
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: Heart,
      title: 'Customer Care',
      description: 'Every customer is treated with respect and receives personalized service.',
      bgColor: 'bg-red-100',
      iconColor: 'text-red-600'
    },
    {
      icon: Target,
      title: 'Precision',
      description: 'Attention to detail in every repair ensures long-lasting results.',
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      icon: Clock,
      title: 'Fast Service',
      description: 'Most repairs completed within hours, not days.',
      bgColor: 'bg-yellow-100',
      iconColor: 'text-yellow-600'
    }
  ]

  const processSteps = [
    {
      number: '01',
      title: 'Diagnosis',
      description: 'Free device inspection and problem identification',
      color: 'text-blue-600 border-blue-200',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      number: '02',
      title: 'Quote',
      description: 'Transparent pricing with no hidden charges',
      color: 'text-purple-600 border-purple-200',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      number: '03',
      title: 'Repair',
      description: 'Expert repair using genuine parts',
      color: 'text-green-600 border-green-200',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      number: '04',
      title: 'Testing',
      description: 'Comprehensive testing and quality check',
      color: 'text-yellow-600 border-yellow-200',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      number: '05',
      title: 'Warranty',
      description: '6-month warranty on all repairs',
      color: 'text-indigo-600 border-indigo-200',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    }
  ]

  return (
    <div className="pt-16 sm:pt-20 pb-12 mt-[20px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            <span className="text-gray-900">About </span>
            <span className="text-blue-600">Ashman Repairs</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Your trusted partner for premium device repairs in Ghana. Combining technical expertise with exceptional customer service.
          </p>
        </motion.div>

        {/* Founder Section with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-16 sm:mb-20">
          <motion.div
          
          >
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-6">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Ashman - Founder"
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl object-cover"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-blue-600 p-2 rounded-lg">
                    <Wrench className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="text-center sm:text-left">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Ashman</h2>
                  <p className="text-blue-600 font-semibold text-sm sm:text-base">Founder & Lead Technician</p>
                  <p className="text-gray-600 text-sm sm:text-base">Certified Repair Specialist</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
                With over 2 years of experience in device repairs across Ghana, I've dedicated my career to helping people get their essential devices back in perfect condition. My passion for technology and commitment to quality service drives everything we do.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-yellow-500" />
                  <span className="text-gray-700 text-sm sm:text-base">Certified Technician</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 text-sm sm:text-base">500+ Repairs</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Repair Workshop"
              className="w-full h-48 sm:h-64 rounded-xl sm:rounded-2xl object-cover mb-6 sm:mb-8"
            />
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
              Our <span className="text-blue-600">Mission</span>
            </h3>
            <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
              To provide reliable, affordable, and high-quality device repair services to the people of Ghana, ensuring everyone has access to professional technical support for their essential devices.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className={`p-2 ${value.bgColor} rounded-lg flex-shrink-0`}>
                    <value.icon className={`w-5 h-5 ${value.iconColor}`} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-1">{value.title}</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Process Section with Images */}
        <div className="mb-16 sm:mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
            Our <span className="text-blue-600">Repair Process</span>
          </h3>
          
          <div className="space-y-8 sm:space-y-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8"
              >
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <img 
                    src={step.image}
                    alt={step.title}
                    className="w-full h-48 sm:h-56 rounded-xl sm:rounded-2xl object-cover"
                  />
                </div>
                
                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <div className={`bg-white p-6 rounded-xl sm:rounded-2xl shadow-lg border ${step.color}`}>
                    <div className={`text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 ${step.color.split(' ')[0]}`}>
                      {step.number}
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 text-sm sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white"
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
                Get Your Device Fixed Today
              </h2>
              <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto">
                Contact us for a free diagnostic and quote. We're committed to providing the best repair experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-3">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-1 text-sm sm:text-base">Call Us</h3>
                <p className="text-gray-300 text-sm">+233 53 991 3517</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-3">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-1 text-sm sm:text-base">Email</h3>
                <p className="text-gray-300 text-sm">contact@ashmanrepairs.com</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-3">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-1 text-sm sm:text-base">Service Area</h3>
                <p className="text-gray-300 text-sm">Accra & Nationwide</p>
              </div>
            </div>
            
            <div className="text-center">
              <a
                href="https://wa.me/233539913517"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 sm:px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="text-sm sm:text-base">Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About