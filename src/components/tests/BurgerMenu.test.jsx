import React from 'react';
import fetchMock from 'jest-fetch-mock';
import { render, fireEvent } from '@testing-library/react';
import BurgerMenu from '../BurgerMenu';
import * as api from '../../api/api';

describe('BurgerMenu', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('should toggle the menu on button click', () => {
    const onToggleMenuMock = jest.fn();
    const { getByText } = render(<BurgerMenu onToggleMenu={onToggleMenuMock} />);

    const button = getByText('+ CREATE PRODUCT');
    fireEvent.click(button);

    expect(onToggleMenuMock).toHaveBeenCalled();
  });

  it('should call createProduct with the event object on form submission',  () => {
    const createProductMock = jest.spyOn(api, 'createProduct');
    const onToggleMenuMock = jest.fn();
    const { getByText } = render(<BurgerMenu onToggleMenu={onToggleMenuMock} />);

    const button = getByText('+ CREATE PRODUCT');
    fireEvent.click(button);

    const submitButton = getByText('CREATE PRODUCT');
    fireEvent.click(submitButton);

      expect(createProductMock).toHaveBeenCalled();
  });
});