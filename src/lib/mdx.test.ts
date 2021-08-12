import { getFiles, getFileBySlug, getAllFileMetadata } from './mdx';

describe('Test for mdx file functions', () => {
  describe('getFile function', () => {
    it('should return an array of files from the folder data', () => {
      const files = getFiles();

      expect(files).toEqual(expect.arrayContaining([expect.any(String)]));
      expect(files).toContain('welcome.mdx');
    });
  });

  describe('getFileBySlug function', () => {
    it('should return metadata and content of a post', async () => {
      const postInfo = await getFileBySlug({ slug: 'welcome' });

      expect(postInfo).toEqual(
        expect.objectContaining({
          metadata: expect.objectContaining({
            title: expect.any(String),
            date: expect.any(String),
            slug: expect.any(String),
          }),
          source: expect.objectContaining({
            compiledSource: expect.any(String),
            scope: expect.any(Object),
          }),
        }),
      );
    });
  });

  describe('getAllFileMetadata function', () => {
    it('should return metadata for all posts', async () => {
      const postsInfo = await getAllFileMetadata();

      expect(postsInfo).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            title: expect.any(String),
            date: expect.any(String),
            slug: expect.any(String),
          }),
        ]),
      );
    });
  });
});
