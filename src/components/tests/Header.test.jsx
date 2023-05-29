import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import Header from '../Header';

describe('Header', () => {
  it('renders the title with custom styles', () => {
    const customStyles = {
      fontFamily: 'Arial',
      fontSize: '28px',
      color: 'blue',
    };
    const title = 'My Header';
    const { getByText } = render(<Header title={title} customStyles={customStyles} />);
    const headerElement = getByText(title);

    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toHaveStyle('font-family: Arial');
    expect(headerElement).toHaveStyle('font-size: 28px');
    expect(headerElement).toHaveStyle('color: blue');
  });

  it('renders the title with default styles if no custom styles provided', () => {
    const title = 'My Header';
    const { getByText } = render(<Header title={title} />);
    const headerElement = getByText(title);

    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toHaveStyle('font-family: Mukta Mahee');
    expect(headerElement).toHaveStyle('font-style: normal');
    expect(headerElement).toHaveStyle('font-weight: 700');
    expect(headerElement).toHaveStyle('font-size: 33px');
    expect(headerElement).toHaveStyle('line-height: 55px');
  });
});
