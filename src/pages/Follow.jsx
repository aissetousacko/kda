import { Link } from 'react-router-dom'
import bannerFollow from '../assets/banner_follow.png'

const Follow = () => {
  return (
    <div className="follow">
      <h1>FOLLOW US</h1>
      <div className="follow__img">
        <img src={bannerFollow} alt="Banner follow page" />
      </div>

      <div className="follow__icons">
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
  )
}

export default Follow
