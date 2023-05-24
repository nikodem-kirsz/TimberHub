import logo from './logo.png';
import './App.css';
import Products from './pages/Products';

const styles = {
  appLogo: {
    marginTop: "10px",
    marginLeft: "19px",
    marginBottom: "9.72px"
  },
  appHeader: {
    left: "0%",
    right: "0%",
    top: "0%",
    bottom: "93.57%",
    background: "#FFFFFF",
    boxShadow: "0px 0px 24px rgba(0, 0, 0, 0.13)"
  }
}

function App() {
  return (
    <div>
      <header style={styles.appHeader}>
        <img src={logo} style={styles.appLogo} alt="logo" />
      </header>
      <Products/>
    </div>
  );
}

export default App;
