'use client'

import { useState } from 'react'
import { CheckCircleIcon, DocumentTextIcon, CurrencyDollarIcon, UserGroupIcon, ClockIcon } from '@heroicons/react/24/outline'

export default function SellPage() {
  const [formData, setFormData] = useState({
    businessName: '',
    businessType: '',
    location: '',
    askingPrice: '',
    revenue: '',
    yearsOperating: '',
    contactName: '',
    email: '',
    phone: '',
    description: ''
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

  const processSteps = [
    {
      title: 'Initial Consultation',
      description: 'Free consultation to understand your business and goals',
      icon: UserGroupIcon
    },
    {
      title: 'Business Valuation',
      description: 'Professional valuation based on market analysis',
      icon: CurrencyDollarIcon
    },
    {
      title: 'Marketing & Listing',
      description: 'Create compelling listing and market to qualified buyers',
      icon: DocumentTextIcon
    },
    {
      title: 'Transaction Support',
      description: 'Guide you through negotiations and closing process',
      icon: CheckCircleIcon
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-cannabis-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sell Your Cannabis Business</h1>
          <p className="text-xl text-cannabis-100 max-w-3xl mx-auto mb-8">
            Get maximum value for your cannabis business with our expert brokerage services. 
            We handle everything from valuation to closing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-cannabis-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Free Business Valuation
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cannabis-600 transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Proven Process</h2>
            <p className="text-xl text-gray-600">We guide you through every step of selling your business</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-cannabis-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-cannabis-600" />
                  </div>
                  <div className="text-sm font-semibold text-cannabis-600 mb-2">STEP {index + 1}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose CannXperts?</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircleIcon className="w-6 h-6 text-cannabis-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Industry Expertise</h3>
                    <p className="text-gray-600">Deep understanding of cannabis regulations and market dynamics</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircleIcon className="w-6 h-6 text-cannabis-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Maximum Value</h3>
                    <p className="text-gray-600">Professional valuations and strategic marketing to optimize sale price</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircleIcon className="w-6 h-6 text-cannabis-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Qualified Buyers</h3>
                    <p className="text-gray-600">Extensive network of pre-qualified cannabis industry buyers</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircleIcon className="w-6 h-6 text-cannabis-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Full Support</h3>
                    <p className="text-gray-600">End-to-end transaction support from listing to closing</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Success Stats</h3>
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-cannabis-600">95%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cannabis-600">45</div>
                  <div className="text-sm text-gray-600">Days Avg Sale</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cannabis-600">$2.1M</div>
                  <div className="text-sm text-gray-600">Avg Sale Price</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cannabis-600">150+</div>
                  <div className="text-sm text-gray-600">Businesses Sold</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Your Free Business Valuation</h2>
            <p className="text-xl text-gray-600">Tell us about your business and we'll provide a confidential valuation</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Business Name</label>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cannabis-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Business Type</label>
                  <select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cannabis-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select Business Type</option>
                    <option value="dispensary">Dispensary</option>
                    <option value="cultivation">Cultivation</option>
                    <option value="processing">Processing</option>
                    <option value="delivery">Delivery</option>
                    <option value="multi-license">Multi-License</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="City, State"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cannabis-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Years Operating</label>
                  <input
                    type="number"
                    name="yearsOperating"
                    value={formData.yearsOperating}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cannabis-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Annual Revenue</label>
                  <input
                    type="text"
                    name="revenue"
                    value={formData.revenue}
                    onChange={handleInputChange}
                    placeholder="$500,000"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cannabis-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Asking Price (Optional)</label>
                  <input
                    type="text"
                    name="askingPrice"
                    value={formData.askingPrice}
                    onChange={handleInputChange}
                    placeholder="$1,500,000"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cannabis-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Business Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Tell us about your business, what makes it unique, key assets, etc."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cannabis-500 focus:border-transparent"
                  required
                ></textarea>
              </div>

              <hr className="my-8" />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Contact Name</label>
                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cannabis-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cannabis-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-cannabis-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cannabis-700 transition-colors"
                >
                  Get Free Valuation
                </button>
                <p className="text-sm text-gray-500 mt-2">
                  All information is kept strictly confidential
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How long does it take to sell a cannabis business?</h3>
              <p className="text-gray-600">On average, our cannabis business sales complete in 45-90 days, depending on the complexity and buyer qualification process.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What information do I need to provide?</h3>
              <p className="text-gray-600">We'll need financial records, licenses, operational details, and asset information to properly value and market your business.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How do you determine the value of my business?</h3>
              <p className="text-gray-600">We use multiple valuation methods including revenue multiples, asset values, and market comparables specific to the cannabis industry.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What are your fees?</h3>
              <p className="text-gray-600">Our success fee structure is competitive and only paid upon successful closing. Contact us for detailed fee information.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}