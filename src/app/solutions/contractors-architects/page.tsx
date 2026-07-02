import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contractor & Architect Solutions | Baiet Metal',
  description: 'Precision metalwork with CAD support for large-scale architectural projects. Garden edging, bin storage, and more.',
  keywords: ['Industrial bin storage specs', 'Anti-corrosion trash can housing', 'TÜV certified bin covers', 'Heavy duty lawn edging'],
};

export default function ContractorsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Solutions for Contractors & Architects</h1>
      <p className="text-lg text-gray-600 mb-8">
        We provide the engineering precision and project support required for large-scale infrastructure and residential developments.
      </p>
      {/* TODO: Add CAD Download Section */}
    </div>
  );
}
