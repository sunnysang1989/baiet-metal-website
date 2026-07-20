import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProduct, getProducts } from '../product-data';

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({ slug: product.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) {
    return {};
  }

  return {
    title: `${product.name} | OEM/ODM Garden Metal Products`,
    description: product.description,
    keywords: product.keywords,
  };
}

const baseUrl = 'https://www.baietmetal.com';

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) {
    notFound();
  }

  const productUrl = `${baseUrl}/products/${product.slug}`;
  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: [`${baseUrl}${product.image}`],
    brand: {
      '@type': 'Brand',
      name: 'Baiet Metal',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Baiet Metal',
      url: baseUrl,
      additionalProperty: [
        {
          '@type': 'PropertyValue',
          name: 'Annual Output',
          value: 'US$100M+',
        },
        {
          '@type': 'PropertyValue',
          name: 'Manufacturing Facility Area',
          value: '10,150 sqm',
        },
      ],
    },
    category: product.keywords[0],
    url: productUrl,
  };

  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <section className="relative min-h-[620px] overflow-hidden bg-gray-950 text-white">
        <div className="absolute inset-0 opacity-35">
          <Image
            src={product.image}
            alt={`${product.name} hero image`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/85 to-gray-950/35" />
        <div className="container relative mx-auto flex min-h-[620px] flex-col justify-center px-4 py-20 md:py-28">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">{product.shortName}</p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">{product.headline}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300 md:text-xl">{product.description}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-xl bg-blue-600 px-8 py-4 font-bold text-white transition hover:bg-blue-700">Get a Quote</Link>
            <Link href="/products" className="rounded-xl bg-white px-8 py-4 font-bold text-gray-950 transition hover:bg-gray-100">View All Products</Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto grid gap-10 px-4 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-20">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-blue-600">Product advantages</p>
          <h2 className="mb-8 text-3xl font-bold text-gray-950">Built for B2B Buyers, Retail Programs, and Custom Manufacturing</h2>
          <div className="grid gap-4">
            {product.bullets.map((bullet) => (
              <div key={bullet} className="rounded-2xl bg-gray-50 p-5 text-gray-700 ring-1 ring-gray-100">
                <span className="mr-3 font-bold text-blue-600">✓</span>{bullet}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-gray-950 p-8 text-white">
          <h2 className="mb-6 text-2xl font-bold">Specification & Customization</h2>
          <ul className="space-y-4 text-gray-300">
            {product.specs.map((spec) => (
              <li key={spec} className="border-b border-white/10 pb-4 last:border-0">
                {spec}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-20">
        <div className="container mx-auto grid gap-10 px-4 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-100">
            <p className="mb-3 text-4xl font-bold text-blue-600">US$100M+</p>
            <h3 className="mb-3 text-xl font-bold text-gray-950">Annual Output</h3>
            <p className="text-sm leading-6 text-gray-600">High-capacity production supports bulk procurement and long-term supply programs.</p>
          </div>
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-100">
            <p className="mb-3 text-4xl font-bold text-blue-600">10,150m²</p>
            <h3 className="mb-3 text-xl font-bold text-gray-950">Factory Facility</h3>
            <p className="text-sm leading-6 text-gray-600">Precision metal fabrication facility for garden metal product manufacturing.</p>
          </div>
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-100">
            <p className="mb-3 text-4xl font-bold text-blue-600">TÜV / CE</p>
            <h3 className="mb-3 text-xl font-bold text-gray-950">Quality Control</h3>
            <p className="text-sm leading-6 text-gray-600">Verified supplier profile, quality inspection, and OEM/ODM production workflow.</p>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-5 text-3xl font-bold md:text-5xl">Request Pricing for {product.name}</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-blue-50">Tell us your quantity, destination country, size, color, finish, and packaging requirements. We will prepare a factory-direct RFQ response.</p>
          <Link href="/contact" className="inline-flex rounded-xl bg-white px-8 py-4 font-bold text-blue-600 transition hover:bg-gray-100">Get a Quote / RFQ</Link>
        </div>
      </section>
    </main>
  );
}
