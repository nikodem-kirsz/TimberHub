import Tile from "./Tile"
import wood from '../icons/wood.svg'

export function ProductList({ products }) {

    const styles = {
        table: {
            width: "100%",
            borderCollapse: "collapse"
        },
        row: {
            borderBottom: "1px solid #EDEDED",
        },
        header: {
            textAlign: "left",
            color: "#707786",
        },
        product: {
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            name: {
                fontFamily: 'Inter',
                fontWeight: 800,
                fontSize: "13px",
                lineHeight: "16px"
            },
            id: {
                fontWeight: 400,
                color: "#67D59E",
                marginRight: "5px",
            },
            timeCreated: {
                color: "#707786",
            },
            img: {
                padding: "25px",
                width: "30px",
                height: "30px"
            }
        },
        dimensions: {
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "10px",
            padding: "10px"
        }
    }

    return (
        <table style={styles.table}>
            <thead>
                <tr style={styles.header}>
                    <th>Product (Species, Grade, Drying)</th>
                    <th>Dimensions (ThicknessxWidth)</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product, index) => {
                    return (
                        <tr key={`product_${product.id}_${index}`} style={styles.row}>
                            <td style={styles.product}>
                                <div><img src={wood} alt="wood-icon" style={styles.product.img}></img></div>
                                <div>
                                    <div style={styles.product.name}>{product["species"]}, {product["grade"]}, {product["drying_method"]}</div>
                                    <div>
                                        <span style={styles.product.id}>#{product["id"]}</span>
                                        <span style={styles.product.timeCreated}>{convertTimestampToDate(product['created'])}</span>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div style={styles.dimensions}>
                                    {product["dimensions"].map((dimension, index) => {
                                        return (
                                            <Tile
                                                index={index + 1}
                                                key={`dimension_${dimension}_${index}`}
                                                thickness={dimension.thickness}
                                                width={dimension.width}
                                                length={dimension.length}
                                                data-testid={`dimension-${index + 1}`}
                                            />
                                        )
                                    })}
                                </div>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export function convertTimestampToDate(timestamp) {
    // Multiply the timestamp by 1000 to convert it to milliseconds
    const milliseconds = timestamp * 1000;

    // Create a new Date object using the milliseconds
    const date = new Date(milliseconds);

    // Format the date using the toLocaleDateString method
    const formattedDate = date.toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    });

    return formattedDate;
}