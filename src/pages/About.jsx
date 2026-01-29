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
  Target
} from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Quality First',
      description: 'We use only genuine parts and follow industry best practices for all repairs.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Heart,
      title: 'Customer Care',
      description: 'Every customer is treated with respect and receives personalized service.',
      color: 'from-rose-500 to-pink-500'
    },
    {
      icon: Target,
      title: 'Precision',
      description: 'Attention to detail in every repair ensures long-lasting results.',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Clock,
      title: 'Fast Service',
      description: 'Most repairs completed within hours, not days.',
      color: 'from-amber-500 to-orange-500'
    }
  ]

  const processSteps = [
    {
      number: '01',
      title: 'Diagnosis',
      description: 'Free device inspection and problem identification'
    },
    {
      number: '02',
      title: 'Quote',
      description: 'Transparent pricing with no hidden charges'
    },
    {
      number: '03',
      title: 'Repair',
      description: 'Expert repair using genuine parts'
    },
    {
      number: '04',
      title: 'Testing',
      description: 'Comprehensive testing and quality check'
    },
    {
      number: '05',
      title: 'Warranty',
      description: '6-month warranty on all repairs'
    }
  ]

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-neutral-900">About </span>
            <span className="gradient-text">Ashman Repairs</span>
          </h1>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Your trusted partner for premium device repairs in Ghana. Combining technical expertise with exceptional customer service.
          </p>
        </motion.div>

        {/* Founder Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-purple-500 rounded-3xl opacity-20 blur-xl" />
              <div className="relative bg-white rounded-2xl p-10 shadow-2xl">
                <div className="flex items-center space-x-6 mb-8">
                  <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-primary-600 to-purple-600 flex items-center justify-center">
                    <User className="w-14 h-14 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-neutral-900">Ashman</h2>
                    <p className="text-primary-600 font-semibold text-lg">Founder & Lead Technician</p>
                    <p className="text-neutral-600 mt-2">Certified Repair Specialist</p>
                  </div>
                </div>
                <p className="text-neutral-700 text-lg leading-relaxed mb-6">
                  With over 2 years of experience in device repairs across Ghana, I've dedicated my career to helping people get their essential devices back in perfect condition. My passion for technology and commitment to quality service drives everything we do.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Award className="w-5 h-5 text-accent-500" />
                    <span className="text-neutral-700">Certified Technician</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    <span className="text-neutral-700">500+ Repairs</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-neutral-900 mb-8">
              Our <span className="gradient-text">Mission</span>
            </h3>
            <p className="text-neutral-600 text-lg mb-8 leading-relaxed">
              To provide reliable, affordable, and high-quality device repair services to the people of Ghana, ensuring everyone has access to professional technical support for their essential devices.
            </p>
            <div className="space-y-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center flex-shrink-0`}>
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 mb-1">{value.title}</h4>
                    <p className="text-neutral-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Process Section */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-center text-neutral-900 mb-12">
            Our <span className="gradient-text">Repair Process</span>
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary-500 to-purple-500 hidden md:block" />
            
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-neutral-200">
                      <div className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent mb-4">
                        {step.number}
                      </div>
                      <h4 className="text-xl font-bold text-neutral-900 mb-3">
                        {step.title}
                      </h4>
                      <p className="text-neutral-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-600 to-purple-600 flex items-center justify-center text-white font-bold my-4 md:my-0 relative z-10">
                    {index + 1}
                  </div>
                  <div className="w-full md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-neutral-900 to-neutral-800 rounded-3xl p-12 text-white"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              Get Your Device Fixed Today
            </h2>
            <p className="text-xl text-neutral-300 mb-10 max-w-2xl mx-auto">
              Contact us for a free diagnostic and quote. We're committed to providing the best repair experience.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-white/10 rounded-full mb-4">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-neutral-300">+233539913517</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-white/10 rounded-full mb-4">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-neutral-300">contact@ashmanrepairs.com</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-white/10 rounded-full mb-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">Service Area</h3>
                <p className="text-neutral-300">Accra & Nationwide</p>
              </div>
            </div>
            
            <a
              href="https://wa.me/233539913517"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center space-x-3 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700"
            >
              <MessageCircle className="w-6 h-6" />
              <span className="text-lg">Chat on WhatsApp</span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About