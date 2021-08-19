import { getFileBySlug, getFiles } from 'lib/mdx';
import { Post } from 'components/Post';

export default Post;

export async function getStaticProps({ params }) {
  const { metadata, source } = await getFileBySlug({ slug: params.slug });

  return { props: { metadata, source } };
}

export async function getStaticPaths() {
  const posts = await getFiles();
  const paths = posts.map((post) => ({ params: { slug: post.replace('.mdx', '') } }));

  return { paths, fallback: false };
}
