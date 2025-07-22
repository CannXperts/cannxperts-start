import { ShieldCheckIcon, UserGroupIcon, DocumentCheckIcon, BuildingOfficeIcon, ScaleIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline'
import MarketplaceSection from '../components/MarketplaceSection'

export default function HomePage() {
  const services = [
    {
      title: 'License Management',
      description: 'Navigating government regulations can be challenging and complex, but it doesn\'t have to be. Our dedicated License Managers take the burden off your shoulders.',
      icon: DocumentCheckIcon,
      href: '#'
    },
    {
      title: 'Compliance Officers',
      description: 'In the ever-evolving cannabis compliance landscape, staying informed and ahead of the curve is not just beneficial—it\'s essential.',
      icon: ShieldCheckIcon,
      href: '#'
    },
    {
      title: 'Compliance Inspections',
      description: 'Our Inspectors conduct regular audits on licensed facilities to proactively detect any procedures that could potentially lead to fines or suspensions.',
      icon: ClipboardDocumentCheckIcon,
      href: '#'
    },
    {
      title: 'Bank, Insurance, Property Management',
      description: 'Ensure your business meets industry standards with our professional due diligence and compliance inspection services.',
      icon: BuildingOfficeIcon,
      href: '#'
    },
    {
      title: 'Receivership',
      description: 'We deliver expert solutions that protect your interests and ensure compliance with all relevant laws and regulations.',
      icon: ScaleIcon,
      href: '#'
    }
  ]

  const testimonials = [
    {
      text: "Your team went to work on our compliance deficiencies and now the state said our farm is \"perfect\" and they'd like to use it for training new Inspectors! Thank you!!!",
      author: "Wolf Creek Grow"
    },
    {
      text: "If your cannabis business is in need of licensing or compliance help, and not working with CannXperts team, you should be.",
      author: "Red Barn Cannabis"
    },
    {
      text: "It's truly a pleasure receiving paperwork from you guys…it's always perfect!",
      author: "OLCC License Investigator"
    },
    {
      text: "We and our clients have been working with them for many years, and in my opinion, they are the absolute best cannabis licensing and compliance specialists in the business.",
      author: "Green Light Law Group"
    }
  ]

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
                <a href="/" className="text-primary-900 hover:text-compliance-600 px-3 py-2 text-sm font-medium transition-smooth">Home</a>
                <a href="/services" className="text-primary-600 hover:text-compliance-600 px-3 py-2 text-sm font-medium transition-smooth">Services</a>
                <a href="/marketplace" className="text-primary-600 hover:text-compliance-600 px-3 py-2 text-sm font-medium transition-smooth">Marketplace</a>
                <a href="/admin" className="text-primary-600 hover:text-compliance-600 px-3 py-2 text-sm font-medium transition-smooth">Admin</a>
                <a href="/about" className="text-primary-600 hover:text-compliance-600 px-3 py-2 text-sm font-medium transition-smooth">About</a>
                <a href="/contact" className="text-primary-600 hover:text-compliance-600 px-3 py-2 text-sm font-medium transition-smooth">Contact</a>
              </div>
            </div>
            <div className="flex items-center">
              <a href="/contact" className="bg-compliance-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-compliance-700 btn-compliance transition-smooth">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-gradient text-white section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-shadow leading-tight">
              Regulatory Compliance Solutions—
              <br />
              <span className="text-primary-200">For Every Professional</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-primary-100 leading-relaxed max-w-3xl mx-auto">
              CannXperts is one of the most trusted names in the cannabis industry, providing unmatched assistance and advice on regulatory issues, compliance, and licensing support.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="/services" className="bg-white text-primary-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-50 btn-professional transition-smooth text-center">
                Explore Services
              </a>
              <a href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-900 transition-smooth text-center">
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="bg-primary-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <img 
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjMTZhMzRhIiByeD0iMTAiLz4KPHN2ZyB4PSIyMCIgeT0iMjAiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJ3aGl0ZSI+CjxwYXRoIGQ9Im0xMiAxNS02LTZoMTJsLTYgNnoiLz4KPC9zdmc+Cjwvc3ZnPgo="
              alt="CannXperts Logo" 
              className="h-16 w-16 mr-4"
            />
            <div>
              <p className="text-2xl md:text-3xl font-bold text-primary-900 mb-2">Since 2018</p>
              <p className="text-lg text-primary-600">Leading name in cannabis compliance</p>
            </div>
          </div>
          <p className="text-xl text-professional max-w-4xl mx-auto leading-relaxed">
            With an extensive network of stakeholders in the regulatory field and comprehensive knowledge of cannabis laws at both state and federal levels, we are your reliable source of essential regulatory information and support.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
              Simplifying Compliance Through Expert Services
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Services Tailored for Professional
            </p>
            <div className="w-24 h-1 bg-compliance-600 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div key={index} className="card-professional p-8 h-full">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-compliance-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-8 h-8 text-compliance-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-primary-900 mb-4">{service.title}</h3>
                      <p className="text-professional mb-6 leading-relaxed">{service.description}</p>
                      <a href={service.href} className="inline-flex items-center text-compliance-600 font-medium hover:text-compliance-700 transition-smooth">
                        Learn more →
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="text-center">
            <a href="/contact" className="bg-compliance-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-compliance-700 btn-compliance transition-smooth">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Featured News Section */}
      <section className="section-padding bg-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-professional p-12 text-center">
            <h2 className="text-3xl font-bold text-primary-900 mb-6">
              CannXperts Appointed as Receiver for Tumalo Holdings by Oregon Circuit Court
            </h2>
            <p className="text-professional mb-8 max-w-3xl mx-auto">
              On September 10, 2024, CannXperts was appointed as the Receiver for all of Tumalo Industries' assets. For the latest updates and relevant information, please visit our dedicated receivership page.
            </p>
            <a href="#" className="bg-compliance-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-compliance-700 btn-compliance transition-smooth">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="section-padding bg-compliance-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-8">
            Stay Compliant, Stay Profitable
          </h2>
          <p className="text-xl text-professional max-w-4xl mx-auto mb-12 leading-relaxed">
            In this tightly regulated industry, adherence to rules isn't just important—it's your key to sustainability and financial growth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-professional p-8">
              <div className="w-16 h-16 bg-compliance-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheckIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-4">Regulatory Expertise</h3>
              <p className="text-professional">Comprehensive knowledge of cannabis laws and regulations at state and federal levels</p>
            </div>
            <div className="card-professional p-8">
              <div className="w-16 h-16 bg-compliance-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <UserGroupIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-4">Trusted Network</h3>
              <p className="text-professional">Extensive network of stakeholders in the regulatory field and industry connections</p>
            </div>
            <div className="card-professional p-8">
              <div className="w-16 h-16 bg-compliance-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <DocumentCheckIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-4">Proven Results</h3>
              <p className="text-professional">Track record of helping businesses achieve and maintain compliance successfully</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">Client Testimonials</h2>
            <div className="w-24 h-1 bg-compliance-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-professional p-8">
                <div className="mb-6">
                  <div className="flex text-compliance-500 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-lg text-professional italic leading-relaxed mb-4">"{testimonial.text}"</p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-compliance-100 rounded-full flex items-center justify-center mr-4">
                    <UserGroupIcon className="w-6 h-6 text-compliance-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary-900">— {testimonial.author}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketplace Section */}
      <MarketplaceSection />

      {/* Newsletter Section */}
      <section className="section-padding compliance-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Stay Informed</h2>
          <p className="text-xl text-compliance-100 mb-8">Keep up with industry insights and our latest news.</p>
          <div className="bg-white p-8 rounded-xl shadow-professional max-w-2xl mx-auto">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:ring-2 focus:ring-compliance-500 focus:border-transparent"
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:ring-2 focus:ring-compliance-500 focus:border-transparent"
                  required
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:ring-2 focus:ring-compliance-500 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="w-full bg-compliance-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-compliance-700 btn-compliance transition-smooth"
              >
                Submit →
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-3xl font-bold text-white mb-6">CannXperts</h3>
              <p className="text-primary-300 mb-6 leading-relaxed text-lg">
                Your trusted partner for cannabis regulatory compliance. Professional services for licensing, inspections, and regulatory support across all legal cannabis markets.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-3 text-primary-300">
                <li><a href="#" className="hover:text-compliance-400 transition-smooth">License Management</a></li>
                <li><a href="#" className="hover:text-compliance-400 transition-smooth">Compliance Officers</a></li>
                <li><a href="#" className="hover:text-compliance-400 transition-smooth">Inspections</a></li>
                <li><a href="#" className="hover:text-compliance-400 transition-smooth">Receivership</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Company</h4>
              <ul className="space-y-3 text-primary-300">
                <li><a href="#" className="hover:text-compliance-400 transition-smooth">About Us</a></li>
                <li><a href="#" className="hover:text-compliance-400 transition-smooth">Contact</a></li>
                <li><a href="#" className="hover:text-compliance-400 transition-smooth">News</a></li>
                <li><a href="#" className="hover:text-compliance-400 transition-smooth">Careers</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-800 mt-12 pt-8 text-center text-primary-400">
            <p>&copy; 2024 CannXperts. All rights reserved. | Regulatory Compliance Solutions for Cannabis Professionals</p>
          </div>
        </div>
      </footer>
    </div>
  )
}