import fs from 'fs';
import matter from 'gray-matter';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';

const root = process.cwd();

export type Metadata = {
  title: string;
  date: string;
  slug: string;
};

export type Source = MDXRemoteSerializeResult;

export type Post = {
  metadata: Metadata;
  source: Source;
};

type GetFileBySlugProps = {
  slug: string;
};

export const getFiles = (): string[] => fs.readdirSync(path.join(root, 'data'));

export const getFileBySlug = async ({ slug }: GetFileBySlugProps): Promise<Post> => {
  const mdxSource: string = fs.readFileSync(path.join(root, 'data', `${slug}.mdx`), 'utf-8');

  const { data, content } = await matter(mdxSource);

  const metadata = { ...data, slug } as Metadata;
  const source = (await serialize(content, {})) as Source;

  return { metadata, source };
};

export const getAllFileMetadata = (): Metadata[] => {
  const files: string[] = getFiles();

  return files.reduce((posts, slug: string) => {
    const mdxSource = fs.readFileSync(path.join(root, 'data', slug), 'utf-8');
    const { data } = matter(mdxSource);

    return [...posts, { ...data, slug: slug.replace('.mdx', '') }];
  }, []);
};
