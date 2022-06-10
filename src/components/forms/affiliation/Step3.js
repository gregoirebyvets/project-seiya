import { Link } from "gatsby";
import React, { useState } from "react";
import { BsInfoCircle } from "react-icons/bs";

import Tooltip from "react-power-tooltip";

const Step3 = props => {
  const [openTooltip, setOpenTooltip] = useState(false);

  const showTooltip = bool => {
    setOpenTooltip(bool);
  };
  return (
    <div>
      {" "}
      <h2 className="text-midnight-blue-500 font-semibold text-2xl mb-3">
        Récapitulatif
      </h2>
      <div className="flex flex-col sm:flex-row bg-orangish-500 p-6  rounded-2xl sm:mr-4">
        <div className="sm:w-1/2">
          <div className="mb-6">
            <p className="text-lg font-semibold">Docteur :</p>
            <p className="text-lg capitalize">
              {props.formik.values.firstname} {props.formik.values.lastname}
            </p>
          </div>
          <div className="mb-6">
            <p className="text-lg font-semibold">Société :</p>
            <p className="text-lg ">{props.formik.values.company}</p>
          </div>
          <div className="mb-6">
            <p className="text-lg font-semibold">Email :</p>
            <p className="text-lg ">{props.formik.values.email}</p>
          </div>
          <div className="mb-6">
            <p className="text-lg font-semibold">N° de dépôt :</p>
            <p className="text-lg ">{props.formik.values.deposit}</p>
          </div>
        </div>
        <div className="sm:w-1/2">
          <div className="mb-6">
            <p className="text-lg font-semibold">OMV :</p>
            <p className="text-lg ">{props.formik.values.omv}</p>
          </div>
          <div className="mb-6">
            <p className="text-lg font-semibold">Adresse :</p>
            <p className="text-lg ">
              <span>{props.formik.values.address}</span>
              <span className="block">
                {props.formik.values.zipcode} {props.formik.values.city}
              </span>
              <span className="block">{props.formik.values.country}</span>
            </p>
          </div>
          <div className="mb-6">
            <p className="text-lg font-semibold">Téléphone :</p>
            <p className="text-lg ">{props.formik.values.phone}</p>
          </div>
          <div className="mb-6">
            <p className="text-lg font-semibold">TVA :</p>
            <p className="text-lg ">{props.formik.values.tva}</p>
          </div>
        </div>
      </div>
      <div className=" text-sm">
        <div className=" mt-9 ml-6">
          <div className="mb-6">
            Vous devez accepter les conditions suivantes afin de poursuivre
            l'adhésion:
          </div>
          <div className="flex mb-2">
            <label
              className={`control control-checkbox ${
                props.isContract ? "text-red-500" : ""
              }`}
            >
              En tant que nouvel utilisateur, je m’engage pour une durée
              initiale de 3 ans.{" "}
              <span
                className=" inline-flex justify-center align-middle relative"
                onMouseOver={() => showTooltip(true)}
                onMouseLeave={() => showTooltip(false)}
                onFocus={() => {
                  return;
                }}
                role={"tooltip"}
              >
                <BsInfoCircle />
                <Tooltip
                  show={openTooltip}
                  position="top center"
                  textBoxWidth={"500px"}
                >
                  <p className="font-light text-midnight-blue-500">
                    Le support apporté avec enthousiasme aux nouveaux
                    utilisateurs requiert temps et investissements. Ensuite,
                    ceux-ci participent au Forum et transmettent leurs propres
                    connaissances. Ce modèle « Pay it Forward » nous est cher,
                    et une promesse d’investissement personnel du nouvel
                    utilisateur est utile à la pérennité de notre outil.
                  </p>
                </Tooltip>
              </span>
              <input
                type="checkbox"
                name="contract"
                id="contract"
                onChange={props.formik.handleChange}
                onClick={e => {
                  if (e.target.value === "true") {
                    props.setIsContract(true);
                  } else {
                    props.setIsContract(false);
                  }
                }}
                onBlur={props.formik.handleBlur}
                value={props.formik.values.contract}
              />
              <div className="control_indicator"></div>
            </label>
          </div>
          <div className="flex mb-2">
            <label
              className={`control control-checkbox ${
                props.isTerms ? "text-red-500" : ""
              }`}
            >
              J'ai pris connaissance des{" "}
              <span
                className="underline"
                onClick={e => {
                  e.preventDefault();
                  props.setIsSellsOpen(true);
                }}
              >
                Conditions générales de ventes
              </span>{" "}
              et de la
              <br />
              <span
                className="underline"
                onClick={e => {
                  e.preventDefault();
                  props.setIsLicenseOpen(true);
                }}
              >
                Licence et des conditions d’utilisation du logiciel Pégase
              </span>
              .
              <input
                type="checkbox"
                name="terms"
                id="terms"
                onChange={props.formik.handleChange}
                onBlur={props.formik.handleBlur}
                value={props.formik.values.terms}
                checked={props.formik.values.terms}
                onClick={e => {
                  if (e.target.value === "true") {
                    props.setIsTerms(true);
                  } else {
                    props.setIsTerms(false);
                  }
                }}
              />
              <div className="control_indicator"></div>
            </label>
          </div>
          <div className="flex mb-2">
            <label
              className={`control control-checkbox ${
                props.isRgpd ? "text-red-500" : ""
              }`}
            >
              J'ai pris connaissance de la{" "}
              <span
                className=" underline"
                onClick={e => {
                  e.preventDefault();
                  props.setIsRgpdOpen(true);
                }}
              >
                Politique de Protection Vie Privée (RGDP)
              </span>{" "}
              et j'accepte que mes données soient traitées en lien avec ma
              demande.
              <input
                type="checkbox"
                name="rgpd"
                id="rgpd"
                onChange={props.formik.handleChange}
                onBlur={props.formik.handleBlur}
                value={props.formik.values.rgpd}
                checked={props.formik.values.rgpd}
                onClick={e => {
                  if (e.target.value === "true") {
                    props.setIsRgpd(true);
                  } else {
                    props.setIsRgpd(false);
                  }
                }}
              />
              <div className="control_indicator"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3;
