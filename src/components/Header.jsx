import Navbar from './Navbar'
import logo from '../assets/logo_black.png'
import darkIcon from '../assets/icons/icon_dark.png'

const Header = () => {
  window.addEventListener('scroll', function () {
    let header = this.document.querySelector('.header')
    header.classList.toggle('sticky', this.window.scrollY > 0)
  })

  return (
    <div className="header">
      <img src={logo} alt="Logo K/DA " className="header__logo" />

      <Navbar />

      <img
        src={darkIcon}
        alt="Switch dark mode button"
        className="switch-btn btn-moon"
      />
    </div>
  )
}

export default Header
