import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import Link from 'next/link';

type Props = {
  params: Promise<{ slug: string }>;
};

async function readNewsPost(slug: string) {
  const filePath = path.join(process.cwd(), 'content/news', `${slug}.md`);

  try {
    const fileContent = await fs.readFile(filePath, 'utf8');
    return matter(fileContent);
  } catch {
    return null;
  }
}

export async function generateStaticParams() {
  const newsDir = path.join(process.cwd(), 'content/news');
  try {
    const files = await fs.readdir(newsDir);
    return files
      .filter((file) => file.endsWith('.md'))
      .map((file) => ({ slug: file.replace('.md', '') }));
  } catch {
    return [];
  }
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = await readNewsPost(slug);

  if (!post) {
    notFound();
  }

  const { data, content } = post;

  return (
    <main className="container mx-auto max-w-3xl px-4 py-12">
      <Link href="/news" className="mb-8 inline-block text-blue-600">← Back to News</Link>
      <article>
        <h1 className="mb-4 text-4xl font-bold">{data.title}</h1>
        <p className="mb-8 text-gray-500">{new Date(data.date).toLocaleDateString()}</p>
        <div className="prose lg:prose-xl">
          <pre className="whitespace-pre-wrap font-sans leading-relaxed text-gray-700">
            {content}
          </pre>
        </div>
      </article>
    </main>
  );
}
