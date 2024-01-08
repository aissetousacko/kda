import arrowIcon from '../assets/icons/icon_arrow.png'
import bannerHome from '../assets/banner_home-3.png'
import logoBanner from '../assets/logo_banner.png'

const Home = () => {
  return (
    <div className="home">
      <div className="dark-rect"></div>

      <div className="home__banner">
        <img
          src={bannerHome}
          alt="Banner Home page"
          className="home__img--girls"
        />

        <img
          src={logoBanner}
          alt="K/DA White logo"
          className="home__img--logo"
        />

        <button className="listen">
          Listen them now
          <img src={arrowIcon} alt="Arrow icon" />
        </button>
      </div>
    </div>
  )
}

export default Home
