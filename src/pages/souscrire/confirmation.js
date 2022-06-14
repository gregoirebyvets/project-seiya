import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import withLocation from "../../utils/withLocation";

import Layout from "../../components/layout/index";
import ContentButton from "../../components/buttons/ContentButton";
import axios from "axios";
import Seo from "../../components/seo";

const ConfirmationPage = ({ params }) => {
  const [status, setStatus] = useState("en cours ...");
  const [subId, setSubId] = useState();
  const [isStatusUpdated, setIsStatusUpdated] = useState(false);

  const textStatus = (status) => {
    if (status !== "") {
      switch (status) {
        case "paid":
          return { text: "accepté", color: "green", animation: "" };
        case "pending":
          return { text: "en cours ...", color: "trinidad", animation: "" };
        case "failed":
          return { text: "échoué", color: "red", animation: "" };
        case "canceled":
          return { text: "annulé", color: "red", animation: "" };
        case "expired":
          return { text: "expiré", color: "red", animation: "" };
        default:
          return { text: "en cours ...", color: "trinidad", animation: "" };
      }
    }
    return { text: "en cours ...", color: "trinidad", animation: "" };
  };

  useEffect(() => {
    const sendSubscription = (id) => {
      axios
        .post(
          process.env.BACKEND_API_URL + "/subscriptions/mail",
          {
            id,
            force_mail: false,
          },
          {
            method: "POST",
            mode: "cors",
          }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const checkStatus = (id) => {
      setInterval(() => {
        axios
          .post(
            process.env.BACKEND_API_URL + "/subscriptions/status",
            {
              id,
            },
            {
              method: "POST",
              mode: "cors",
            }
          )
          .then((response) => {
            setStatus(response.data.response);
            if (
              response.data.response !== "pending" &&
              response.data.response !== ""
            ) {
              setIsStatusUpdated(true);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }, 1000);
    };

    function findGetParameter(parameterName) {
      var result = null,
        tmp = [];
      window.location.search
        .substring(1)
        .split("&")
        .forEach(function (item) {
          tmp = item.split("=");
          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
      return result;
    }

    setSubId(findGetParameter("id"));
    sendSubscription(subId);
    if (!isStatusUpdated) {
      checkStatus(subId);
    }
  }, [subId]);

  return (
    <Layout>
      <Seo
        description="Quand les vétérinaires prennent les rênes de leur outil informatique..."
        title="ByVets - Confirmation de votre adhésion"
      />
      <section className="">
        <h2 className="text-midnight-blue-500 font-semibold text-4xl mb-8">
          Merci pour votre confiance !
        </h2>
        <p className="sm:w-1/2 text-blue-gray-500 font-light text-lg mb-8">
          Votre formulaire d’inscription a été envoyé et sera traité dans les
          plus brefs délais. Un mail vous a été envoyé contenant le
          récapitulatif de votre commande. Si vous ne l'avez pas reçu, vérifiez
          vos spams et si vous ne le voyez toujours pas, contactez-nous.
        </p>
        <div className="flex justify-center gap-x-4 sm:w-1/2 sm:justify-between px-4">
          <div
            className="flex items-center gap-x-2 "
            style={{ color: "#A3A3A3" }}
          >
            <div
              className={`h-2 w-2  rounded-full bg-${
                textStatus(status).color
              }-400 relative`}
            >
              <div
                className={`h-2 w-2 z-50 ${
                  status === "paid" ? "" : "animate-ping"
                } top-0 left-0 absolute rounded-full bg-${
                  textStatus(status).color
                }-400`}
              ></div>
            </div>

            <div className=" transition-all">
              Paiement {textStatus(status).text}
            </div>
          </div>
          <ContentButton to="/" type="link">
            Retour à l'accueil
          </ContentButton>
        </div>
      </section>
    </Layout>
  );
};

ConfirmationPage.propTypes = {
  search: PropTypes.object,
};

export default withLocation(ConfirmationPage);
