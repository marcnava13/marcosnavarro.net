import { getAllFileMetadata } from 'lib/mdx';
import { Blog } from 'components/Blog';

export default Blog;

export async function getStaticProps() {
  const posts = await getAllFileMetadata();
  return { props: { posts } };
}
