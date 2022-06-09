import React from "react";
import supportIcon from "../../images/sidebar/btn_sidebar_support.png";
import subscriptionIcon from "../../images/sidebar/btn_sidebar_subscribe.png";
import forumIcon from "../../images/sidebar/btn_sidebar_forum.png";
import docsIcon from "../../images/sidebar/btn_sidebar_docs.png";
import { Link } from "gatsby";
import { useKeycloak } from "@react-keycloak/web";

const SupportButtons = (props) => {
  const { keycloak } = useKeycloak();

  return (
    <div
      className={`flex ${
        props.vertical ? "flex-col flex-wrap" : ""
      } justify-center mb-4 overflow-x-hidden support-button_control`}
    >
      {keycloak && (
        <>
          {!keycloak.authenticated && (
            <div
              className={`support-button_container ${
                props.vertical ? "w-full mb-3" : "w-14"
              } mx-2 sm:mx-0 sm:ml-2 sm:flex sm:items-center`}
            >
              <Link
                to="/souscrire"
                className={`bg-white border-2 w-14 h-14 rounded-xl  ${
                  props.vertical ? "inline-block" : ""
                } hover:border-opacity-0 hover:shadow-lg transition flex`}
              >
                <img
                  src={subscriptionIcon}
                  className="support-btn_icon m-auto"
                  alt="Bouton adhésion"
                />
              </Link>
              <div
                className={`support-button_label transition-all text-xs text-center text-blue-gray-500 ${
                  props.vertical ? "inline-block" : ""
                } sm:text-midnight-blue-500 sm:ml-2 sm:font-bold  sm:text-left`}
              >
                <span className="bg-orangish-500 py-1 px-2  rounded-full inline-block">
                  Adhésion
                </span>
              </div>
            </div>
          )}
        </>
      )}

      <div
        className={`support-button_container ${
          props.vertical ? "w-full mb-3" : "w-14"
        } mx-2 sm:mx-0 sm:ml-2 sm:flex sm:items-center`}
      >
        <button
          onClick={() =>
            keycloak.login({
              redirectUri: process.env.CLIENT_URL + "/support",
            })
          }
          className={`bg-white border-2 w-14 h-14 rounded-xl  ${
            props.vertical ? "inline-block" : ""
          } hover:border-opacity-0 hover:shadow-lg transition flex`}
        >
          <img
            src={supportIcon}
            className="support-btn_icon m-auto"
            alt="Bouton support"
          />
        </button>
        <div
          className={`support-button_label transition-all text-xs  text-center text-blue-gray-500 ${
            props.vertical ? "inline-block" : ""
          } sm:text-midnight-blue-500 sm:ml-2 sm:font-bold sm:w-20 sm:text-left`}
        >
          <span className="bg-orangish-500 py-1 px-2 rounded-full inline-block">
            Support
          </span>
        </div>
      </div>
      <div
        className={`support-button_container ${
          props.vertical ? "w-full mb-3" : "w-14"
        } mx-2 sm:mx-0 sm:ml-2 sm:flex sm:items-center`}
      >
        <a
          href="https://forum.byvets.be"
          rel="noreferrer"
          className={`bg-white border-2 w-14 h-14 rounded-xl  ${
            props.vertical ? "inline-block" : ""
          } hover:border-opacity-0 hover:shadow-lg transition flex`}
        >
          <img
            src={forumIcon}
            className="support-btn_icon m-auto"
            alt="Bouton forum"
          />
        </a>
        <div
          className={`support-button_label transition-all text-xs  text-center text-blue-gray-500 ${
            props.vertical ? "inline-block" : ""
          } sm:text-midnight-blue-500 sm:ml-2 sm:font-bold sm:w-20 sm:text-left`}
        >
          <span className="bg-orangish-500  py-1 px-2 rounded-full inline-block">
            Forum
          </span>
        </div>
      </div>
      {keycloak && (
        <>
          {keycloak.authenticated && (
            <div
              className={`support-button_container ${
                props.vertical ? "w-full mb-3" : "w-14"
              } mx-2 sm:mx-0 sm:ml-2 sm:flex sm:items-center`}
            >
              <Link
                to="/support/#docs"
                className={`bg-white border-2 w-14 h-14 rounded-xl  ${
                  props.vertical ? "inline-block" : ""
                } hover:border-opacity-0 hover:shadow-lg transition flex`}
              >
                <img
                  src={docsIcon}
                  className="support-btn_icon m-auto"
                  alt="Bouton adhésion"
                />
              </Link>
              <div
                className={`support-button_label transition-all text-xs  text-center text-blue-gray-500 ${
                  props.vertical ? "inline-block" : ""
                } sm:text-midnight-blue-500 sm:ml-2 sm:font-bold sm:w-20 sm:text-left`}
              >
                <span className="bg-orangish-500 py-1 px-2 rounded-full inline-block">
                  Docs
                </span>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SupportButtons;
