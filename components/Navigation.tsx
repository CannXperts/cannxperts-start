'use client'

import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/" className="text-2xl font-bold text-cannabis-600">CannXperts</a>
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <a href="/" className="text-gray-900 hover:text-cannabis-600 px-3 py-2 text-sm font-medium transition-colors">Home</a>
              <a href="/businesses" className="text-gray-700 hover:text-cannabis-600 px-3 py-2 text-sm font-medium transition-colors">Businesses for Sale</a>
              <a href="/sell" className="text-gray-700 hover:text-cannabis-600 px-3 py-2 text-sm font-medium transition-colors">Sell Business</a>
              <a href="/contact" className="text-gray-700 hover:text-cannabis-600 px-3 py-2 text-sm font-medium transition-colors">Contact</a>
            </div>
          </div>
          <div className="flex items-center">
            <a href="/sell" className="hidden md:block bg-cannabis-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-cannabis-700 transition-colors">
              List Your Business
            </a>
            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden ml-4 p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-cannabis-500"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
              <a href="/" className="text-gray-900 hover:text-cannabis-600 block px-3 py-2 text-base font-medium">Home</a>
              <a href="/businesses" className="text-gray-700 hover:text-cannabis-600 block px-3 py-2 text-base font-medium">Businesses for Sale</a>
              <a href="/sell" className="text-gray-700 hover:text-cannabis-600 block px-3 py-2 text-base font-medium">Sell Business</a>
              <a href="/contact" className="text-gray-700 hover:text-cannabis-600 block px-3 py-2 text-base font-medium">Contact</a>
              <div className="pt-4">
                <a href="/sell" className="bg-cannabis-600 text-white block px-4 py-2 rounded-lg font-medium text-center hover:bg-cannabis-700 transition-colors">
                  List Your Business
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}