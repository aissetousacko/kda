import arrowIcon from '../assets/icons/icon_arrow.png'
import bannerHome from '../assets/banner_home-3.png'
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

        <button className="listen">
          Listen them now
          <img src={arrowIcon} alt="Arrow icon" />
        </button>
      </div>

      <div className="home__listen">
        <h1>LISTEN ON</h1>
        <div className="home__listen-icons">
          <div className="icons">
            <svg
              width="116"
              height="114"
              viewBox="0 0 116 114"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_528_808)">
                <path
                  d="M81.6971 14.25H33.6399C23.0673 14.25 14.417 22.8 14.417 33.25V80.75C14.417 91.2 23.0673 99.75 33.6399 99.75H81.6971C92.2696 99.75 100.92 91.2 100.92 80.75V33.25C100.92 22.8 92.2696 14.25 81.6971 14.25ZM81.6971 71.25H81.649C81.6971 71.44 81.6971 71.63 81.6971 71.82C81.6971 76.76 76.3147 80.75 69.6828 80.75C63.0509 80.75 57.6685 76.19 57.6685 71.25C57.6685 66.3575 62.4742 61.75 67.2799 61.75C68.0969 61.75 72.0856 61.75 72.0856 61.75V45.125L52.8627 49.875V76H52.8147C52.8627 76.19 52.8627 76.38 52.8627 76.57C52.8627 81.51 47.4803 85.5 40.8484 85.5C34.2166 85.5 28.8342 80.94 28.8342 76C28.8342 71.1075 33.6399 66.5 38.4456 66.5C39.2626 66.5 43.2513 66.5 43.2513 66.5C43.2513 61.75 43.2513 41.705 43.2513 41.705C43.2513 39.52 44.7411 37.62 46.9037 37.0975L75.738 29.9725C78.7656 29.2125 81.6971 31.4925 81.6971 34.58V71.25Z"
                  fill="black"
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
          </div>

          <div className="icons">
            <svg
              width="116"
              height="114"
              viewBox="0 0 116 114"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_528_806)">
                <path
                  d="M58.2228 11.4001C32.8486 11.4001 12.0879 31.9201 12.0879 57.0001C12.0879 82.0801 32.8486 102.6 58.2228 102.6C83.597 102.6 104.358 82.0801 104.358 57.0001C104.358 31.9201 83.597 11.4001 58.2228 11.4001ZM76.4115 79.8001C75.5657 79.8001 75.1428 79.3821 74.297 78.9641C67.9534 75.1983 59.9183 73.1121 51.4602 73.1121C46.8083 73.1121 41.7334 73.9481 37.5044 74.7841C36.6586 74.7841 35.8128 75.2021 35.3899 75.2021C33.6982 75.2021 32.4295 73.9481 32.4295 72.2761C32.4295 70.6041 33.2753 69.3501 34.967 69.3501C40.4647 68.0961 45.9663 67.2601 51.8869 67.2601C61.6137 67.2601 70.4947 69.7681 78.1069 73.9481C78.9527 74.7841 79.7985 75.2021 79.7985 76.8741C78.9451 78.9641 77.6763 79.8001 76.4115 79.8001ZM81.0596 68.0999C80.2138 68.0999 79.368 67.6819 78.5222 67.2639C71.3328 62.6659 61.1793 60.1579 50.1876 60.1579C44.6899 60.1579 39.6112 60.9939 35.8089 61.8299C34.9631 62.2479 34.5402 62.2479 33.6944 62.2479C31.5799 62.2479 30.3073 60.5759 30.3073 58.9001C30.3073 56.8101 31.1531 55.9741 33.2677 55.1343C38.3425 53.8803 43.4212 52.6263 50.6105 52.6263C62.4518 52.6263 73.4473 55.5523 82.755 60.9863C84.0237 61.8223 84.8695 63.0763 84.8695 64.3341C84.4428 66.4241 83.1779 68.0999 81.0596 68.0999ZM86.5573 54.7201C85.7115 54.7201 85.2886 54.3021 84.0199 53.8841C75.5618 49.2861 63.2976 46.3601 51.4563 46.3601C45.5357 46.3601 39.1921 47.1961 33.6906 48.4501C32.8448 48.4501 32.4218 48.8681 31.1531 48.8681C28.6157 49.2899 26.9241 47.1961 26.9241 44.6919C26.9241 42.1877 28.1928 40.9261 29.8844 40.5119C36.6547 38.8361 43.8441 38.0001 51.4563 38.0001C64.5663 38.0001 78.0992 40.9261 88.6757 46.3601C89.9444 47.1961 91.2131 48.4501 91.2131 50.5401C90.7902 53.0481 89.0947 54.7201 86.5573 54.7201Z"
                  fill="black"
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
          </div>

          <div className="icons">
            <svg
              width="116"
              height="114"
              viewBox="0 0 116 114"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_528_804)">
                <path
                  d="M103.826 29.3835C102.72 25.2985 99.4622 22.078 95.3293 20.9855C87.8324 19 57.7774 19 57.7774 19C57.7774 19 27.7224 19 20.2255 20.9855C16.0926 22.078 12.8343 25.2985 11.729 29.3835C9.72021 36.7935 9.72021 57 9.72021 57C9.72021 57 9.72021 77.2065 11.729 84.6165C12.8343 88.7015 16.0926 91.922 20.2255 93.0145C27.7224 95 57.7774 95 57.7774 95C57.7774 95 87.8324 95 95.3293 93.0145C99.467 91.922 102.72 88.7015 103.826 84.6165C105.835 77.2065 105.835 57 105.835 57C105.835 57 105.835 36.7935 103.826 29.3835ZM48.166 73.454V40.546L77.0003 57L48.166 73.454Z"
                  fill="black"
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
          </div>

          <div className="icons">
            <svg
              width="116"
              height="114"
              viewBox="0 0 116 114"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_528_802)">
                <path
                  d="M91.9711 23.75V28.5H106.388V23.75H91.9711ZM53.5253 33.25V38H67.9425V33.25H53.5253ZM91.9711 33.25V38H106.388V33.25H91.9711ZM53.5253 42.75V47.5H67.9425V42.75H53.5253ZM91.9711 42.75V47.5H106.388V42.75H91.9711ZM15.0796 52.25V57H29.4967V52.25H15.0796ZM53.5253 52.25V57H67.9425V52.25H53.5253ZM72.7482 52.25V57H87.1654V52.25H72.7482ZM91.9711 52.25V57H106.388V52.25H91.9711ZM15.0796 61.75V66.5H29.4967V61.75H15.0796ZM53.5253 61.75V66.5H67.9425V61.75H53.5253ZM72.7482 61.75V66.5H87.1654V61.75H72.7482ZM91.9711 61.75V66.5H106.388V61.75H91.9711ZM15.0796 71.25V76H29.4967V71.25H15.0796ZM34.3025 71.25V76H48.7196V71.25H34.3025ZM53.5253 71.25V76H67.9425V71.25H53.5253ZM72.7482 71.25V76H87.1654V71.25H72.7482ZM91.9711 71.25V76H106.388V71.25H91.9711ZM15.0796 80.75V85.5H29.4967V80.75H15.0796ZM34.3025 80.75V85.5H48.7196V80.75H34.3025ZM53.5253 80.75V85.5H67.9425V80.75H53.5253ZM72.7482 80.75V85.5H87.1654V80.75H72.7482ZM91.9711 80.75V85.5H106.388V80.75H91.9711ZM15.0796 90.25V95H29.4967V90.25H15.0796ZM34.3025 90.25V95H48.7196V90.25H34.3025ZM53.5253 90.25V95H67.9425V90.25H53.5253ZM72.7482 90.25V95H87.1654V90.25H72.7482ZM91.9711 90.25V95H106.388V90.25H91.9711Z"
                  fill="black"
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
