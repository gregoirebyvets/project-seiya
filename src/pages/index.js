import * as React from "react";

import Layout from "../components/layout/index";

import imageHome1 from "../images/homepage_1.png";
import imageHome2 from "../images/homepage_header_blue.svg";
import imageHome3 from "../images/homepage_header_orange.svg";
import ContentButton from "../components/buttons/ContentButton";
import CarouselHome from "../components/carousel/CarouselHome";
import bgMobile from "../images/homepage_1_mobile.png";

import { Fade } from "react-awesome-reveal";
import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <Layout>
      {/* <Seo
        description="Quand les vétérinaires prennent les rênes de leur outil informatique..."
        title="ByVets - Logiciel Pegase, gestion informatique de cabinet vétérinaire"
      /> */}
      <div
        className="block sm:hidden left-0  absolute top-0 w-full bg-cover"
        style={{ backgroundImage: `url(${bgMobile})`, paddingBottom: "96%" }}
      ></div>
      <section className="flex mb-28">
        <div className=" pt-96% sm:p-0 w-full sm:w-1/2">
          <Fade triggerOnce>
            <div>
              <h1 className="text-2xl sm:text-4xl font-semibold text-midnight-blue-500 leading-relaxed mb-6">
                Quand les vétérinaires prennent les rênes de leur outil
                informatique...
              </h1>
              <h2 className="text-xl font-medium text-midnight-blue-500 leading-relaxed mb-1">
                ByVets
              </h2>
              <div>
                <p className=" text-blue-gray-500 font-light text-lg mb-6">
                  En constante évolution depuis plus de 20 ans, Pégase asbl
                  monte en puissance et devient{" "}
                  <span className="text-trinidad-500">
                    ByVets Société Coopérative
                  </span>
                  . Animé par ses valeurs et avec enthousiasme, ByVets rassemble
                  les idées,{" "}
                  <span className="text-trinidad-500">
                    offre assistance, conseils, aide à l’achat de matériel...
                  </span>
                </p>
              </div>

              <h2 className="text-xl font-medium text-midnight-blue-500 leading-relaxed mb-1">
                Pégase
              </h2>
              <div>
                <p className=" text-blue-gray-500 text-lg font-light mb-6">
                  Nous avons développé{" "}
                  <span className="text-trinidad-500">Pégase</span>, logiciel de
                  gestion médico-commerciale pour vétérinaires, en constante
                  évolution et{" "}
                  <span className="text-trinidad-500">
                    toujours réadapté aux besoins de ses utilisateurs.
                  </span>
                </p>
              </div>
              <div className="flex gap-x-7">
                <ContentButton to="/pegase" type="link">
                  Découvrir Pégase
                </ContentButton>
                <ContentButton
                  to="/souscrire"
                  secondary
                  type="link"
                  styleName="ml-4"
                >
                  Je veux souscrire
                </ContentButton>
              </div>
            </div>
          </Fade>
        </div>
        <div className="hidden sm:block w-1/2">
          {/* <Fade triggerOnce> */}
          <div className="relative top-0 left-0 -mr-8">
            <img
              src={imageHome1}
              alt="Vétérinaire praticien"
              className="relative top-0 left-0 z-40 home-header-img "
            />
            <img
              src={imageHome2}
              alt="Fond bleu"
              className="absolute top-0 left-0 transform z-30 home-header-animation"
            />
            <img
              src={imageHome3}
              alt="Fond orange"
              className="absolute top-0 left-0  transform origin-bottom home-header-animation2 z-20"
            />
          </div>
          {/* </Fade> */}
        </div>
      </section>
      <section className="mb-24">
        <Fade triggerOnce fraction={0.25}>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 lg:gap-10">
            <div className="w-full sm:w-1/3 ">
              <div className="home-card bg-blueish-500 h-full mx-8 my-2 sm:m-0">
                <div className="py-10 sm:py-6">
                  <svg
                    width="46"
                    height="79"
                    viewBox="0 0 46 79"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto"
                  >
                    <path
                      d="M45.9949 4.07926C46.0005 3.85191 45.9318 3.62917 45.7997 3.4466C45.5741 2.52298 45.0573 1.7018 44.3299 1.11084C43.6024 0.519879 42.705 0.192294 41.7774 0.179062C40.8497 0.16583 39.9438 0.467693 39.2006 1.03767C38.4574 1.60766 37.9186 2.41379 37.6681 3.33062C37.5149 3.54463 37.4322 3.80316 37.4318 4.06871V9.69404C37.3605 13.574 35.8087 17.2704 33.1099 19.9884C30.4112 22.7065 26.7811 24.2292 23 24.2292C19.2189 24.2292 15.5888 22.7065 12.8901 19.9884C10.1913 17.2704 8.6395 13.574 8.56817 9.69404V4.03708C8.56401 3.79823 8.49265 3.56571 8.3627 3.36752C8.12898 2.44805 7.60626 1.63338 6.87556 1.04981C6.14486 0.466242 5.24701 0.14636 4.32117 0.139753C3.39533 0.133146 2.49322 0.440183 1.75469 1.01327C1.01616 1.58636 0.482447 2.39348 0.236293 3.30953C0.0832435 3.5196 0.000368705 3.77477 0 4.03708L0 9.74676C0.0454862 13.9775 1.19254 18.1189 3.32228 21.7415C5.45202 25.3642 8.48696 28.3364 12.1126 30.3501C12.2461 30.4345 12.3899 30.4977 12.7495 30.677C13.6513 31.135 14.5793 31.5365 15.5285 31.879C15.5799 31.9739 15.621 32.0688 15.6826 32.1637L18.7133 37.5571V51.4491C15.7148 52.4913 13.1745 54.5929 11.5455 57.3789C9.91655 60.1649 9.30479 63.4543 9.81938 66.6603C10.334 69.8663 11.9414 72.7804 14.3551 74.8829C16.7688 76.9855 19.8316 78.1396 22.9974 78.1396C26.1632 78.1396 29.2261 76.9855 31.6398 74.8829C34.0534 72.7804 35.6609 69.8663 36.1755 66.6603C36.6901 63.4543 36.0783 60.1649 34.4493 57.3789C32.8203 54.5929 30.28 52.4913 27.2815 51.4491V37.5993L30.3071 32.1954L30.4663 31.9107C31.4923 31.5406 32.4943 31.1039 33.4662 30.6032C33.6101 30.5294 33.7539 30.4661 34.0107 30.3079C36.9207 28.6757 39.4527 26.4173 41.4333 23.6875C43.414 20.9576 44.7965 17.8208 45.4863 14.4917C45.8186 12.9328 45.9908 11.3425 46 9.74676V4.07926H45.9949ZM28.802 62.8368C29.1332 64.1424 29.0372 65.5235 28.5286 66.7675C28.0201 68.0116 27.1272 69.0495 25.9875 69.7217C24.8478 70.3939 23.5244 70.6629 22.2211 70.4875C20.9178 70.312 19.7068 69.7017 18.7746 68.7506C17.8424 67.7995 17.2406 66.5603 17.0618 65.2237C16.8831 63.8871 17.1374 62.5273 17.7855 61.3536C18.4336 60.1799 19.4396 59.2574 20.6487 58.728C21.8578 58.1987 23.2028 58.0919 24.4768 58.4241C25.5194 58.6889 26.4724 59.2393 27.2341 60.0164C27.9959 60.7935 28.5378 61.7683 28.802 62.8368Z"
                      fill="#002E6D"
                    />
                  </svg>
                  <div className="card-text text-center mt-6 text-midnight-blue-500">
                    <h2 className="font-semibold text-xl sm:text-lg lg:text-xl">
                      Qui sommes-nous ?
                    </h2>
                    <p className="font-light mx-10 sm:mx-5 lg:mx-10 text-base sm:text-sm lg:text-base">
                      Une association de vétérinaires{" "}
                      <span className="text-trinidad-500">praticiens</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/3 ">
              <div className="home-card bg-orangish-500 h-full mx-8 my-2 sm:m-0">
                <div className="py-10 sm:py-6">
                  <svg
                    width="52"
                    height="79"
                    viewBox="0 0 52 79"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto"
                  >
                    <path
                      d="M9.52329 78.5289H0V57.4103C0.0555682 51.3716 2.24284 45.5468 6.17567 40.964C10.1085 36.3813 15.534 33.3353 21.4943 32.364V27.2409C21.4712 25.9969 20.9687 24.8099 20.0916 23.9275C19.2145 23.0451 18.0305 22.5355 16.7867 22.5049C12.9958 22.5096 9.35632 21.017 6.66029 18.3519C3.96426 15.6868 2.4298 12.0648 2.39078 8.27401V0.139648H11.9141V8.22278C11.9358 9.46814 12.4387 10.6568 13.3173 11.5396C14.1959 12.4225 15.3821 12.9311 16.6273 12.9588C20.4162 12.9556 24.053 14.4492 26.746 17.1145C29.439 19.7798 30.9702 23.4009 31.0062 27.1897V32.6372C36.673 33.8631 41.7535 36.9822 45.411 41.481C49.0686 45.9797 51.0851 51.5898 51.1286 57.3876V77.9711H41.6053V57.3762C41.6053 53.1203 39.9147 49.0388 36.9054 46.0294C33.896 43.0201 29.8145 41.3294 25.5586 41.3294C21.3028 41.3294 17.2212 43.0201 14.2119 46.0294C11.2025 49.0388 9.51191 53.1203 9.51191 57.3762L9.52329 78.5289Z"
                      fill="#E65300"
                    />
                    <path
                      d="M25.8142 71.2713C24.552 71.2667 23.3431 70.7622 22.4522 69.8681C21.5613 68.974 21.061 67.7633 21.0611 66.5011V55.6515C21.043 54.4149 21.506 53.2196 22.3522 52.3178C23.1985 51.416 24.362 50.878 25.5972 50.8175C26.8324 50.7569 28.0429 51.1785 28.9733 51.9933C29.9037 52.808 30.4814 53.9523 30.5843 55.1847C30.5843 55.3384 30.5843 55.4978 30.5843 55.6515V66.5011C30.5843 67.7662 30.0818 68.9795 29.1872 69.8741C28.2926 70.7687 27.0793 71.2713 25.8142 71.2713Z"
                      fill="#E65300"
                    />
                  </svg>

                  <div className="card-text text-center mt-6 text-midnight-blue-500">
                    <h2 className="font-semibold text-xl sm:text-lg lg:text-xl">
                      Pégase
                    </h2>
                    <p className="font-light mx-10 sm:mx-5 lg:mx-10 text-base sm:text-sm lg:text-base">
                      Notre logiciel de gestion médico-commerciale <br />
                      <span className="text-trinidad-500">100% belge</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/3 ">
              <div className="home-card bg-blueish-500 h-full mx-8 my-2 sm:m-0">
                <div className="py-10 sm:py-6">
                  <svg
                    width="48"
                    height="79"
                    viewBox="0 0 48 79"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto"
                  >
                    <path
                      d="M23.3567 4.93588C28.3423 4.9453 33.1233 6.91923 36.6634 10.4298C40.2035 13.9404 42.2173 18.7047 42.2685 23.6901V35.8146C42.2558 36.3266 42.4134 36.8283 42.7168 37.2409C43.0201 37.6536 43.4518 37.9538 43.9443 38.0945C44.2762 38.1846 44.6245 38.1965 44.9618 38.1295C45.2991 38.0624 45.6163 37.9181 45.8886 37.708C46.1608 37.4978 46.3807 37.2275 46.531 36.9181C46.6812 36.6088 46.7578 36.2688 46.7548 35.9249V23.5167C46.7548 17.3167 44.2918 11.3707 39.9078 6.98663C35.5237 2.60258 29.5777 0.139648 23.3777 0.139648C17.1777 0.139648 11.2317 2.60258 6.84765 6.98663C2.46361 11.3707 0.000676732 17.3167 0.000676732 23.5167V35.6728C-0.0117279 36.1854 0.146703 36.6877 0.451033 37.1004C0.755362 37.5131 1.18831 37.813 1.68172 37.9527C2.01224 38.0363 2.35746 38.0437 2.69125 37.9743C3.02505 37.9049 3.33868 37.7604 3.60843 37.5519C3.87818 37.3434 4.09697 37.0763 4.24827 36.7707C4.39956 36.4652 4.47939 36.1293 4.48171 35.7883V23.6743C4.53687 18.698 6.54748 13.9432 10.0792 10.4371C13.6109 6.93092 18.3802 4.95489 23.3567 4.93588Z"
                      fill="#E65300"
                    />
                    <path
                      d="M2.10104 40.574C1.60372 40.7098 1.16606 41.0079 0.857657 41.421C0.549254 41.8341 0.387806 42.3385 0.398981 42.8539V55.1518C0.398981 61.3518 2.86191 67.2978 7.24596 71.6819C11.63 76.0659 17.576 78.5288 23.776 78.5288C29.976 78.5288 35.922 76.0659 40.3061 71.6819C44.6901 67.2978 47.1531 61.3518 47.1531 55.1518V42.9957C47.1648 42.4826 47.0063 41.98 46.7021 41.5666C46.398 41.1531 45.9654 40.8521 45.472 40.7106C45.1407 40.6278 44.7949 40.6214 44.4608 40.6918C44.1267 40.7622 43.8129 40.9077 43.5432 41.1172C43.2735 41.3266 43.055 41.5947 42.904 41.901C42.7531 42.2073 42.6738 42.5439 42.672 42.8854V54.9679C42.4573 59.8346 40.3729 64.4306 36.8532 67.7984C33.3335 71.1662 28.65 73.046 23.7787 73.046C18.9073 73.046 14.2238 71.1662 10.7041 67.7984C7.18442 64.4306 5.10003 59.8346 4.88527 54.9679V42.7436C4.88737 42.4464 4.83037 42.1517 4.71759 41.8767C4.60481 41.6017 4.4385 41.3518 4.22833 41.1416C4.01815 40.9314 3.7683 40.7651 3.49329 40.6524C3.21828 40.5396 2.9236 40.4826 2.62637 40.4847C2.44829 40.4931 2.27189 40.523 2.10104 40.574Z"
                      fill="#002E6D"
                    />
                  </svg>

                  <div className="card-text text-center mt-6 text-midnight-blue-500">
                    <h2 className="font-semibold text-xl sm:text-lg lg:text-xl">
                      Nos valeurs
                    </h2>
                    <p className="font-light mx-10 sm:mx-5 lg:mx-10 text-base sm:text-sm lg:text-base">
                      Entraide, échange d’idées <br /> Partage d’expériences
                      <br />
                      Assistance personnalisée
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
      <section className="flex mb-44">
        <div className="flex flex-row-reverse sm:flex-row sm:items-center">
          <div className="hidden sm:block w-1/3">
            <Fade triggerOnce direction="left" fraction={0.25}>
              <svg
                width="129"
                height="130"
                viewBox="0 0 129 130"
                fill="none"
                className="mx-auto"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M57.7634 112.925C88.0127 112.925 112.535 88.4029 112.535 58.1536C112.535 27.9042 88.0127 3.38232 57.7634 3.38232C27.5141 3.38232 2.99219 27.9042 2.99219 58.1536C2.99219 88.4029 27.5141 112.925 57.7634 112.925Z"
                  stroke="#E65300"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M126.227 126.618L96.4453 96.8358"
                  stroke="#E65300"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Fade>
          </div>
          <div className="w-full sm:w-2/3 sm:pl-10">
            <Fade triggerOnce direction="up" fraction={0.25}>
              <div>
                <div className="flex items-center  mb-4">
                  <div className="inline-block sm:hidden">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 129 130"
                      fill="none"
                      className="mx-auto inline-block"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M57.7634 112.925C88.0127 112.925 112.535 88.4029 112.535 58.1536C112.535 27.9042 88.0127 3.38232 57.7634 3.38232C27.5141 3.38232 2.99219 27.9042 2.99219 58.1536C2.99219 88.4029 27.5141 112.925 57.7634 112.925Z"
                        stroke="#E65300"
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M126.227 126.618L96.4453 96.8358"
                        stroke="#E65300"
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h1 className="flex items-center text-2xl sm:text-4xl font-semibold text-midnight-blue-500 leading-relaxed ml-2 sm:ml-0">
                    Notre constat
                  </h1>
                </div>
                <p className=" text-blue-gray-500 font-light text-lg">
                  De nombreux logiciels vétérinaires nous sont présentés, avec
                  une espérance de vie et une qualité très variables. En outre,
                  peu d’entre nous ont l’occasion d’exprimer leurs desiderata.
                  Très régulièrement les concepteurs remettent en question la
                  commercialisation de leur produit jugeant le marché
                  vétérinaire trop étroit et donc peu rémunérateur.
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </section>
      <section className="flex mb-44">
        <div className="flex items-center">
          <div className="w-full sm:w-2/3 sm:pr-10">
            <Fade triggerOnce direction="up" fraction={0.25}>
              <div>
                <h1 className="text-right sm:text-left text-2xl sm:text-4xl font-semibold text-midnight-blue-500 leading-relaxed mb-4">
                  Notre idée
                </h1>
                <p className=" text-blue-gray-500 font-light text-lg">
                  Rassembler les vétérinaires pour qu’ensemble nous prenions
                  nous-mêmes les commandes de notre outil informatique afin de
                  le rendre{" "}
                  <span className="text-trinidad-500">
                    durable, adapté à nos besoins professionnels
                  </span>
                  , évolutif tant en fonction de la législation fiscale et
                  sanitaire qu’en fonction des impératifs techniques propres à
                  notre profession.
                </p>
              </div>
            </Fade>
          </div>
          <div className="hidden sm:block sm:w-1/3">
            <Fade triggerOnce direction="right" fraction={0.25}>
              <svg
                width="198"
                height="198"
                viewBox="0 0 198 198"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto"
              >
                <path
                  d="M99.25 143C123.412 143 143 123.412 143 99.2499C143 75.0874 123.412 55.4999 99.25 55.4999C75.0875 55.4999 55.5 75.0874 55.5 99.2499C55.5 123.412 75.0875 143 99.25 143Z"
                  stroke="#E65300"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M99.25 3V20.5"
                  stroke="#E65300"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M99.25 178V195.5"
                  stroke="#E65300"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M31.1797 31.1748L43.6047 43.5998"
                  stroke="#E65300"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M154.895 154.9L167.32 167.325"
                  stroke="#E65300"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 99.25H20.5"
                  stroke="#E65300"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M178 99.25H195.5"
                  stroke="#E65300"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M31.1797 167.325L43.6047 154.9"
                  stroke="#E65300"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M154.895 43.5998L167.32 31.1748"
                  stroke="#E65300"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Fade>
          </div>
        </div>
      </section>
      <section className="flex mb-48">
        <Fade triggerOnce fraction={0.25}>
          <div className="flex">
            <div className="hidden sm:block w-1/3">
              <svg
                width="197"
                height="196"
                viewBox="0 0 197 196"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto"
              >
                <path
                  d="M98.6139 123.37C112.625 123.37 123.984 112.011 123.984 97.9999C123.984 83.9885 112.625 72.6301 98.6139 72.6301C84.6026 72.6301 73.2441 83.9885 73.2441 97.9999C73.2441 112.011 84.6026 123.37 98.6139 123.37Z"
                  stroke="#E65300"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M98.6133 42.1865V52.3344"
                  stroke="#E65300"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M98.6133 143.666V153.813"
                  stroke="#E65300"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M59.1426 58.5245L66.3476 65.7295"
                  stroke="#E65300"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M130.881 130.27L138.086 137.475"
                  stroke="#E65300"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M42.8008 97.9999H52.9487"
                  stroke="#E65300"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M144.279 97.9999H154.427"
                  stroke="#E65300"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M59.1426 137.475L66.3476 130.27"
                  stroke="#E65300"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M130.881 65.7295L138.086 58.5245"
                  stroke="#E65300"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M194.613 78.7999V117.2L168.559 118.87C167.122 123.714 165.192 128.398 162.799 132.848L180.079 152.393L152.968 179.465L133.48 162.301C129.037 164.708 124.352 166.639 119.503 168.061L117.813 194H79.4133L77.7813 168.041C72.9374 166.604 68.2537 164.674 63.8037 162.281L44.3157 179.446L17.2245 152.355L34.3125 132.829C31.9276 128.375 29.9979 123.692 28.5525 118.851L2.61328 117.2V78.7999L28.5525 77.1679C30.0062 72.3299 31.9356 67.6479 34.3125 63.1903L17.1861 43.6639L44.2773 16.5535L63.7845 33.6991C68.2306 31.2981 72.9152 29.3676 77.7621 27.9391L79.4133 1.99988H117.813L119.426 27.9583C124.27 29.3953 128.954 31.3254 133.404 33.7183L152.911 16.5535L180.04 43.6063L162.914 63.1327C165.291 67.5902 167.22 72.2723 168.674 77.1103L194.613 78.7999Z"
                  stroke="#E65300"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="w-2/3 sm:pl-10">
              <h1 className="text-2xl sm:text-4xl font-semibold text-midnight-blue-500 leading-relaxed mb-4">
                Notre solution
              </h1>
              <p className=" text-blue-gray-500 font-light text-lg mb-8">
                Avec plus de 250 cabinets et cliniques vétérinaires, animé par
                ses valeurs et avec enthousiasme,{" "}
                <span className="text-trinidad-500">
                  ByVets est une société coopérative
                </span>
                , créée par des vétérinaires praticiens, désireux de partager,
                de manière non mercantile, leurs expériences et connaissances.
              </p>
              <p className=" text-blue-gray-500 font-light text-lg mb-8">
                ByVets offre la garantie d’un outil informatique en constante
                évolution, durable et toujours réadapté aux besoins de ses
                membres :{" "}
                <span className="text-trinidad-500">le logiciel Pégase.</span>
              </p>
              <div className="flex gap-x-7">
                <ContentButton to="/pegase" type="link">
                  Découvrir Pégase
                </ContentButton>
                <ContentButton
                  to="/contact/demo"
                  secondary
                  type="link"
                  styleName="ml-4"
                >
                  Demander une démo
                </ContentButton>
              </div>
            </div>
          </div>
        </Fade>
      </section>
      <section className="flex flex-wrap mb-36">
        <div className=" w-full sm:w-7/12">
          <h1 className=" text-3xl sm:text-4xl font-semibold text-midnight-blue-500 leading-relaxed mb-4 tracking-byvets">
            ByVets, c’est aussi des services associés à{" "}
            <span className="text-trinidad-500">Pégase</span>
          </h1>
          <p className=" text-blue-gray-500 font-light text-lg mb-14">
            En tant que praticiens, nous nous sentons particulièrement concernés
            par les problèmes qui se posent (ou s'imposent) dans notre pratique
            quotidienne. Face à ceux-ci, nous désirons nous impliquer de façon
            active afin de trouver et vous proposer les solutions les plus
            adaptées à notre terrain de travail.
          </p>
          <div className="hidden sm:block">
            <ContentButton to="/contacts" type="link">
              Contactez-nous !
            </ContentButton>
          </div>
        </div>
        <div className="home-cardlist w-full sm:w-5/12 sm:pl-10">
          <Fade triggerOnce direction="up " cascade>
            <div className="flex mb-12 items-center">
              <div className="w-1/3 sm:mx-6 flex items-center">
                <svg
                  width="57"
                  height="66"
                  viewBox="0 0 57 66"
                  className="mx-auto"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M34.6503 2.44183C39.0756 4.1746 42.893 7.17125 45.627 11.0585C48.3262 14.8911 49.7823 19.4602 49.7982 24.1478C49.8029 26.3595 50.2868 28.544 51.2163 30.5509L55.4331 39.6982L52.8627 40.5307C51.9839 40.8071 51.2132 41.3509 50.658 42.0859C50.1188 42.8104 49.8272 43.6894 49.8259 44.5925V53.7398C49.8254 53.9723 49.7789 54.2026 49.6888 54.4169C49.591 54.6293 49.4541 54.8208 49.2859 54.9832C49.1183 55.1533 48.9154 55.2853 48.6914 55.3682C48.4709 55.4588 48.2349 55.5049 47.9965 55.5049H35.0898L32.3456 64.8076L4.70239 57.1879L9.27603 41.6375L8.05044 40.4119C5.58606 37.9366 3.71027 34.9386 2.56208 31.6398C1.41904 28.3692 1.04329 24.8792 1.46423 21.4403C1.89211 17.9926 3.09629 14.6874 4.98601 11.7722C6.90322 8.80861 9.45599 6.30889 12.4593 4.45441"
                    stroke="#E65300"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M34.878 42.6349C35.6169 42.2083 36.472 42.0264 37.3207 42.1141C38.1676 42.192 38.9663 42.5417 39.5981 43.111C40.2217 43.661 40.6429 44.4042 40.7938 45.2218C40.9447 46.0394 40.8168 46.8839 40.4307 47.6203C40.0264 48.3724 39.3825 48.9685 38.6012 49.3131C37.8275 49.6693 36.9613 49.7721 36.1255 49.6079C35.2897 49.4436 34.5269 49.0208 33.9454 48.3983C33.3801 47.7902 33.0326 47.0117 32.9574 46.1848C29.7835 44.325 27.1847 41.6246 25.4476 38.3819C23.4428 38.7392 21.3758 38.4173 19.5746 37.4672C17.7993 36.5424 16.3973 35.0338 15.6049 33.1955C14.8278 31.3835 14.7178 29.355 15.294 27.4695C15.8929 25.5663 17.1304 23.9278 18.7975 22.8316C18.8064 15.9993 19.2737 9.17527 20.1968 2.40565C21.4456 2.14493 22.7111 1.97043 23.9839 1.88397C24.6101 1.82288 25.2393 1.79838 25.8683 1.81072C27.1348 1.81374 28.3995 1.89954 29.6549 2.06709C28.6389 8.79487 28.1194 15.588 28.1002 22.3921C29.3835 23.0695 30.4797 24.0528 31.2923 25.2551C32.0923 26.4409 32.5738 27.8134 32.6908 29.2391C32.8077 30.6648 32.5561 32.0961 31.9601 33.3965C31.3504 34.7078 30.4232 35.8461 29.2619 36.7079C30.5647 39.1305 32.4912 41.1607 34.8418 42.5893L34.878 42.6349Z"
                    stroke="#E65300"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <h2 className="text-midnight-blue-500 font-semibold text-xl">
                  Assistance logiciel
                </h2>
                <p className="text-blue-gray-500 font-light text-sm">
                  Par téléphone, mail ou TeamViewer, nous vous assurons des
                  solutions dans les meilleurs délais.
                </p>
              </div>
            </div>
            <div className="flex mb-12">
              <div className="w-1/3 sm:mx-6 flex items-center">
                <svg
                  width="60"
                  height="66"
                  viewBox="0 0 60 66"
                  className="mx-auto"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask id="path-1-inside-1_2217:1390" fill="white">
                    <path d="M31.7023 33.4502H29.0303C28.0839 33.4493 27.1701 33.7956 26.4621 34.4236C25.7541 35.0515 25.3012 35.9174 25.1891 36.8571L24.8217 39.9968C24.7951 40.1905 24.8421 40.3872 24.9534 40.548C25.0647 40.7087 25.2323 40.8219 25.4229 40.8652C27.0485 41.2055 28.7055 41.3735 30.3663 41.3663C32.0271 41.3735 33.6841 41.2055 35.3097 40.8652C35.5011 40.8234 35.6696 40.7105 35.7812 40.5493C35.8927 40.3882 35.9391 40.1908 35.9109 39.9968L35.5435 36.8571C35.4314 35.9174 34.9785 35.0515 34.2705 34.4236C33.5625 33.7956 32.6487 33.4493 31.7023 33.4502Z" />
                  </mask>
                  <path
                    d="M29.0303 33.4502L29.0283 35.4502H29.0303V33.4502ZM25.1891 36.8571L23.2032 36.6203L23.2027 36.6247L25.1891 36.8571ZM24.8217 39.9968L26.8031 40.2687L26.8058 40.249L26.8082 40.2293L24.8217 39.9968ZM25.4229 40.8652L24.98 42.8156L24.9965 42.8193L25.0131 42.8228L25.4229 40.8652ZM30.3663 41.3663L30.375 39.3663L30.3663 39.3662L30.3576 39.3663L30.3663 41.3663ZM35.3097 40.8652L35.7195 42.8228L35.7283 42.821L35.7372 42.819L35.3097 40.8652ZM35.9109 39.9968L33.9244 40.2293L33.9277 40.2569L33.9317 40.2844L35.9109 39.9968ZM35.5435 36.8571L37.5299 36.6247L37.5294 36.6203L35.5435 36.8571ZM31.7023 31.4502H29.0303V35.4502H31.7023V31.4502ZM29.0322 31.4502C27.5961 31.4488 26.2094 31.9744 25.135 32.9273L27.7892 35.9198C28.1308 35.6168 28.5717 35.4497 29.0283 35.4502L29.0322 31.4502ZM25.135 32.9273C24.0606 33.8802 23.3732 35.1943 23.2032 36.6203L27.1751 37.0939C27.2291 36.6406 27.4477 36.2228 27.7892 35.9198L25.135 32.9273ZM23.2027 36.6247L22.8353 39.7644L26.8082 40.2293L27.1756 37.0896L23.2027 36.6247ZM22.8403 39.7249C22.7457 40.4144 22.9129 41.1142 23.309 41.6864L26.5978 39.4095C26.7713 39.6602 26.8446 39.9667 26.8031 40.2687L22.8403 39.7249ZM23.309 41.6864C23.7052 42.2585 24.3013 42.6614 24.98 42.8156L25.8659 38.9149C26.1632 38.9824 26.4243 39.1589 26.5978 39.4095L23.309 41.6864ZM25.0131 42.8228C26.7763 43.1919 28.5736 43.3741 30.375 43.3662L30.3576 39.3663C28.8374 39.3729 27.3207 39.2192 25.8327 38.9077L25.0131 42.8228ZM30.3576 43.3662C32.159 43.3741 33.9562 43.1919 35.7195 42.8228L34.8999 38.9077C33.4119 39.2192 31.8952 39.3729 30.375 39.3663L30.3576 43.3662ZM35.7372 42.819C36.4228 42.669 37.0261 42.2648 37.4255 41.6878L34.1368 39.4109C34.3131 39.1562 34.5795 38.9777 34.8822 38.9115L35.7372 42.819ZM37.4255 41.6878C37.825 41.1107 37.991 40.4037 37.8901 39.7092L33.9317 40.2844C33.8871 39.9778 33.9604 39.6657 34.1368 39.4109L37.4255 41.6878ZM37.8973 39.7644L37.5299 36.6247L33.557 37.0896L33.9244 40.2293L37.8973 39.7644ZM37.5294 36.6203C37.3594 35.1943 36.672 33.8802 35.5976 32.9273L32.9434 35.9198C33.2849 36.2228 33.5035 36.6406 33.5575 37.0939L37.5294 36.6203ZM35.5976 32.9273C34.5232 31.9744 33.1365 31.4488 31.7004 31.4502L31.7043 35.4502C32.1609 35.4497 32.6018 35.6168 32.9434 35.9198L35.5976 32.9273Z"
                    fill="#E65300"
                    mask="url(#path-1-inside-1_2217:1390)"
                  />
                  <path
                    d="M33.0021 28.8409C33.0021 30.2994 31.8199 31.4817 30.3614 31.4817C28.903 31.4817 27.7207 30.2994 27.7207 28.8409C27.7207 27.3825 28.903 26.2002 30.3614 26.2002C31.8199 26.2002 33.0021 27.3825 33.0021 28.8409Z"
                    stroke="#E65300"
                    strokeWidth="2"
                  />
                  <path
                    d="M34.5435 5.96147C34.5435 3.65401 32.673 1.78345 30.3655 1.78345C28.0581 1.78345 26.1875 3.65401 26.1875 5.96147C26.1875 8.26893 28.0581 10.1395 30.3655 10.1395C32.673 10.1395 34.5435 8.26893 34.5435 5.96147Z"
                    stroke="#E65300"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M30.3691 22.3291L30.3691 10.3948"
                    stroke="#E65300"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M26.1889 60.6054C26.1889 62.9129 28.0594 64.7834 30.3669 64.7834C32.6744 64.7834 34.5449 62.9129 34.5449 60.6054C34.5449 58.298 32.6744 56.4274 30.3669 56.4274C28.0594 56.4274 26.1889 58.298 26.1889 60.6054Z"
                    stroke="#E65300"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M30.3691 44.2378L30.3691 56.1721"
                    stroke="#E65300"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.79412 16.0039C6.79581 14.8502 4.24057 15.5349 3.08684 17.5332C1.93311 19.5315 2.61778 22.0867 4.6161 23.2405C6.61442 24.3942 9.16966 23.7095 10.3234 21.7112C11.4771 19.7129 10.7924 17.1576 8.79412 16.0039Z"
                    stroke="#E65300"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20.8789 27.8059L10.5435 21.8387"
                    stroke="#E65300"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M51.9383 50.5626C53.9366 51.7164 56.4919 51.0317 57.6456 49.0334C58.7993 47.035 58.1146 44.4798 56.1163 43.3261C54.118 42.1723 51.5628 42.857 50.409 44.8553C49.2553 46.8537 49.94 49.4089 51.9383 50.5626Z"
                    stroke="#E65300"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M39.8535 38.7608L50.189 44.728"
                    stroke="#E65300"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M56.1166 23.2407C58.1149 22.087 58.7996 19.5318 57.6459 17.5335C56.4921 15.5351 53.9369 14.8505 51.9386 16.0042C49.9403 17.1579 49.2556 19.7132 50.4093 21.7115C51.5631 23.7098 54.1183 24.3945 56.1166 23.2407Z"
                    stroke="#E65300"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M39.8516 27.8065L50.187 21.8393"
                    stroke="#E65300"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.61776 43.326C2.61945 44.4797 1.93477 47.0349 3.0885 49.0333C4.24223 51.0316 6.79747 51.7163 8.79579 50.5625C10.7941 49.4088 11.4788 46.8536 10.3251 44.8552C9.17132 42.8569 6.61608 42.1722 4.61776 43.326Z"
                    stroke="#E65300"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20.8809 38.7603L10.5454 44.7274"
                    stroke="#E65300"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <h2 className="text-midnight-blue-500 font-semibold text-xl">
                  Partage
                </h2>
                <p className="text-blue-gray-500 font-light text-sm">
                  Connaissances, expériences, id&eacute;es, conseils, trucs &
                  astuces, aide à l’achat de matériel, etc.
                </p>
              </div>
            </div>
            <div className="flex mb-12">
              <div className="w-1/3 sm:mx-6 flex items-center">
                <svg
                  width="57"
                  height="66"
                  viewBox="0 0 57 66"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.3711 27.6911V34.0602C21.3764 34.4944 21.5512 34.9093 21.8583 35.2164C22.1653 35.5235 22.5803 35.6979 23.0145 35.7032H53.4873C53.9216 35.6979 54.3365 35.5235 54.6436 35.2164C54.9506 34.9093 55.1254 34.4944 55.1307 34.0602V3.92973C55.1254 3.4955 54.9506 3.08055 54.6436 2.77349C54.3365 2.46642 53.9216 2.29131 53.4873 2.28598H23.0145C22.5803 2.29131 22.1653 2.46642 21.8583 2.77349C21.5512 3.08055 21.3764 3.4955 21.3711 3.92973V15.7075"
                    stroke="#E65300"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.49776 51.1795C9.55417 51.1795 10.5869 50.8662 11.4653 50.2793C12.3436 49.6924 13.0281 48.8579 13.4323 47.8819C13.8366 46.9059 13.9424 45.8318 13.7363 44.7957C13.5302 43.7596 13.0214 42.8083 12.2744 42.0613C11.5274 41.3143 10.5758 40.8055 9.53964 40.5994C8.50353 40.3933 7.42943 40.4988 6.45344 40.903C5.47744 41.3073 4.64327 41.9921 4.05636 42.8704C3.46945 43.7488 3.15625 44.7812 3.15625 45.8376C3.15625 47.2542 3.71906 48.6129 4.72075 49.6146C5.72244 50.6163 7.08115 51.1795 8.49776 51.1795Z"
                    stroke="#E65300"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.2786 52.8228H6.78645C5.40617 52.8228 4.08241 53.3715 3.10641 54.3475C2.1304 55.3235 1.58203 56.6473 1.58203 58.0275V63.3687C1.58203 63.7319 1.72609 64.0802 1.98294 64.337C2.23978 64.5939 2.58837 64.7383 2.9516 64.7383H14.182C14.5452 64.7383 14.8934 64.5939 15.1503 64.337C15.4071 64.0802 15.5515 63.7319 15.5515 63.3687V58.0275C15.5248 56.6438 14.9587 55.3251 13.9737 54.3529C12.9886 53.3806 11.6625 52.8315 10.2786 52.8228V52.8228Z"
                    stroke="#E65300"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M28.3571 51.1795C29.4135 51.1795 30.4463 50.8662 31.3246 50.2793C32.203 49.6924 32.8874 48.8579 33.2917 47.8819C33.696 46.9059 33.8017 45.8318 33.5957 44.7957C33.3896 43.7596 32.8808 42.8083 32.1338 42.0613C31.3868 41.3143 30.4351 40.8055 29.399 40.5994C28.3629 40.3933 27.2888 40.4988 26.3128 40.903C25.3368 41.3073 24.5026 41.9921 23.9157 42.8704C23.3288 43.7488 23.0156 44.7812 23.0156 45.8376C23.0156 47.2542 23.5784 48.6129 24.5801 49.6146C25.5818 50.6163 26.9405 51.1795 28.3571 51.1795Z"
                    stroke="#E65300"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M30.136 52.8228H26.6439C25.2636 52.8228 23.9398 53.3715 22.9638 54.3475C21.9878 55.3235 21.4395 56.6473 21.4395 58.0275V63.3687C21.4395 63.7319 21.5835 64.0802 21.8404 64.337C22.0972 64.5939 22.4458 64.7383 22.809 64.7383H34.0394C34.4026 64.7383 34.7509 64.5939 35.0077 64.337C35.2646 64.0802 35.409 63.7319 35.409 63.3687V58.0275C35.3822 56.6438 34.8161 55.3251 33.8311 54.3529C32.8461 53.3806 31.52 52.8315 30.136 52.8228V52.8228Z"
                    stroke="#E65300"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M48.2165 51.1795C49.2729 51.1795 50.3056 50.8662 51.184 50.2793C52.0624 49.6924 52.7468 48.8579 53.1511 47.8819C53.5554 46.9059 53.6611 45.8318 53.455 44.7957C53.2489 43.7596 52.7402 42.8083 51.9932 42.0613C51.2462 41.3143 50.2945 40.8055 49.2584 40.5994C48.2223 40.3933 47.1482 40.4988 46.1722 40.903C45.1962 41.3073 44.362 41.9921 43.7751 42.8704C43.1882 43.7488 42.875 44.7812 42.875 45.8376C42.875 47.2542 43.4378 48.6129 44.4395 49.6146C45.4412 50.6163 46.7999 51.1795 48.2165 51.1795V51.1795Z"
                    stroke="#E65300"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M49.9273 52.8228H46.4349C45.0546 52.8228 43.7309 53.3715 42.7548 54.3475C41.7788 55.3235 41.2305 56.6473 41.2305 58.0275V63.3687C41.2305 63.7319 41.3749 64.0802 41.6317 64.337C41.8886 64.5939 42.2368 64.7383 42.6 64.7383H53.8304C54.1936 64.7383 54.5422 64.5939 54.7991 64.337C55.0559 64.0802 55.2 63.7319 55.2 63.3687V58.0275C55.1732 56.6438 54.6071 55.3251 53.6221 54.3529C52.6371 53.3806 51.3113 52.8315 49.9273 52.8228V52.8228Z"
                    stroke="#E65300"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M26.7816 18.9949C26.6154 18.6755 26.388 18.3918 26.1122 18.1604C25.8363 17.9289 25.5174 17.7542 25.1739 17.6461C24.8305 17.538 24.4693 17.4987 24.1106 17.5304C23.752 17.5621 23.403 17.664 23.0838 17.8307L18.0165 20.4327C18.0165 20.4327 15.2089 18.447 14.3187 17.8307C13.1419 16.863 11.8259 16.0779 10.4153 15.5021C8.63489 14.8858 3.9785 14.475 2.67741 17.5565C1.30785 20.775 1.51321 29.0608 1.58169 35.0184C1.57244 35.1377 1.58905 35.258 1.63051 35.3702C1.67197 35.4824 1.73718 35.5839 1.82177 35.6685C1.90635 35.753 2.00815 35.8182 2.12036 35.8597C2.23256 35.9012 2.35251 35.9178 2.47178 35.9085H12.2644C12.8807 35.9085 13.086 35.5667 13.1545 35.0873C13.2229 34.8134 13.7706 28.0337 13.7021 25.0891V24.0619L16.3045 25.8428C16.7405 26.1636 17.2697 26.3315 17.8108 26.3216C18.2376 26.3296 18.6604 26.2361 19.0436 26.0481L25.6176 22.6241C25.936 22.4662 26.2191 22.2456 26.4509 21.9761C26.6826 21.7067 26.8583 21.3937 26.9668 21.0553C27.0753 20.7169 27.1146 20.36 27.0828 20.0061C27.051 19.6521 26.9487 19.3086 26.7816 18.9949V18.9949Z"
                    stroke="#E65300"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.36009 13.6532C9.53839 13.6532 10.6903 13.3041 11.67 12.6494C12.6497 11.9948 13.4132 11.0645 13.8641 9.97585C14.315 8.88724 14.433 7.68955 14.2031 6.53388C13.9733 5.37822 13.406 4.31631 12.5728 3.48312C11.7396 2.64994 10.678 2.08263 9.52234 1.85275C8.36668 1.62288 7.16865 1.74088 6.08004 2.1918C4.99143 2.64272 4.06108 3.40619 3.40645 4.38591C2.75182 5.36564 2.40234 6.51784 2.40234 7.69614C2.40416 9.27564 3.03253 10.7896 4.14941 11.9065C5.26628 13.0234 6.78059 13.6514 8.36009 13.6532Z"
                    stroke="#E65300"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M29.3145 11.8044H47.1873"
                    stroke="#E65300"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M29.3145 18.9946H47.1873"
                    stroke="#E65300"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M29.3145 26.1848H47.1873"
                    stroke="#E65300"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <h2 className="text-midnight-blue-500 font-semibold text-xl">
                  Formations
                </h2>
                <p className="text-blue-gray-500 font-light text-sm">
                  Gestion administrative, comptabilité, achats & ventes,
                  classement, archivage, etc.
                </p>
              </div>
            </div>
          </Fade>
          <div className="text-center sm:hidden">
            <Link
              to="/contacts"
              className="text-sm sm:text-base flex items-center justify-center content-button bg-trinidad-500 text-white font-light rounded-full text-center py-4 px-4 sm:p-2 cursor-pointer"
            >
              Contactez-nous !
            </Link>
          </div>
        </div>
      </section>
      <section className="mb-48">
        <CarouselHome />
      </section>
    </Layout>
  );
};

export default IndexPage;
