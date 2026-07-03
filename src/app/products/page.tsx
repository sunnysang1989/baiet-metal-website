import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { products } from './product-data';

export const metadata: Metadata = {
  title: 'Garden Metal Products Manufacturer | Baiet Metal',
  description: 'Explore Baiet Metal garden metal products: metal planter boxes, raised garden beds, mailboxes, storage sheds, and metal garden beds with OEM/ODM customization.',
  keywords: ['garden metal products manufacturer', 'metal planter boxes wholesale', 'metal garden shed manufacturer', 'metal raised garden beds'],
};

export default function ProductsPage() {
  return (
    <main className="bg-white">
      <section className="bg-gray-950 text-white">
        <div className="container mx-auto px-4 py-20 md:py-28">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">Garden metal products</p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">Factory-Direct Garden Metal Products for Global B2B Buyers</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300 md:text-xl">
            Baiet Metal manufactures metal planter boxes, raised garden beds, mailboxes, storage sheds, and metal garden beds with custom size, color, packaging, and OEM/ODM support.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Link key={product.slug} href={`/products/${product.slug}`} className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-gray-100 transition hover:-translate-y-1 hover:shadow-xl">
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-200">
                <Image
                  src={product.image}
                  alt={`${product.name} by Baiet Metal`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-blue-600">OEM/ODM available</p>
                <h2 className="mb-4 min-h-[64px] text-2xl font-bold leading-tight text-gray-950 group-hover:text-blue-600">{product.name}</h2>
                <p className="mb-6 flex-1 text-sm leading-6 text-gray-600">{product.description}</p>
                <span className="text-sm font-bold text-gray-950">View product details →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-blue-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-5 text-3xl font-bold md:text-5xl">Need Custom Garden Metal Products?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-blue-50">Send your target product, quantity, market, size, and finish requirements. Our team will prepare a factory-direct RFQ response.</p>
          <Link href="/contact" className="inline-flex rounded-xl bg-white px-8 py-4 font-bold text-blue-600 transition hover:bg-gray-100">Get a Quote</Link>
        </div>
      </section>
    </main>
  );
}
