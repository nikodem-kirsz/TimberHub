import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BurgerMenu from './BurgerMenu';
import { createProduct } from '../api/api';

jest.mock('../api/api', () => ({
  createProduct: jest.fn(),
}));

describe('BurgerMenu', () => {
  it('should toggle the menu and call onToggleMenu when the button is clicked', () => {
    const onToggleMenuMock = jest.fn();
    const { getByText } = render(<BurgerMenu onToggleMenu={onToggleMenuMock} />);
    const toggleButton = getByText('+ CREATE PRODUCT');

    fireEvent.click(toggleButton);

    expect(onToggleMenuMock).toHaveBeenCalled();
  });

  it('should call createProduct when onCreateProduct is called with form values', () => {
    const { getByText } = render(<BurgerMenu />);
    const toggleButton = getByText('+ CREATE PRODUCT');

    fireEvent.click(toggleButton);

    const form = getByText('Create Product Form'); // Assuming 'CreateProductForm' renders a form with this text
    fireEvent.submit(form);

    expect(createProduct).toHaveBeenCalled();
  });

  it('should render CreateProductForm when the menu is open', () => {
    const { queryByText, getByText } = render(<BurgerMenu />);
    const toggleButton = getByText('+ CREATE PRODUCT');

    expect(queryByText('Create Product Form')).toBeNull();

    fireEvent.click(toggleButton);

    expect(queryByText('Create Product Form')).toBeInTheDocument();
  });
});
