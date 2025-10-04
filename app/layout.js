import './globals.css'

export const metadata = {
  title: 'Sports Website',
  description: 'A modern sports website built with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-poppins">
        {children}
      </body>
    </html>
  )
}