export default function Tile({ index, thickness, width, length }) {
    const styles = {
        tile: {
            padding: "4px 9px",
            minWidth: "79px",
            height: "23px",
            background: "#F4F4F6",
            borderRadius: "5px",
            margin: "0 5px 0 5px"
        },
        index: {
            color: "#707786",
            marginRight: '6px'
        },
        dimension: {
            color: "#1F2937"
        }

    }
    return (
        <span style={styles.tile}>
            <span style={styles.index}>{index}</span><span style={styles.dimension}>{thickness}x{width}x{length}</span>
        </span>
    )
}