import { render, screen } from '@testing-library/react';
import React from 'react';
import Sample from './Sample';

describe('Sample', () => {
  test('it renders the text', () => {
    render(<Sample />);

    screen.getByText('Sample');
  });
});
