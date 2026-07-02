import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wholesale & Distribution | Baiet Metal',
  description: 'Factory-direct high capacity manufacturing for garden metal products. Tiered pricing for global distributors.',
  keywords: ['Bulk Supply', 'Manufacturing Capacity', 'Tiered Pricing', 'Wholesale designer post box'],
};

export default function WholesalersPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Wholesale & Distribution Partnerships</h1>
      <p className="text-lg text-gray-600 mb-8">
        Scale your inventory with our 10,150m² high-capacity facility. US$100M+ annual output guaranteed.
      </p>
    </div>
  );
}
