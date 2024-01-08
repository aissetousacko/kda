// import logo from '../assets/logo_black.png'
// import darkIcon from '../assets/icons/icon_dark.png'
import arrowIcon from '../assets/icons/icon_arrow.png'
import bannerHome from '../assets/banner_home-3.png'

const Home = () => {
  window.addEventListener('scroll', function () {
    let header = this.document.querySelector('.header')
    header.classList.toggle('sticky', this.window.scrollY > 0)
  })

  return (
    <div className="home">
      {/* <div className="dark-rect"></div> */}

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

export default Home