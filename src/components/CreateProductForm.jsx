import Header from "./Header"
import wood from "../icons/wood.svg"
import dimensions from "../icons/dimensions.svg"
import specifications from "../icons/specifications.svg"
import ProductFeature from "./ProductFeature"
import { useState } from 'react'

const config = {
  "grade": {
    label: "Grade *",
    name: "grade",
    options: ["Nordic Blue Book", "Wood1", "Wood2", "Wood3"]
  },
  "usage": {
    label: "Usage *",
    name: 'usage',
    options: ["Pallet/Packaging", "Construction", "Floor", "Warehouse"],
  },
  "species": {
    label: "Wood species *",
    name: 'species',
    options: ["Spruce", "Specie1", "Specie2", "Specie3"]
  },
  "drying_method": {
    label: "Drying *",
    name: 'drying_method',
    options: ["KD", "WD", "CD", "XD"],
  },
  "treatment": {
    label: "Treatment *",
    name: 'treatment',
    options: ["Special1", "Special2", "Special3"]
  }
}

export default function CreateProductForm({ onCreate, onClose }) {
  const styles = {
    formWrapper: {
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
      marginRight: '22px',
      flex: 1
    },
    dimensions: {
      display: "flex",
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
      minWidth: "30%",
      maxWidth: "100%",
      marginTop: '13px',
      flexWrap: 'wrap',
      justifyContent: 'space-between'
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
    },
    setManagement: {
      color: "#20BE87",
      backgroundColor: "#FFFF",
      fontWeight: 600,
      fontSize: "14px",
      lineHeight: "23px",
      border: 0,
      padding: "8px 16px",
      borderRadius: "0",
      margin: "10px 0px",
      cursor: "pointer",
      marginLeft: "auto",
      display: "flex", flexDirection: 'column', marginBottom: "10px"
    }

  }

  const [formData, setFormData] = useState({
    grade: config.grade.options[0],
    usage: config.usage.options[0],
    drying_method: config.drying_method.options[0],
    species: config.species.options[0],
    treatment: config.treatment.options[0],
    dimensions: [
      {
        thickness: '0.2m',
        width: '1m',
        length: '5m'
      }]

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleDimensionChange = (index, e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const updatedDimensions = [...prevData.dimensions];
      updatedDimensions[index][name] = value;
      return {
        ...prevData,
        dimensions: updatedDimensions
      };
    });
  };

  const addDimension = () => {
    setFormData((prevData) => ({
      ...prevData,
      dimensions: [
        ...prevData.dimensions,
        {
          thickness: '',
          width: '',
          length: ''
        }
      ]
    }));
  };

  const removeDimension = (index) => {
    setFormData((prevData) => {
      const updatedDimensions = [...prevData.dimensions];
      updatedDimensions.splice(index, 1);
      return {
        ...prevData,
        dimensions: updatedDimensions
      };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onCreate(formData);
    onClose();
  };

  return (
    <div style={styles.formWrapper}>
      <Header title={"Create Product"} customStyles={styles.header} />
      <form onSubmit={onSubmit} style={styles.formStyle}>
        <ProductFeature
          title={'Sawn Timber'}
          config={[config.grade, config.usage]}
          values={{ grade: formData.grade, usage: formData.usage }}
          onChange={handleChange}
          icon={wood} />
        <ProductFeature
          title={'Specifications'}
          config={[config.drying_method, config.species, config.treatment]}
          values={{ drying_method: formData.drying_method, species: formData.species, treatment: formData.treatment }}
          onChange={handleChange}
          icon={specifications} />

        <span style={styles.item}>
          <div style={styles.title}>
            <img style={styles.img} src={dimensions} alt="Dimensions Icon" />
            <div>Dimensions</div>
            <button style={styles.setManagement} type="button" onClick={addDimension}>
              + Add another set
            </button>
          </div>
          <div>
            {formData.dimensions.map((dimension, index) => (
              <div>
              <span style={styles.productFeature} key={index}>
                <div style={{ width: '258px', display: "flex", flexDirection: 'column', marginBottom: "10px" }}>
                <label htmlFor={`thickness-${index}`} style={styles.label}>
                  Thickness *
                </label>
                <input
                  id={`thickness-${index}`}
                  type="text"
                  name="thickness"
                  value={dimension.thickness}
                  onChange={(e) => handleDimensionChange(index, e)}
                  style={styles.input}
                ></input>
                </div>

                <div style={{ width: '258px', display: "flex", flexDirection: 'column', marginBottom: "10px" }}>
                <label htmlFor={`width-${index}`} style={styles.label}>
                  Width *
                </label>
                <input
                  id={`width-${index}`}
                  type="text"
                  name="width"
                  value={dimension.width}
                  onChange={(e) => handleDimensionChange(index, e)}
                  style={styles.input}
                ></input>
                </div>

                <div style={{ width: '258px', display: "flex", flexDirection: 'column', marginBottom: "10px" }}>
                <label htmlFor={`length-${index}`} style={styles.label}>
                  Length *
                </label>
                <input
                  id={`length-${index}`}
                  type="text"
                  name="length"
                  value={dimension.length}
                  onChange={(e) => handleDimensionChange(index, e)}
                  style={styles.input}
                ></input>
                </div>
            
              </span>
              <div>
              {index > 0 && (
                <button style={styles.setManagement} type="button" onClick={() => removeDimension(index)}>
                  - Remove Dimension
                </button>
              )}
              </div>
              </div>  
            ))}
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