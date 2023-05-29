import search from "../icons/search.svg"
export default function SearchBox({onSearchCallback}) {
    const styles = {
        wrapper: {
            background: "#FFFFFF",
            border: "1px solid #D5D5D5",
            boxShadow: "0px 3px 24px rgba(0, 0, 0, 0.05)",
            borderRadius: "5px",
            display: "flex",
            flexDirection: "row",
            marginTop: "30px",
            marginBottom: "28px",
            height: "40px"
        },
        searchBox: {
            width: "90%",
            border: "none",
            marginLeft: "5px",
            
            img: {
                margin: "10px",
                size: "12px"
            }
            
        }
    }
    return (
        <div style={styles.wrapper}>
            <span><img src={search} alt={"searchIcon"} style={styles.searchBox.img}></img></span>
            <input type="text" placeholder="Search" id="name" name="name" style={styles.searchBox} onChange={e => onSearchCallback(e.target.value)}></input>
        </div>
    )
}