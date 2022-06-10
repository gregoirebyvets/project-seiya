import React, { useState, useEffect } from "react";
import { useFormik, FormikProvider } from "formik";
import axios from "axios";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { Sticky, StickyContainer } from "react-sticky";
import ReactModal from "react-modal";
import toast from "react-hot-toast";
import { Bars, MutatingDots } from "react-loader-spinner";

import { AffiliationValidationSchema } from "../../../utils/validation/affiliationSchema";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

import PegaseLicense from "../../text/PegaseLicense";
import RgpdPage from "../../text/RgpdPage";
import ConditionsVentesText from "../../text/ConditionsVentes";

const AffiliationForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isTvaDialogOpen, setIsTvaDialogOpen] = useState(false);
  const [isTvaCheckDialogOpen, setIsTvaCheckDialogOpen] = useState(false);
  const [checkingTva, setCheckingTva] = useState(false);
  const [isTvaValid, setIsTvaValid] = useState(false);
  const [isOmvDialogOpen, setIsOmvDialogOpen] = useState(false);
  const [isEmptyOmvDialogOpen, setIsEmptyOmvDialogOpen] = useState(false);
  useEffect(() => {
    dispatchEvent(new Event("scroll")); // fix react-stickynode issue
  }, []);

  const [formData, setFormData] = useState({
    serverUser: 0,
    appToMigrate: "none",
    firstname: "",
    lastname: "",
    omv: "",
    company: "",
    address: "",
    country: "",
    city: "",
    zipcode: "",
    phonePrefix: "+32",
    phone: "",
    email: "",
    deposit: "",
    tva: "",
    contract: false,
    terms: false,
    rgpd: false,
  });

  const [isRgpdError, setIsRgpdError] = useState(false);
  const [isTermsError, setIsTermsError] = useState(false);
  const [isContractError, setIsContractError] = useState(false);
  const [isRgpdOpen, setIsRgpdOpen] = useState(false);
  const [isLicenseOpen, setIsLicenseOpen] = useState(false);
  const [isSellsOpen, setIsSellsOpen] = useState(false);

  // let formInit = {
  //   serverUser: 0,
  //   appToMigrate: "none",
  //   firstname: "",
  //   lastname: "",
  //   omv: "",
  //   company: "",
  //   address: "",
  //   country: "",
  //   city: "",
  //   zipcode: "",
  //   phonePrefix: "+32",
  //   phone: "",
  //   email: "",
  //   deposit: "",
  //   tva: "",
  //   contract: false,
  //   terms: false,
  //   rgpd: false,
  // };

  // if (sessionStorage.getItem("byvetsSubscriptionForm") !== null) {
  //   formInit = JSON.parse(sessionStorage.getItem("byvetsSubscriptionForm"));
  // }

  if (typeof window !== "undefined") {
  }

  const formik = useFormik({
    initialValues: {
      serverUser: 0,
      appToMigrate: "none",
      firstname: "",
      lastname: "",
      omv: "",
      company: "",
      address: "",
      country: "",
      city: "",
      zipcode: "",
      phonePrefix: "+32",
      phone: "",
      email: "",
      deposit: "",
      tva: "",
      contract: false,
      terms: false,
      rgpd: false,
    },
    validationSchema: AffiliationValidationSchema,
    onSubmit: (values) => {
      const subscriptionToastId = toast.loading(
        "Nous traitons votre demande, veuillez patienter..."
      );
      setIsLoading(true);
      axios
        .post(process.env.BACKEND_API_URL + "/subscriptions/", {
          firstname: values.firstname,
          lastname: values.lastname,
          omv: values.omv,
          company: values.company,
          address: values.address,
          country: values.country,
          city: values.city,
          zipcode: values.zipcode,
          phone: values.phonePrefix + values.phone,
          email: values.email,
          tva: values.tva,
          deposit: values.deposit,
          server_users: values.serverUser,
          migrate_from: values.appToMigrate,
          is_valid: false,
          is_paid: false,
        })
        .then(function (response) {
          toast.success("Demande envoyée", {
            id: subscriptionToastId,
          });
          setIsLoading(false);

          window.location.replace(response.data.url);
        })
        .catch(function (error) {
          console.log(error);
          setIsLoading(false);
          toast.error("Erreur veillez ré-essayer ultérieurement", {
            id: subscriptionToastId,
          });
        });
    },
  });

  const [currentStep, setCurrentStep] = useState(1);

  const steps = 3;

  const affiliationPrice = 595;
  const serverPriceData = [
    {
      users: 0,
      price: 0,
    },
    {
      users: 5,
      price: 400,
    },
    {
      users: 10,
      price: 650,
    },
  ];

  let serverOption = serverPriceData.find((obj) => {
    return obj.users === formik.values.serverUser;
  });

  const migrationPrice = () => {
    let result = 0;
    if (
      !!formik.values.appToMigrate &&
      formik.values.appToMigrate !== "other" &&
      formik.values.appToMigrate !== "none"
    ) {
      result = 450;
    }
    return result;
  };

  const mPrice = migrationPrice();

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function _renderStepContent(step) {
    switch (step) {
      case 1:
        return (
          <Step1
            formik={formik}
            isLicenseOpen={isLicenseOpen}
            setIsLicenseOpen={setIsLicenseOpen}
          />
        );
      case 2:
        return (
          <Step2
            formik={formik}
            setFormData={setFormData}
            formData={formData}
          />
        );
      case 3:
        return (
          <Step3
            formik={formik}
            isContract={isContractError}
            setIsContract={setIsContractError}
            isRgpd={isRgpdError}
            setIsRgpd={setIsRgpdError}
            isTerms={isTermsError}
            setIsTerms={setIsTermsError}
            isRgpdOpen={isRgpdOpen}
            setIsRgpdOpen={setIsRgpdOpen}
            isLicenseOpen={isLicenseOpen}
            setIsLicenseOpen={setIsLicenseOpen}
            isSellsOpen={isSellsOpen}
            setIsSellsOpen={setIsSellsOpen}
          />
        );
      default:
        return <div></div>;
    }
  }

  const fieldsArray = [formik.values.firstname, formik.values.lastname];

  function isEmptyObject(obj) {
    return Object.keys(obj).length === 0;
  }

  function tvaCheckThenNextStep(e) {
    if (formik.values.tva === "") {
      setIsTvaDialogOpen(true);
    } else {
      tvaValidationThenNextStep(e);
    }
  }

  async function tvaValidationThenNextStep(e) {
    if (formik.values.tva !== "" || formik.values.tva !== "En attente") {
      setCheckingTva(true);
      setIsTvaCheckDialogOpen(true);
      function split(str, index) {
        const result = [str.slice(0, index), str.slice(index)];
        return result;
      }
      const [countryCode, vatNumber] = split(formik.values.tva, 2);
      try {
        const response = await axios.post(
          process.env.BACKEND_API_URL + "/subscriptions/checktva",
          {
            countryCode,
            vatNumber,
          }
        );

        if (response) {
          setCheckingTva(false);

          setIsTvaValid(response.data.success);
        } else {
          setCheckingTva(false);
          setIsTvaValid(false);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  function emptyOmvCheckThenNextStep(e) {
    if (formik.values.omv === "") {
      setIsEmptyOmvDialogOpen(true);
    } else {
      omvCheckThenNextStep(e);
    }
  }

  function omvCheckThenNextStep(e) {
    if (formik.values.country === "Belgique") {
      if (formik.values.omv.match(/^\d+$/)) {
        setIsOmvDialogOpen(true);
      } else {
        tvaCheckThenNextStep(e);
      }
    } else {
      tvaCheckThenNextStep(e);
    }
  }

  function _renderNextButton(step) {
    switch (step) {
      case 1:
        return (
          <button
            type="button"
            onClick={nextStep}
            className="text-base text-white font-normal bg-trinidad-500 py-2 px-12 rounded-full"
          >
            Continuer
          </button>
        );
      case 2:
        return (
          <div>
            <AlertDialog.Root
              open={isTvaCheckDialogOpen}
              className="absolute top-0 left-0"
            >
              <AlertDialog.Portal>
                <AlertDialog.Overlay className="fixed bg-black bg-opacity-30 w-screen h-screen z-50 top-0 left-0 flex" />
                <AlertDialog.Content className="bg-white fixed mx-auto inset-x-0 z-50 top-1/2 -mt-20 max-w-lg rounded-lg p-4 shadow-lg">
                  <AlertDialog.Title className=" font-medium text-lg mb-4">
                    Vérification du numéro de TVA.
                  </AlertDialog.Title>

                  <AlertDialog.Description className=" text-base text-gray-500 font-light mb-8">
                    {checkingTva ? (
                      <div className="text-center">
                        <p className="mb-4">Vérification en cours</p>
                        <MutatingDots
                          ariaLabel="Vérification TVA en cours"
                          color="#002e6d"
                        />
                      </div>
                    ) : (
                      <div>
                        {isTvaValid ? (
                          <p>Votre numéro de TVA a été validé.</p>
                        ) : (
                          <p>Votre numéro de TVA n'est pas valide.</p>
                        )}
                      </div>
                    )}
                  </AlertDialog.Description>
                  <div className="flex justify-end gap-x-2">
                    {/* <AlertDialog.Cancel>
                      <button
                        onClick={() => {
                          setIsTvaDialogOpen(false);
                          formik.setFieldValue("tva", "En attente");
                        }}
                        className="bg-gray-200 py-2 px-4 text-gray-600 rounded font-medium"
                      >
                        En attente
                      </button>
                    </AlertDialog.Cancel> */}
                    <AlertDialog.Action>
                      {!checkingTva && (
                        <>
                          {isTvaValid ? (
                            <>
                              <button
                                onClick={(e) => {
                                  setIsTvaCheckDialogOpen(false);
                                  nextStep(e);
                                }}
                                className="bg-trinidad-100 py-2 px-4 text-trinidad-600 rounded font-medium"
                              >
                                Continuer
                              </button>
                            </>
                          ) : (
                            <>
                              <button
                                onClick={(e) => {
                                  setIsTvaCheckDialogOpen(false);
                                }}
                                className="bg-trinidad-100 py-2 px-4 text-trinidad-600 rounded font-medium"
                              >
                                Modifier numéro de TVA
                              </button>
                            </>
                          )}
                        </>
                      )}
                    </AlertDialog.Action>
                  </div>
                </AlertDialog.Content>
              </AlertDialog.Portal>
            </AlertDialog.Root>
            <AlertDialog.Root
              open={isTvaDialogOpen}
              className="absolute top-0 left-0"
            >
              <AlertDialog.Portal>
                <AlertDialog.Overlay className="fixed bg-black bg-opacity-30 w-screen h-screen z-50 top-0 left-0 flex" />
                <AlertDialog.Content className="bg-white fixed mx-auto inset-x-0 z-50 top-1/2 -mt-20 max-w-lg rounded-lg p-4 shadow-lg">
                  <AlertDialog.Title className=" font-medium text-lg mb-4">
                    Aucun numéro de TVA renseigné.
                  </AlertDialog.Title>
                  <AlertDialog.Description className=" text-base text-gray-500 font-light mb-8">
                    Il est obligatoire pour bénéficier de nos services.
                    Avez-vous un numéro de TVA ou est-il en attente ?
                  </AlertDialog.Description>
                  <div className="flex justify-end gap-x-2">
                    <AlertDialog.Cancel>
                      <button
                        onClick={() => {
                          setIsTvaDialogOpen(false);
                          formik.setFieldValue("tva", "En attente");
                        }}
                        className="bg-gray-200 py-2 px-4 text-gray-600 rounded font-medium"
                      >
                        En attente
                      </button>
                    </AlertDialog.Cancel>
                    <AlertDialog.Action>
                      <button
                        onClick={(e) => {
                          setIsTvaDialogOpen(false);
                        }}
                        className="bg-trinidad-100 py-2 px-4 text-trinidad-600 rounded font-medium"
                      >
                        J'ai un numéro
                      </button>
                    </AlertDialog.Action>
                  </div>
                </AlertDialog.Content>
              </AlertDialog.Portal>
            </AlertDialog.Root>
            <AlertDialog.Root
              open={isOmvDialogOpen}
              className="absolute top-0 left-0"
            >
              <AlertDialog.Portal>
                <AlertDialog.Overlay className="fixed bg-black bg-opacity-30 w-screen h-screen z-50 top-0 left-0 flex" />
                <AlertDialog.Content className="bg-white fixed mx-auto inset-x-0 z-50 top-1/2 -mt-20 max-w-lg rounded-lg p-4 shadow-lg">
                  <AlertDialog.Title className=" font-medium text-lg mb-4">
                    Vous exercez en Belgique.
                  </AlertDialog.Title>
                  <AlertDialog.Description className=" text-base text-gray-500 font-light mb-8">
                    Êtes-vous inscrit à l'Ordre francophone (F...) ou à l'Ordre
                    néerlandophone (N...) ?
                  </AlertDialog.Description>
                  <div className="flex justify-end gap-x-2">
                    <AlertDialog.Action>
                      <button
                        onClick={(e) => {
                          setIsOmvDialogOpen(false);
                          formik.setFieldValue("omv", "N" + formik.values.omv);
                          tvaCheckThenNextStep(e);
                        }}
                        className="bg-gray-200 py-2 px-4 text-gray-600 rounded font-medium"
                      >
                        N{formik.values.omv}
                      </button>
                    </AlertDialog.Action>
                    <AlertDialog.Action>
                      <button
                        onClick={(e) => {
                          setIsOmvDialogOpen(false);
                          formik.setFieldValue("omv", "F" + formik.values.omv);

                          tvaCheckThenNextStep(e);
                        }}
                        className="bg-gray-200 py-2 px-4 text-gray-600 rounded font-medium"
                      >
                        F{formik.values.omv}
                      </button>
                    </AlertDialog.Action>
                  </div>
                </AlertDialog.Content>
              </AlertDialog.Portal>
            </AlertDialog.Root>

            <AlertDialog.Root
              open={isEmptyOmvDialogOpen}
              className="absolute top-0 left-0"
            >
              <AlertDialog.Portal>
                <AlertDialog.Overlay className="fixed bg-black bg-opacity-30 w-screen h-screen z-50 top-0 left-0 flex" />
                <AlertDialog.Content className="bg-white fixed mx-auto inset-x-0 z-50 top-1/2 -mt-20 max-w-lg rounded-lg p-4 shadow-lg">
                  <AlertDialog.Title className=" font-medium text-lg mb-4">
                    Aucun numéro à l'ordre (OMV) renseigné.
                  </AlertDialog.Title>
                  <AlertDialog.Description className=" text-base text-gray-500 font-light mb-8">
                    Vous devez être vétérinaire pour bénéficier de nos services.
                    Avez-vous un numéro à l'ordre ?
                  </AlertDialog.Description>
                  <div className="flex justify-end gap-x-2">
                    <AlertDialog.Cancel>
                      <button
                        onClick={(e) => {
                          setIsEmptyOmvDialogOpen(false);
                          omvCheckThenNextStep(e);
                        }}
                        className="bg-gray-200 py-2 px-4 text-gray-600 rounded font-medium"
                      >
                        Non
                      </button>
                    </AlertDialog.Cancel>
                    <AlertDialog.Action>
                      <button
                        onClick={(e) => {
                          setIsEmptyOmvDialogOpen(false);
                        }}
                        className="bg-trinidad-100 py-2 px-4 text-trinidad-600 rounded font-medium"
                      >
                        Oui
                      </button>
                    </AlertDialog.Action>
                  </div>
                </AlertDialog.Content>
              </AlertDialog.Portal>
            </AlertDialog.Root>
            <button
              type="button"
              disabled={
                fieldsArray.includes("") || !isEmptyObject(formik.errors)
              }
              onClick={(e) => emptyOmvCheckThenNextStep(e)}
              className="text-base text-white font-normal bg-trinidad-500 py-2 px-12 rounded-full disabled:opacity-50"
            >
              Continuer
            </button>
          </div>
        );
      case 3:
        return (
          <button
            onClick={() => {
              if (
                !(
                  formik.values.rgpd &&
                  formik.values.terms &&
                  formik.values.contract
                )
              ) {
                if (!formik.values.rgpd) {
                  setIsRgpdError(true);
                }
                if (!formik.values.terms) {
                  setIsTermsError(true);
                }
                if (!formik.values.contract) {
                  setIsContractError(true);
                }
              } else {
                formik.submitForm();
              }
            }}
            type="button"
            disabled={isLoading}
            className="text-base text-white font-normal bg-trinidad-500 py-2 px-12 rounded-full disabled:opacity-50"
          >
            {!isLoading && <>Valider et payer</>}
            {isLoading && (
              <Bars
                heigth="20"
                width="20"
                color="white"
                className="opacity-60"
                ariaLabel="loading-indicator"
              />
            )}
          </button>
        );
      default:
        return null;
    }
  }

  const nextStep = (e) => {
    e.preventDefault();
    if (currentStep < steps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };
  const previousStep = (e) => {
    e.preventDefault();
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div>
      <ReactModal
        isOpen={isLicenseOpen}
        onRequestClose={() => setIsLicenseOpen(false)}
        overlayElement={
          (props, contentElement) => (
            <div {...props}>
              <div
                className="flex justify-end mt-2 mx-auto text-gray-400"
                style={{ maxWidth: "1300px" }}
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
              <div className=" flex-col ">{contentElement}</div>
            </div>
          )
          /* Custom Overlay element. */
        }
        preventScroll={true}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            zIndex: 100,
          },
          content: {
            position: "absolute",
            top: "40px",
            left: "40px",
            right: "40px",
            bottom: "40px",
            border: "1px solid #ccc",
            background: "#fff",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "12px",
            outline: "none",
            padding: "20px",
            maxWidth: "1300px",
            margin: "auto",
          },
        }}
      >
        <PegaseLicense />
        <div className="flex justify-end py-4 gap-4">
          <button
            onClick={() => setIsLicenseOpen(false)}
            className="bg-gray-100 py-2 px-8 rounded-full text-gray-500"
          >
            Retour
          </button>
          <button
            className=" bg-trinidad-500 py-2 px-8 rounded-full text-white"
            onClick={() => {
              formik.setFieldValue("terms", true);
              setIsLicenseOpen(false);
            }}
          >
            Accepter
          </button>
        </div>
      </ReactModal>
      <ReactModal
        isOpen={isRgpdOpen}
        onRequestClose={() => setIsRgpdOpen(false)}
        preventScroll={true}
        overlayElement={
          (props, contentElement) => (
            <div {...props}>
              <div
                className="flex justify-end mt-2 mx-auto text-gray-400"
                style={{ maxWidth: "1300px" }}
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
          },
          content: {
            position: "absolute",
            top: "40px",
            left: "40px",
            right: "40px",
            bottom: "40px",
            border: "1px solid #ccc",
            background: "#fff",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "12px",
            outline: "none",
            padding: "20px",
            maxWidth: "1300px",
            margin: "auto",
          },
        }}
      >
        <RgpdPage />
        <div className="flex justify-end py-4 gap-4">
          <button
            onClick={() => setIsRgpdOpen(false)}
            className="bg-gray-100 py-2 px-8 rounded-full text-gray-500"
          >
            Retour
          </button>
          <button
            className=" bg-trinidad-500 py-2 px-8 rounded-full text-white"
            onClick={() => {
              formik.setFieldValue("rgpd", true);
              setIsRgpdOpen(false);
            }}
          >
            Accepter
          </button>
        </div>
      </ReactModal>
      <ReactModal
        isOpen={isSellsOpen}
        onRequestClose={() => setIsSellsOpen(false)}
        preventScroll={true}
        overlayElement={
          (props, contentElement) => (
            <div {...props}>
              <div
                className="flex justify-end mt-2 mx-auto text-gray-400"
                style={{ maxWidth: "1300px" }}
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
          },
          content: {
            position: "absolute",
            top: "40px",
            left: "40px",
            right: "40px",
            bottom: "40px",
            border: "1px solid #ccc",
            background: "#fff",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "12px",
            outline: "none",
            padding: "20px",
            maxWidth: "1300px",
            margin: "auto",
          },
        }}
      >
        <ConditionsVentesText />
        <div className="flex justify-end py-4 gap-4">
          <button
            className=" bg-trinidad-500 py-2 px-8 rounded-full text-white"
            onClick={() => {
              setIsSellsOpen(false);
            }}
          >
            Fermer
          </button>
        </div>
      </ReactModal>
      <div className="flex items-center mb-8">
        <div className="stepper">1</div>
        <div
          className={`stepper-divider ${currentStep >= 2 ? "" : "opacity-50"}`}
        >
          {" "}
        </div>
        <div className={`stepper  ${currentStep >= 2 ? "" : "opacity-50"}   `}>
          2
        </div>
        <div
          className={`stepper-divider ${currentStep >= 3 ? "" : "opacity-50"}`}
        >
          {" "}
        </div>

        <div className={`stepper  ${currentStep >= 3 ? "" : "opacity-50"}   `}>
          3
        </div>
      </div>

      <FormikProvider value={formik}>
        <form onSubmit={formik.handleSubmit}>
          <div className="w-full flex text-midnight-blue-500">
            <div className="flex-1 md:pr-4 font-light">
              {_renderStepContent(currentStep)}
            </div>
            <div className="hidden md:block relative affiliation-bill">
              <StickyContainer className="h-full">
                <Sticky bottomOffset={80}>
                  {({ style, isSticky }) => (
                    <div
                      className=" affiliation-bill mt-10"
                      style={{
                        ...style,
                        paddingTop: `${isSticky ? "50px" : "0px"}`,
                        width: "415px",
                        transition: "all ease-out .25s",
                      }}
                    >
                      <div className=" bg-white shadow-lg rounded-xl p-2 ">
                        <h2 className="p-2  text-2xl font-semibold">
                          Ma commande
                        </h2>

                        <div className="flex-col flex-wrap items-center">
                          <div className="flex flex-wrap items-center p-2">
                            <div className="w-1/2 pr-4 font-semibold">
                              Souscription annuelle
                            </div>
                            <div className="w-1/2 text-right pl-4">
                              595,00 €
                            </div>
                          </div>
                          {formik.values.serverUser > 0 && (
                            <div
                              className="flex flex-wrap items-center rounded p-2 my-2"
                              style={{ background: "#BFDAFF" }}
                            >
                              <div className="w-1/2 font-semibold">
                                Version serveur <br /> jusque{" "}
                                <span className="text-trinidad-500">
                                  {formik.values.serverUser}
                                </span>{" "}
                                utilisateurs
                              </div>
                              <div className="w-1/2 text-right">
                                {numberWithCommas(
                                  serverOption.price
                                    .toFixed(2)
                                    .toString()
                                    .replace(".", ",")
                                )}
                                 € HTVA
                              </div>
                            </div>
                          )}
                          {formik.values.appToMigrate &&
                            formik.values.appToMigrate !== "none" && (
                              <div className="flex flex-wrap items-center rounded bg-orangish-500 p-2 my-2">
                                <div className="w-1/2 font-semibold">
                                  Récupération des données (
                                  <span className=" capitalize text-trinidad-500">
                                    {formik.values.appToMigrate}
                                  </span>
                                  )
                                </div>
                                <div className="w-1/2 text-right">
                                  {formik.values.appToMigrate !== "autre" ? (
                                    <span>
                                      {numberWithCommas(
                                        mPrice
                                          .toFixed(2)
                                          .toString()
                                          .replace(".", ",")
                                      )}
                                       € HTVA{" "}
                                    </span>
                                  ) : (
                                    <span>Sur devis</span>
                                  )}
                                </div>
                              </div>
                            )}

                          <div className="flex flex-wrap items-center p-2">
                            <div className="w-1/2 pr-4 font-semibold">
                              Total HTVA
                            </div>
                            <div className="w-1/2 text-right pl-4">
                              {(affiliationPrice + serverOption.price + mPrice)
                                .toFixed(2)
                                .toString()
                                .replace(".", ",")}
                               €
                            </div>
                          </div>
                          <div className="flex flex-wrap items-center p-2">
                            <div className="w-1/2 pr-4 font-semibold">TVA</div>
                            <div className="w-1/2 text-right pl-4">
                              {(
                                ((affiliationPrice +
                                  serverOption.price +
                                  mPrice) /
                                  100) *
                                21
                              )
                                .toFixed(2)
                                .toString()
                                .replace(".", ",")}
                               €
                            </div>
                          </div>
                          <div className="flex flex-wrap items-center p-2">
                            <div className="w-1/2 pr-4 font-semibold">
                              TOTAL
                            </div>
                            <div className="w-1/2 text-right pl-4">
                              {(
                                affiliationPrice +
                                serverOption.price +
                                mPrice +
                                ((affiliationPrice +
                                  serverOption.price +
                                  mPrice) /
                                  100) *
                                  21
                              )
                                .toFixed(2)
                                .toString()
                                .replace(".", ",")}
                               €
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex  gap-x-6 justify-center items-center mt-20">
                        <div className=" text-center">
                          {currentStep > 1 && (
                            <button type="button" onClick={previousStep}>
                              Revenir en arrière
                            </button>
                          )}
                        </div>
                        <div className=" text-center">
                          {_renderNextButton(currentStep)}
                        </div>
                      </div>
                    </div>
                  )}
                </Sticky>
              </StickyContainer>
            </div>
          </div>
          <div className="md:hidden mb-8">
            <div className="mt-5 lg:hidden text-midnight-blue-500">
              <div className=" bg-white shadow-lg rounded-xl p-2 ">
                <h2 className="p-2  text-2xl font-semibold">Ma commande</h2>

                <div className="flex-col flex-wrap items-center">
                  <div className="flex flex-wrap items-center p-2 text-base">
                    <div className="w-1/2 pr-4 font-semibold text-sm">
                      Location annuelle <br />
                      du logiciel
                    </div>
                    <div className="w-1/2 text-right pl-4 font-light">
                      595,00 € HTVA
                    </div>
                  </div>
                  {formik.values.serverUser > 0 && (
                    <div
                      className="flex flex-wrap items-center rounded p-2 my-2 text-base"
                      style={{ background: "#BFDAFF" }}
                    >
                      <div className="w-1/2 font-semibold text-sm">
                        Version serveur <br /> jusque{" "}
                        <span className="text-trinidad-500">
                          {formik.values.serverUser}
                        </span>{" "}
                        utilisateurs
                      </div>
                      <div className="w-1/2 text-right font-light">
                        {numberWithCommas(
                          serverOption.price
                            .toFixed(2)
                            .toString()
                            .replace(".", ",")
                        )}
                         € HTVA
                      </div>
                    </div>
                  )}
                  {formik.values.appToMigrate && (
                    <div className="flex flex-wrap items-center rounded bg-orangish-500 p-2 my-2 text-base">
                      <div className="w-1/2 font-semibold text-sm">
                        Récupération des données (
                        <span className=" capitalize text-trinidad-500">
                          {formik.values.appToMigrate}
                        </span>
                        )
                      </div>
                      <div className="w-1/2 text-right font-light">
                        {formik.values.appToMigrate !== "other" ? (
                          <span>
                            {numberWithCommas(
                              mPrice.toFixed(2).toString().replace(".", ",")
                            )}
                             € HTVA{" "}
                          </span>
                        ) : (
                          <span>Sur devis</span>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap items-center p-2 text-lg">
                    <div className="w-1/2 pr-4 font-semibold">Total HTVA</div>
                    <div className="w-1/2 text-right pl-4 font-light">
                      {(affiliationPrice + serverOption.price + mPrice)
                        .toFixed(2)
                        .toString()
                        .replace(".", ",")}
                       €
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center p-2 text-lg">
                    <div className="w-1/2 pr-4 font-semibold">TVA</div>
                    <div className="w-1/2 text-right pl-4 font-light">
                      {(
                        ((affiliationPrice + serverOption.price + mPrice) /
                          100) *
                        21
                      )
                        .toFixed(2)
                        .toString()
                        .replace(".", ",")}
                       €
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center p-2  text-2xl">
                    <div className="w-1/2 pr-4 font-semibold">Total:</div>
                    <div className="w-1/2 text-right pl-4 text-trinidad-500 font-light">
                      {(
                        affiliationPrice +
                        serverOption.price +
                        mPrice +
                        ((affiliationPrice + serverOption.price + mPrice) /
                          100) *
                          21
                      )
                        .toFixed(2)
                        .toString()
                        .replace(".", ",")}
                       €
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center mt-20">
                {currentStep > 1 && (
                  <div className="flex-1 text-center">
                    <button type="button" onClick={previousStep}>
                      Revenir en arrière
                    </button>
                  </div>
                )}
                <div className="flex-1 text-center">
                  {_renderNextButton(currentStep)}
                </div>
              </div>
            </div>
          </div>
        </form>
      </FormikProvider>
    </div>
  );
};

export default AffiliationForm;
