const fileName = 'data.json'

export async function fetchProducts() {
    const response = await fetch(fileName, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    return response.json()
}

export async function createProduct(product) {
    const response = await fetch(fileName, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(product)
    })
}