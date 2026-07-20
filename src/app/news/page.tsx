import Link from 'next/link';
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

export default async function NewsPage() {
  const newsDir = path.join(process.cwd(), 'content/news');
  const files = await fs.readdir(newsDir);
  
  const newsItems = await Promise.all(
    files
      .filter(file => file.endsWith('.md'))
      .map(async file => {
        const filePath = path.join(newsDir, file);
        const content = await fs.readFile(filePath, 'utf8');
        const { data } = matter(content);
        return {
          slug: file.replace('.md', ''),
          title: data.title,
          date: data.date,
          description: data.description,
        };
      })
  );

  // Sort by date descending
  newsItems.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Latest News</h1>
      <div className="grid gap-8">
        {newsItems.map((item) => (
          <article key={item.slug} className="border-b pb-8">
            <h2 className="text-2xl font-bold mb-2">
              <Link href={`/news/${item.slug}`} className="hover:text-blue-600 transition">
                {item.title}
              </Link>
            </h2>
            <p className="text-gray-500 text-sm mb-4">
              {new Date(item.date).toLocaleDateString()}
            </p>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <Link href={`/news/${item.slug}`} className="text-blue-600 font-semibold">
              Read More →
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
