import logo from './assets/logo_black.png'
import darkIcon from './assets/icons/icon_dark.png'
import arrowIcon from './assets/icons/icon_arrow.png'
import bannerHome from './assets/banner_home.png'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="home">
      <div className="header">
        <img src={logo} alt="Logo K/DA " className="header__img" />

        <Navbar />

        <img
          src={darkIcon}
          alt="Switch dark mode button"
          className="switch-btn btn-moon"
        />
      </div>

      <div className="home__banner">
        <img src={bannerHome} alt="Banner Home page" />

        <button className="listen">
          Listen them now
          <img src={arrowIcon} alt="Arrow icon" />
        </button>
      </div>
    </div>
  )
}

export default App
