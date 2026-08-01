'use client';

import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { trackEmailClick, trackWhatsAppClick } from '../lib/gtag';

type ContactChannel = 'whatsapp' | 'email';

type ContactLinkProps = {
  /** Which conversion signal to report. */
  channel: ContactChannel;
  /** Where on the site this link lives, e.g. "footer", "floating_button", "contact_card". */
  location: string;
  href: string;
  children: ReactNode;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'children' | 'onClick'>;

/**
 * Anchor that reports a GA4 conversion event before navigating.
 *
 * Navigation is never blocked: the event is fire-and-forget, and trackEvent
 * no-ops when analytics is unavailable.
 */
export default function ContactLink({
  channel,
  location,
  href,
  children,
  ...anchorProps
}: ContactLinkProps) {
  const handleClick = () => {
    if (channel === 'whatsapp') {
      trackWhatsAppClick(location);
    } else {
      trackEmailClick(location);
    }
  };

  return (
    <a href={href} onClick={handleClick} {...anchorProps}>
      {children}
    </a>
  );
}
