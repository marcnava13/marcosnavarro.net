import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { getAllFileMetadata } from 'lib/mdx';
import Blog from 'pages/blog';

describe('Blog page', () => {
  it('should render metadata tags', async () => {
    const mockPosts = await getAllFileMetadata();
    render(<Blog posts={mockPosts} />);

    await waitFor(() => {
      expect(document.title).toBe('Marcos Navarro - Blog');
    });
  });

  it('should render all the posts in a list', async () => {
    const mockPosts = await getAllFileMetadata();
    const { getByRole, getByText } = render(<Blog posts={mockPosts} />);

    expect(getByText(/Hola Mundo/i)).toBeInTheDocument();
    expect(getByRole('link')).toHaveAttribute('href', '/blog/welcome');
  });
});
