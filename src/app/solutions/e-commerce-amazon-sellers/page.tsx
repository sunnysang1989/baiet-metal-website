import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'E-commerce & Amazon Seller Solutions | Baiet Metal',
  description: 'IP protection, FBA-ready shipping, and drop-test certified packaging for garden metal retailers.',
  keywords: ['Amazon FBA bin storage', 'Private label bin covers', 'Drop-test certified packaging', 'Trending mailbox 2024'],
};

export default function EcommercePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">E-commerce & Amazon Seller Solutions</h1>
      <p className="text-lg text-gray-600 mb-8">
        We specialize in private label manufacturing with packaging certified for global logistics and FBA labeling.
      </p>
    </div>
  );
}
