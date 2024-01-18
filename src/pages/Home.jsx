import arrowIcon from '../assets/icons/icon_arrow.png'
import bannerHome from '../assets/banner_home-3.png'
import bannerDiscover from '../assets/banner_discover.png'
import { Link } from 'react-router-dom'
// import appleIcon from '../assets/icons/icon_apple.png'

const Home = () => {
  return (
    <div className="home">
      <div className="home__banner">
        <img
          src={bannerHome}
          alt="Banner Home page"
          className="home__img--girls"
        />

        <Link to="/listen" className="listen-btn">
          Listen them now
          <img src={arrowIcon} alt="Arrow icon" />
        </Link>
      </div>

      <div className="home__listen">
        <h1>LISTEN ON</h1>
        <div className="listen-icons">
          <Link
            to="https://music.apple.com/us/artist/k-da/1439420229"
            className="icons"
            target="_blank"
          >
            <svg
              width="116"
              height="114"
              viewBox="0 0 116 114"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_528_808)">
                <path
                  d="M81.6971 14.25H33.6399C23.0673 14.25 14.417 22.8 14.417 33.25V80.75C14.417 91.2 23.0673 99.75 33.6399 99.75H81.6971C92.2696 99.75 100.92 91.2 100.92 80.75V33.25C100.92 22.8 92.2696 14.25 81.6971 14.25ZM81.6971 71.25H81.649C81.6971 71.44 81.6971 71.63 81.6971 71.82C81.6971 76.76 76.3147 80.75 69.6828 80.75C63.0509 80.75 57.6685 76.19 57.6685 71.25C57.6685 66.3575 62.4742 61.75 67.2799 61.75C68.0969 61.75 72.0856 61.75 72.0856 61.75V45.125L52.8627 49.875V76H52.8147C52.8627 76.19 52.8627 76.38 52.8627 76.57C52.8627 81.51 47.4803 85.5 40.8484 85.5C34.2166 85.5 28.8342 80.94 28.8342 76C28.8342 71.1075 33.6399 66.5 38.4456 66.5C39.2626 66.5 43.2513 66.5 43.2513 66.5C43.2513 61.75 43.2513 41.705 43.2513 41.705C43.2513 39.52 44.7411 37.62 46.9037 37.0975L75.738 29.9725C78.7656 29.2125 81.6971 31.4925 81.6971 34.58V71.25Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_528_808"
                  x="10.417"
                  y="14.25"
                  width="94.5029"
                  height="95.5"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="6" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_528_808"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_528_808"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </Link>

          <Link
            to="https://open.spotify.com/intl-fr/artist/4gOc8TsQed9eqnqJct2c5v"
            className="icons"
            target="_blank"
          >
            <svg
              width="116"
              height="114"
              viewBox="0 0 116 114"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_528_806)">
                <path
                  d="M58.2228 11.4001C32.8486 11.4001 12.0879 31.9201 12.0879 57.0001C12.0879 82.0801 32.8486 102.6 58.2228 102.6C83.597 102.6 104.358 82.0801 104.358 57.0001C104.358 31.9201 83.597 11.4001 58.2228 11.4001ZM76.4115 79.8001C75.5657 79.8001 75.1428 79.3821 74.297 78.9641C67.9534 75.1983 59.9183 73.1121 51.4602 73.1121C46.8083 73.1121 41.7334 73.9481 37.5044 74.7841C36.6586 74.7841 35.8128 75.2021 35.3899 75.2021C33.6982 75.2021 32.4295 73.9481 32.4295 72.2761C32.4295 70.6041 33.2753 69.3501 34.967 69.3501C40.4647 68.0961 45.9663 67.2601 51.8869 67.2601C61.6137 67.2601 70.4947 69.7681 78.1069 73.9481C78.9527 74.7841 79.7985 75.2021 79.7985 76.8741C78.9451 78.9641 77.6763 79.8001 76.4115 79.8001ZM81.0596 68.0999C80.2138 68.0999 79.368 67.6819 78.5222 67.2639C71.3328 62.6659 61.1793 60.1579 50.1876 60.1579C44.6899 60.1579 39.6112 60.9939 35.8089 61.8299C34.9631 62.2479 34.5402 62.2479 33.6944 62.2479C31.5799 62.2479 30.3073 60.5759 30.3073 58.9001C30.3073 56.8101 31.1531 55.9741 33.2677 55.1343C38.3425 53.8803 43.4212 52.6263 50.6105 52.6263C62.4518 52.6263 73.4473 55.5523 82.755 60.9863C84.0237 61.8223 84.8695 63.0763 84.8695 64.3341C84.4428 66.4241 83.1779 68.0999 81.0596 68.0999ZM86.5573 54.7201C85.7115 54.7201 85.2886 54.3021 84.0199 53.8841C75.5618 49.2861 63.2976 46.3601 51.4563 46.3601C45.5357 46.3601 39.1921 47.1961 33.6906 48.4501C32.8448 48.4501 32.4218 48.8681 31.1531 48.8681C28.6157 49.2899 26.9241 47.1961 26.9241 44.6919C26.9241 42.1877 28.1928 40.9261 29.8844 40.5119C36.6547 38.8361 43.8441 38.0001 51.4563 38.0001C64.5663 38.0001 78.0992 40.9261 88.6757 46.3601C89.9444 47.1961 91.2131 48.4501 91.2131 50.5401C90.7902 53.0481 89.0947 54.7201 86.5573 54.7201Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_528_806"
                  x="8.08789"
                  y="11.4001"
                  width="100.27"
                  height="100.2"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="5" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_528_806"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_528_806"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </Link>

          <Link
            to="https://music.youtube.com/channel/UCDsvjvBRosWw8F5eynK0HTQ"
            className="icons"
            target="_blank"
          >
            <svg
              width="116"
              height="114"
              viewBox="0 0 116 114"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_528_804)">
                <path
                  d="M103.826 29.3835C102.72 25.2985 99.4622 22.078 95.3293 20.9855C87.8324 19 57.7774 19 57.7774 19C57.7774 19 27.7224 19 20.2255 20.9855C16.0926 22.078 12.8343 25.2985 11.729 29.3835C9.72021 36.7935 9.72021 57 9.72021 57C9.72021 57 9.72021 77.2065 11.729 84.6165C12.8343 88.7015 16.0926 91.922 20.2255 93.0145C27.7224 95 57.7774 95 57.7774 95C57.7774 95 87.8324 95 95.3293 93.0145C99.467 91.922 102.72 88.7015 103.826 84.6165C105.835 77.2065 105.835 57 105.835 57C105.835 57 105.835 36.7935 103.826 29.3835ZM48.166 73.454V40.546L77.0003 57L48.166 73.454Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_528_804"
                  x="5.72021"
                  y="19"
                  width="104.114"
                  height="86"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="6" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_528_804"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_528_804"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </Link>

          <Link
            to="https://www.deezer.com/fr/artist/52823842"
            className="icons"
            target="_blank"
          >
            <svg
              width="116"
              height="114"
              viewBox="0 0 116 114"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_528_802)">
                <path
                  d="M91.9711 23.75V28.5H106.388V23.75H91.9711ZM53.5253 33.25V38H67.9425V33.25H53.5253ZM91.9711 33.25V38H106.388V33.25H91.9711ZM53.5253 42.75V47.5H67.9425V42.75H53.5253ZM91.9711 42.75V47.5H106.388V42.75H91.9711ZM15.0796 52.25V57H29.4967V52.25H15.0796ZM53.5253 52.25V57H67.9425V52.25H53.5253ZM72.7482 52.25V57H87.1654V52.25H72.7482ZM91.9711 52.25V57H106.388V52.25H91.9711ZM15.0796 61.75V66.5H29.4967V61.75H15.0796ZM53.5253 61.75V66.5H67.9425V61.75H53.5253ZM72.7482 61.75V66.5H87.1654V61.75H72.7482ZM91.9711 61.75V66.5H106.388V61.75H91.9711ZM15.0796 71.25V76H29.4967V71.25H15.0796ZM34.3025 71.25V76H48.7196V71.25H34.3025ZM53.5253 71.25V76H67.9425V71.25H53.5253ZM72.7482 71.25V76H87.1654V71.25H72.7482ZM91.9711 71.25V76H106.388V71.25H91.9711ZM15.0796 80.75V85.5H29.4967V80.75H15.0796ZM34.3025 80.75V85.5H48.7196V80.75H34.3025ZM53.5253 80.75V85.5H67.9425V80.75H53.5253ZM72.7482 80.75V85.5H87.1654V80.75H72.7482ZM91.9711 80.75V85.5H106.388V80.75H91.9711ZM15.0796 90.25V95H29.4967V90.25H15.0796ZM34.3025 90.25V95H48.7196V90.25H34.3025ZM53.5253 90.25V95H67.9425V90.25H53.5253ZM72.7482 90.25V95H87.1654V90.25H72.7482ZM91.9711 90.25V95H106.388V90.25H91.9711Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_528_802"
                  x="11.0796"
                  y="23.75"
                  width="99.3086"
                  height="81.25"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="6" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_528_802"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_528_802"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </Link>
        </div>
      </div>

      <div className="home__last-video">
        <h1>LAST VIDEO</h1>
        <div className="home__last-video-video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/3VTkBuxU4yk?si=hvVq7oZ6GOc8PhyH"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="home__discover">
        <h1>THE GIRLS</h1>
        <div className="home__discover-content">
          <div className="home__discover-img">
            <img src={bannerDiscover} alt="The girls" />
          </div>
          <div className="home__discover-description">
            <p>
              Individually unique, together unstoppable! Get ready to be
              mesmerized as we present the sensational stars of K/DA – where
              harmony meets individuality, and talent shines as one!
            </p>
            <Link to="/the-girls" className="home__discover-button">
              Discover them now
              <img src={arrowIcon} alt="Arrow icon" />
            </Link>
          </div>
        </div>
      </div>

      <div className="home__follow">
        <h1>FOLLOW US</h1>
        <div className="home__follow-icons">
          <Link
            to="https://www.instagram.com/kda_music/"
            className="icons"
            target="_blank"
          >
            <svg
              width="114"
              height="112"
              viewBox="0 0 114 112"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_528_820)">
                <path
                  d="M38 14C24.8853 14 14.25 24.4487 14.25 37.3333V74.6667C14.25 87.5513 24.8853 98 38 98H76C89.1147 98 99.75 87.5513 99.75 74.6667V37.3333C99.75 24.4487 89.1147 14 76 14H38ZM85.5 23.3333C88.122 23.3333 90.25 25.424 90.25 28C90.25 30.576 88.122 32.6667 85.5 32.6667C82.878 32.6667 80.75 30.576 80.75 28C80.75 25.424 82.878 23.3333 85.5 23.3333ZM57 32.6667C70.1147 32.6667 80.75 43.1153 80.75 56C80.75 68.8847 70.1147 79.3333 57 79.3333C43.8853 79.3333 33.25 68.8847 33.25 56C33.25 43.1153 43.8853 32.6667 57 32.6667ZM57 42C53.2207 42 49.5961 43.475 46.9237 46.1005C44.2513 48.726 42.75 52.287 42.75 56C42.75 59.713 44.2513 63.274 46.9237 65.8995C49.5961 68.525 53.2207 70 57 70C60.7793 70 64.4039 68.525 67.0763 65.8995C69.7487 63.274 71.25 59.713 71.25 56C71.25 52.287 69.7487 48.726 67.0763 46.1005C64.4039 43.475 60.7793 42 57 42Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_528_820"
                  x="10.25"
                  y="14"
                  width="93.5"
                  height="94"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="6" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_528_820"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_528_820"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </Link>

          <Link
            to="https://twitter.com/KDA_MUSIC"
            className="icons"
            target="_blank"
          >
            <svg
              width="114"
              height="112"
              viewBox="0 0 114 112"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_528_818)">
                <path
                  d="M104.5 18.662C100.795 20.8227 93.3613 23.7673 88.9913 24.6167C88.863 24.6493 88.7585 24.6913 88.635 24.724C84.7732 20.9813 79.4818 18.662 73.625 18.662C61.8213 18.662 52.25 28.0653 52.25 39.662C52.25 40.2733 52.1978 41.398 52.25 41.9953C36.3232 41.9953 24.2013 33.8007 15.5088 23.3287C14.5635 25.662 14.1503 29.3487 14.1503 32.8113C14.1503 39.3493 19.3515 45.7707 27.4502 49.7513C25.9587 50.1293 24.3152 50.4 22.6052 50.4C19.8455 50.4 16.9243 49.686 14.25 47.5207C14.25 47.6 14.25 47.6747 14.25 47.7587C14.25 56.896 24.1205 63.1167 32.8985 64.848C31.1173 65.8793 27.5263 65.982 25.7735 65.982C24.5385 65.982 20.1685 65.4267 19 65.212C21.4415 72.702 30.248 76.9113 38.6413 77.0607C32.0768 82.1193 27.5215 83.9953 14.079 83.9953H9.5C17.993 89.3433 28.8088 93.3333 39.6483 93.3333C74.9408 93.3333 95 66.906 95 41.9953C95 41.594 94.9905 40.754 94.9763 39.9093C94.9763 39.8253 95 39.746 95 39.662C95 39.536 94.962 39.4147 94.962 39.2887C94.9478 38.654 94.9335 38.0613 94.9193 37.7533C98.6718 35.0933 101.925 31.7753 104.5 27.9953C101.056 29.498 97.3607 30.506 93.48 30.9633C97.4415 28.63 103.07 23.0673 104.5 18.662Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_528_818"
                  x="5.5"
                  y="18.662"
                  width="103"
                  height="84.6714"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="6" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_528_818"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_528_818"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </Link>

          <Link
            to="https://www.tiktok.com/@kda_music?lang=en"
            className="icons"
            target="_blank"
          >
            <svg
              width="114"
              height="112"
              viewBox="0 0 114 112"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_528_816)">
                <path
                  d="M28.5 14C20.6864 14 14.25 20.3235 14.25 28V84C14.25 91.6765 20.6864 98 28.5 98H85.5C93.3136 98 99.75 91.6765 99.75 84V28C99.75 20.3235 93.3136 14 85.5 14H28.5ZM57 32.6667H66.5C66.5 37.3567 73.4873 42 76 42V51.3333C73.1263 51.3333 69.673 50.0927 66.5 47.9974V65.3333C66.5 73.052 60.1065 79.3333 52.25 79.3333C44.3935 79.3333 38 73.052 38 65.3333C38 57.6147 44.3935 51.3333 52.25 51.3333V60.6667C49.628 60.6667 47.5 62.762 47.5 65.3333C47.5 67.9047 49.628 70 52.25 70C54.872 70 57 67.9047 57 65.3333V32.6667Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_528_816"
                  x="10.25"
                  y="14"
                  width="93.5"
                  height="94"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="6" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_528_816"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_528_816"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
