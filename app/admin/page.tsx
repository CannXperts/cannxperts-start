'use client'

import { useState, useEffect } from 'react'
import { PlusIcon, PencilIcon, TrashIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'

interface MarketplaceListing {
  id: number
  title: string
  description: string
  type: string
  location: string
  sales_price: string | null
  images: string | null
  is_active: boolean
  created_at: string
  updated_at: string
}

export default function AdminPage() {
  const [listings, setListings] = useState<MarketplaceListing[]>([])
  const [loading, setLoading] = useState(true)
  const [editingListing, setEditingListing] = useState<MarketplaceListing | null>(null)
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    type: 'HAVE',
    location: '',
    sales_price: '',
    is_active: true
  })

  // Fetch all listings (including inactive)
  useEffect(() => {
    fetchAllListings()
  }, [])

  const fetchAllListings = async () => {
    try {
      const response = await fetch('/api/admin/listings')
      if (response.ok) {
        const data = await response.json()
        setListings(data)
      }
    } catch (error) {
      console.error('Failed to fetch listings:', error)
    } finally {
      setLoading(false)
    }
  }

  const toggleListingStatus = async (id: number, currentStatus: boolean) => {
    try {
      const response = await fetch('/api/admin/listings', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, is_active: !currentStatus })
      })

      if (response.ok) {
        await fetchAllListings()
      }
    } catch (error) {
      console.error('Failed to toggle listing status:', error)
    }
  }

  const deleteListing = async (id: number) => {
    if (!confirm('Are you sure you want to delete this listing?')) return

    try {
      const response = await fetch('/api/admin/listings', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
      })

      if (response.ok) {
        await fetchAllListings()
      }
    } catch (error) {
      console.error('Failed to delete listing:', error)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const method = editingListing ? 'PUT' : 'POST'
      const body = editingListing 
        ? { ...formData, id: editingListing.id }
        : formData

      const response = await fetch('/api/admin/listings', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })

      if (response.ok) {
        console.log('Listing saved successfully')
        await fetchAllListings()
        resetForm()
      } else {
        console.error('Failed to save listing:', response.status, await response.text())
      }
    } catch (error) {
      console.error('Failed to save listing:', error)
    }
  }

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      type: 'HAVE',
      location: '',
      sales_price: '',
      is_active: true
    })
    setEditingListing(null)
    setShowForm(false)
  }

  const startEdit = (listing: MarketplaceListing) => {
    setFormData({
      title: listing.title,
      description: listing.description,
      type: listing.type,
      location: listing.location,
      sales_price: listing.sales_price || '',
      is_active: listing.is_active
    })
    setEditingListing(listing)
    setShowForm(true)
  }

  const formatPrice = (price: string | null): string => {
    if (!price) return 'Contact for pricing'
    return price.startsWith('$') ? price : `$${price}`
  }

  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-3xl font-bold text-primary-900">CannXperts Admin</h1>
              </div>
              <div className="hidden md:ml-10 md:flex md:space-x-8">
                <a href="/" className="text-primary-600 hover:text-compliance-600 px-3 py-2 text-sm font-medium transition-smooth">Home</a>
                <a href="/marketplace" className="text-primary-600 hover:text-compliance-600 px-3 py-2 text-sm font-medium transition-smooth">Marketplace</a>
                <a href="/admin" className="text-primary-900 hover:text-compliance-600 px-3 py-2 text-sm font-medium transition-smooth">Admin</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Admin Header */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold mb-4">Marketplace Administration</h1>
              <p className="text-xl text-primary-100">
                Manage cannabis business listings across all platforms
              </p>
            </div>
            <button
              onClick={() => setShowForm(true)}
              className="bg-compliance-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-compliance-700 btn-compliance transition-smooth inline-flex items-center gap-2"
            >
              <PlusIcon className="w-5 h-5" />
              Add New Listing
            </button>
          </div>
        </div>
      </section>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <h2 className="text-2xl font-bold text-primary-900 mb-6">
              {editingListing ? 'Edit Listing' : 'Add New Listing'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-primary-700 mb-2">Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-compliance-600 focus:border-compliance-600 transition-smooth"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-primary-700 mb-2">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-compliance-600 focus:border-compliance-600 transition-smooth"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-primary-700 mb-2">Type</label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({...formData, type: e.target.value})}
                    className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-compliance-600 focus:border-compliance-600 transition-smooth"
                  >
                    <option value="HAVE">For Sale</option>
                    <option value="WANT">Seeking</option>
                    <option value="NEED">Investment</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary-700 mb-2">Location</label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-compliance-600 focus:border-compliance-600 transition-smooth"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-primary-700 mb-2">Sales Price (optional)</label>
                <input
                  type="text"
                  value={formData.sales_price}
                  onChange={(e) => setFormData({...formData, sales_price: e.target.value})}
                  className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-compliance-600 focus:border-compliance-600 transition-smooth"
                  placeholder="e.g., $300,000 or $30K OBO"
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="is_active"
                  checked={formData.is_active}
                  onChange={(e) => setFormData({...formData, is_active: e.target.checked})}
                  className="w-5 h-5 text-compliance-600 border border-primary-200 rounded focus:ring-compliance-600"
                />
                <label htmlFor="is_active" className="ml-3 text-sm font-medium text-primary-700">
                  Active (visible on website and app)
                </label>
              </div>

              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-6 py-3 border border-primary-200 text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-smooth"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-compliance-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-compliance-700 btn-compliance transition-smooth"
                >
                  {editingListing ? 'Update Listing' : 'Create Listing'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Listings Table */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-6 py-4 bg-primary-50 border-b border-primary-200">
              <h2 className="text-xl font-semibold text-primary-900">
                All Listings ({listings.length})
              </h2>
            </div>
            
            {loading ? (
              <div className="p-8 text-center text-professional">Loading listings...</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-primary-500 uppercase tracking-wider">
                        Listing Details
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-primary-500 uppercase tracking-wider">
                        Type & Location
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-primary-500 uppercase tracking-wider">
                        Price
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-primary-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-primary-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-primary-200">
                    {listings.map((listing) => (
                      <tr key={listing.id} className={!listing.is_active ? 'bg-primary-25 opacity-75' : ''}>
                        <td className="px-6 py-4">
                          <div>
                            <div className="text-sm font-medium text-primary-900">
                              {listing.title}
                            </div>
                            <div className="text-sm text-professional line-clamp-2">
                              {listing.description}
                            </div>
                            <div className="text-xs text-primary-500 mt-1">
                              Created: {formatDate(listing.created_at)}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div>
                            <div className="text-sm font-medium text-primary-900">
                              {listing.type === 'HAVE' ? 'For Sale' : listing.type === 'WANT' ? 'Seeking' : 'Investment'}
                            </div>
                            <div className="text-sm text-professional">{listing.location}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-primary-900">
                            {formatPrice(listing.sales_price)}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            listing.is_active 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {listing.is_active ? 'Active' : 'Inactive'}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex space-x-2">
                            <button
                              onClick={() => toggleListingStatus(listing.id, listing.is_active)}
                              className={`p-2 rounded-lg transition-smooth ${
                                listing.is_active 
                                  ? 'text-red-600 hover:bg-red-50' 
                                  : 'text-green-600 hover:bg-green-50'
                              }`}
                              title={listing.is_active ? 'Deactivate' : 'Activate'}
                            >
                              {listing.is_active ? <EyeSlashIcon className="w-4 h-4" /> : <EyeIcon className="w-4 h-4" />}
                            </button>
                            <button
                              onClick={() => startEdit(listing)}
                              className="p-2 text-primary-600 hover:bg-primary-50 rounded-lg transition-smooth"
                              title="Edit"
                            >
                              <PencilIcon className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => deleteListing(listing.id)}
                              className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-smooth"
                              title="Delete"
                            >
                              <TrashIcon className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}