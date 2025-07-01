import React from 'react';
import { render, screen } from '@testing-library/react';
import MfeContainer from './MfeContainer';

describe('MfeContainer', () => {
  it('renderiza el layout cuando hay dataSource', async () => {
    render(<MfeContainer dataSource="some-source" />);
    expect(await screen.findByText(/Mocked CharacterListLayout/)).toBeInTheDocument();
  });

  it('no renderiza el layout cuando no hay dataSource', () => {
    render(<MfeContainer dataSource={null} />);
    expect(screen.queryByText(/Mocked CharacterListLayout/)).not.toBeInTheDocument();
  });
});
