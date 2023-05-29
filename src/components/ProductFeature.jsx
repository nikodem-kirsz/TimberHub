export default function ProductFeature({title, config, values, icon, onChange}) {
    const styles = {
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
            height: "40px",
            width: '100%'
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
          item: {
            borderTop: "1px solid #EDEDED",
            paddingTop: '38px',
            width: '100%'
          },
          label: {
            fontWeight: "700",
            fontSize: "15px",
            marginBottom: '3px'
          },
          img: {
            width: "32px",
            height: "32px",
            marginRight: '20px'
          }
    }

    function renderSelectOptions(selectOptions) {
        return selectOptions.map((selectOption, index) => {
          return <option key={`${selectOption}_${index}`} value={selectOption}>{selectOption}</option>
        })
      }
     
    function Select({name, label, options, value, onChange}) {
        return (
            <div style={styles.productFeature}>
              <label htmlFor={name} style={styles.label}>{label}</label>
              <select value={value} id={name} name={name} required={true} onChange={onChange} style={styles.input}>
                {renderSelectOptions(options)}
              </select>
            </div>
        )
    }  

    return (
        <span style={styles.item}>      
          <div style={styles.title}><img style={styles.img} src={icon} alt={`${title} Icon`}></img>{title}</div>
          <div style={styles.row}>
            {config.map((option, index) => {
                return <Select key={`${option}_${index}`} label={option.label} name={option.name} options={option.options} value={values[option.name]} onChange={onChange}/>
            })}
            </div>
        </span>
    )
}