'use client'

import { useState } from 'react'
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interest: '',
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
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact CannXperts</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to buy or sell a cannabis business? Our experienced team is here to provide expert guidance throughout your transaction.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h2>
            
            <div className="space-y-8">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cannabis-100 rounded-lg flex items-center justify-center">
                  <PhoneIcon className="w-6 h-6 text-cannabis-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-600 mb-2">(555) 123-4567</p>
                  <p className="text-sm text-gray-500">Mon-Fri 9AM-6PM PST</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cannabis-100 rounded-lg flex items-center justify-center">
                  <EnvelopeIcon className="w-6 h-6 text-cannabis-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600 mb-2">info@cannxperts.ai</p>
                  <p className="text-sm text-gray-500">We respond within 24 hours</p>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cannabis-100 rounded-lg flex items-center justify-center">
                  <ClockIcon className="w-6 h-6 text-cannabis-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                  <div className="text-gray-600 space-y-1">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                    <p>Saturday: 10:00 AM - 2:00 PM PST</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="mt-12 bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">How We Can Help</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cannabis-600 rounded-full"></div>
                  <span className="text-gray-700">Cannabis business brokerage</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cannabis-600 rounded-full"></div>
                  <span className="text-gray-700">Business valuation services</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cannabis-600 rounded-full"></div>
                  <span className="text-gray-700">Due diligence support</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cannabis-600 rounded-full"></div>
                  <span className="text-gray-700">Market analysis and research</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cannabis-600 rounded-full"></div>
                  <span className="text-gray-700">Compliance and regulatory guidance</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cannabis-600 rounded-full"></div>
                  <span className="text-gray-700">Transaction management</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cannabis-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cannabis-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cannabis-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cannabis-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">I'm Interested In</label>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cannabis-500 focus:border-transparent"
                  required
                >
                  <option value="">Please select...</option>
                  <option value="buying">Buying a Cannabis Business</option>
                  <option value="selling">Selling My Cannabis Business</option>
                  <option value="valuation">Business Valuation</option>
                  <option value="consultation">General Consultation</option>
                  <option value="market-analysis">Market Analysis</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  placeholder="Tell us about your needs, timeline, and any specific questions you have..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cannabis-500 focus:border-transparent"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-cannabis-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-cannabis-700 transition-colors"
              >
                Send Message
              </button>
            </form>

            <div className="mt-6 p-4 bg-cannabis-50 rounded-lg">
              <p className="text-sm text-cannabis-800">
                <strong>Privacy Guarantee:</strong> All information is kept strictly confidential. 
                We never share your details with third parties without your explicit consent.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">Quick Answers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">How quickly do you respond?</h3>
              <p className="text-gray-600 text-sm">We respond to all inquiries within 24 hours, typically much sooner during business hours.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Do you offer free consultations?</h3>
              <p className="text-gray-600 text-sm">Yes, we provide free initial consultations to understand your needs and explain our services.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">What states do you serve?</h3>
              <p className="text-gray-600 text-sm">We serve all legal cannabis states with specialized knowledge of local regulations and markets.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Is my information confidential?</h3>
              <p className="text-gray-600 text-sm">Absolutely. All business information and personal details are kept strictly confidential under NDAs.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}