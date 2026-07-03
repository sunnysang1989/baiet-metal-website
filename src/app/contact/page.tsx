import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Baiet Metal | Get a Factory-Direct Quote',
  description: 'Contact Baiet Metal for OEM/ODM garden metal products, metal raised beds, garden edging, privacy screens, and storage sheds.',
  keywords: ['Baiet Metal contact', 'garden metal products quote', 'OEM garden metal manufacturer', 'metal raised bed supplier'],
};

const contactCards = [
  {
    title: 'Email',
    value: 'sunny@liaohemetal.com',
    href: 'mailto:sunny@liaohemetal.com?subject=Factory-direct%20garden%20metal%20products%20quote',
    description: 'Send drawings, target quantities, destination market, or customization requirements.',
  },
  {
    title: 'WhatsApp',
    value: '+86 135 6121 0720',
    href: 'https://wa.me/8613561210720?text=Hi%20Sunny,%20I%27m%20interested%20in%20Baiet%20Metal%20garden%20metal%20products.%20Please%20send%20me%20a%20factory-direct%20quote.',
    description: 'Fast response for product selection, samples, packaging, and OEM/ODM details.',
  },
];

const quoteChecklist = [
  'Product category: raised garden beds, garden edging, privacy screens, storage sheds, planters, or custom metal fabrication',
  'Target size, material, color, finish, and packaging requirements',
  'Estimated order quantity and destination country',
  'Drawings, reference photos, or retailer platform requirements if available',
];

export default function ContactPage() {
  return (
    <main className="bg-white">
      <section className="bg-gray-950 text-white">
        <div className="container mx-auto px-4 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">Factory-direct quote</p>
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">Get a Quote for Garden Metal Products</h1>
            <p className="text-lg leading-8 text-gray-300 md:text-xl">
              Talk to Baiet Metal about OEM/ODM manufacturing, custom colors, project quantities, and retail-ready packaging for garden metal products.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-3xl border border-gray-100 bg-gray-50 p-8 md:p-10">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">RFQ Details</h2>
            <form action="mailto:sunny@liaohemetal.com" method="post" encType="text/plain" className="grid gap-5">
              <label className="grid gap-2 text-sm font-semibold text-gray-700">
                Source
                <input name="source" placeholder="Google / Alibaba / Referral / Other" className="rounded-xl border border-gray-200 px-4 py-3 font-normal" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-gray-700">
                Product Category
                <select name="productCategory" className="rounded-xl border border-gray-200 px-4 py-3 font-normal">
                  <option>Metal raised garden bed / planter box</option>
                  <option>Metal garden edging</option>
                  <option>Metal garden storage shed</option>
                  <option>Decorative privacy screen</option>
                  <option>Firewood rack</option>
                  <option>Custom OEM/ODM project</option>
                </select>
              </label>
              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-gray-700">
                  Quantity
                  <input name="quantity" placeholder="e.g. 500 pcs" className="rounded-xl border border-gray-200 px-4 py-3 font-normal" />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-gray-700">
                  Country
                  <input name="country" placeholder="e.g. United States" className="rounded-xl border border-gray-200 px-4 py-3 font-normal" />
                </label>
              </div>
              <label className="grid gap-2 text-sm font-semibold text-gray-700">
                Custom Requirements
                <textarea name="customRequirements" rows={5} placeholder="Material, size, color, packaging, drawings, destination port..." className="rounded-xl border border-gray-200 px-4 py-3 font-normal" />
              </label>
              <button type="submit" className="rounded-xl bg-blue-600 px-6 py-4 font-bold text-white transition hover:bg-blue-700">
                Send RFQ by Email
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl bg-blue-600 p-8 text-white md:p-10">
              <h2 className="mb-6 text-2xl font-bold">For a faster quotation, include:</h2>
              <ul className="space-y-4 text-blue-50">
                {quoteChecklist.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/15 text-sm font-bold">✓</span>
                    <span className="leading-7">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
              {contactCards.map((card) => (
                <a key={card.title} href={card.href} target={card.href.startsWith('https://') ? '_blank' : undefined} rel={card.href.startsWith('https://') ? 'noopener noreferrer' : undefined} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 transition hover:-translate-y-1 hover:shadow-lg">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">{card.title}</p>
                  <p className="mb-4 text-xl font-bold text-gray-950">{card.value}</p>
                  <p className="text-sm leading-6 text-gray-600">{card.description}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
