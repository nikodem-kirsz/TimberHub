import { useEffect, useState } from "react"
import Header from "../components/Header"
import CreateProduct from "../components/CreateProduct"
import ProductList from "../components/ProductList"
import SearchBox from "../components/SearchBox"

const styles = {
    wrapper: {
        display: "flex",
        flexFlow: "column wrap",
        marginLeft: "34px",
        marginRight: "21px"
    },
    headerContainer: {
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        marginTop: "20px"
        
    }
}

async function fetchProducts(fileName) {
    const response = await fetch(fileName, { headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    return response.json()
}

export default function Products() {
    let [products, setProducts] = useState([])
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetchProducts('data.json').then(json => {
            console.log(json)
            setProducts(json)
        })
    }, [])

    function onSearchCallback(search) {
        setSearchQuery(search)
    }

    const filteredData = products.filter((product) =>
        product.species.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.drying_method.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.grade.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.usage.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.id.toString().toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div style={styles.wrapper}>
            <div style={styles.headerContainer}>
                <Header title={"All products"} />
                <CreateProduct />
            </div>
            <div>
                <SearchBox onSearchCallback={onSearchCallback}/>
                <ProductList products={filteredData}/>
            </div>
        </div>
    )
}