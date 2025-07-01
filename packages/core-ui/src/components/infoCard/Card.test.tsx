import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  it('renders the image and title correctly', () => {
    render(<Card image="https://example.com/image.jpg" title="Test Title" />);

    const image = screen.getByRole('img', { name: 'Test Title' });
    expect(image).toHaveAttribute('src', 'https://example.com/image.jpg');
    expect(image).toHaveAttribute('alt', 'Test Title');

    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });
});
