export const fetchProducts = async () => {
    try {
        const response = await fetch(`/api/data`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        return response.json()
    } catch (error) {
        console.error(error);
        throw error;
    }

}

export const createProduct = async (productData) => {
    try {
        console.log(productData)
        const response = await fetch(`/api/data`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(productData),
        });

        if (!response.ok) {
            throw new Error('Failed to create product');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};