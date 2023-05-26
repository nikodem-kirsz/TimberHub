import React, { useState } from 'react';
import CreateProductForm from './CreateProductForm';
import { createProduct } from '../api/api';

export default function BurgerMenu({ onToggleMenu }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        onToggleMenu();
        setIsOpen(!isOpen);
    };

    const onCreateProduct = (event) => {
        event.preventDefault()
        createProduct(event.target.value)
    }

    const styles = {
        menu: {
            position: 'absolute',
            top: 0,
            right: 0,
            width: '50%',
            height: '100%',
            backgroundColor: '#ffff',
            zIndex: 1000,
            transition: 'transform 0.3s ease-out',
            transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
            marginLeft: '22px'
        },
        button: {
            position: 'relative',
            top: 100,
            right: 200,
            display: isOpen ? 'none' : 'block',
            backgroundColor: "#FFFF",
            border: "2px solid #23D899",
            color: "black",
            fontSize: "14px",
            fontWeight: 700,
            // border: 0,
            padding: "8px 16px",
            borderRadius: "5px",
            margin: "10px 0px",
            cursor: "pointer"
        }
    }


    return (
        <div style={styles.menu}>
            <button style={styles.button} onClick={toggleMenu}>
                + CREATE PRODUCT
            </button>
            {isOpen && <CreateProductForm onCreate={onCreateProduct} onClose={toggleMenu} />}
        </div>
    );
};
