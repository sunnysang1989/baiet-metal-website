'use client';

import { FormEvent } from 'react';

const RFQ_EMAIL = 'sunny@liaohemetal.com';

export default function RfqForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const source = String(formData.get('source') || '').trim();
    const productCategory = String(formData.get('productCategory') || '').trim();
    const quantity = String(formData.get('quantity') || '').trim();
    const country = String(formData.get('country') || '').trim();
    const customRequirements = String(formData.get('customRequirements') || '').trim();

    const subject = `RFQ - ${productCategory}${quantity ? ` - ${quantity}` : ''}`;
    const bodyLines = [
      'Hi Baiet Metal team,',
      '',
      'I would like to request a quotation. Details below:',
      '',
      `Source: ${source || '-'}`,
      `Product Category: ${productCategory || '-'}`,
      `Quantity: ${quantity || '-'}`,
      `Country: ${country || '-'}`,
      '',
      'Custom Requirements:',
      customRequirements || '-',
    ];

    const mailtoUrl = `mailto:${RFQ_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`;
    window.location.href = mailtoUrl;
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
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
  );
}
