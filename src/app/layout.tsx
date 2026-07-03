import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Baiet Metal | Premium Garden Metal Solutions",
    template: "%s | Baiet Metal",
  },
  description: "Global manufacturer of high-quality garden metal products. Expert OEM/ODM solutions for bin covers, post boxes, and garden edging.",
  keywords: ["Garden Metal Products", "Bin Storage", "Landscape Edging", "Manufacturer", "China Supplier"],
  alternates: {
    languages: {
      'es-ES': '/es',
      'de-DE': '/de',
      'fr-FR': '/fr',
      'it-IT': '/it',
      'id-ID': '/id',
      'vi-VN': '/vi',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
          <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-gray-900 tracking-tight">
              BAIET <span className="text-blue-600">METAL</span>
            </Link>
            <div className="hidden lg:flex items-center gap-6">
              <Link href="/products" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition">Products</Link>
              <Link href="/solutions/oem-odm-customization" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition">OEM/ODM</Link>
              <Link href="/solutions/contractors-architects" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition">Contractors</Link>
              <Link href="/solutions/wholesalers-distributors" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition">Wholesale</Link>
              <Link href="/solutions/e-commerce-amazon-sellers" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition">E-commerce</Link>
              <div className="w-px h-4 bg-gray-200"></div>
              <div className="flex items-center gap-3">
                {['EN', 'ES', 'DE', 'FR', 'IT', 'ID', 'VI'].map((lang) => (
                  <button key={lang} className="text-[10px] font-bold text-gray-400 hover:text-blue-600 transition">
                    {lang}
                  </button>
                ))}
              </div>
            </div>
            <Link href="/contact" className="bg-gray-900 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-800 transition">
              Get a Quote
            </Link>
          </nav>
        </header>
        <div className="flex-grow pt-20">
          {children}
        </div>
        <footer className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div className="col-span-1 md:col-span-2">
                <div className="text-2xl font-bold mb-6">BAIET METAL</div>
                <p className="text-gray-400 max-w-sm">
                  Shandong Liaohe New Materials Co., Ltd. - A leader in garden metal fabrication, 
                  committed to delivering excellence for architects and retailers worldwide.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-6">Solutions</h4>
                <ul className="space-y-4 text-gray-400">
                  <li><Link href="/solutions/contractors-architects" className="hover:text-white transition">Architectural Projects</Link></li>
                  <li><Link href="/solutions/wholesalers-distributors" className="hover:text-white transition">Volume Supply</Link></li>
                  <li><Link href="/solutions/e-commerce-amazon-sellers" className="hover:text-white transition">Retail Fulfillment</Link></li>
                  <li><Link href="/solutions/oem-odm-customization" className="hover:text-white transition">Custom Fabrication</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-6">Products</h4>
                <ul className="space-y-4 text-gray-400">
                  <li><Link href="/products" className="hover:text-white transition">All Products</Link></li>
                  <li><Link href="/products/privacy-screens" className="hover:text-white transition">Privacy Screens</Link></li>
                  <li><Link href="/products/raised-garden-beds" className="hover:text-white transition">Raised Garden Beds</Link></li>
                  <li><Link href="/products/bin-covers" className="hover:text-white transition">Bin Covers</Link></li>
                  <li><Link href="/products/garden-edging" className="hover:text-white transition">Garden Edging</Link></li>
                  <li><Link href="/products/oem-odm" className="hover:text-white transition">OEM/ODM</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-6">Contact</h4>
                <ul className="space-y-4 text-gray-400">
                  <li>Liaocheng, Shandong, China</li>
                  <li>Email: <a href="mailto:sunny@liaohemetal.com" className="hover:text-white transition">sunny@liaohemetal.com</a></li>
                  <li>WhatsApp: <a href="https://wa.me/8613561210720" className="hover:text-white transition">+86 135 6121 0720</a></li>
                </ul>
              </div>
            </div>
            {/* WhatsApp Floating Button */}
            <a 
              href="https://wa.me/8613561210720?text=Hi%20Sunny,%20I'm%20interested%20in%20your%20garden%20metal%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
            >
              <span className="absolute right-full mr-4 bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg border border-gray-100">
                Chat with Sunny
              </span>
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.353-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.877 1.215 3.076.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.87 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
            <div className="mt-16 pt-8 border-t border-gray-800 text-gray-500 text-sm text-center">
              © {new Date().getFullYear()} Shandong Liaohe New Materials Co., Ltd. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
