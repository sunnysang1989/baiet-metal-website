import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Baiet Metal (Shandong Liaohe New Materials Co., Ltd.) collects, uses, stores, and protects personal data submitted through baietmetal.com.',
  alternates: { canonical: '/privacy-policy' },
};

const LAST_UPDATED = 'August 1, 2026';
const CONTACT_EMAIL = 'sunny@liaohemetal.com';

type Section = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

const sections: Section[] = [
  {
    heading: '1. Who We Are',
    paragraphs: [
      'This website (baietmetal.com) is operated by Shandong Liaohe New Materials Co., Ltd., trading as "Baiet Metal" ("we", "us", "our"), a manufacturer of garden metal products located in Liaocheng, Shandong Province, China.',
      'This Privacy Policy explains what personal data we collect through this website, why we collect it, how we use and protect it, and what rights you have over it. By using this website or submitting an inquiry, you agree to the practices described below.',
    ],
  },
  {
    heading: '2. Information We Collect',
    paragraphs: ['We collect the following categories of information:'],
    bullets: [
      'Information you provide directly — when you submit a Request for Quotation (RFQ) form, we collect your email address, product category of interest, order quantity, destination country, referral source, and any custom requirements you choose to describe.',
      'Information you provide through other channels — if you contact us by email or WhatsApp using the links on this site, we receive the contact details and message content you send.',
      'Automatically collected usage data — when you browse this website, our analytics provider collects standard technical data such as pages viewed, time on page, approximate geographic region (city or country level), referring website, device type, browser type, and anonymised IP information.',
    ],
  },
  {
    heading: '3. How We Use Your Information',
    paragraphs: ['We use the information described above only for the following purposes:'],
    bullets: [
      'To prepare and send you a quotation, product specification, or sample in response to your inquiry.',
      'To communicate with you about your inquiry, order, customization requirements, packaging, or shipping.',
      'To understand how visitors use our website so that we can improve page content, product information, and site performance.',
      'To measure the effectiveness of our advertising and marketing activities.',
      'To comply with applicable legal, tax, customs, and record-keeping obligations.',
    ],
  },
  {
    heading: '4. Legal Basis for Processing',
    paragraphs: [
      'Where the General Data Protection Regulation (GDPR) or a comparable data protection law applies to you, we process your personal data on the following legal bases: (a) to take steps at your request prior to entering into a contract, when you submit an RFQ; (b) our legitimate interest in operating, securing, and improving our website and business; and (c) your consent, where consent is required — for example for non-essential analytics cookies. You may withdraw consent at any time.',
    ],
  },
  {
    heading: '5. Cookies and Analytics',
    paragraphs: [
      'This website uses Google Analytics 4, a web analytics service provided by Google LLC, to understand aggregate visitor behaviour. Google Analytics sets cookies or similar identifiers on your device to distinguish returning visits and to measure events such as page views and inquiry submissions.',
      'We use this data only in aggregate form to evaluate site performance and advertising effectiveness. We do not use it to identify you personally, and we do not sell it.',
      'You can prevent analytics collection at any time by disabling cookies in your browser settings, by using your browser private/incognito mode, or by installing the Google Analytics Opt-out Browser Add-on. Refusing analytics cookies does not affect your ability to browse the site or submit an inquiry.',
    ],
  },
  {
    heading: '6. Third-Party Service Providers',
    paragraphs: [
      'We rely on a small number of third-party providers to operate this website. Each receives only the data necessary to perform its function:',
    ],
    bullets: [
      'Web3Forms — processes and delivers RFQ form submissions to our company mailbox.',
      'Google Analytics (Google LLC) — provides aggregated website usage measurement.',
      'Vercel Inc. — hosts this website and processes standard server request logs.',
      'TinaCloud — provides the content management system used to maintain product and news content.',
    ],
  },
  {
    heading: '7. International Data Transfers',
    paragraphs: [
      'We are based in China, and the service providers listed above operate infrastructure in various countries, including the United States and the European Union. This means your information may be transferred to, stored in, and processed in a country other than your own, where data protection laws may differ from those in your jurisdiction. Where required by law, we take appropriate steps to ensure your data continues to receive an adequate level of protection.',
    ],
  },
  {
    heading: '8. Data Retention',
    paragraphs: [
      'We retain inquiry and business correspondence for as long as necessary to serve your request and to maintain our commercial and legal records, and no longer than required by applicable accounting, tax, and trade regulations. Aggregated analytics data is retained according to the retention period configured in our analytics account. When data is no longer needed, we delete it or keep it only in aggregated, non-identifying form.',
    ],
  },
  {
    heading: '9. Data Security',
    paragraphs: [
      'This website is served exclusively over encrypted HTTPS connections. We limit internal access to inquiry data to the sales and management personnel who need it to respond to you. While no method of transmission or storage over the internet can be guaranteed to be completely secure, we take commercially reasonable technical and organisational measures to protect your information against unauthorised access, alteration, disclosure, and loss.',
    ],
  },
  {
    heading: '10. Your Rights',
    paragraphs: ['Subject to your local law, you may have the right to:'],
    bullets: [
      'Request access to the personal data we hold about you.',
      'Request correction of inaccurate or incomplete data.',
      'Request deletion of your personal data.',
      'Object to or request restriction of our processing of your data.',
      'Request a copy of your data in a portable format.',
      'Withdraw consent previously given, without affecting the lawfulness of processing carried out before withdrawal.',
    ],
  },
  {
    heading: "11. Children's Privacy",
    paragraphs: [
      'This website serves business-to-business buyers and is not directed to children. We do not knowingly collect personal data from anyone under the age of 16. If you believe a child has provided us with personal data, please contact us and we will delete it.',
    ],
  },
  {
    heading: '12. Changes to This Policy',
    paragraphs: [
      'We may update this Privacy Policy from time to time to reflect changes in our practices, our service providers, or applicable law. The revised version takes effect when it is published on this page, and the "Last updated" date above will be revised accordingly. We encourage you to review this page periodically.',
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-gray-100 bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">Legal</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900">Privacy Policy</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-gray-600">
            This policy explains what information Baiet Metal collects through baietmetal.com, how we
            use it, and the choices available to you.
          </p>
          <p className="mt-4 text-sm text-gray-500">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl">
          {sections.map((section) => (
            <div key={section.heading} className="mb-12">
              <h2 className="mb-4 text-xl font-bold text-gray-900">{section.heading}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="mb-4 text-base leading-7 text-gray-600">
                  {paragraph}
                </p>
              ))}
              {section.bullets && (
                <ul className="mt-2 grid gap-3">
                  {section.bullets.map((bullet) => (
                    <li key={bullet.slice(0, 40)} className="flex gap-3 text-base leading-7 text-gray-600">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
            <h2 className="mb-4 text-xl font-bold text-gray-900">13. Contact Us</h2>
            <p className="mb-6 text-base leading-7 text-gray-600">
              To exercise any of the rights above, or if you have questions about this Privacy Policy or
              how we handle your data, please contact us. We aim to respond to all legitimate requests
              within 30 days.
            </p>
            <dl className="grid gap-4 text-base leading-7">
              <div>
                <dt className="font-semibold text-gray-900">Company</dt>
                <dd className="text-gray-600">Shandong Liaohe New Materials Co., Ltd. (Baiet Metal)</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900">Address</dt>
                <dd className="text-gray-600">Liaocheng, Shandong Province, China</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900">Email</dt>
                <dd>
                  <a
                    href={`mailto:${CONTACT_EMAIL}?subject=Privacy%20Policy%20Inquiry`}
                    className="font-semibold text-blue-600 underline underline-offset-4 hover:text-blue-700"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900">WhatsApp</dt>
                <dd className="text-gray-600">+86 135 6121 0720</dd>
              </div>
            </dl>
            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
            >
              Go to contact page
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
