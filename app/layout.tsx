import './globals.css'

export const metadata = {
  title: 'CannXperts - Cannabis Regulatory Compliance Solutions',
  description: 'Professional cannabis compliance services including license management, regulatory inspections, and receivership. Trusted by industry professionals since 2018.',
  keywords: 'cannabis compliance, cannabis licensing, regulatory compliance, cannabis inspections, cannabis license management, cannabis receivership',
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