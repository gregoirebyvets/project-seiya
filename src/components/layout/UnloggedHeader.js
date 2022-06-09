import { navigate } from "@reach/router";
import { useKeycloak } from "@react-keycloak/web";
import { Link } from "gatsby";
import React, { useState } from "react";
import ReactModal from "react-modal";
import HeaderLinkMobile from "../links/HeaderLinkMobile";
import logo from "../../images/icon.png";
import HeaderButton from "../buttons/HeaderButton";
import HeaderLink from "../links/HeaderLink";
const UnloggedHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { keycloak, initialized } = useKeycloak();
  const goToPage = (page) => {
    setIsMobileMenuOpen(false);
    navigate(page);
  };
  const goToExternal = (page) => {
    setIsMobileMenuOpen(false);
    window.location = page;
  };

  const headerLinks = [
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
      text: "News",
      link: "/news",
      secured: false,
    },
    {
      text: "Contacts",
      link: "/contacts",
    },
  ];

  return (
    <React.Fragment>
      <ReactModal
        isOpen={isMobileMenuOpen}
        ariaHideApp={false}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            zIndex: 100,
          },
          content: {
            borderRadius: "30px",
            height: "auto",
            inset: "10px 20px auto 20px",
            boxShadow: "0px 20px 30px rgba(20, 43, 50, 0.1)",
            zIndex: "150",
            maxWidth: "1144px",
            margin: "auto",
          },
        }}
      >
        <div className="text-right">
          <svg
            width="28"
            height="29"
            viewBox="0 0 28 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => {
              setIsMobileMenuOpen(false);
            }}
            className="cursor-pointer ml-auto"
          >
            <path
              d="M4.95898 5.20996L23.1665 23.894"
              stroke="#002E6D"
              strokeWidth="9"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M23.1665 5.20996L4.95898 23.894"
              stroke="#002E6D"
              strokeWidth="9"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="flex justify-center gap-x-9 my-4">
          <div>
            <button
              type="button"
              onClick={() => goToPage("/souscrire")}
              className="border border-grayts h-16 w-16 flex justify-center items-center rounded-2xl"
            >
              <svg
                width="44"
                height="44"
                viewBox="0 0 36 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28.6182 1.79358V13.6255"
                  stroke="#E65300"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M34.6219 7.70959H22.616"
                  stroke="#E65300"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.9718 26.8239H9.97279H15.8398V25.8239L15.8408 26.8239C17.6738 26.8221 19.4437 27.4929 20.815 28.7092C22.186 29.9252 23.0633 31.602 23.2805 33.4217C23.2806 33.4221 23.2806 33.4224 23.2807 33.4227L24.0871 40.3143L24.0887 40.3281L24.0907 40.3418C24.1162 40.5174 24.0743 40.6961 23.9733 40.842C23.873 40.9868 23.7219 41.0886 23.55 41.1271C20.0513 41.8592 16.4851 42.2204 12.9106 42.2049V42.2049L12.9019 42.2049C9.32907 42.2204 5.76452 41.8595 2.26729 41.1281C2.09529 41.0874 1.94435 40.9844 1.84364 40.8389C1.74166 40.6916 1.69861 40.5115 1.72296 40.334L1.72431 40.3241L1.72547 40.3143L2.53192 33.4227C2.53197 33.4224 2.53201 33.422 2.53205 33.4217C2.7493 31.602 3.62657 29.9252 4.99761 28.7092C6.36891 27.4929 8.13883 26.8221 9.9718 26.8239Z"
                  stroke="#E65300"
                  strokeWidth="2"
                />
                <path
                  d="M19.8975 15.7034C19.8975 19.566 16.7663 22.6972 12.9037 22.6972C9.04114 22.6972 5.90991 19.566 5.90991 15.7034C5.90991 11.8408 9.04114 8.70959 12.9037 8.70959C16.7663 8.70959 19.8975 11.8408 19.8975 15.7034Z"
                  stroke="#E65300"
                  strokeWidth="2"
                />
              </svg>
            </button>
            <div className="w-16">
              <Link
                to="/souscrire"
                className="inline-block w-16 text-center text-xs text-blue-gray-500 tracking-byvets my-1"
              >
                Je veux m’affilier
              </Link>
            </div>
          </div>
          <div>
            <button
              type="button"
              onClick={() => goToPage("/support")}
              className="border border-grayts h-16 w-16 flex justify-center items-center rounded-2xl"
            >
              <svg
                width="44"
                height="44"
                viewBox="0 0 42 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.3399 2.0802C28.4979 3.31677 31.2222 5.4553 33.1733 8.22938C35.0995 10.9645 36.1387 14.2252 36.15 17.5704C36.1534 19.1488 36.4987 20.7077 37.162 22.1399L40.1713 28.6678L38.3369 29.2619C37.7099 29.4591 37.1598 29.8472 36.7636 30.3718C36.3788 30.8888 36.1707 31.516 36.1698 32.1605V38.6884C36.1695 38.8543 36.1362 39.0187 36.072 39.1716C36.0021 39.3232 35.9045 39.4598 35.7844 39.5758C35.6648 39.6972 35.52 39.7914 35.3602 39.8505C35.2028 39.9152 35.0344 39.9481 34.8642 39.9481H25.6535L23.6952 46.5868L3.96791 41.1491L7.23183 30.0517L6.3572 29.1771C4.59852 27.4106 3.25989 25.2712 2.44049 22.917C1.62478 20.583 1.35663 18.0924 1.65703 15.6382C1.96238 13.1778 2.82173 10.8191 4.17031 8.73873C5.5385 6.62377 7.36026 4.83988 9.5035 3.51645"
                  stroke="#E65300"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M25.5022 30.7633C26.0296 30.4589 26.6398 30.3291 27.2454 30.3917C27.8498 30.4473 28.4198 30.6968 28.8707 31.1031C29.3157 31.4956 29.6163 32.026 29.724 32.6095C29.8317 33.193 29.7404 33.7956 29.4648 34.3211C29.1763 34.8579 28.7168 35.2833 28.1593 35.5292C27.6071 35.7834 26.989 35.8567 26.3925 35.7395C25.796 35.6224 25.2517 35.3206 24.8367 34.8764C24.4333 34.4424 24.1853 33.8868 24.1317 33.2967C21.8666 31.9695 20.012 30.0424 18.7723 27.7283C17.3416 27.9832 15.8665 27.7535 14.5812 27.0755C13.3142 26.4156 12.3137 25.3389 11.7482 24.027C11.1937 22.7339 11.1151 21.2863 11.5264 19.9408C11.9537 18.5825 12.8369 17.4133 14.0266 16.6309C14.0329 11.7552 14.3664 6.88528 15.0252 2.05422C15.9164 1.86816 16.8195 1.74363 17.7278 1.68193C18.1746 1.63834 18.6237 1.62085 19.0726 1.62965C19.9764 1.63181 20.879 1.69304 21.7749 1.81261C21.0498 6.61381 20.6791 11.4617 20.6653 16.3173C21.5811 16.8008 22.3635 17.5025 22.9434 18.3604C23.5143 19.2067 23.8579 20.1862 23.9414 21.2036C24.0248 22.221 23.8452 23.2425 23.4199 24.1705C22.9848 25.1063 22.3231 25.9186 21.4944 26.5336C22.4241 28.2625 23.7989 29.7114 25.4764 30.7308L25.5022 30.7633Z"
                  stroke="#E65300"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="w-16">
              <Link
                to="/support"
                className="inline-block w-16 text-center text-xs text-blue-gray-500 tracking-byvets my-1"
              >
                Support
              </Link>
            </div>
          </div>
          <div>
            <button
              type="button"
              onClick={() => goToExternal("https://forum.byvets.be")}
              className="border border-grayts h-16 w-16 flex justify-center items-center rounded-2xl"
            >
              <svg
                width="40"
                height="48"
                viewBox="0 0 40 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.6033 28.8283C11.6033 30.9023 9.92195 32.5836 7.84796 32.5836C5.77396 32.5836 4.09265 30.9023 4.09265 28.8283C4.09265 26.7543 5.77396 25.073 7.84796 25.073C9.92195 25.073 11.6033 26.7543 11.6033 28.8283Z"
                  stroke="#E65300"
                  stroke-width="2"
                />
                <path
                  d="M1.59651 43.5354L1.59786 43.5256L1.59902 43.5157L2.0784 39.4191C2.20252 38.4372 2.67916 37.5337 3.41971 36.8768C4.16063 36.2197 5.11515 35.8543 6.10544 35.8486H9.63496C10.2389 35.8506 10.8348 35.9867 11.3797 36.247C11.6431 36.3729 11.8914 36.5262 12.1206 36.704C10.9496 37.9547 10.1996 39.5539 9.99594 41.2744C9.99592 41.2747 9.99589 41.2749 9.99586 41.2752L9.65617 44.1285C9.06386 44.1682 8.45639 44.1881 7.84782 44.1881L7.84347 44.1882C5.74944 44.1973 3.66029 43.986 1.61049 43.558C1.60626 43.5566 1.60259 43.5538 1.60003 43.5501C1.59705 43.5458 1.5958 43.5406 1.59651 43.5354Z"
                  stroke="#E65300"
                  stroke-width="2"
                />
                <path
                  d="M35.685 28.8283C35.685 30.9023 34.0037 32.5836 31.9297 32.5836C29.8557 32.5836 28.1744 30.9023 28.1744 28.8283C28.1744 26.7543 29.8557 25.073 31.9297 25.073C34.0037 25.073 35.685 26.7543 35.685 28.8283Z"
                  stroke="#E65300"
                  stroke-width="2"
                />
                <path
                  d="M38.3864 44.5774L38.1815 43.5986C36.1271 44.0287 34.033 44.2409 31.934 44.2318V44.2318H31.9297C31.3211 44.2318 30.7136 44.2118 30.1213 44.1722L29.7816 41.3188C29.7816 41.3187 29.7816 41.3185 29.7816 41.3184C29.5772 39.5908 28.822 37.9855 27.6427 36.7325C27.8741 36.5457 28.1264 36.3847 28.3953 36.2533C28.939 35.9875 29.5361 35.8491 30.1413 35.8486L33.6748 35.8486L33.6757 35.8486C34.6669 35.8477 35.624 36.2104 36.3655 36.8681C37.1067 37.5255 37.581 38.4319 37.6987 39.4155C37.6987 39.416 37.6988 39.4165 37.6989 39.417L38.1783 43.5581L38.18 43.5725L38.1821 43.5869C38.1825 43.5899 38.1818 43.593 38.1801 43.5955C38.1783 43.5981 38.1757 43.5998 38.1727 43.6005L38.3864 44.5774ZM38.3864 44.5774C36.2632 45.0219 34.099 45.2412 31.9297 45.2318C31.0135 45.2318 30.0974 45.1881 29.2248 45.1009L39.1717 43.4431C39.2085 43.6964 39.148 43.9543 39.0023 44.1647C38.8566 44.3752 38.6365 44.5227 38.3864 44.5774Z"
                  stroke="#E65300"
                  stroke-width="2"
                />
                <path
                  d="M18.1429 38.2482H18.1439H21.634V37.2482L21.635 38.2482C22.6262 38.2472 23.5833 38.6099 24.3248 39.2677C25.066 39.9251 25.5403 40.8315 25.658 41.8152C25.658 41.8156 25.6581 41.8161 25.6581 41.8165L26.1378 45.9152L26.1394 45.929L26.1414 45.9428C26.1418 45.9458 26.1411 45.9489 26.1393 45.9514C26.1376 45.954 26.135 45.9557 26.132 45.9564L26.3457 46.9332L26.1408 45.9545C24.0863 46.3846 21.9923 46.5968 19.8933 46.5877L19.8933 46.5877L19.8846 46.5877C17.7906 46.5968 15.7014 46.3856 13.6516 45.9575C13.6474 45.9561 13.6437 45.9534 13.6412 45.9497C13.6382 45.9454 13.6369 45.9401 13.6376 45.9349L13.639 45.9251L13.6402 45.9152L14.1198 41.8165C14.1198 41.8161 14.1199 41.8158 14.1199 41.8154C14.2375 40.8316 14.7118 39.9251 15.4531 39.2677C16.1946 38.6099 17.1517 38.2472 18.1429 38.2482Z"
                  stroke="#E65300"
                  stroke-width="2"
                />
                <path
                  d="M23.644 31.2277C23.644 33.3017 21.9627 34.983 19.8887 34.983C17.8147 34.983 16.1334 33.3017 16.1334 31.2277C16.1334 29.1537 17.8147 27.4724 19.8887 27.4724C21.9627 27.4724 23.644 29.1537 23.644 31.2277Z"
                  stroke="#E65300"
                  stroke-width="2"
                />
                <path
                  d="M16.4696 17.5051L16.1921 16.9567H15.5774H9.32824C8.78085 16.9493 8.25847 16.7259 7.87491 16.3351C7.49016 15.9431 7.27644 15.4146 7.28058 14.8653H7.2806V14.8578V3.67125C7.28552 3.13029 7.5026 2.61281 7.8852 2.23021C8.2678 1.8476 8.78529 1.63053 9.32626 1.62561H30.4941C31.0351 1.63053 31.5526 1.8476 31.9352 2.2302C32.3178 2.61279 32.5349 3.13024 32.5398 3.67118V14.9111C32.5349 15.4521 32.3178 15.9695 31.9352 16.3521C31.5526 16.7347 31.0352 16.9518 30.4942 16.9567H24.243H23.6283L23.3508 17.5051L21.0009 22.1476C21.0005 22.1484 21 22.1493 20.9996 22.1501C20.8964 22.3494 20.7406 22.5166 20.549 22.6335C20.3566 22.7508 20.1356 22.8129 19.9102 22.8129C19.6848 22.8129 19.4638 22.7508 19.2714 22.6335C19.0798 22.5166 18.924 22.3494 18.8208 22.1501C18.8204 22.1493 18.8199 22.1484 18.8195 22.1476L16.4696 17.5051Z"
                  stroke="#E65300"
                  stroke-width="2"
                />
              </svg>
            </button>
            <div className="w-16">
              <a
                href="https://forum.byvets.be"
                target="_blank"
                className="inline-block w-16 text-center text-xs text-blue-gray-500 tracking-byvets my-1"
                rel="noreferrer"
              >
                Forum
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col align-middle justify-center text-center w-52 mx-auto">
          {headerLinks.map((hl) => {
            return (
              <HeaderLinkMobile key={hl.text} to={hl.link} className="my-6">
                {hl.text}
              </HeaderLinkMobile>
            );
          })}
          <HeaderLinkMobile secondary="true">Connexion</HeaderLinkMobile>
        </div>
      </ReactModal>
      <div
        className={` ${isMobileMenuOpen ? "hidden" : ""} fixed w-full z-50 `}
      >
        <div className=" container mx-auto header flex bg-white justify-between rounded-full pl-2">
          <div className=" px-2 mx-2">
            <div className="flex items-center h-full">
              <Link to="/">
                <img src={logo} className="header-logo" alt="Logo Byvets" />
              </Link>
            </div>
          </div>
          <div className=" px-2 mx-2 flex">
            <div className="flex-none hidden lg:flex items-center">
              {headerLinks.map((hl) => {
                if (hl.secured) {
                  return (
                    <>
                      {keycloak.authenticated ? (
                        <HeaderLink key={hl.secured.text} to={hl.secured.link}>
                          {hl.secured.text}
                        </HeaderLink>
                      ) : (
                        <HeaderLink key={hl.text} to={hl.link}>
                          {hl.text}
                        </HeaderLink>
                      )}
                    </>
                  );
                }
                return (
                  <HeaderLink key={hl.text} to={hl.link}>
                    {hl.text}
                  </HeaderLink>
                );
              })}
            </div>
            <div className="flex items-center">
              <HeaderButton
                className="hidden lg:inline-block"
                secondary
                tel
                to="tel:+3285250525"
              >
                +32 85 25 08 25
              </HeaderButton>

              <HeaderButton onClick={() => keycloak.login()}>
                Me connecter
              </HeaderButton>
            </div>
            <div className="flex flex-col items-center lg:hidden">
              <button
                className="flex flex-col h-full justify-center mx-2 "
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <span className=" bg-trinidad-500 w-6 h-1 rounded-sm"></span>
                <span className=" bg-trinidad-500 w-6 h-1 my-1 rounded-sm"></span>
                <span className=" bg-trinidad-500 w-6 h-1 rounded-sm"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UnloggedHeader;
