import logo from './icons/logo.png';
import Products from './pages/Products';
import BurgerMenu from './components/BurgerMenu';
import { useState } from 'react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const styles = {
    appLogo: {
      marginTop: "10px",
      marginLeft: "19px",
      marginBottom: "9.72px"
    },
    appHeader: {
      background: "#FFFFFF",
      boxShadow: "0px 0px 24px rgba(0, 0, 0, 0.13)"
    },
    container: {
      opacity: isMenuOpen ? 0.3 : 1,
      transition: 'opacity 0.3s ease-out',
    }
  }

  return (
    <div>
      <BurgerMenu onToggleMenu={() => setIsMenuOpen(!isMenuOpen)} />
      <div style={styles.container}>
        <header style={styles.appHeader}>
          <img src={logo} style={styles.appLogo} alt="logo" />
        </header>
        <Products />
      </div>
    </div>
  );
}

export default App;
