import { PhoneIcon, EnvelopeIcon, MapPinIcon, CurrencyDollarIcon, BuildingOfficeIcon, TruckIcon, BeakerIcon } from '@heroicons/react/24/outline'

export default function HomePage() {
  const businessTypes = [
    { name: 'Dispensaries', icon: BuildingOfficeIcon, count: '25+' },
    { name: 'Cultivation', icon: BeakerIcon, count: '18+' },
    { name: 'Processing', icon: TruckIcon, count: '12+' },
    { name: 'Delivery', icon: TruckIcon, count: '8+' }
  ]

  const featuredListings = [
    {
      title: 'Premium Dispensary - Downtown Denver',
      location: 'Denver, CO',
      price: '$2.5M',
      revenue: '$850K/year',
      type: 'Dispensary'
    },
    {
      title: 'Cultivation Facility - Oregon',
      location: 'Portland, OR', 
      price: '$1.8M',
      revenue: '$1.2M/year',
      type: 'Cultivation'
    },
    {
      title: 'Processing Operation - California',
      location: 'Los Angeles, CA',
      price: '$950K',
      revenue: '$680K/year',
      type: 'Processing'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-cannabis-600">CannXperts</h1>
              </div>
              <div className="hidden md:ml-6 md:flex md:space-x-8">
                <a href="/" className="text-gray-900 hover:text-cannabis-600 px-3 py-2 text-sm font-medium">Home</a>
                <a href="/businesses" className="text-gray-700 hover:text-cannabis-600 px-3 py-2 text-sm font-medium">Businesses for Sale</a>
                <a href="/sell" className="text-gray-700 hover:text-cannabis-600 px-3 py-2 text-sm font-medium">Sell Business</a>
                <a href="/contact" className="text-gray-700 hover:text-cannabis-600 px-3 py-2 text-sm font-medium">Contact</a>
              </div>
            </div>
            <div className="flex items-center">
              <button className="bg-cannabis-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-cannabis-700 transition-colors">
                List Your Business
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow">
              Cannabis Business Marketplace
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-cannabis-100 max-w-3xl mx-auto">
              Professional cannabis business brokerage services. Buy and sell dispensaries, cultivation facilities, and processing operations with expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/businesses" className="bg-white text-cannabis-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 btn-cannabis transition-all text-center">
                View Businesses for Sale
              </a>
              <a href="/sell" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-cannabis-600 transition-all text-center">
                Sell Your Business
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Business Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Business Categories</h2>
            <p className="text-xl text-gray-600">Explore cannabis businesses across all major categories</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {businessTypes.map((type, index) => {
              const IconComponent = type.icon
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-cannabis hover:shadow-lg transition-all text-center">
                  <IconComponent className="w-12 h-12 text-cannabis-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{type.name}</h3>
                  <p className="text-cannabis-600 font-bold">{type.count} Available</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section id="businesses" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Listings</h2>
            <p className="text-xl text-gray-600">Premium cannabis business opportunities</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredListings.map((listing, index) => (
              <div key={index} className="bg-white rounded-xl shadow-cannabis hover:shadow-lg transition-all overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <span className="bg-cannabis-100 text-cannabis-800 px-3 py-1 rounded-full text-sm font-medium">
                      {listing.type}
                    </span>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-cannabis-600">{listing.price}</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{listing.title}</h3>
                  <div className="flex items-center gap-2 text-gray-600 mb-3">
                    <MapPinIcon className="w-4 h-4" />
                    <span className="text-sm">{listing.location}</span>
                  </div>
                  <div className="flex items-center gap-1 text-green-600 mb-4">
                    <CurrencyDollarIcon className="w-4 h-4" />
                    <span className="text-sm font-medium">Revenue: {listing.revenue}</span>
                  </div>
                  <button className="w-full bg-cannabis-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-cannabis-700 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="bg-cannabis-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cannabis-700 transition-colors">
              View All Listings
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive cannabis business brokerage solutions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-cannabis">
              <div className="w-12 h-12 bg-cannabis-100 rounded-lg flex items-center justify-center mb-6">
                <BuildingOfficeIcon className="w-6 h-6 text-cannabis-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Business Brokerage</h3>
              <p className="text-gray-600 mb-4">Expert guidance for buying and selling cannabis businesses with comprehensive market knowledge and industry expertise.</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Business valuation</li>
                <li>• Due diligence support</li>
                <li>• Transaction management</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-cannabis">
              <div className="w-12 h-12 bg-cannabis-100 rounded-lg flex items-center justify-center mb-6">
                <BeakerIcon className="w-6 h-6 text-cannabis-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Market Analysis</h3>
              <p className="text-gray-600 mb-4">Comprehensive market research and competitive analysis to ensure optimal pricing and positioning strategies.</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Market research</li>
                <li>• Competitive analysis</li>
                <li>• Financial modeling</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-cannabis">
              <div className="w-12 h-12 bg-cannabis-100 rounded-lg flex items-center justify-center mb-6">
                <TruckIcon className="w-6 h-6 text-cannabis-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Compliance Support</h3>
              <p className="text-gray-600 mb-4">Navigate complex cannabis regulations with our compliance expertise and regulatory guidance throughout transactions.</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Regulatory compliance</li>
                <li>• License transfers</li>
                <li>• Legal documentation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Get Expert Guidance</h2>
              <p className="text-xl text-gray-600 mb-8">
                Ready to buy or sell a cannabis business? Our experienced team provides personalized guidance throughout your transaction.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <PhoneIcon className="w-6 h-6 text-cannabis-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Phone</div>
                    <div className="text-gray-600">(555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <EnvelopeIcon className="w-6 h-6 text-cannabis-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-gray-600">info@cannxperts.ai</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-cannabis">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Request Consultation</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cannabis-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cannabis-500 focus:border-transparent"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cannabis-500 focus:border-transparent"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cannabis-500 focus:border-transparent"
                />
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cannabis-500 focus:border-transparent">
                  <option value="">I'm interested in...</option>
                  <option value="buying">Buying a Business</option>
                  <option value="selling">Selling a Business</option>
                  <option value="consultation">General Consultation</option>
                </select>
                <textarea
                  rows={4}
                  placeholder="Tell us about your needs..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cannabis-500 focus:border-transparent"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-cannabis-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-cannabis-700 transition-colors"
                >
                  Request Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-cannabis-400 mb-4">CannXperts</h3>
              <p className="text-gray-300 mb-4">
                Your trusted partner for cannabis business transactions. Professional brokerage services for dispensaries, cultivation facilities, and processing operations.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/businesses" className="hover:text-cannabis-400">Businesses for Sale</a></li>
                <li><a href="/sell" className="hover:text-cannabis-400">Sell Your Business</a></li>
                <li><a href="/contact" className="hover:text-cannabis-400">Contact Us</a></li>
                <li><a href="#" className="hover:text-cannabis-400">Resources</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-300">
                <li>(555) 123-4567</li>
                <li>info@cannxperts.ai</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CannXperts. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}