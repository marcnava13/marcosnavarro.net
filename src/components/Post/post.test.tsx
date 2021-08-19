import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { getFileBySlug } from 'lib/mdx';
import Post from 'pages/blog/[slug]';

describe('Post page', () => {
  it('should render metadata tags', async () => {
    const mockProps = await getFileBySlug({ slug: 'welcome' });
    render(<Post {...mockProps} />);

    await waitFor(() => {
      expect(document.title).toBe('Hola Mundo');
    });
  });

  it('should render the content of the post', async () => {
    const mockProps = await getFileBySlug({ slug: 'welcome' });
    const { getByRole, getByText } = render(<Post {...mockProps} />);

    expect(getByRole('heading', { name: 'Hola Mundo' })).toBeInTheDocument();
    expect(
      getByText(/Hola, este es el post de mi primer post. Aquí comienza la aventura./i),
    ).toBeInTheDocument();
  });
});
