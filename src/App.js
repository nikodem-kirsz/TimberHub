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
