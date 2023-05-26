import Header from "./Header"
import wood from "../wood.svg"
import dimensions from "../dimensions.svg"
import specifications from "../specifications.svg"
import ProductFeature from "./ProductFeature"

const config = {
  "grade": {
    name: "Grade *",
    options: ["Nordic Blue Book", "Wood1", "Wood2", "Wood3"]
  },
  "usage": {
    name: "Usage *",
    options: ["Pallet/Packaging", "Construction", "Floor", "Warehouse"],
  },
  "species": {
    name: "Wood species *",
    options: ["Spruce", "Specie1", "Specie2", "Specie3"]
  },
  "drying_method": {
    name: "Drying *",
    options: ["KD", "WD", "CD", "XD"],
  },
  "treatment": {
    name: "Treatment *",
    options: ["Special1", "Special2", "Special3"]
  }
}

export default function CreateProductForm({ onCreate, onClose }) {
  const styles = {
    formWrapper: {
      // position: 'fixed',
      borderLeft: "1px solid rgb(237, 237, 237)",
      top: 0,
      right: 0,
      width: '100%',
      height: '100%'
    },
    formStyle: {
      display: "flex",
      flexDirection: "column",
      marginLeft: '22px',
      marginRight: '22px'
    },
    dimensions: {
      display: "flex",
      flexDirection: "",
      justifyContent: "space-between"
    },
    title: {
      fontFamily: 'Mukta Mahee',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: "24px",
      lineHeight: "40px",
      display: "flex",
    },
    input: {
      background: "#FFFFFF",
      border: "1px solid #D5D5D5",
      borderRadius: "5px",
      flexGrow: 1,
      height: "40px"
    },
    productFeature: {
      display: "flex",
      flexDirection: "column",
      minWidth: "30%",
      maxWidth: "100%",
      marginTop: '13px'
    },
    row: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      flexWrap: "wrap",
      marginBottom: '38px',
    },
    buttons: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: '40vh',
      bottom: 29,
      right: 41
    },
    createButton: {
      backgroundColor: "#23D899",
      color: "black",
      fontSize: "14px",
      fontWeight: 700,
      border: 0,
      padding: "8px 16px",
      borderRadius: "5px",
      margin: "10px 0px",
      cursor: "pointer"
    },
    closeButton: {
      backgroundColor: "#FFFF",
      color: "black",
      fontSize: "14px",
      fontWeight: 700,
      border: 0,
      padding: "8px 16px",
      borderRadius: "0",
      margin: "10px 0px",
      cursor: "pointer"
    },
    item: {
      borderTop: "1px solid #EDEDED",
      paddingTop: '38px'
    },
    header: {
      marginTop: "19px",
      marginBottom: '9px',
      marginLeft: '22px'
    },
    img: {
      width: "32px",
      height: "32px",
      marginRight: '20px'
    },
    label: {
      fontWeight: "700",
      fontSize: "15px",
      marginBottom: '3px'
    }

  }
  return (
    <div style={styles.formWrapper}>
      <div>
        
      </div>
      <Header title={"Create Product"} customStyles={styles.header} />
      <form onSubmit={onCreate} style={styles.formStyle}>

        <ProductFeature title={"Sawn Timber"} config={[config.grade, config.usage]} icon={wood} />
        <ProductFeature title={"Specifications"} config={[config.drying_method, config.grade, config.treatment]} icon={specifications} />

        <span style={styles.item}>
          <div style={styles.title}><img style={styles.img} src={dimensions} alt="Dimensions Icon"></img><div>Dimensions</div></div>
          <div style={styles.row}>
            <div style={styles.productFeature}>
              <label style={styles.label}>Thickness *</label>
              <input style={styles.input}></input>
            </div>
            <div style={styles.productFeature}>
              <label style={styles.label}>Width *</label>
              <input style={styles.input}></input>
            </div>
            <div style={styles.productFeature}>
              <label style={styles.label}>Length *</label>
              <input style={styles.input}></input>
            </div>
          </div>
        </span>

        <div style={styles.buttons}>
          <button style={styles.closeButton} onClick={onClose}>Close</button>
          <button style={styles.createButton} type="submit">CREATE PRODUCT</button>
        </div>

      </form>


    </div>
  )
}