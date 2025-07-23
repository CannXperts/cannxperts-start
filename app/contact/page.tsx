'use client'

import { useState } from 'react'
import { PhoneIcon, EnvelopeIcon, ClockIcon, MapPinIcon, ShieldCheckIcon, UserGroupIcon } from '@heroicons/react/24/outline'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const services = [
    {
      title: 'License Management',
      description: 'Professional license management and regulatory navigation support',
      icon: ShieldCheckIcon
    },
    {
      title: 'Compliance Inspections',
      description: 'Comprehensive facility audits and compliance assessments',
      icon: UserGroupIcon
    },
    {
      title: 'Receivership Services',
      description: 'Court-appointed receivership and asset management',
      icon: MapPinIcon
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">Contact CannXperts</h1>
          <p className="text-xl text-professional max-w-3xl mx-auto leading-relaxed">
            Ready to ensure your cannabis business stays compliant? Our experienced compliance team is here to provide expert regulatory guidance and support.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-primary-900 mb-8">Get Expert Compliance Support</h2>
            
            <div className="space-y-8 mb-12">
              {/* Phone */}
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-compliance-100 rounded-xl flex items-center justify-center">
                  <PhoneIcon className="w-7 h-7 text-compliance-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-900 mb-2">Phone Consultation</h3>
                  <p className="text-lg text-professional mb-2">(555) 123-4567</p>
                  <p className="text-primary-600">Available Mon-Fri 9AM-6PM PST</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-compliance-100 rounded-xl flex items-center justify-center">
                  <EnvelopeIcon className="w-7 h-7 text-compliance-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-900 mb-2">Email Support</h3>
                  <p className="text-lg text-professional mb-2">info@cannxperts.ai</p>
                  <p className="text-primary-600">Response within 24 hours</p>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-compliance-100 rounded-xl flex items-center justify-center">
                  <ClockIcon className="w-7 h-7 text-compliance-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-900 mb-2">Business Hours</h3>
                  <div className="text-professional space-y-1">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                    <p>Saturday: 10:00 AM - 2:00 PM PST</p>
                    <p>Sunday: Emergency consultation only</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Overview */}
            <div className="card-professional p-8">
              <h3 className="text-2xl font-bold text-primary-900 mb-6">Our Compliance Services</h3>
              <div className="space-y-6">
                {services.map((service, index) => {
                  const IconComponent = service.icon
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-compliance-100 rounded-lg flex items-center justify-center mt-1">
                        <IconComponent className="w-5 h-5 text-compliance-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary-900 mb-1">{service.title}</h4>
                        <p className="text-professional text-sm">{service.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className="mt-8">
                <div className="border-t border-primary-200 pt-6">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-2xl font-bold text-compliance-600">150+</div>
                      <div className="text-sm text-professional">Clients Served</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-compliance-600">Since 2018</div>
                      <div className="text-sm text-professional">Industry Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-professional p-8">
            <h3 className="text-2xl font-bold text-primary-900 mb-6">Request Compliance Consultation</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-primary-700 mb-2">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:ring-2 focus:ring-compliance-500 focus:border-transparent transition-smooth"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary-700 mb-2">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:ring-2 focus:ring-compliance-500 focus:border-transparent transition-smooth"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-primary-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:ring-2 focus:ring-compliance-500 focus:border-transparent transition-smooth"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-primary-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:ring-2 focus:ring-compliance-500 focus:border-transparent transition-smooth"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary-700 mb-2">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:ring-2 focus:ring-compliance-500 focus:border-transparent transition-smooth"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-primary-700 mb-2">Service Needed *</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:ring-2 focus:ring-compliance-500 focus:border-transparent transition-smooth"
                  required
                >
                  <option value="">Select a service...</option>
                  <option value="license-management">License Management</option>
                  <option value="compliance-officer">Compliance Officer Services</option>
                  <option value="compliance-inspection">Compliance Inspection</option>
                  <option value="bank-insurance">Bank/Insurance Inspection</option>
                  <option value="receivership">Receivership Services</option>
                  <option value="consultation">General Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-primary-700 mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  placeholder="Please describe your compliance needs, current situation, timeline, and any specific regulatory challenges you're facing..."
                  className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:ring-2 focus:ring-compliance-500 focus:border-transparent transition-smooth"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-compliance-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-compliance-700 btn-compliance transition-smooth"
              >
                Request Consultation
              </button>
            </form>

            <div className="mt-6 p-4 bg-compliance-50 rounded-lg">
              <p className="text-sm text-compliance-800">
                <strong>Confidentiality Guarantee:</strong> All compliance consultations are confidential. 
                We maintain strict confidentiality standards and never share sensitive business information.
              </p>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20">
          <div className="card-professional p-12 text-center">
            <h2 className="text-3xl font-bold text-primary-900 text-center mb-8">Why Cannabis Businesses Trust CannXperts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="w-16 h-16 bg-compliance-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheckIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-2">Proven Track Record</h3>
                <p className="text-professional">Since 2018, we've helped hundreds of cannabis businesses achieve and maintain compliance</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-compliance-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserGroupIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-2">Industry Recognition</h3>
                <p className="text-professional">Trusted by regulators, law firms, and cannabis businesses across all legal markets</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-compliance-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPinIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-2">Comprehensive Coverage</h3>
                <p className="text-professional">We serve all legal cannabis states with deep knowledge of local regulations</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick FAQ */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card-professional p-6">
            <h4 className="font-semibold text-primary-900 mb-2">How quickly can you start helping us?</h4>
            <p className="text-professional text-sm">We typically begin compliance assessments within 48 hours of initial consultation and can provide emergency support when needed.</p>
          </div>
          <div className="card-professional p-6">
            <h4 className="font-semibold text-primary-900 mb-2">Do you work with new license applicants?</h4>
            <p className="text-professional text-sm">Yes, we provide comprehensive support for new license applications, from initial paperwork to final approval and ongoing compliance.</p>
          </div>
          <div className="card-professional p-6">
            <h4 className="font-semibold text-primary-900 mb-2">What states do you serve?</h4>
            <p className="text-professional text-sm">We provide compliance services in all legal cannabis states, with specialized knowledge of each state's unique regulatory requirements.</p>
          </div>
          <div className="card-professional p-6">
            <h4 className="font-semibold text-primary-900 mb-2">Are consultations really confidential?</h4>
            <p className="text-professional text-sm">Absolutely. All business information and compliance discussions are protected under strict confidentiality agreements.</p>
          </div>
        </div>
      </div>
    </div>
  )
}