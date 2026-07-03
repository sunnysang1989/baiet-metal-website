export type Product = {
  slug: string;
  name: string;
  shortName: string;
  headline: string;
  description: string;
  image: string;
  keywords: string[];
  bullets: string[];
  specs: string[];
};

export const products: Product[] = [
  {
    slug: 'planter-boxes',
    name: 'Metal Planter Boxes',
    shortName: 'Metal Planter Boxes',
    headline: 'Factory-Direct Metal Planter Boxes for Modern Outdoor Spaces',
    description: 'Premium metal planter boxes for garden retailers, landscape contractors, and OEM/ODM brands that need custom size, color, and finish options.',
    image: '/images/hero-privacy-screen.avif',
    keywords: ['metal planter boxes wholesale', 'outdoor metal planter manufacturer', 'custom metal planter boxes'],
    bullets: [
      'Powder-coated steel and corten-style finishes for modern patio and commercial landscaping projects.',
      'Custom sizes, colors, drainage options, and retail-ready packaging available for private-label programs.',
      'Factory-direct supply backed by US$100M+ annual output and a 10,150m² manufacturing facility.',
      'OEM/ODM support from drawing review to sample development and bulk production.',
      'Suitable for garden centers, Amazon sellers, hotel landscapes, and urban outdoor spaces.',
    ],
    specs: ['Material: galvanized steel, powder-coated steel, corten/weathering steel options', 'Finish: matte black, corten rust, custom RAL colors, wood-grain effect', 'Customization: size, logo, packaging, drainage, reinforcement', 'Buyer fit: wholesalers, distributors, contractors, e-commerce sellers'],
  },
  {
    slug: 'raised-garden-beds',
    name: 'Metal Raised Garden Beds',
    shortName: 'Raised Garden Beds',
    headline: 'Custom Metal Raised Garden Beds for Wholesale and Retail Programs',
    description: 'Durable raised garden beds and growing boxes built for long-term outdoor planting, bulk retail supply, and landscaping projects.',
    image: '/images/hero-garden-bed.avif',
    keywords: ['metal raised garden bed wholesale', 'corten steel raised garden bed', 'raised garden bed manufacturer'],
    bullets: [
      'Weather-resistant metal construction for backyard planting, urban gardening, and commercial landscape supply.',
      'Corten steel, galvanized steel, and powder-coated color options for different retail positions.',
      'Modular structures support customized sizes, corner design, reinforcement, and packaging.',
      'Factory-direct OEM/ODM service for private-label garden brands and Amazon sellers.',
      'Designed for efficient flat-pack shipping and scalable B2B procurement.',
    ],
    specs: ['Material: galvanized steel, corten steel, coated steel', 'Finish: natural rust patina, green, dark green, black, custom colors', 'Customization: height, width, panel style, corner structure, box packaging', 'Buyer fit: garden retailers, landscapers, online sellers, distributors'],
  },
  {
    slug: 'mailboxes',
    name: 'Metal Mailboxes and Post Boxes',
    shortName: 'Mailboxes',
    headline: 'Custom Metal Mailboxes and Post Boxes for Outdoor Retail Channels',
    description: 'Metal mailboxes and post boxes made for weather resistance, private-label retail, and OEM/ODM design requirements.',
    image: '/images/factory-panorama.avif',
    keywords: ['metal mailbox manufacturer', 'custom post box supplier', 'outdoor metal mailbox wholesale'],
    bullets: [
      'Outdoor-ready metal mailbox manufacturing with custom color, lock, slot, and mounting options.',
      'OEM/ODM support for retailer-specific shapes, packaging, logo placement, and finish requirements.',
      'Precision metal fabrication capability supported by CNC processing and factory quality control.',
      'Suitable for home improvement retailers, distributors, and private-label outdoor product lines.',
      'Factory-direct pricing and export-oriented production workflow for repeat B2B orders.',
    ],
    specs: ['Material: galvanized steel, powder-coated steel, stainless options by request', 'Finish: black, grey, white, custom RAL colors', 'Customization: lock, wall-mounted/post-mounted style, logo, packaging', 'Buyer fit: home improvement retail, distributors, OEM brands'],
  },
  {
    slug: 'storage-sheds',
    name: 'Metal Garden Storage Sheds',
    shortName: 'Storage Sheds',
    headline: 'Metal Garden Storage Sheds for Wholesale, Retail, and OEM Programs',
    description: 'Factory-built metal storage sheds for garden tools, outdoor equipment, and retail-ready flat-pack supply.',
    image: '/images/hero-storage-shed.avif',
    keywords: ['metal garden shed manufacturer', 'wholesale metal garden shed', 'metal storage shed supplier'],
    bullets: [
      'Multiple roof styles and size ranges for compact backyard storage and large garden workshops.',
      'Flat-pack packaging supports efficient freight, retail display, and e-commerce fulfillment.',
      'Custom colors, panel styles, door configurations, and packaging available for OEM projects.',
      'Quality-controlled manufacturing from a TÜV Rheinland-certified supplier profile.',
      'Strong fit for distributors, garden retailers, Amazon sellers, and contractors.',
    ],
    specs: ['Size range: compact 3x2ft style up to larger workshop formats by project', 'Material: coated steel panels and reinforced frame options', 'Customization: roof style, color, door, vents, packaging, instruction manual', 'Buyer fit: wholesalers, retailers, Amazon/FBA sellers, outdoor storage brands'],
  },
  {
    slug: 'garden-beds',
    name: 'Metal Garden Beds',
    shortName: 'Metal Garden Beds',
    headline: 'Metal Garden Beds Built for Durable Planting and Landscape Supply',
    description: 'Factory-direct metal garden beds for home gardens, landscape projects, and private-label garden product lines.',
    image: '/images/hero-garden-bed.avif',
    keywords: ['metal garden bed manufacturer', 'metal garden beds wholesale', 'custom metal garden bed'],
    bullets: [
      'Durable metal panels designed for outdoor planting, soil containment, and long-term garden use.',
      'Custom sizes, colors, finishes, and panel profiles support different market positions.',
      'Corten-style, galvanized, and powder-coated options for modern garden aesthetics.',
      'OEM/ODM manufacturing supports retailers, distributors, landscapers, and e-commerce sellers.',
      'Factory-direct supply with scalable production capacity and RFQ-based project support.',
    ],
    specs: ['Material: galvanized steel, corten/weathering steel, coated steel', 'Finish: rust patina, green, black, wood-grain, custom powder coating', 'Customization: dimensions, panel profile, corner bracket, packaging, logo', 'Buyer fit: garden centers, wholesalers, landscapers, Amazon sellers'],
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
