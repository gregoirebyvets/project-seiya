import React, { useEffect, useRef, useState } from "react";
import { FormikProvider, useFormik } from "formik";
import { useKeycloak } from "@react-keycloak/web";
import Vimeo from "@u-wave/react-vimeo";
import Select from "react-select";
import axios from "axios";
import toast from "react-hot-toast";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import * as Progress from "@radix-ui/react-progress";
import ReactModal from "react-modal";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { saveAs } from "file-saver";
import fileDownload from "js-file-download";

import Layout from "../components/layout";
import ValidationError from "../components/forms/ValidationError";
import ContentButton from "../components/buttons/ContentButton";
import Seo from "../components/seo";

import {
  useQuery,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import { SupportFormValidationSchema } from "../utils/validation/supportFormSchema";

import avatar1 from "../images/photos/avatars/1.png";
import avatar2 from "../images/photos/avatars/2.png";
import avatar3 from "../images/photos/avatars/3.png";
import avatar4 from "../images/photos/avatars/4.png";
import tut1 from "../images/support_tut_1.jpg";
import tut2 from "../images/support_tut_2.jpg";
import tut3 from "../images/support_tut_3.jpg";
import downloadHeader from "../images/pegase/unknown.png";
import downloadWindows from "../images/support_download_windows.svg";
import downloadApple from "../images/support_download_apple.svg";
import downloadData from "../images/support_download_data.svg";
import downloadLayout from "../images/support_download_layout.svg";
import teamviewerImg from "../images/support_teamviewer.png";
import DownloadLinks from "../components/links/DownloadLinks";

const SupportPage = () => {
  const supportRef = useRef();
  const { keycloak } = useKeycloak();

  const [isCategoryDialogOpen, setIsCategoryDialogOpen] = useState(false);

  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoSource, setVideoSource] = useState(null);
  const [videoClass, setVideoClass] = useState(null);
  const [isVideoSidebarOpen, setIsVideoSidebarOpen] = useState(false);

  const [winPerc, setWinPerc] = useState(0);
  const [winStarted, setWinStarted] = useState(false);
  const [winList, setWinList] = useState(false);
  const [winError, setWinError] = useState(false);

  const [macPerc, setMacPerc] = useState(0);
  const [macStarted, setMacStarted] = useState(false);
  const [macList, setMacList] = useState(false);
  const [macError, setMacError] = useState(false);

  const [layoutPerc, setLayoutPerc] = useState(0);
  const [layoutStarted, setLayoutStarted] = useState(false);
  const [layoutList, setLayoutList] = useState(false);
  const [layoutError, setLayoutError] = useState(false);

  const [lastVersion, setLastVersion] = useState(null);

  useEffect(() => {
    const fetchVersion = async () => {
      axios
        .get("https://web.byvets.be/api/download/version/pegase", {
          method: "GET",
          mode: "cors",
        })
        .then((response) => {
          setLastVersion(response.data.version);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchVersion();
  }, []);

  const fetchDownloadInfo = async () => {
    return {
      windows: {
        size: 123456,
        date: new Date(),
      },
    };
  };

  const { isLoading, error, data, isFetching } = useQuery(["repoData"], () =>
    axios
      .get("https://api.github.com/repos/tannerlinsley/react-query")
      .then((res) => res.data)
  );

  const setHidden = () => {
    console.log(document.body.style.overflow);
    if (document.body.style.overflow !== "hidden") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };

  const docs = [
    {
      title: "Manuel 1er contact",
      subtitle: "Initiation",
      size: "950 Ko",
      lastUpdateAt: "28.07.2002",
      filename: "ManuelPremierContact",
    },
    {
      title: "Manuel Références d50",
      subtitle: "(complet jusqu'à la page 273)",
      size: "7,5 Mo",
      lastUpdateAt: "07.12.2009",
      filename: "ManuelReferencesD50",
    },
    {
      title: "Gestion du médicament",
      subtitle: "stock, registres, DAF",
      size: "3,4 Mo",
      lastUpdateAt: "18.06.2019",
      filename: "GestionMedicamentEnPratiqueRurale",
    },
    {
      title: "Gestion de la comptabilité",
      subtitle: "La compta facile",
      size: "2,0 Mo",
      lastUpdateAt: "05.09.2019",
      filename: "GestionComptaAvecPegase2019",
    },
    {
      title: "Mémo compta",
      subtitle: "Quelques opérations comptables particulières",
      size: "12 Ko",
      lastUpdateAt: "21.01.2003",
      filename: "MemoCompta",
    },
    {
      title: "Les plus de Pégase",
      subtitle: "Les points forts du logiciel",
      size: "8 Ko",
      lastUpdateAt: "04.03.2003",
      filename: "LesPlusDePegase",
    },
  ];
  const posts = [
    {
      title: "Factures et DAF sur mails différents",
      author: "Camille Marchin",
      date: "7 oct 21 11:08",
      category: "pegase",
      excerpt:
        "Bonjour, j'ai plusieurs clients qui souhaitent recevoir leurs factures et leurs DAF sur des adresses mails...",
      views: 25,
      replies: 7,
      avatar: avatar1,
    },
    {
      title: "Sauvegarde journalière plante sur nouvel ordi...",
      author: "Jean-Christophe Marchin",
      date: "6 oct 21 09:38",
      category: "informatique",
      excerpt:
        "Bonjour, J'ai changé d'ordinateur. Depuis, la sauvegarde journalière plante un peu...",
      views: 29,
      replies: 11,
      avatar: avatar2,
    },
    {
      title: "Numéro TVA argentin ?",
      author: "Didier Dupont",
      date: "5 oct 21 21:08",
      category: "admin",
      excerpt:
        "Coucou , je n arrive pas a entrer le numéro de tva Argentin d'un de mes clients, faut il compter...",
      views: 35,
      replies: 21,
      avatar: avatar3,
    },
    {
      title: "Fournisseurs qui sont aussi clients",
      author: "Marie Deshlower",
      date: "4 oct 21 15:43",
      category: "pegase",
      excerpt:
        "Bonjour, Il m’arrive d’avoir des fournisseurs qui sont aussi clients... C’est doublement ennuyeux...",
      views: 47,
      replies: 5,
      avatar: avatar4,
    },
  ];

  const tutorials = [
    {
      title: "Créances non récupérables",
      duration: "02:52",
      date: "1 juil 2011",
      views: 59,
      img: tut3,

      src: "689215455",
      class: "bv-ratio-video-3",
    },
    {
      title: "Solder un compte client",
      duration: "01:42",
      date: "18 oct 2011",
      views: 47,
      img: tut2,

      src: "689215541",
      class: "bv-ratio-video-2",
    },
    {
      title: "Mise à jour du tarif fournisseur",
      duration: "04:38",
      date: "23 nov 2021",
      views: 35,
      img: tut1,
      src: "689215513",
      class: "bv-ratio-video-1",
    },
  ];

  const downloadPdf = (fileName) => {
    axios
      .get("https://web.byvets.be/api/download/doc/" + fileName, {
        method: "GET",
        mode: "cors",
        headers: {
          Authorization: `Bearer ${keycloak.token}`,
          "Access-Control-Allow-Origin": true,
          Accept: "application/pdf",
        },
        responseType: "blob",
      })
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", fileName + ".pdf"); //or any other extension
        document.body.appendChild(link);
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const downloadWinSetup = () => {
    setWinError(false);
    if (!winStarted) {
      if (!winList) {
        setWinList(true);
      }

      setWinStarted(true);

      axios
        .get(`https://web.byvets.be/api/download/windows/Pegase/latest`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${keycloak.token}`,
            "Access-Control-Allow-Origin": true,
            Accept: "application/zip",
          },
          responseType: "blob",
          onDownloadProgress: (progressEvent) => {
            let winPercentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            ); // you can use this to show user percentage of file downloaded
            setWinPerc(winPercentCompleted);
            if (winPercentCompleted === 100) {
              setWinStarted(false);
              setWinList(false);
            }
          },
        })
        .then((response) => {
          fileDownload(
            response.data,
            "Pegase" + lastVersion.replace(".", "_") + "Win.zip"
          );
        })
        .catch((err) => {
          setWinError(true);
          setWinStarted(false);
        });
    }
  };
  const downloadMacSetup = () => {
    setMacError(false);
    if (!macStarted) {
      if (!macList) {
        setMacList(true);
      }

      setMacStarted(true);

      axios
        .get(`https://web.byvets.be/api/download/mac/Pegase/latest`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${keycloak.token}`,
            "Access-Control-Allow-Origin": true,
            Accept: "application/zip",
          },
          responseType: "blob",
          onDownloadProgress: (progressEvent) => {
            let macPercentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            ); // you can use this to show user percentage of file downloaded
            setMacPerc(macPercentCompleted);
            if (macPercentCompleted === 100) {
              setMacStarted(false);
              setMacList(false);
            }
          },
        })
        .then((response) => {
          // const blob = new Blob([response.data], {
          //   type: "application/zip",
          // });

          fileDownload(
            response.data,
            "Pegase" + lastVersion.replace(".", "_") + "Mac.zip"
          );
        })
        .catch((err) => {
          setMacError(true);
          setMacStarted(false);
        });
    }
  };
  const downloadLayouts = () => {
    setLayoutError(false);
    if (!layoutStarted) {
      if (!layoutList) {
        setLayoutList(true);
      }

      setLayoutStarted(true);

      axios
        .get(`https://web.byvets.be/api/download/data/MisesEnPage`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${keycloak.token}`,
            "Access-Control-Allow-Origin": true,
            Accept: "application/zip",
          },
          responseType: "blob",
          onDownloadProgress: (progressEvent) => {
            let layPercCompl = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            ); // you can use this to show user percentage of file downloaded
            setLayoutPerc(layPercCompl);
            if (layPercCompl === 100) {
              setLayoutStarted(false);
              setLayoutList(false);
            }
          },
        })
        .then((response) => {
          fileDownload(response.data, "Pegase_MisesEnPage.zip");
        })
        .catch((err) => {
          setLayoutError(true);
          setLayoutStarted(false);
        });
    }
  };

  const downloadDatas = () => {
    axios
      .get("https://web.byvets.be/api/download/data/Donnees", {
        method: "GET",
        mode: "cors",
        headers: {
          Authorization: `Bearer ${keycloak.token}`,
          "Access-Control-Allow-Origin": true,
          Accept: "application/zip",
        },
        responseType: "arraybuffer",
      })
      .then((response) => {
        const blob = new Blob([response.data], {
          type: "application/zip",
        });
        saveAs(blob, "Pegase_Donnees.zip");
      })
      .catch((err) => {
        console.log(err);
      });
    //
  };

  const actions = {
    windows: downloadWinSetup,
    mac: downloadMacSetup,
    datas: downloadDatas,
    layouts: downloadLayouts,
  };
  const downloads = [
    {
      name: "Pégase " + lastVersion,
      platform: "Windows (7, 8, 10)",
      size: "75,9 Mo",
      lastUpdateAt: "12.07.2022",
      img: downloadWindows,
      action: downloadWinSetup,
    },
    {
      name: "Pégase " + lastVersion,
      platform: "Mac OS X (10.10 et +)",
      size: "69,5 Mo",
      lastUpdateAt: "12.07.2022",
      img: downloadApple,
      action: downloadMacSetup,
    },
    {
      name: "Données 3.0b38",
      platform: "Windows & Mac",
      size: "233 Ko",
      lastUpdateAt: "19.01.2016",
      img: downloadData,
      action: downloadDatas,
    },
    {
      name: "Mises en page 4.4",
      platform: "Windows & Mac",
      size: "535 Ko",
      lastUpdateAt: "29.01.2022",
      img: downloadLayout,
      action: downloadLayouts,
    },
  ];

  const formik = useFormik({
    initialValues: {
      category: null,
      title: "",
      message: "",
      address2: "",
      forum: false,
    },
    validationSchema: SupportFormValidationSchema,
    onSubmit: (values) => {
      let regEx = new RegExp(
        "([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?"
      );

      if (regEx.test(values.message)) {
        toast.error(
          "Les urls ne sont pas autorisées dans le contenu du message",
          { position: "bottom-center" }
        );
      } else {
        if (formik.values.address2 === "") {
          axios
            .post(process.env.BACKEND_API_URL + "/mail/support", {
              firstname: keycloak.idTokenParsed.given_name,
              lastname: keycloak.idTokenParsed.family_name,
              title: formik.values.title,
              message: formik.values.message,
              category: formik.values.category,
              forum: formik.values.forum,
              username: keycloak.idTokenParsed.preferred_username,
              email: keycloak.idTokenParsed.email,
            })
            .then(function (response) {
              toast.success("Message envoyé", {
                position: "bottom-center",
              });
            })
            .catch(function (error) {
              toast.error("Erreur. Veuillez recommencer.", {
                position: "bottom-center",
              });
            });
        }
      }
    },
  });

  const handleCategoryChange = (item) => {
    formik.setFieldValue("category", item.value);
  };

  const checkCategoryThenSend = () => {
    if (typeof formik.values.category === "number") {
      formik.submitForm();
    } else {
      setIsCategoryDialogOpen(true);
    }
  };

  const categoriesOptions = [
    { value: 5, label: "Logiciel Pégase" }, // 5
    { value: 0, label: "Administration" },
    { value: 7, label: "Forum" }, // 7
    { value: 2, label: "Suggestions" }, // 2
    { value: -1, label: "Autre" },
  ];

  const colourStyles = {
    control: (provided, state) => ({
      ...provided,
      color: "#002E6D",
      fontWeight: "500",
      borderRadius: "7px",
      borderColor: state.isFocused
        ? "white"
        : state.isSelected
        ? "white"
        : state.isActived
        ? "white"
        : "#E65300",
      backgroundColor: "white",
      boxShadow: state.isFocused
        ? " 0px 7px 15px rgba(20, 43, 50, 0.1)"
        : "none",
      "&:hover": {
        boxShadow: " 0px 7px 15px rgba(20, 43, 50, 0.1)",
        borderColor: "white",
      },
      zIndex: "20",
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        fontWeight: "500",
        padding: "0.5em 0.5em 0.5em 1.5em",
        width: "240px",
        backgroundColor: isDisabled
          ? "red"
          : isFocused
          ? "#FFEBD9"
          : isSelected
          ? "white"
          : "white",
        color: "#002E6D",
        cursor: isDisabled ? "not-allowed" : "default",
        borderRadius: "7px",
        "&:hover": {
          backgroundColor: "#FFEBD9",
        },
        "&:before": {
          content: isSelected ? '"✓"' : '""',
          marginRight: isSelected ? "10px" : "0",
          color: "#E65300",
          position: "absolute",
          left: "0.5em",
        },
      };
    },

    menuList: (provided, state) => ({
      padding: "0.25em",
      boxShadow: " 0px 7px 15px rgba(20, 43, 50, 0.1)",
      borderColor: "red",
      width: "250px",
    }),
    menu: (provided, state) => ({
      ...provided,
      paddingTop: "3em",
      marginTop: "-3em",
      boxShadow: " 0px 7px 15px rgba(20, 43, 50, 0.1)",

      borderColor: state.isFocused
        ? "white"
        : state.isActive
        ? "white"
        : "white",
    }),
    menuPortal: (provided, state) => ({
      ...provided,
      borderColor: "white",
      width: "250px",
    }),
    indicatorSeparator: (provided, state) => ({
      display: "hidden",
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: "#E65300",
      "&:hover": {
        color: "#E65300",
      },
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: "#002E6D",
    }),
  };

  if (!keycloak.authenticated) {
    return (
      <Layout>
        <Seo
          description="Quand les vétérinaires prennent les rênes de leur outil informatique..."
          title="ByVets - Logiciel Pegase, gestion informatique de cabinet vétérinaire"
        />
        <div className="text-center max-w-md mx-auto text-lg  text-midnight-blue-500">
          <div className="mb-8">
            Vous devez être connecté(e) pour accèder à cette page
          </div>
          <button
            className="text-sm sm:text-base flex items-center justify-center content-button bg-trinidad-500 text-white font-light rounded-full text-center py-2 px-10 sm:p-2 cursor-pointer"
            onClick={() => {
              keycloak.login();
            }}
          >
            Se connecter
          </button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Seo
        description="Quand les vétérinaires prennent les rênes de leur outil informatique..."
        title="ByVets - Logiciel Pegase, gestion informatique de cabinet vétérinaire"
      />
      <div className={` ${isVideoOpen ? "overflow-y-hidden" : ""}`}>
        <ReactModal
          isOpen={isVideoOpen}
          preventScroll={true}
          onRequestClose={() => {
            setIsVideoOpen(false);
          }}
          onAfterClose={() => {
            setHidden();
          }}
          onAfterOpen={() => {
            setHidden();
          }}
          shouldCloseOnOverlayClick={true}
          overlayElement={
            (props, contentElement) => (
              <div
                {...props}
                onClick={() => {
                  setVideoSource(null);
                  setIsVideoOpen(false);
                }}
              >
                <div className=" flex-col ">{contentElement}</div>
              </div>
            )
            /* Custom Overlay element. */
          }
          style={{
            overlay: {
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.75)",
              zIndex: 100,
              width: "100%",
            },
            content: {
              position: "absolute",
              top: "0px",
              left: "0px",
              right: "0px",
              bottom: "0px",
              overflow: "auto",
              WebkitOverflowScrolling: "touch",
              outline: "none",
              margin: "auto",
              background: "transparent",
              padding: "0",
              border: "0",
            },
          }}
        >
          <div className="flex  items-center relative">
            <div
              className=" absolute top-2 right-2 text-gray-900 bg-gray-50 bg-opacity-30 rounded-full cursor-pointer z-50"
              onClick={() => {
                setVideoSource(null);
                setIsVideoOpen(false);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <div className="flex-grow">
              <Vimeo
                video={videoSource}
                autoplay
                className={`bv-video ${videoClass}`}
              />
            </div>
            <div
              className={`w-96 bg-gray-600 ${
                isVideoSidebarOpen ? "" : "hidden"
              } `}
            >
              sidebar
            </div>
          </div>
        </ReactModal>
        <AlertDialog.Root
          open={isCategoryDialogOpen}
          className="absolute top-0 left-0"
        >
          <AlertDialog.Portal>
            <AlertDialog.Overlay className="fixed bg-black bg-opacity-30 w-screen h-screen z-50 top-0 left-0 flex" />
            <AlertDialog.Content className="bg-white fixed mx-auto inset-x-0 z-50 top-1/2 -mt-20 max-w-lg rounded-lg p-4 shadow-lg">
              <AlertDialog.Title className=" font-medium text-lg mb-4">
                Aucun type de question choisi
              </AlertDialog.Title>
              <AlertDialog.Description className=" text-base text-gray-500 font-light mb-8">
                Veuillez sélectionner un type de question avant d'envoyer votre
                message.
              </AlertDialog.Description>
              <div className="flex justify-end gap-x-2">
                <AlertDialog.Action>
                  <button
                    onClick={(e) => {
                      setIsCategoryDialogOpen(false);
                    }}
                    className="bg-trinidad-100 py-2 px-4 text-trinidad-600 rounded font-medium"
                  >
                    Ok
                  </button>
                </AlertDialog.Action>
              </div>
            </AlertDialog.Content>
          </AlertDialog.Portal>
        </AlertDialog.Root>
        {(macList || winList || layoutList) && (
          <div className="  fixed w-100 bottom-0 right-0 shadow-xl bg-blueish-300 rounded-lg m-5 z-50 p-2  border-blueish-500">
            <div className="text-center pb-4 text-base font-semibold text-midnight-blue-500">
              Téléchargements
            </div>
            <div>
              {winList && (
                <div className=" p-2 rounded">
                  <div className="flex items-center">
                    <div
                      className="bg-blueish-500 rounded-full flex justify-center items-center"
                      style={{ height: "24px", width: "24px" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        class="feather feather-folder text-midnight-blue-500"
                      >
                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                      </svg>
                    </div>
                    <div className="text-sm ml-1 flex-grow">
                      {"Pégase Windows"}
                    </div>
                    {winPerc < 100 && !winError && <div>{winPerc}%</div>}
                    {winPerc >= 100 && !winError && (
                      <div className="text-sm">Terminé</div>
                    )}
                    {winError && (
                      <div className="text-sm flex items-center">
                        Erreur{" "}
                        <button
                          onClick={() => downloadWinSetup()}
                          className="ml-2 bg-trinidad-200 cursor-pointer rounded-full h-6 w-6 flex items-center justify-center"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            class="feather feather-refresh-ccw text-white"
                          >
                            <polyline points="1 4 1 10 7 10"></polyline>
                            <polyline points="23 20 23 14 17 14"></polyline>
                            <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>
                          </svg>
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="pt-4">
                    <Progress.Root className=" h-0.5 rounded-full w-full bg-gray-300">
                      <Progress.Indicator
                        style={{ width: `${winPerc}%` }}
                        className=" bg-trinidad-500 h-full transition-all"
                      />
                    </Progress.Root>
                  </div>
                </div>
              )}
              {macList && (
                <div className=" p-2 rounded">
                  <div className="flex items-center">
                    <div
                      className="bg-blueish-500 rounded-full flex justify-center items-center"
                      style={{ height: "24px", width: "24px" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        class="feather feather-folder text-midnight-blue-500"
                      >
                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                      </svg>
                    </div>
                    <div className="text-sm ml-1 flex-grow">{"Pégase Mac"}</div>
                    {macPerc < 100 && !macError && <div>{macPerc}%</div>}
                    {macPerc >= 100 && !macError && (
                      <div className="text-sm">Terminé</div>
                    )}
                    {macError && (
                      <div className="text-sm flex items-center">
                        Erreur{" "}
                        <button
                          onClick={() => downloadMacSetup()}
                          className="ml-2 bg-trinidad-200 cursor-pointer rounded-full h-6 w-6 flex items-center justify-center"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            class="feather feather-refresh-ccw text-white"
                          >
                            <polyline points="1 4 1 10 7 10"></polyline>
                            <polyline points="23 20 23 14 17 14"></polyline>
                            <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>
                          </svg>
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="pt-4">
                    <Progress.Root className=" h-0.5 rounded-full w-full bg-gray-300">
                      <Progress.Indicator
                        style={{ width: `${macPerc}%` }}
                        className=" bg-trinidad-500 h-full transition-all"
                      />
                    </Progress.Root>
                  </div>
                </div>
              )}
              {layoutList && (
                <div className=" p-2 rounded">
                  <div className="flex items-center">
                    <div
                      className="bg-blueish-500 rounded-full flex justify-center items-center"
                      style={{ height: "24px", width: "24px" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        class="feather feather-folder text-midnight-blue-500"
                      >
                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                      </svg>
                    </div>
                    <div className="text-sm ml-1 flex-grow">
                      {"Mises en page"}
                    </div>
                    {layoutPerc < 100 && !macError && <div>{layoutPerc}%</div>}
                    {layoutPerc >= 100 && !macError && (
                      <div className="text-sm">Terminé</div>
                    )}
                    {layoutError && (
                      <div className="text-sm flex items-center">
                        Erreur{" "}
                        <button
                          onClick={() => downloadMacSetup()}
                          className="ml-2 bg-trinidad-200 cursor-pointer rounded-full h-6 w-6 flex items-center justify-center"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            class="feather feather-refresh-ccw text-white"
                          >
                            <polyline points="1 4 1 10 7 10"></polyline>
                            <polyline points="23 20 23 14 17 14"></polyline>
                            <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>
                          </svg>
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="pt-4">
                    <Progress.Root className=" h-0.5 rounded-full w-full bg-gray-300">
                      <Progress.Indicator
                        style={{ width: `${layoutPerc}%` }}
                        className=" bg-trinidad-500 h-full transition-all"
                      />
                    </Progress.Root>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        <div>
          <section className="mb-16 ">
            <h2 className="text-center text-midnight-blue-500 font-semibold text-3xl mb-2">
              Besoin d’assistance, une question ?
            </h2>
            <h3 className="text-center text-midnight-blue-500 font-semibold text-3xl mb-16">
              Nous sommes à votre dispostion !
            </h3>
            <div className="flex flex-col sm:flex-row">
              <AnchorLink
                to="#contact"
                className="group flex-1 text-center hover:shadow-xl  rounded-3xl pb-2 px-8 pt-5 cursor-pointer"
              >
                {" "}
                <svg
                  width="90"
                  height="77"
                  viewBox="0 0 90 77"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mb-10 mx-auto"
                >
                  <path
                    d="M47.7134 63.8614V70.8514C47.716 71.5004 47.5847 72.1427 47.3278 72.7372C47.071 73.3318 46.6942 73.8655 46.2217 74.3042C45.7493 74.7429 45.1915 75.0769 44.5841 75.2848C43.9767 75.4927 43.333 75.5699 42.6945 75.5115C35.6099 74.7324 28.8048 72.2824 22.8257 68.3583C17.263 64.7809 12.5468 60.0079 9.012 54.3782C5.12109 48.2996 2.69969 41.3789 1.94398 34.1768C1.88645 33.5325 1.96211 32.8831 2.16615 32.27C2.37019 31.6569 2.69814 31.0935 3.12912 30.6157C3.5601 30.1379 4.08466 29.7561 4.66941 29.4947C5.25416 29.2333 5.88628 29.098 6.52553 29.0974H13.4324C14.5497 29.0863 15.6329 29.4867 16.4801 30.224C17.3272 30.9614 17.8806 31.9853 18.037 33.105C18.3285 35.342 18.8691 37.5384 19.6486 39.6524C19.9583 40.4864 20.0254 41.3927 19.8417 42.2641C19.6581 43.1354 19.2315 43.9353 18.6125 44.5688L15.6886 47.5279C18.9661 53.3612 23.7385 58.1911 29.5024 61.508L32.4263 58.5489C33.0522 57.9225 33.8425 57.4907 34.7035 57.3049C35.5645 57.1191 36.46 57.1869 37.2841 57.5004C39.3729 58.2892 41.5432 58.8364 43.7535 59.1314C44.8719 59.2911 45.8933 59.8612 46.6234 60.7333C47.3535 61.6054 47.7415 62.7187 47.7134 63.8614Z"
                    stroke="#E65300"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M70.4295 40.2336H78.8507C80.1298 40.2392 81.3974 39.9914 82.5802 39.5045C83.7629 39.0177 84.8379 38.3016 85.7423 37.3971C86.6467 36.4927 87.3628 35.4178 87.8497 34.235C88.3366 33.0522 88.5844 31.7847 88.5788 30.5056V11.5069C88.5844 10.2279 88.3366 8.96028 87.8497 7.7775C87.3628 6.59473 86.6467 5.51981 85.7423 4.61538C84.8379 3.71094 83.7629 2.99486 82.5802 2.50799C81.3974 2.02111 80.1298 1.77328 78.8507 1.7789H46.8852C45.6066 1.77327 44.3395 2.02098 43.1573 2.50799C41.9751 2.99499 40.9014 3.71184 39.9978 4.61641C39.0942 5.52099 38.3787 6.59582 37.893 7.77854C37.4073 8.96126 37.1605 10.2284 37.1675 11.5069V30.5378C37.1605 31.8163 37.4073 33.0834 37.893 34.2661C38.3787 35.4489 39.0942 36.5237 39.9978 37.4283C40.9014 38.3328 41.9751 39.0497 43.1573 39.5367C44.3395 40.0237 45.6066 40.2714 46.8852 40.2658H53.1508C53.9946 40.2981 54.7942 40.6511 55.3863 41.2531C55.9784 41.8551 56.3185 42.6604 56.3368 43.5046C56.3664 47.3023 55.8588 51.0852 54.8289 54.7406C60.4362 51.0661 65.1936 45.1827 67.7849 41.7737C68.061 41.3157 68.448 40.9342 68.9101 40.6651C69.3722 40.3959 69.8949 40.2477 70.4295 40.2336V40.2336Z"
                    stroke="#E65300"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M46.4494 14.7351H78.8508"
                    stroke="#E65300"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M46.4494 21.1069H78.8508"
                    stroke="#E65300"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M46.4494 27.4788H78.8508"
                    stroke="#E65300"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <h4 className="text-lg mb-2 text-midnight-blue-500 font-semibold">
                  Directement
                </h4>
                <p className="text-sm font-light text-midnight-blue-500">
                  Une question urgente ? <br /> Appelez le{" "}
                  <a
                    href="tel:+32476252536"
                    className="text-trinidad-500 font-semibold"
                  >
                    + 32 476 25 25 36
                  </a>
                  . Ou, envoyez-nous un message via le formulaire de support
                  ci-dessous.
                </p>
                <div className=" invisible group-hover:visible text-center mt-4">
                  <svg
                    width="20"
                    height="23"
                    viewBox="0 0 20 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto"
                  >
                    <path
                      d="M11.2989 21.9816L19.1726 14.1079C19.5254 13.7551 19.7236 13.2766 19.7236 12.7777C19.7236 12.2788 19.5254 11.8003 19.1726 11.4475C18.8199 11.0947 18.3414 10.8965 17.8424 10.8965C17.3435 10.8965 16.865 11.0947 16.5122 11.4475L11.8364 16.0965L11.8364 1.89794C11.8364 1.39904 11.6382 0.920578 11.2854 0.567804C10.9327 0.215031 10.4542 0.0168453 9.95529 0.0168453C9.4564 0.0168453 8.97793 0.215031 8.62516 0.567804C8.27239 0.920578 8.0742 1.39904 8.0742 1.89794L8.0742 16.0965L3.42521 11.4475C3.06886 11.0947 2.58696 10.8979 2.08551 10.9005C1.58407 10.903 1.10417 11.1046 0.751377 11.4609C0.398586 11.8173 0.201805 12.2992 0.204324 12.8006C0.206844 13.3021 0.408458 13.782 0.764814 14.1348L8.61165 21.9816C8.96755 22.3396 9.45051 22.5425 9.95529 22.546C10.2062 22.5504 10.4552 22.5025 10.6866 22.4054C10.9179 22.3082 11.1265 22.1639 11.2989 21.9816Z"
                      fill="#E65300"
                    />
                  </svg>
                </div>
              </AnchorLink>
              <a
                href="https://forum.byvets.be"
                target={"_blank"}
                rel="noreferrer"
                className="group flex-1 text-center hover:shadow-xl rounded-3xl pb-2 px-8 pt-5 cursor-pointer "
              >
                <svg
                  className="mb-10 mx-auto"
                  width="74"
                  height="77"
                  viewBox="0 0 74 77"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M31.9547 59.6774C29.6186 60.4544 25.426 61.383 23.6374 60.9189C23.0899 60.2984 22.0731 58.1968 21.6142 57.034C20.2949 54.0773 19.2051 51.6678 16.9524 51.2037C16.5613 51.1255 13.3753 50.2707 12.4419 50.036C9.02112 49.1809 7.31603 48.9514 5.60565 50.4271C3.11831 52.6016 1.63714 66.3572 1.71535 73.9757C1.71499 74.1359 1.74781 74.2946 1.81134 74.4416C1.87487 74.5887 1.96791 74.7211 2.0848 74.8307C2.20169 74.9402 2.33979 75.0248 2.49066 75.0787C2.64153 75.1326 2.80186 75.1546 2.96171 75.1439C5.91315 75.1439 12.6766 75.3002 15.2422 75.3002C15.5461 75.3002 15.8395 75.1896 16.0679 74.9891C16.2963 74.7885 16.4439 74.5118 16.4832 74.2104L18.0475 62.7073C18.9757 64.3395 20.0656 65.6588 21.6196 66.2063C22.6519 66.5216 23.7262 66.6779 24.8056 66.6702C27.8553 66.5651 30.8704 65.9885 33.7434 64.9602C34.4536 64.7211 35.0402 64.2102 35.3753 63.5399C35.7104 62.8697 35.7666 62.0944 35.5319 61.3828C35.2643 60.6969 34.7456 60.1388 34.081 59.822C33.4165 59.5052 32.656 59.4533 31.9547 59.6774V59.6774Z"
                    stroke="#E65300"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.6217 48.0911C18.8725 48.0911 22.3184 44.6452 22.3184 40.3945C22.3184 36.1437 18.8725 32.6978 14.6217 32.6978C10.371 32.6978 6.92505 36.1437 6.92505 40.3945C6.92505 44.6452 10.371 48.0911 14.6217 48.0911Z"
                    stroke="#E65300"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M24.6574 23.687C23.4372 25.3192 21.1999 28.0672 18.5509 29.7932C19.0373 28.0732 19.2779 26.2927 19.2653 24.5053C19.256 24.103 19.0921 23.72 18.8075 23.4354C18.523 23.1509 18.1399 22.9869 17.7376 22.9776H14.7861C14.1841 22.9804 13.5875 22.864 13.0308 22.6349C12.474 22.4058 11.9682 22.0686 11.5425 21.6429C11.1168 21.2172 10.7796 20.7112 10.5505 20.1544C10.3214 19.5977 10.2048 19.0011 10.2076 18.3991V9.44064C10.2048 8.83862 10.3214 8.24203 10.5505 7.68531C10.7796 7.12858 11.1168 6.62302 11.5425 6.19732C11.9682 5.77163 12.474 5.43444 13.0308 5.20533C13.5875 4.97623 14.1841 4.85935 14.7861 4.86211H29.8457C30.448 4.85935 31.0448 4.97629 31.6018 5.20533C32.1588 5.43438 32.6649 5.77119 33.0911 6.19681C33.5172 6.62244 33.8549 7.12805 34.0846 7.6848C34.3143 8.24155 34.4314 8.83838 34.4293 9.44064V18.3991C34.4314 19.0014 34.3143 19.5982 34.0846 20.1549C33.8549 20.7117 33.5172 21.2178 33.0911 21.6434C32.6649 22.0691 32.1588 22.4059 31.6018 22.6349C31.0448 22.864 30.448 22.9804 29.8457 22.9776H25.8775C25.6312 22.985 25.3906 23.0539 25.1775 23.1778C24.9645 23.3016 24.7857 23.4766 24.6574 23.687V23.687Z"
                    stroke="#E65300"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.5833 10.9685H29.8515"
                    stroke="#E65300"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.5833 16.9702H29.8515"
                    stroke="#E65300"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M47.7121 22.1198H43.2576C42.581 22.1227 41.9105 21.9916 41.2849 21.7341C40.6592 21.4766 40.0906 21.0978 39.6122 20.6194C39.1338 20.141 38.7551 19.5724 38.4975 18.9468C38.24 18.3211 38.1089 17.6506 38.1119 16.9741V6.92456C38.1089 6.248 38.24 5.5775 38.4975 4.95186C38.7551 4.32622 39.1338 3.75764 39.6122 3.27923C40.0906 2.80082 40.6592 2.42205 41.2849 2.16451C41.9105 1.90697 42.581 1.77588 43.2576 1.77886H60.166C60.8423 1.77588 61.5125 1.90691 62.1379 2.16451C62.7632 2.42212 63.3312 2.8013 63.8091 3.27978C64.2871 3.75826 64.6656 4.3268 64.9225 4.95241C65.1794 5.57802 65.3099 6.24827 65.3062 6.92456V16.9911C65.3099 17.6674 65.1794 18.3376 64.9225 18.9632C64.6656 19.5888 64.2871 20.1574 63.8091 20.6358C63.3312 21.1143 62.7632 21.4935 62.1379 21.7511C61.5125 22.0087 60.8423 22.1397 60.166 22.1368H56.8517C56.4054 22.1538 55.9825 22.3406 55.6693 22.659C55.356 22.9774 55.1762 23.4034 55.1665 23.85C55.1508 25.8588 55.4193 27.8598 55.9641 29.7933C52.9981 27.8497 50.4816 24.7376 49.1109 22.9344C48.9649 22.6921 48.7602 22.4903 48.5157 22.348C48.2713 22.2056 47.9948 22.1272 47.7121 22.1198V22.1198Z"
                    stroke="#E65300"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M60.396 8.63208H43.2571"
                    stroke="#E65300"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M60.396 15.373H43.2571"
                    stroke="#E65300"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M69.1088 50.5057C67.4767 49.0247 65.7664 49.2594 62.4239 50.1146C61.4904 50.3492 58.1479 51.2046 57.7621 51.2828C55.5824 51.7469 54.4195 54.0777 52.9386 56.9562C52.3181 58.119 51.3063 60.1424 50.6857 60.8411C49.5229 60.7629 46.5663 58.51 44.47 56.1791C43.9615 55.6259 43.2561 55.295 42.5056 55.2574C41.7552 55.2198 41.02 55.4788 40.4588 55.9784C39.8976 56.4781 39.5553 57.178 39.5057 57.9278C39.4562 58.6775 39.7033 59.417 40.194 59.9861C41.6697 61.6183 46.4099 66.5145 50.8423 66.5145C51.4204 66.5134 51.9956 66.4344 52.5526 66.2797C54.263 65.7583 55.4258 64.1941 56.5939 62.3169L58.226 74.4458C58.2664 74.7463 58.4145 75.0219 58.6428 75.2214C58.871 75.4209 59.1638 75.5307 59.467 75.5305C62.1108 75.4523 68.7959 75.3742 71.7525 75.3742C72.0708 75.3826 72.3795 75.2654 72.6119 75.0477C72.8442 74.8301 72.9816 74.5292 72.9938 74.2111C72.9677 66.3579 71.4919 52.6019 69.1088 50.5057Z"
                    stroke="#E65300"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M59.9884 48.0911C64.2392 48.0911 67.6851 44.6452 67.6851 40.3945C67.6851 36.1437 64.2392 32.6978 59.9884 32.6978C55.7377 32.6978 52.2917 36.1437 52.2917 40.3945C52.2917 44.6452 55.7377 48.0911 59.9884 48.0911Z"
                    stroke="#E65300"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <h4 className="text-lg mb-2 text-midnight-blue-500 font-semibold">
                  Sur le Forum
                </h4>
                <p className="text-sm font-light text-midnight-blue-500">
                  Echangez des idées, trouver ou optimiser des solutions dans la
                  gestion de votre informatique en général ou vétérinaire en
                  particulier.
                </p>
                <div className=" invisible group-hover:visible text-center mt-4">
                  <svg
                    width="20"
                    height="23"
                    viewBox="0 0 20 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto"
                  >
                    <path
                      d="M11.2989 21.9816L19.1726 14.1079C19.5254 13.7551 19.7236 13.2766 19.7236 12.7777C19.7236 12.2788 19.5254 11.8003 19.1726 11.4475C18.8199 11.0947 18.3414 10.8965 17.8424 10.8965C17.3435 10.8965 16.865 11.0947 16.5122 11.4475L11.8364 16.0965L11.8364 1.89794C11.8364 1.39904 11.6382 0.920578 11.2854 0.567804C10.9327 0.215031 10.4542 0.0168453 9.95529 0.0168453C9.4564 0.0168453 8.97793 0.215031 8.62516 0.567804C8.27239 0.920578 8.0742 1.39904 8.0742 1.89794L8.0742 16.0965L3.42521 11.4475C3.06886 11.0947 2.58696 10.8979 2.08551 10.9005C1.58407 10.903 1.10417 11.1046 0.751377 11.4609C0.398586 11.8173 0.201805 12.2992 0.204324 12.8006C0.206844 13.3021 0.408458 13.782 0.764814 14.1348L8.61165 21.9816C8.96755 22.3396 9.45051 22.5425 9.95529 22.546C10.2062 22.5504 10.4552 22.5025 10.6866 22.4054C10.9179 22.3082 11.1265 22.1639 11.2989 21.9816Z"
                      fill="#E65300"
                    />
                  </svg>
                </div>
              </a>{" "}
              <AnchorLink
                to="#videos"
                className=" group flex-1 text-center hover:shadow-xl  rounded-3xl pb-2 px-8 pt-5 cursor-pointer"
              >
                <svg
                  width="77"
                  className="mb-10 mx-auto"
                  height="77"
                  viewBox="0 0 77 77"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.65252 3.82181C4.99435 2.50708 6.79968 1.77321 8.67824 1.77884H68.2616C70.1474 1.7868 71.9537 2.53944 73.2873 3.87289V3.87289C74.602 5.21472 75.3359 7.02004 75.3303 8.89861V48.3382C75.3303 50.2346 74.5769 52.0534 73.236 53.3943C71.895 54.7353 70.0763 55.4886 68.1799 55.4886H8.67824C6.78183 55.4886 4.9631 54.7353 3.62214 53.3943C2.28118 52.0534 1.52783 50.2346 1.52783 48.3382V8.84753C1.53189 7.91092 1.72178 6.98443 2.0865 6.12174C2.45121 5.25904 2.9835 4.4773 3.65252 3.82181V3.82181Z"
                    stroke="#E65300"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M32.6831 36.632V38.011L33.8476 37.2756L46.6877 29.2467L47.7092 28.5929L46.6877 27.9392L33.8476 19.9001L32.6831 19.1748V36.632Z"
                    stroke="#E65300"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1.55884 67.5317H44.7882"
                    stroke="#E65300"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M60.6416 67.5317H75.3817"
                    stroke="#E65300"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M52.7151 75.5305C57.0929 75.5305 60.6418 71.9816 60.6418 67.6037C60.6418 63.2259 57.0929 59.677 52.7151 59.677C48.3373 59.677 44.7883 63.2259 44.7883 67.6037C44.7883 71.9816 48.3373 75.5305 52.7151 75.5305Z"
                    stroke="#E65300"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                  />
                </svg>

                <h4 className="text-lg mb-2 text-midnight-blue-500 font-semibold">
                  Via nos vidéos
                </h4>
                <p className="text-sm font-light text-midnight-blue-500">
                  Consultez notre bibliothèque vidéo pour y découvrir répose à
                  vos questions, nos tutoriels, trucs & astuces, etc.
                </p>
                <div className=" invisible group-hover:visible text-center mt-8">
                  <svg
                    width="20"
                    height="23"
                    viewBox="0 0 20 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto"
                  >
                    <path
                      d="M11.2989 21.9816L19.1726 14.1079C19.5254 13.7551 19.7236 13.2766 19.7236 12.7777C19.7236 12.2788 19.5254 11.8003 19.1726 11.4475C18.8199 11.0947 18.3414 10.8965 17.8424 10.8965C17.3435 10.8965 16.865 11.0947 16.5122 11.4475L11.8364 16.0965L11.8364 1.89794C11.8364 1.39904 11.6382 0.920578 11.2854 0.567804C10.9327 0.215031 10.4542 0.0168453 9.95529 0.0168453C9.4564 0.0168453 8.97793 0.215031 8.62516 0.567804C8.27239 0.920578 8.0742 1.39904 8.0742 1.89794L8.0742 16.0965L3.42521 11.4475C3.06886 11.0947 2.58696 10.8979 2.08551 10.9005C1.58407 10.903 1.10417 11.1046 0.751377 11.4609C0.398586 11.8173 0.201805 12.2992 0.204324 12.8006C0.206844 13.3021 0.408458 13.782 0.764814 14.1348L8.61165 21.9816C8.96755 22.3396 9.45051 22.5425 9.95529 22.546C10.2062 22.5504 10.4552 22.5025 10.6866 22.4054C10.9179 22.3082 11.1265 22.1639 11.2989 21.9816Z"
                      fill="#E65300"
                    />
                  </svg>
                </div>
              </AnchorLink>
              <AnchorLink
                to="#docs"
                className="group flex-1 text-center hover:shadow-xl  rounded-3xl pb-2 px-8 pt-5 cursor-pointer"
              >
                <svg
                  width="77"
                  height="77"
                  viewBox="0 0 77 77"
                  className="mb-10 mx-auto"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.6008 41.1598C20.6008 42.3198 20.2008 43.2864 19.4008 44.0598C18.6142 44.8198 17.4075 45.1998 15.7808 45.1998H13.1008V51.0198H11.2808V37.0798H15.7808C17.3542 37.0798 18.5475 37.4598 19.3608 38.2198C20.1875 38.9798 20.6008 39.9598 20.6008 41.1598ZM15.7808 43.6998C16.7942 43.6998 17.5408 43.4798 18.0208 43.0398C18.5008 42.5998 18.7408 41.9731 18.7408 41.1598C18.7408 39.4398 17.7542 38.5798 15.7808 38.5798H13.1008V43.6998H15.7808ZM27.2029 37.0798C28.7229 37.0798 30.0362 37.3664 31.1429 37.9398C32.2629 38.4998 33.1162 39.3064 33.7029 40.3598C34.3029 41.4131 34.6029 42.6531 34.6029 44.0798C34.6029 45.5064 34.3029 46.7464 33.7029 47.7998C33.1162 48.8398 32.2629 49.6398 31.1429 50.1998C30.0362 50.7464 28.7229 51.0198 27.2029 51.0198H22.8629V37.0798H27.2029ZM27.2029 49.5198C29.0029 49.5198 30.3762 49.0464 31.3229 48.0998C32.2695 47.1398 32.7429 45.7998 32.7429 44.0798C32.7429 42.3464 32.2629 40.9931 31.3029 40.0198C30.3562 39.0464 28.9895 38.5598 27.2029 38.5598H24.6829V49.5198H27.2029ZM44.8835 37.0798V38.5598H38.8235V43.2598H43.7435V44.7398H38.8235V51.0198H37.0035V37.0798H44.8835Z"
                    fill="#E65300"
                  />
                  <path
                    d="M26.4708 1.77932C24.7331 1.78196 23.0673 2.47343 21.8385 3.70218C20.6098 4.93093 19.9183 6.59672 19.9157 8.33444V28.0197H6.59624C5.25556 28.0328 3.97394 28.5732 3.02869 29.5241C2.08344 30.4749 1.55058 31.7597 1.54541 33.1004V54.4294C1.55058 55.7702 2.08344 57.055 3.02869 58.0058C3.97394 58.9566 5.25556 59.4971 6.59624 59.5102H19.9157V68.7451C19.9183 70.4828 20.6098 72.1486 21.8385 73.3774C23.0673 74.6061 24.7331 75.2976 26.4708 75.3002H68.4614C70.1991 75.2976 71.8649 74.6061 73.0936 73.3774C74.3224 72.1486 75.0139 70.4828 75.0165 68.7451V22.7696C75.0096 21.5852 74.5373 20.4509 73.7015 19.6116L57.5827 3.09433C57.1705 2.66697 56.6756 2.32801 56.1282 2.09811C55.5805 1.87873 54.9947 1.77036 54.4047 1.77932H26.4708Z"
                    stroke="#E65300"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M55.1965 2.78516V19.3066C55.1964 19.7956 55.2926 20.2798 55.4797 20.7316C55.6667 21.1834 55.9409 21.594 56.2866 21.9398C56.9885 22.6328 57.9335 23.024 58.9199 23.0299H75.0166"
                    stroke="#E65300"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19.9155 59.5102H48.6863C50.027 59.4971 51.3086 58.9567 52.2539 58.0059C53.1991 57.055 53.732 55.7702 53.7371 54.4295V33.1005C53.732 31.7598 53.1991 30.475 52.2539 29.5241C51.3086 28.5733 50.027 28.0329 48.6863 28.0198H19.9155"
                    stroke="#E65300"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                  />
                </svg>

                <h4 className="text-lg mb-2 text-midnight-blue-500 font-semibold">
                  Documentation
                </h4>
                <p className="text-sm font-light text-midnight-blue-500">
                  Téléchargez nos manuels de référence d’utilisation de Pégase,
                  ainsi que toute notre documentation.
                </p>
                <div className=" invisible group-hover:visible text-center mt-8">
                  <svg
                    width="20"
                    height="23"
                    viewBox="0 0 20 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto"
                  >
                    <path
                      d="M11.2989 21.9816L19.1726 14.1079C19.5254 13.7551 19.7236 13.2766 19.7236 12.7777C19.7236 12.2788 19.5254 11.8003 19.1726 11.4475C18.8199 11.0947 18.3414 10.8965 17.8424 10.8965C17.3435 10.8965 16.865 11.0947 16.5122 11.4475L11.8364 16.0965L11.8364 1.89794C11.8364 1.39904 11.6382 0.920578 11.2854 0.567804C10.9327 0.215031 10.4542 0.0168453 9.95529 0.0168453C9.4564 0.0168453 8.97793 0.215031 8.62516 0.567804C8.27239 0.920578 8.0742 1.39904 8.0742 1.89794L8.0742 16.0965L3.42521 11.4475C3.06886 11.0947 2.58696 10.8979 2.08551 10.9005C1.58407 10.903 1.10417 11.1046 0.751377 11.4609C0.398586 11.8173 0.201805 12.2992 0.204324 12.8006C0.206844 13.3021 0.408458 13.782 0.764814 14.1348L8.61165 21.9816C8.96755 22.3396 9.45051 22.5425 9.95529 22.546C10.2062 22.5504 10.4552 22.5025 10.6866 22.4054C10.9179 22.3082 11.1265 22.1639 11.2989 21.9816Z"
                      fill="#E65300"
                    />
                  </svg>
                </div>
              </AnchorLink>
            </div>
          </section>
          <section className="pl-8 mb-24" ref={supportRef} id={"contact"}>
            <h3 className=" text-midnight-blue-500 text-2xl font-semibold mb-8">
              Envoyez-nous un message !
            </h3>
            <div className="flex">
              <div className="flex-grow pr-8">
                <FormikProvider value={formik}>
                  <form onSubmit={formik.handleSubmit}>
                    <div className="flex flex-col sm:flex-row sm:items-center mb-4 text-left">
                      <div>
                        <Select
                          options={categoriesOptions}
                          styles={colourStyles}
                          isSearchable={false}
                          onChange={handleCategoryChange}
                          placeholder={"Type de question"}
                          className="react-select-container"
                          classNamePrefix="react-select"
                        />
                      </div>
                      <div
                        className={` sm:ml-4 ${
                          formik.values.category > 0 ? "" : "hidden"
                        }`}
                      >
                        <label className=" mt-4 sm:mt-0 control control-checkbox text-midnight-blue-500 text-xs">
                          Publier ma question sur le Forum
                          <input
                            type="checkbox"
                            name="forum"
                            id="forum"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.forum}
                          />
                          <div className="control_indicator"></div>
                        </label>
                      </div>
                    </div>
                    <div className="w-full  mb-6">
                      <label
                        htmlFor="title"
                        className="block text-sm text-midnight-blue-500 font-medium mb-2"
                      >
                        Titre
                      </label>
                      <input
                        id="title"
                        name="title"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.title}
                        type="text"
                        className="border border-trinidad-500 w-full rounded-lg text-base py-1 px-4"
                      />
                      {formik.errors.title && formik.touched.title ? (
                        <ValidationError>{formik.errors.title}</ValidationError>
                      ) : null}
                    </div>
                    <div className="w-full  mb-6 hidden">
                      <label
                        htmlFor="title"
                        className="block text-sm text-midnight-blue-500 font-medium mb-2"
                      >
                        Titre
                      </label>
                      <input
                        id="address2"
                        name="address2"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.address2}
                        type="text"
                        className="border border-trinidad-500 w-full rounded-lg text-base py-1 px-4"
                      />
                      {formik.errors.address2 && formik.touched.address2 ? (
                        <ValidationError>
                          {formik.errors.address2}
                        </ValidationError>
                      ) : null}
                    </div>
                    <div className="w-full  mb-6">
                      <label
                        htmlFor="message"
                        className="block text-sm text-midnight-blue-500 font-medium mb-2"
                      >
                        Description
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.message}
                        className="border border-trinidad-500 w-full rounded-lg text-base py-1 px-4 h-32"
                      />
                      {formik.errors.message && formik.touched.message ? (
                        <ValidationError>
                          {formik.errors.message}
                        </ValidationError>
                      ) : null}
                    </div>
                    <div>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          checkCategoryThenSend();
                        }}
                        className="text-base text-white font-normal bg-trinidad-500 py-2 px-12 rounded-full disabled:opacity-50"
                      >
                        Envoyer
                      </button>
                    </div>
                  </form>
                </FormikProvider>
              </div>
              <div className="hidden sm:block w-5/12">
                <svg
                  width="306"
                  height="216"
                  viewBox="0 0 306 216"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto w-full"
                >
                  <path
                    d="M253.571 110.574H277.434C281.058 110.59 284.65 109.888 288.002 108.508C291.353 107.128 294.399 105.099 296.962 102.536C299.525 99.9735 301.554 96.9276 302.934 93.576C304.313 90.2245 305.016 86.6326 305 83.0082V29.1727C305.016 25.5483 304.313 21.9564 302.934 18.6049C301.554 15.2533 299.525 12.2074 296.962 9.64452C294.399 7.08166 291.353 5.05256 288.002 3.67292C284.65 2.29327 281.058 1.59102 277.434 1.60696H186.855C183.232 1.59099 179.641 2.29291 176.291 3.67292C172.942 5.05292 169.899 7.0842 167.339 9.64745C164.778 12.2107 162.751 15.2564 161.374 18.6078C159.998 21.9592 159.299 25.5497 159.319 29.1727V83.0993C159.299 86.7222 159.998 90.3128 161.374 93.6642C162.751 97.0156 164.778 100.061 167.339 102.625C169.899 105.188 172.942 107.219 176.291 108.599C179.641 109.979 183.232 110.681 186.855 110.665H204.61C207.001 110.756 209.266 111.757 210.944 113.463C212.622 115.169 213.586 117.451 213.638 119.843C213.722 130.604 212.283 141.323 209.365 151.682C225.254 141.269 238.734 124.598 246.077 114.938C246.86 113.64 247.956 112.559 249.266 111.796C250.575 111.034 252.056 110.614 253.571 110.574V110.574Z"
                    stroke="#E65300"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M185.621 38.3201H277.435"
                    stroke="#E65300"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M185.621 56.3757H277.435"
                    stroke="#E65300"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M185.621 74.4319H277.435"
                    stroke="#E65300"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M53.3156 173.147H29.4527C25.8283 173.163 22.2364 172.461 18.8849 171.081C15.5333 169.702 12.4874 167.672 9.92454 165.11C7.36169 162.547 5.33259 159.501 3.95295 156.149C2.5733 152.798 1.87105 149.206 1.88698 145.581V91.7459C1.87105 88.1216 2.5733 84.5297 3.95295 81.1781C5.33259 77.8265 7.36169 74.7806 9.92454 72.2178C12.4874 69.6549 15.5333 67.6258 18.8849 66.2462C22.2364 64.8665 25.8283 64.1643 29.4527 64.1802H120.032C123.655 64.1642 127.245 64.8662 130.595 66.2462C133.945 67.6262 136.988 69.6574 139.548 72.2207C142.109 74.784 144.136 77.8296 145.512 81.181C146.889 84.5324 147.588 88.123 147.568 91.7459V145.673C147.588 149.295 146.889 152.886 145.512 156.237C144.136 159.589 142.109 162.635 139.548 165.198C136.988 167.761 133.945 169.792 130.595 171.172C127.245 172.552 123.655 173.254 120.032 173.238H102.277C99.8861 173.33 97.6205 174.33 95.9426 176.036C94.2647 177.742 93.3012 180.024 93.2492 182.416C93.1652 193.177 94.6036 203.897 97.5222 214.255C81.633 203.843 68.1522 187.171 60.8095 177.511C60.0271 176.213 58.9304 175.132 57.6209 174.37C56.3114 173.607 54.8305 173.187 53.3156 173.147V173.147Z"
                    stroke="#E65300"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M121.266 100.893H29.4521"
                    stroke="#E65300"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M121.266 118.949H29.4521"
                    stroke="#E65300"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M121.266 137.005H29.4521"
                    stroke="#E65300"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </section>

          <section id="forum" className="hidden text-midnight-blue-500">
            <h2 className="text-center text-midnight-blue-500 font-semibold text-3xl mb-2">
              Les derniers sujets postés
              <br />
              sur le Forum
            </h2>

            <div className="grid grid-cols-2 gap-8 mb-10 ">
              {posts.map((post, i) => {
                return (
                  <div key={i} className=" bg-blueish-500 rounded-3xl flex">
                    <div className="flex w-1/4 flex-col justify-center">
                      <img src={post.avatar} className="pt-3 " alt="" />
                    </div>
                    <div className=" py-4 w-3/4 text-sm px-2">
                      <h3 className="font-semibold ">{post.title}</h3>
                      <p className="italic">par {post.author}</p>
                      <p className="text-blue-gray-500 mb-1">
                        <span className="text-trinidad-500 font-semibold uppercase">
                          #{post.category}
                        </span>{" "}
                        {post.date}
                      </p>
                      <p>"{post.excerpt}"</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="text-center mb-24">
              <ContentButton
                secondary
                type="external"
                to={"https://forum.byvets.be/"}
              >
                Aller au forum
              </ContentButton>
            </div>
          </section>
          <section id="videos" className=" mb-24">
            <h2 className="text-center text-midnight-blue-500 font-semibold text-3xl mb-8">
              Découvrez nos tutoriels vidéo
            </h2>
            <div className="grid sm:grid-cols-3 px-10 sm:px-20 gap-x-14 gap-y-8 mb-10">
              {tutorials.map((tutorial, i) => {
                return (
                  <div
                    key={i}
                    className="video-link border border-trinidad-500 group transition-all hover:border-transparent hover:border-opacity-0 rounded-3xl p-3 cursor-pointer"
                    onClick={() => {
                      setVideoSource(tutorial.src);
                      setVideoClass(tutorial.class);
                      setIsVideoOpen(true);
                    }}
                  >
                    <div className="relative">
                      <img
                        src={tutorial.img}
                        className=" rounded-2xl grayscale z-30"
                        alt=""
                      />

                      <p className=" absolute bottom-0 right-0 mr-2 mb-2 inline-block px-1 text-white text-xs bg-midnight-blue-500 rounded-full">
                        {tutorial.duration}
                      </p>
                    </div>
                    <h4 className="text-midnight-blue-500 text-xs font-semibold  p-2">
                      {tutorial.title}
                    </h4>
                    <div className="grid grid-cols-2 px-2 text-sm font-light text-blue-gray-500">
                      <div>{tutorial.date}</div>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* <div className="text-center">
              <div>Plus de vidéos</div>
            </div> */}
          </section>

          <section id="docs" className=" mb-24">
            <h2 className="text-center text-midnight-blue-500 font-semibold text-3xl mb-8">
              Documentation en ligne,
              <br />
              téléchargements
            </h2>
            <div className="border border-midnight-blue-500 rounded-3xl">
              {docs.map((doc, i) => {
                return (
                  <div
                    key={i}
                    className="flex items-center border-t text-sm text-midnight-blue-500 font-light first:border-t-0  mx-10 py-3"
                    style={{ borderColor: "#FFD8B4" }}
                  >
                    <div className="flex-auto ">
                      <span className="font-semibold">{doc.title} :</span>{" "}
                      {doc.subtitle}
                    </div>
                    <div className="hidden w-1/12">{doc.size}</div>
                    <div className=" hidden w-2/12">
                      Màj : {doc.lastUpdateAt}
                    </div>
                    <div className="w-1/12 text-right">
                      <button
                        type="button"
                        onClick={() => downloadPdf(doc.filename)}
                        className="cursor-pointer"
                      >
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="ml-auto "
                        >
                          <path
                            d="M10.8059 0.659245C10.0718 0.659245 9.36783 0.950857 8.84876 1.46993C8.32968 1.989 8.03807 2.69302 8.03807 3.4271V11.7307H2.41933C1.85353 11.735 1.3123 11.9625 0.913241 12.3636C0.514182 12.7647 0.289527 13.3071 0.288086 13.873V22.874C0.289527 23.4398 0.514182 23.9822 0.913241 24.3834C1.3123 24.7845 1.85353 25.012 2.41933 25.0163H8.03807V28.8913C8.03807 29.6254 8.32968 30.3294 8.84876 30.8485C9.36783 31.3676 10.0718 31.6592 10.8059 31.6592H28.5202C29.2543 31.6592 29.9583 31.3676 30.4773 30.8485C30.9964 30.3294 31.288 29.6254 31.288 28.8913V9.51637C31.2841 9.01659 31.0855 8.53801 30.7345 8.18227L23.9311 1.21282C23.7562 1.03558 23.5475 0.895252 23.3174 0.800162C23.0873 0.705073 22.8404 0.657153 22.5914 0.659245H10.8059ZM10.8059 1.76639H22.4309V7.30209C22.4309 7.88935 22.6642 8.45256 23.0794 8.86782C23.4947 9.28308 24.0579 9.51637 24.6452 9.51637H30.1809V28.8913C30.1809 29.3318 30.0059 29.7542 29.6945 30.0656C29.383 30.3771 28.9606 30.552 28.5202 30.552H10.8059C10.3655 30.552 9.94307 30.3771 9.63162 30.0656C9.32018 29.7542 9.14521 29.3318 9.14521 28.8913V25.0163H20.2997C20.8655 25.012 21.4067 24.7845 21.8057 24.3834C22.2048 23.9822 22.4295 23.4398 22.4309 22.874V13.873C22.4295 13.3071 22.2048 12.7647 21.8057 12.3636C21.4067 11.9625 20.8655 11.735 20.2997 11.7307H9.14521V3.4271C9.14521 2.98665 9.32018 2.56424 9.63162 2.2528C9.94307 1.94135 10.3655 1.76639 10.8059 1.76639ZM23.538 2.39746L29.4114 8.40923H24.6452C24.3515 8.40923 24.0699 8.29258 23.8623 8.08495C23.6547 7.87733 23.538 7.59572 23.538 7.30209V2.39746ZM2.41933 12.8378H20.2997C20.4355 12.8363 20.5703 12.8621 20.6959 12.9137C20.8216 12.9653 20.9356 13.0417 21.0311 13.1383C21.1267 13.2349 21.2018 13.3497 21.2521 13.4759C21.3024 13.6021 21.3267 13.7371 21.3238 13.873V22.874C21.3267 23.0098 21.3024 23.1449 21.2521 23.2711C21.2018 23.3973 21.1267 23.5121 21.0311 23.6087C20.9356 23.7053 20.8216 23.7816 20.6959 23.8333C20.5703 23.8849 20.4355 23.9107 20.2997 23.9092H2.41933C2.28349 23.9107 2.14872 23.8849 2.02306 23.8333C1.89739 23.7816 1.7834 23.7053 1.68785 23.6087C1.59231 23.5121 1.51716 23.3973 1.46689 23.2711C1.41662 23.1449 1.39225 23.0098 1.39523 22.874V13.873C1.39225 13.7371 1.41662 13.6021 1.46689 13.4759C1.51716 13.3497 1.59231 13.2349 1.68785 13.1383C1.7834 13.0417 1.89739 12.9653 2.02306 12.9137C2.14872 12.8621 2.28349 12.8363 2.41933 12.8378Z"
                            fill="#E65300"
                          />
                          <path
                            d="M4.16319 15.052C4.01637 15.052 3.87557 15.1103 3.77176 15.2141C3.66794 15.3179 3.60962 15.4587 3.60962 15.6055V21.1412C3.60962 21.2881 3.66794 21.4289 3.77176 21.5327C3.87557 21.6365 4.01637 21.6948 4.16319 21.6948C4.31001 21.6948 4.45081 21.6365 4.55462 21.5327C4.65844 21.4289 4.71676 21.2881 4.71676 21.1412V19.4805H5.8239C6.41116 19.4805 6.97437 19.2472 7.38963 18.832C7.80489 18.4167 8.03818 17.8535 8.03818 17.2663C8.03818 16.679 7.80489 16.1158 7.38963 15.7005C6.97437 15.2853 6.41116 15.052 5.8239 15.052H4.16319ZM4.71676 16.1591H5.8239C6.11753 16.1591 6.39914 16.2758 6.60677 16.4834C6.8144 16.691 6.93104 16.9726 6.93104 17.2663C6.93104 17.5599 6.8144 17.8415 6.60677 18.0491C6.39914 18.2567 6.11753 18.3734 5.8239 18.3734H4.71676V16.1591Z"
                            fill="#E65300"
                          />
                          <path
                            d="M9.69883 15.052C9.55202 15.052 9.41121 15.1103 9.3074 15.2141C9.20359 15.3179 9.14526 15.4587 9.14526 15.6055V21.1412C9.14526 21.2881 9.20359 21.4289 9.3074 21.5327C9.41121 21.6365 9.55202 21.6948 9.69883 21.6948H10.1749C11.0558 21.6948 11.9006 21.3449 12.5235 20.722C13.1464 20.0991 13.4963 19.2543 13.4963 18.3734C13.4963 17.4925 13.1464 16.6477 12.5235 16.0248C11.9006 15.4019 11.0558 15.052 10.1749 15.052H9.69883ZM10.2524 16.1591C10.8397 16.1591 11.4029 16.3924 11.8181 16.8077C12.2334 17.2229 12.4667 17.7861 12.4667 18.3734C12.4667 18.9607 12.2334 19.5239 11.8181 19.9391C11.4029 20.3544 10.8397 20.5877 10.2524 20.5877V16.1591Z"
                            fill="#E65300"
                          />
                          <path
                            d="M15.2345 15.052C15.0877 15.052 14.9469 15.1103 14.843 15.2141C14.7392 15.3179 14.6809 15.4587 14.6809 15.6055V21.1412C14.6809 21.2881 14.7392 21.4289 14.843 21.5327C14.9469 21.6365 15.0877 21.6948 15.2345 21.6948C15.3813 21.6948 15.5221 21.6365 15.6259 21.5327C15.7297 21.4289 15.788 21.2881 15.788 21.1412V18.855H18.5559C18.7027 18.855 18.8435 18.7967 18.9473 18.6929C19.0511 18.589 19.1095 18.4482 19.1095 18.3014C19.1095 18.1546 19.0511 18.0138 18.9473 17.91C18.8435 17.8062 18.7027 17.7479 18.5559 17.7479H15.788V16.1591H18.5559C18.7027 16.1591 18.8435 16.1008 18.9473 15.997C19.0511 15.8932 19.1095 15.7524 19.1095 15.6055C19.1095 15.4587 19.0511 15.3179 18.9473 15.2141C18.8435 15.1103 18.7027 15.052 18.5559 15.052H15.2345Z"
                            fill="#E65300"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
          <section className="mb-24">
            <div className="grid sm:grid-cols-2">
              <div>
                <h2 className=" text-midnight-blue-500 text-center sm:text-left font-semibold text-3xl mb-8">
                  Télécharger le
                  <br /> logiciel{" "}
                  <span className="text-trinidad-500">Pégase</span>
                </h2>
                <DownloadLinks actions={actions} />
                {/* <div className="grid sm:grid-cols-2 gap-x-4 gap-y-6">
                  {downloads.map((download, i) => {
                    return (
                      <button
                        key={i}
                        onClick={() => {
                          download.action();
                        }}
                        className="flex border items-center border-blue-gray-500 rounded-2xl text-xs text-midnight-blue-500 py-2 px-2 font-light cursor-pointer"
                      >
                        <div className="w-1/3 text-center">
                          <img src={download.img} alt="" className="mx-auto" />
                        </div>
                        <div className="w-2/3 pl-2">
                          <h4 className="font-semibold mb-1">
                            {download.name}
                          </h4>
                          <p className="mb-1">{download.platform}</p>
                          <p className="mb-1">{download.size}</p>
                          <p className="mb-1">Màj : {download.lastUpdateAt}</p>
                        </div>
                        <div></div>
                      </button>
                    );
                  })}
                </div> */}
              </div>
              <div className="relative pl-12 hidden sm:block">
                <img
                  src={downloadHeader}
                  alt=""
                  style={{ width: "718px", maxWidth: "718px" }}
                  className="absolute top-8"
                />
              </div>
            </div>
          </section>

          <section className=" mb-24">
            <div className="flex flex-col sm:flex-row items-center">
              <div className=" sm:w-1/2">
                <h2 className=" text-midnight-blue-500 font-semibold  text-center sm:text-left text-3xl mb-8">
                  Partage d’écran
                </h2>
                <p className="text-base font-light text-blue-gray-500 leading-relaxed tracking-wide">
                  Pour permettre un partage d'écran via internet et vous aider
                  au mieux, nous utilisons le logiciel Teamviewer. Vous pouvez
                  le télécharger à l'adresse{" "}
                  <a
                    href="https://www.teamviewer.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-trinidad-500 hover:text-midnight-blue-500"
                  >
                    www.teamviewer.com
                  </a>
                </p>
              </div>
              <div className="w-1/2 px-24">
                <a
                  href="https://www.teamviewer.com/"
                  rel="noreferrer"
                  target={"_blank"}
                >
                  <img
                    src={teamviewerImg}
                    alt="Logo Teamviewer"
                    className="w-5/12 mx-auto"
                  />
                </a>
              </div>
            </div>
          </section>
          {/* <button onClick={() => onLog()}>Log</button> */}
        </div>
      </div>
    </Layout>
  );
};

export default SupportPage;
