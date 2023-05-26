export default function ProductFeature({title, config, icon}) {
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
        return selectOptions.map(selectOption => {
          return <option value="volvo">{selectOption}</option>
        })
      }
     
    function Select({name, options}) {
        return (
            <div style={styles.productFeature}>
              <label style={styles.label}>{name}</label>
              <select style={styles.input}>
                {renderSelectOptions(options)}
              </select>
            </div>
        )
    }  

    return (
        <span style={styles.item}>      
          <div style={styles.title}><img style={styles.img} src={icon} alt={`${title} Icon`}></img>{title}</div>
          <div style={styles.row}>
            {config.map(option => {
                return <Select name={option.name} options={option.options}/>
            })}
            </div>
        </span>
    )
}