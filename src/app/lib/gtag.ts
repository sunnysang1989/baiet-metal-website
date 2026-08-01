/**
 * Lightweight GA4 event helper.
 *
 * Conversion signals for Baiet Metal (mark these as "key events" in GA4,
 * then import them into Google Ads as conversions):
 *   - generate_lead   : RFQ form submitted successfully  (primary)
 *   - whatsapp_click  : WhatsApp contact link clicked    (primary)
 *   - email_click     : mailto contact link clicked      (secondary)
 *
 * Safe to call anywhere: if gtag.js has not loaded (e.g. NEXT_PUBLIC_GA_MEASUREMENT_ID
 * is not configured, or an ad blocker removed the script), every call is a no-op.
 */

type GtagParams = Record<string, string | number | boolean | undefined>;

type GtagFn = (
  command: 'event' | 'config' | 'js' | 'set',
  targetOrEventName: string | Date,
  params?: GtagParams
) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
    dataLayer?: unknown[];
  }
}

export type ConversionEvent = 'generate_lead' | 'whatsapp_click' | 'email_click';

/** Fire a GA4 event. No-ops safely when analytics is unavailable. */
export function trackEvent(eventName: ConversionEvent, params: GtagParams = {}): void {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return;
  }

  try {
    window.gtag('event', eventName, params);
  } catch {
    // Never let analytics break a user-facing interaction.
  }
}

/** RFQ form submitted successfully — the strongest inquiry signal. */
export function trackRfqSubmission(params: {
  productCategory: string;
  country: string;
  quantity: string;
  source: string;
}): void {
  trackEvent('generate_lead', {
    // GA4 recommended parameters
    currency: 'USD',
    value: 1,
    // Business context for segmenting inquiry quality
    method: 'rfq_form',
    product_category: params.productCategory || 'unspecified',
    destination_country: params.country || 'unspecified',
    order_quantity: params.quantity || 'unspecified',
    lead_source: params.source || 'unspecified',
  });
}

/** WhatsApp contact link clicked. `location` identifies which link was used. */
export function trackWhatsAppClick(location: string): void {
  trackEvent('whatsapp_click', {
    method: 'whatsapp',
    link_location: location,
  });
}

/** mailto contact link clicked. `location` identifies which link was used. */
export function trackEmailClick(location: string): void {
  trackEvent('email_click', {
    method: 'email',
    link_location: location,
  });
}
