import Tile from "./Tile"

export default function ProductList({products}) {

    const styles = {
        table: {
            tableLayout: "fixed",
            width: "100%",
        }
    }

    return (
        <table style={styles.table}>
            <thead>
                <tr>
                    <th >Product (Species, Grade, Drying)</th>
                    <th >Dimensions (ThicknessxWidth)</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product, index) => {
                    return (
                    <tr key={`product_${product.id}_${index}`}>
                        <td>
                            <div>
                                <p>{product["species"]}, {product["grade"]}, {product["drying_method"]}</p>
                                <p>#{product["id"]} {convertTimestampToDate(product['created'])}</p>
                            </div>
                        </td>
                        <td>
                            {product["dimensions"].map((dimension, index) => {
                                return (
                                    <Tile
                                        key={`dimension_${dimension}_${index}`}
                                        thickness={dimension.thickness} 
                                        width={dimension.width}
                                        length={dimension.length}
                                    />
                                )
                            })}
                        </td>
                    </tr>
                    )   
                })}
            </tbody>
        </table>
    )
}

function convertTimestampToDate(timestamp) {
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