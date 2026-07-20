import fs from 'fs/promises';
import path from 'path';

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

export async function getProducts(): Promise<Product[]> {
  const productsDir = path.join(process.cwd(), 'content/products');
  try {
    const files = await fs.readdir(productsDir);
    
    const products = await Promise.all(
      files
        .filter(file => file.endsWith('.json'))
        .map(async file => {
          const filePath = path.join(productsDir, file);
          const content = await fs.readFile(filePath, 'utf8');
          const data = JSON.parse(content);
          return {
            slug: file.replace('.json', ''),
            ...data,
          } as Product;
        })
    );
    return products;
  } catch (error) {
    console.error('Error reading products:', error);
    return [];
  }
}

export async function getProduct(slug: string): Promise<Product | undefined> {
  const products = await getProducts();
  return products.find((product) => product.slug === slug);
}
