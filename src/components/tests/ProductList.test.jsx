import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { ProductList, convertTimestampToDate} from '../ProductList';

describe('ProductList', () => {
    const products = [
        {
          id: 1,
          species: 'Species 1',
          grade: 'Grade 1',
          drying_method: 'Air Drying',
          created: 1622505600,
          dimensions: [
            { thickness: 10, width: 100, length: 200 },
            { thickness: 12, width: 120, length: 220 },
          ],
        },
      ];
    
      it('should render the table with product information', () => {
        render(<ProductList products={products} />);
    
        expect(screen.getByText('Product (Species, Grade, Drying)')).toBeInTheDocument();
        expect(screen.getByText('Dimensions (ThicknessxWidth)')).toBeInTheDocument();
    
        const product1 = products[0];
        expect(screen.getByText(`${product1.species}, ${product1.grade}, ${product1.drying_method}`)).toBeInTheDocument();
        expect(screen.getByText(`#${product1.id}`)).toBeInTheDocument();
        expect(screen.getByText(convertTimestampToDate(product1.created))).toBeInTheDocument();
      });
});
