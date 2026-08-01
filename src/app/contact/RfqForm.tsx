'use client';

import { FormEvent, useState } from 'react';
import { trackRfqSubmission } from '../lib/gtag';

const RFQ_EMAIL = 'sunny@liaohemetal.com';
const WEB3FORMS_ACCESS_KEY = '79cac822-5b6b-4fd9-a413-f2c8090f580b';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function RfqForm() {
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    // Honeypot spam check
    if (String(formData.get('botcheck') || '')) {
      return;
    }

    const productCategory = String(formData.get('productCategory') || '').trim();
    const quantity = String(formData.get('quantity') || '').trim();
    const country = String(formData.get('country') || '').trim();
    const source = String(formData.get('source') || '').trim();

    setStatus('sending');
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `RFQ - ${productCategory}${quantity ? ` - ${quantity}` : ''}`,
          from_name: 'Baiet Metal Website',
          email: String(formData.get('email') || '-'),
          source: source || '-',
          product_category: productCategory || '-',
          quantity: quantity || '-',
          country: country || '-',
          custom_requirements: String(formData.get('customRequirements') || '-'),
        }),
      });
      const result = await response.json();
      if (response.ok && result.success) {
        // Google Ads / GA4 conversion signal — only on a confirmed successful submission.
        trackRfqSubmission({ productCategory, country, quantity, source });
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="grid gap-4 rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-2xl font-bold text-white">✓</span>
        <h3 className="text-xl font-bold text-gray-900">RFQ sent successfully!</h3>
        <p className="text-sm leading-6 text-gray-600">
          Thank you for your inquiry. Our team will get back to you within 24 hours. For urgent requests, contact us on WhatsApp: +86 135 6121 0720.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mx-auto rounded-xl border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-white"
        >
          Send another RFQ
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <label className="grid gap-2 text-sm font-semibold text-gray-700">
        Source
        <input name="source" placeholder="Google / Alibaba / Referral / Other" className="rounded-xl border border-gray-200 px-4 py-3 font-normal" />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-gray-700">
        Your Email *
        <input name="email" type="email" required placeholder="e.g. buyer@company.com" className="rounded-xl border border-gray-200 px-4 py-3 font-normal" />
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
      <button
        type="submit"
        disabled={status === 'sending'}
        className="rounded-xl bg-blue-600 px-6 py-4 font-bold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending...' : 'Send RFQ'}
      </button>
      {status === 'error' && (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-sm leading-6 text-red-700">
          Something went wrong. Please try again, or email us directly at{' '}
          <a href={`mailto:${RFQ_EMAIL}`} className="font-semibold underline">
            {RFQ_EMAIL}
          </a>
          .
        </p>
      )}
    </form>
  );
}
