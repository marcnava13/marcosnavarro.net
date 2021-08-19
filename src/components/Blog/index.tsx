import Head from 'next/head';
import Link from 'next/link';

export function Blog({ posts }) {
  return (
    <div>
      <Head>
        <title>Marcos Navarro - Blog</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        {posts.map(({ slug, title }) => (
          <Link key={slug} href={`/blog/${slug}`}>
            <a>{title}</a>
          </Link>
        ))}
      </main>
    </div>
  );
}
