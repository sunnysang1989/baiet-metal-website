import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import type { MetadataRoute } from 'next';
import { getProducts } from './products/product-data';

const baseUrl = 'https://www.baietmetal.com';

type RouteConfig = {
  route: string;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
  priority: number;
  lastModified?: Date;
};

const staticRoutes: RouteConfig[] = [
  { route: '', changeFrequency: 'weekly', priority: 1 },
  { route: '/contact', changeFrequency: 'monthly', priority: 0.8 },
  { route: '/products', changeFrequency: 'weekly', priority: 0.9 },
  { route: '/news', changeFrequency: 'weekly', priority: 0.7 },
  { route: '/solutions/contractors-architects', changeFrequency: 'monthly', priority: 0.7 },
  { route: '/solutions/e-commerce-amazon-sellers', changeFrequency: 'monthly', priority: 0.7 },
  { route: '/solutions/oem-odm-customization', changeFrequency: 'monthly', priority: 0.7 },
  { route: '/solutions/wholesalers-distributors', changeFrequency: 'monthly', priority: 0.7 },
];

async function getNewsRoutes(): Promise<Array<RouteConfig & { lastModified?: Date }>> {
  const newsDir = path.join(process.cwd(), 'content/news');

  try {
    const files = await fs.readdir(newsDir);

    return Promise.all(
      files
        .filter((file) => file.endsWith('.md'))
        .map(async (file) => {
          const filePath = path.join(newsDir, file);
          const content = await fs.readFile(filePath, 'utf8');
          const { data } = matter(content);
          return {
            route: `/news/${file.replace('.md', '')}`,
            lastModified: data.date ? new Date(data.date) : undefined,
            changeFrequency: 'monthly' as const,
            priority: 0.6,
          };
        })
    );
  } catch (error) {
    console.error('Error reading news routes for sitemap:', error);
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const products = await getProducts();
  const productRoutes: RouteConfig[] = products.map((product) => ({
    route: `/products/${product.slug}`,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));
  const newsRoutes = await getNewsRoutes();

  const routes = [...staticRoutes, ...productRoutes, ...newsRoutes];

  return routes.map(({ route, changeFrequency, priority, lastModified }) => ({
    url: `${baseUrl}${route}`,
    lastModified: lastModified ?? now,
    changeFrequency,
    priority,
  }));
}
