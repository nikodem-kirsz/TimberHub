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
        <div style={{ ...customStyles, ...styles.header}}>
            {title}
        </div>
    )
}