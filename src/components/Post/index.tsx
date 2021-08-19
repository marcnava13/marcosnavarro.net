import Head from 'next/head';
import { MDXRemote } from 'next-mdx-remote';
import { Post as PostProps } from 'lib/mdx';

export function Post({ metadata, source }: PostProps) {
  return (
    <div>
      <Head>
        <title>{metadata.title}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <MDXRemote compiledSource={source.compiledSource} scope={source.scope} />
      </main>
    </div>
  );
}
