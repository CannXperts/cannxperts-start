import MarketplaceSection from '../../components/MarketplaceSection'

export default function MarketplacePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-3xl font-bold text-primary-900">CannXperts</h1>
              </div>
              <div className="hidden md:ml-10 md:flex md:space-x-8">
                <a href="/" className="text-primary-600 hover:text-compliance-600 px-3 py-2 text-sm font-medium transition-smooth">Home</a>
                <a href="/services" className="text-primary-600 hover:text-compliance-600 px-3 py-2 text-sm font-medium transition-smooth">Services</a>
                <a href="/marketplace" className="text-primary-900 hover:text-compliance-600 px-3 py-2 text-sm font-medium transition-smooth">Marketplace</a>
                <a href="/admin" className="text-primary-600 hover:text-compliance-600 px-3 py-2 text-sm font-medium transition-smooth">Admin</a>
                <a href="/about" className="text-primary-600 hover:text-compliance-600 px-3 py-2 text-sm font-medium transition-smooth">About</a>
                <a href="/contact" className="text-primary-600 hover:text-compliance-600 px-3 py-2 text-sm font-medium transition-smooth">Contact</a>
              </div>
            </div>
            <div className="flex items-center">
              <a href="/contact" className="bg-compliance-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-compliance-700 btn-compliance transition-smooth">
                Get Started →
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Cannabis Business Marketplace
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-8">
            Discover exclusive opportunities for cannabis business acquisitions, investments, and partnerships. Connect with verified sellers and buyers in the regulated cannabis industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#listings" className="bg-compliance-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-compliance-700 btn-compliance transition-smooth">
              Browse Listings
            </a>
            <a href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-900 transition-smooth">
              List Your Business
            </a>
          </div>
        </div>
      </section>

      {/* Marketplace Listings */}
      <div id="listings">
        <MarketplaceSection />
      </div>
      
      {/* Contact CTA */}
      <section className="section-padding compliance-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Buy or Sell?</h2>
          <p className="text-xl text-compliance-100 mb-8">
            Contact our team of cannabis business experts to discuss your specific needs and get personalized assistance.
          </p>
          <a href="/contact" className="bg-white text-compliance-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-compliance-50 transition-smooth">
            Contact Our Experts →
          </a>
        </div>
      </section>
    </div>
  )
}