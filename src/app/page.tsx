import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const solutions = [
    {
      title: 'Contractor Solutions',
      description: 'Precision engineering, CAD/3D support, and certified quality for large projects.',
      href: '/solutions/contractors-architects',
      image: '/images/hero-garden-bed.avif',
    },
    {
      title: 'Wholesale & Distribution',
      description: 'High-capacity manufacturing with competitive tiered pricing for global partners.',
      href: '/solutions/wholesalers-distributors',
      image: '/images/hero-storage-shed.avif',
    },
    {
      title: 'Retail Partnerships',
      description: 'Market-ready designs, custom powder coating, and premium retail packaging.',
      href: '/solutions/oem-odm-customization',
      image: '/images/hero-privacy-screen.avif',
    },
    {
      title: 'E-commerce & Amazon',
      description: 'FBA-friendly shipping, IP protection, and drop-test certified packaging.',
      href: '/solutions/e-commerce-amazon-sellers',
      image: '/images/hero-garden-bed.avif',
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gray-900 text-white overflow-hidden">
        <Image
          src="/images/hero-garden-bed.avif"
          alt="Modern corten steel raised garden bed and metal garden edging by Baiet Metal"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
        
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Premium Garden Metal <br /> Products Manufacturer
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-300 max-w-3xl mx-auto">
            Factory-Direct Solutions for Contractors, Wholesalers, and Global Retailers. 
            US$100M+ Annual Output.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition">
              Get a Factory Quote
            </Link>
            <Link href="#solutions" className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-semibold transition">
              View Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Factory Strength Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="relative h-[400px] w-full overflow-hidden rounded-2xl bg-gray-200 shadow-lg">
                <Image
                  src="/images/factory-panorama.avif"
                  alt="Baiet Metal factory panorama from Alibaba verified supplier profile"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4 rounded-full bg-black/60 px-4 py-2 text-xs font-semibold text-white backdrop-blur-sm">
                  Verified factory panorama
                </div>
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">10,150m² Precision Manufacturing Facility</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                As a TÜV Rheinland-certified gold supplier, Baiet Metal delivers world-class industrial garden solutions. 
                Our US$100M+ annual output ensures we can handle your largest projects with ease.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm">✓</span>
                  <span className="font-medium">Professional 51-100 People Team</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm">✓</span>
                  <span className="font-medium">CNC Precision Processing</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm">✓</span>
                  <span className="font-medium">TÜV & CE Certified Quality Control</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section id="solutions" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Tailored Solutions for Your Business</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Whether you are an architect planning a new landscape or an Amazon seller looking for your next bestseller, we have the manufacturing expertise to support you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((item, idx) => (
              <Link key={idx} href={item.href} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={`${item.title} for Baiet Metal garden metal products`}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Scale Your Garden Business?</h2>
          <p className="text-xl mb-10 opacity-90">Get a factory-direct quote and design consultation today.</p>
          <Link href="/contact" className="inline-block bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition">
            Contact Us Now
          </Link>
        </div>
      </section>
    </main>
  );
}
