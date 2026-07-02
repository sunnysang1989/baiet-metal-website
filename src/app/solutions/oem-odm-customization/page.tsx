import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bespoke OEM/ODM Customization | Baiet Metal',
  description: 'Custom metal fabrication from concept to technical blueprints. 2D/3D design support for unique garden products.',
  keywords: ['Custom Metal Fabrication', 'Prototype Design', 'Bespoke Solutions', 'Metal landscape edging supplier'],
};

export default function CustomizationPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">OEM/ODM Customization Services</h1>
      <p className="text-lg text-gray-600 mb-8">
        Turn your concepts into reality with our in-house engineering team. From CAD design to rapid prototyping.
      </p>
    </div>
  );
}
