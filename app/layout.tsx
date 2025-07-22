import './globals.css'

export const metadata = {
  title: 'CannXperts - Cannabis Business Marketplace',
  description: 'Professional cannabis business brokerage and marketplace. Buy and sell cannabis businesses with expert guidance.',
  keywords: 'cannabis business, dispensary for sale, cannabis brokerage, marijuana business marketplace',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">{children}</body>
    </html>
  )
}