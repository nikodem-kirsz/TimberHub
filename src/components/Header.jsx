const styles = {
    header: {
        fontFamily: 'Mukta Mahee',
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "33px",
        lineHeight: "55px",
    }
}

export default function Header({title, customStyles}) {
    return (
        <div style={{ ...styles.header, ...customStyles}}>
            {title}
        </div>
    )
}