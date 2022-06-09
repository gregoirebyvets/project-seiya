import { Link } from "gatsby";
import React from "react";
import SupportButtonsFooter from "../buttons/SupportButtonsFooter";
import logoFooter from "../../images/logo_footer.png";
import { useKeycloak } from "@react-keycloak/web";

const Footer = () => {
  const { keycloak } = useKeycloak();

  const footerLinks = [
    {
      text: "Accueil",
      link: "/",
      secured: false,
    },
    {
      text: "Pégase",
      link: "/pegase",
      secured: false,
    },

    {
      text: "Adhésion",
      link: "/souscrire",
      secured: {
        text: "Support",
        link: "/support",
      },
    },
    {
      text: "Contacts",
      link: "/contacts",
    },
  ];
  return (
    <footer className="bg-midnight-blue-500 w-full py-6 px-4 mt-4">
      <div className="container mx-auto text-white">
        <img
          height={50}
          src={logoFooter}
          alt="Logo ByVets"
          className=" mb-8 sm:my-2 w-28 sm:w-auto sm:h-12"
        />
      </div>
      <div className=" flex justify-center gap-x-4 mb-12 sm:hidden">
        <div className="block w-12">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.557739"
              y="0.913574"
              width="46"
              height="46"
              rx="11.5"
              stroke="white"
            />
            <path
              d="M34.5281 6.79248V15.4816"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M38.9364 11.1372H30.1195"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.8353 24.9399H20.8358H25.1444V24.4404L25.1449 24.9399C26.5484 24.9386 27.9036 25.4522 28.9536 26.3835C30.0033 27.3146 30.675 28.5984 30.8414 29.9917C30.8414 29.992 30.8415 29.9923 30.8415 29.9926L31.4338 35.0541L31.4336 35.0541L31.4356 35.0679C31.4629 35.2555 31.418 35.4464 31.3101 35.6023C31.2026 35.7576 31.0405 35.8665 30.8561 35.9074C28.2701 36.4486 25.6343 36.7156 22.9923 36.7041L22.9879 36.7041C20.3467 36.7156 17.7116 36.4487 15.1263 35.9079C14.9424 35.8651 14.7808 35.7554 14.6733 35.6001C14.565 35.4437 14.5193 35.2524 14.5451 35.064L14.5452 35.064L14.5464 35.0541L15.1387 29.9926C15.1387 29.9924 15.1387 29.9923 15.1388 29.9921C15.305 28.5987 15.9768 27.3147 17.0266 26.3835C18.0766 25.4522 19.4318 24.9386 20.8353 24.9399ZM22.9901 37.2041L22.9901 37.2041L22.9901 37.2041ZM25.1444 24.4399H20.8358H25.1444Z"
              stroke="white"
            />
            <path
              d="M28.3588 17.0072C28.3588 19.9732 25.9544 22.3776 22.9884 22.3776C20.0224 22.3776 17.6179 19.9732 17.6179 17.0072C17.6179 14.0412 20.0224 11.6367 22.9884 11.6367C25.9544 11.6367 28.3588 14.0412 28.3588 17.0072Z"
              stroke="white"
            />
          </svg>
        </div>
        <div className="block w-12">
          <svg
            width="47"
            height="48"
            viewBox="0 0 47 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.500122"
              y="0.913574"
              width="46"
              height="46"
              rx="11.5"
              stroke="white"
            />
            <path
              d="M26.7937 7.73779C29.1128 8.6459 31.1135 10.2164 32.5463 12.2536C33.9609 14.2622 34.724 16.6568 34.7324 19.1134C34.7348 20.2725 34.9884 21.4174 35.4755 22.4692L37.6855 27.263L36.3384 27.6994C35.8778 27.8442 35.4739 28.1292 35.183 28.5144C34.9003 28.8941 34.7475 29.3547 34.7469 29.828V34.6219C34.7466 34.7438 34.7222 34.8645 34.675 34.9768C34.6237 35.0881 34.552 35.1885 34.4639 35.2736C34.376 35.3628 34.2697 35.4319 34.1523 35.4754C34.0367 35.5229 33.9131 35.547 33.7881 35.547H27.024L25.5858 40.4223L11.0986 36.429L13.4955 28.2794L12.8532 27.6371C11.5617 26.3398 10.5787 24.7687 9.97691 23.0398C9.37787 21.3258 9.18094 19.4967 9.40155 17.6945C9.62579 15.8876 10.2569 14.1554 11.2472 12.6276C12.252 11.0745 13.5899 9.76443 15.1638 8.79254"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M26.9122 28.8019C27.2995 28.5784 27.7476 28.4831 28.1924 28.529C28.6362 28.5699 29.0548 28.7531 29.386 29.0515C29.7127 29.3397 29.9335 29.7292 30.0126 30.1577C30.0917 30.5862 30.0246 31.0288 29.8223 31.4147C29.6104 31.8089 29.273 32.1213 28.8635 32.3019C28.458 32.4886 28.0041 32.5424 27.566 32.4563C27.128 32.3703 26.7282 32.1487 26.4235 31.8225C26.1273 31.5037 25.9451 31.0957 25.9057 30.6624C24.2423 29.6877 22.8804 28.2725 21.97 26.5731C20.9193 26.7603 19.836 26.5916 18.8921 26.0937C17.9616 25.609 17.2269 24.8184 16.8116 23.855C16.4044 22.9053 16.3467 21.8423 16.6487 20.8541C16.9625 19.8567 17.6111 18.998 18.4848 18.4235C18.4894 14.8428 18.7344 11.2665 19.2182 7.71869C19.8726 7.58205 20.5358 7.4906 21.2029 7.44529C21.531 7.41327 21.8608 7.40043 22.1905 7.4069C22.8542 7.40848 23.517 7.45345 24.175 7.54126C23.6425 11.0671 23.3702 14.6273 23.3601 18.1931C24.0327 18.5482 24.6072 19.0635 25.0331 19.6936C25.4523 20.3151 25.7047 21.0344 25.766 21.7815C25.8273 22.5287 25.6954 23.2788 25.383 23.9603C25.0635 24.6475 24.5776 25.2441 23.969 25.6958C24.6518 26.9654 25.6614 28.0294 26.8933 28.7781L26.9122 28.8019Z"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <a
          href="https://forum.byvets.be"
          target="_blank"
          rel="noreferrer"
          className="block w-12"
        >
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1.44226"
              y="0.913574"
              width="46"
              height="46"
              rx="11.5"
              stroke="white"
            />
            <path
              d="M18.6089 27.3808C18.6089 29.0334 17.2692 30.373 15.6167 30.373C13.9642 30.373 12.6245 29.0334 12.6245 27.3808C12.6245 25.7283 13.9642 24.3887 15.6167 24.3887C17.2692 24.3887 18.6089 25.7283 18.6089 27.3808Z"
              stroke="white"
            />
            <path
              d="M10.7955 38.1492L10.7956 38.1493L10.7968 38.1394L11.149 35.1299C11.247 34.352 11.6245 33.6362 12.2111 33.1159C12.7979 32.5954 13.554 32.3061 14.3383 32.3018H16.9313C17.4097 32.3033 17.8817 32.411 18.3133 32.6172C18.6011 32.7547 18.8661 32.9337 19.1002 33.1478C18.1751 34.0536 17.5821 35.2524 17.4288 36.5488L17.1564 38.8365C16.6549 38.8753 16.1371 38.8948 15.6185 38.8948L15.6164 38.8948C14.0602 38.9016 12.5077 38.7445 10.9846 38.426C10.9249 38.4116 10.8726 38.3758 10.8376 38.3253C10.8021 38.274 10.787 38.2111 10.7955 38.1492Z"
              stroke="white"
            />
            <path
              d="M36.2959 27.3808C36.2959 29.0334 34.9562 30.373 33.3037 30.373C31.6512 30.373 30.3115 29.0334 30.3115 27.3808C30.3115 25.7283 31.6512 24.3887 33.3037 24.3887C34.9562 24.3887 36.2959 25.7283 36.2959 27.3808Z"
              stroke="white"
            />
            <path
              d="M34.586 32.3018L34.5855 32.3018L31.9905 32.3018L34.586 32.3018ZM34.586 32.3018C35.3713 32.301 36.1295 32.5884 36.717 33.1095C37.3044 33.6304 37.6802 34.3487 37.7733 35.1283C37.7734 35.1285 37.7734 35.1287 37.7734 35.1289L38.1256 38.1708L38.1265 38.178L38.1275 38.1852C38.1364 38.2461 38.1218 38.3081 38.0868 38.3587C38.0521 38.4088 37.9998 38.4441 37.9404 38.4575C36.4164 38.7763 34.8631 38.9337 33.3061 38.9269V38.9269M34.586 32.3018L33.3061 38.9269M33.3061 38.9269H33.304M33.3061 38.9269H33.304M33.304 38.9269C32.7854 38.9269 32.2676 38.9074 31.7661 38.8686L31.4937 36.5808C31.34 35.281 30.7442 34.0793 29.8149 33.1726C30.0481 32.9506 30.3145 32.765 30.6054 32.6227C31.0367 32.4119 31.5103 32.3021 31.9904 32.3018L33.304 38.9269Z"
              stroke="white"
            />
            <path
              d="M23.1788 34.064H23.1793H25.7424V33.564L25.7428 34.064C26.5281 34.0632 27.2864 34.3506 27.8739 34.8717C28.4613 35.3927 28.8371 36.111 28.9302 36.8906C28.9302 36.8908 28.9303 36.8909 28.9303 36.8911L29.2826 39.9016L29.2824 39.9016L29.2844 39.9154C29.2932 39.9763 29.2787 40.0383 29.2436 40.0888C29.2089 40.139 29.1567 40.1742 29.0972 40.1877C27.5733 40.5065 26.0199 40.6638 24.463 40.657L24.4586 40.6571C22.9025 40.6638 21.35 40.5067 19.8268 40.1882C19.7672 40.1738 19.7149 40.138 19.6799 40.0875C19.6443 40.0362 19.6293 39.9733 19.6378 39.9115L19.6379 39.9115L19.6391 39.9016L19.9914 36.8911C19.9914 36.8909 19.9914 36.8907 19.9914 36.8905C20.0845 36.111 20.4604 35.3926 21.0477 34.8717C21.6352 34.3506 22.3935 34.0632 23.1788 34.064Z"
              stroke="white"
            />
            <path
              d="M27.4536 29.1431C27.4536 30.7956 26.1139 32.1352 24.4614 32.1352C22.8089 32.1352 21.4692 30.7956 21.4692 29.1431C21.4692 27.4905 22.8089 26.1509 24.4614 26.1509C26.1139 26.1509 27.4536 27.4905 27.4536 29.1431Z"
              stroke="white"
            />
            <path
              d="M21.7412 19.1712L21.6024 18.897H21.2951H16.7043C16.2399 18.8911 15.7966 18.7018 15.4713 18.3702C15.1453 18.0381 14.9642 17.5903 14.9677 17.1249H14.9677V17.1212V8.90506C14.9716 8.44597 15.1557 8.00675 15.4804 7.68208C15.805 7.35741 16.2442 7.17332 16.7033 7.16943H32.2506C32.7097 7.17332 33.1489 7.35741 33.4735 7.68208C33.7982 8.00677 33.9823 8.44601 33.9862 8.90512V17.1613C33.9823 17.6204 33.7982 18.0596 33.4735 18.3843C33.1489 18.709 32.7097 18.8931 32.2506 18.897H27.6588H27.3515L27.2127 19.1712L25.4863 22.5819C25.4861 22.5823 25.4859 22.5828 25.4856 22.5832C25.3902 22.7681 25.2458 22.9232 25.0681 23.0315C24.8901 23.1402 24.6855 23.1976 24.477 23.1976C24.2684 23.1976 24.0638 23.1402 23.8858 23.0315C23.7081 22.9232 23.5637 22.7681 23.4683 22.5832C23.468 22.5828 23.4678 22.5823 23.4676 22.5819L21.7412 19.1712Z"
              stroke="white"
            />
          </svg>
        </a>
      </div>
      <div className="flex container mx-auto text-white ">
        <div className="font-light my-2 mr-4 w-1/2 sm:w-1/4 ">
          <div>
            <span className="block text-xs font-semibold leading-5">
              ByVets
            </span>
            <span className="block text-xs font-light leading-5 mb-2">
              Société Coopérative
            </span>
            <span className="block text-xs font-semibold leading-5">
              Numéro d'entreprise
            </span>
            <span className="block text-xs font-light leading-5 mb-2">
              0753 452 052
            </span>
            <span className="block text-xs font-semibold leading-5">
              Siège social
            </span>
            <span className="block text-xs font-light leading-5">
              67, Rue Joseph Wauters
            </span>
            <span className="block text-xs font-light leading-5 mb-2">
              B-4500 Huy
            </span>
          </div>
          <div className="flex mt-4 ">
            {/* <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              className="mr-2"
            >
              <svg
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.2246 2.29291H8.39128C5.39973 2.29291 2.97461 4.71803 2.97461 7.70957V18.5429C2.97461 21.5345 5.39973 23.9596 8.39128 23.9596H19.2246C22.2162 23.9596 24.6413 21.5345 24.6413 18.5429V7.70957C24.6413 4.71803 22.2162 2.29291 19.2246 2.29291Z"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.1413 12.4437C18.275 13.3453 18.121 14.2661 17.7012 15.0752C17.2814 15.8842 16.6172 16.5403 15.803 16.9501C14.9889 17.3598 14.0663 17.5025 13.1664 17.3577C12.2665 17.2129 11.4352 16.788 10.7907 16.1435C10.1462 15.499 9.72133 14.6677 9.57652 13.7678C9.43172 12.8679 9.57435 11.9453 9.98414 11.1311C10.3939 10.317 11.05 9.65279 11.859 9.233C12.668 8.81321 13.5889 8.65921 14.4905 8.79291C15.4101 8.92928 16.2615 9.35783 16.919 10.0152C17.5764 10.6727 18.0049 11.5241 18.1413 12.4437Z"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.7666 7.16791H19.7779"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a> */}
            <a
              href="https://www.linkedin.com/company/byvets"
              className="mx-2"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width="25"
                height="27"
                viewBox="0 0 25 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.8081 8.79291C18.3994 8.79291 19.9255 9.47773 21.0507 10.6967C22.176 11.9157 22.8081 13.569 22.8081 15.2929V22.8762H18.8081V15.2929C18.8081 14.7183 18.5974 14.1672 18.2223 13.7608C17.8472 13.3545 17.3385 13.1262 16.8081 13.1262C16.2777 13.1262 15.769 13.3545 15.3939 13.7608C15.0188 14.1672 14.8081 14.7183 14.8081 15.2929V22.8762H10.8081V15.2929C10.8081 13.569 11.4402 11.9157 12.5655 10.6967C13.6907 9.47773 15.2168 8.79291 16.8081 8.79291V8.79291Z"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.80811 9.87622H2.80811V22.8762H6.80811V9.87622Z"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.80811 6.62624C5.91267 6.62624 6.80811 5.65619 6.80811 4.45957C6.80811 3.26296 5.91267 2.29291 4.80811 2.29291C3.70354 2.29291 2.80811 3.26296 2.80811 4.45957C2.80811 5.65619 3.70354 6.62624 4.80811 6.62624Z"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="font-light my-2 mr-4 w-1/2 sm:w-1/4 ">
          <div>
            <span className="block text-xs font-semibold leading-5">
              Administration
            </span>

            <span className="block text-xs font-light leading-5">
              <a href="mailto:administration@byvets.be">
                administration@byvets.be
              </a>
            </span>
            <span className="block text-xs font-light leading-5 mb-2">
              <a href="tel:+3285250825">+ 32 85 25 08 25</a>
            </span>
            <span className="block text-xs font-semibold leading-5">
              Support - Logiciel
            </span>

            <span className="block text-xs font-light leading-5">
              <a href="mailto:pegase@byvets.be">pegase@byvets.be</a>
            </span>
            <span className="block text-xs font-light leading-5 mb-2">
              <a href="tel:+32476252536">+32 476 25 25 36</a>
            </span>
          </div>
        </div>
        <div className="hidden sm:block m-4 w-1/4">
          <SupportButtonsFooter vertical />
        </div>
        <div className="flex flex-col text-sm m-4 w-1/2 sm:w-1/4">
          {footerLinks.map((fl, i) => {
            if (fl.secured) {
              return (
                <div key={i} className="mb-2">
                  {keycloak.authenticated ? (
                    <Link key={i} to={fl.secured.link} className="mb-2">
                      {fl.secured.text}
                    </Link>
                  ) : (
                    <Link key={i} to={fl.link} className="mb-2">
                      {fl.text}
                    </Link>
                  )}
                </div>
              );
            }
            return (
              <div className="mb-2">
                <Link key={i} to={fl.link} className="mb-2">
                  {fl.text}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className="container mx-auto text-white text-xs font-light mt-4"
        style={{ color: "#617DA4" }}
      >
        <span className="mr-2">Copyright © 2021-2022 ByVets sc</span> |
        <Link to="/politique-vie-privee" className="mx-2">
          Politique de Protection de la Vie Privée (RGDP)
        </Link>
        |
        <Link to="/mentions-legales" className="mx-2">
          Mentions légales
        </Link>
        |
        <Link to="/conditions-generales-de-vente" className="mx-2">
          Conditions générales de vente
        </Link>
        |
        <Link to="/disclaimer" className="ml-2">
          Disclaimer
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
