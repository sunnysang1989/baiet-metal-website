import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import Link from 'next/link';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const newsDir = path.join(process.cwd(), 'content/news');
  try {
    const files = await fs.readdir(newsDir);
    return files
      .filter(file => file.endsWith('.md'))
      .map(file => ({ slug: file.replace('.md', '') }));
  } catch (e) {
    return [];
  }
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'content/news', `${slug}.md`);

  try {
    const fileContent = await fs.readFile(filePath, 'utf8');
    const { data, content } = matter(fileContent);

    return (
      <main className="container mx-auto px-4 py-12 max-w-3xl">
        <Link href="/news" className="text-blue-600 mb-8 inline-block">← Back to News</Link>
        <article>
          <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
          <p className="text-gray-500 mb-8">{new Date(data.date).toLocaleDateString()}</p>
          <div className="prose lg:prose-xl">
            {/* Simple display, ideally use react-markdown */}
            <pre className="whitespace-pre-wrap font-sans text-gray-700 leading-relaxed">
                {content}
            </pre>
          </div>
        </article>
      </main>
    );
  } catch (e) {
    notFound();
  }
}
