import { useEffect, useState } from "react"
import Header from "../components/Header"
import CreateProduct from "../components/CreateProduct"
import ProductList from "../components/ProductList"

const styles = {
    wrapper: {
        display: "flex",
        flexFlow: "column wrap"
    },
    headerContainer: {
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap"
    }
}

export default function Products() {
    let [products, setProducts] = useState([])

    useEffect(() => {
        fetch('data.json', { headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }).then(response => {
            return response.json()
        }).then(json => {
            console.log(json)
            setProducts(json)
        })
    }, [])

    return (
        <div style={styles.wrapper}>
            <div style={styles.headerContainer}>
                <Header title={"All products"} />
                <CreateProduct />
            </div>
            <div>
                <ProductList products={products}/>
            </div>
        </div>
    )
}