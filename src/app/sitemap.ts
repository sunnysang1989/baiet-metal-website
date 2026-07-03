import type { MetadataRoute } from 'next';
import { products } from './products/product-data';

const baseUrl = 'https://www.baietmetal.com';

const staticRoutes = [
  '',
  '/contact',
  '/products',
  '/solutions/contractors-architects',
  '/solutions/e-commerce-amazon-sellers',
  '/solutions/oem-odm-customization',
  '/solutions/wholesalers-distributors',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const productRoutes = products.map((product) => `/products/${product.slug}`);

  return [...staticRoutes, ...productRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/products' ? 0.9 : route.startsWith('/products/') ? 0.8 : 0.7,
  }));
}
