import Navbar from './Navbar'
import logoBlack from '../assets/logo_black.png'
import logoWhite from '../assets/logo_white.png'
import darkIcon from '../assets/icons/icon_dark.png'
import lightIcon from '../assets/icons/icon_light.png'
import { useContext } from 'react'
import { DarkModeContext } from '../context/DarkModeContext'

const Header = () => {
  const { darkMode, toggle } = useContext(DarkModeContext)

  return (
    <div className="header">
      <img
        src={darkMode ? logoWhite : logoBlack}
        alt="Logo K/DA "
        className="header__logo"
      />

      <Navbar />

      <img
        src={darkMode ? lightIcon : darkIcon}
        alt="Switch dark mode button"
        className="switch-btn"
        onClick={toggle}
      />
    </div>
  )
}

export default Header
