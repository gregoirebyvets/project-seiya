import React from "react";
import AffiliationForm from "../components/forms/affiliation/AffiliationForm";
import Layout from "../components/layout";
import Seo from "../components/seo";

const AffiliationPage = () => {
  return (
    <Layout>
      <Seo
        description="Quand les vétérinaires prennent les rênes de leur outil informatique..."
        title="ByVets - Logiciel Pegase, gestion informatique de cabinet vétérinaire"
      />
      {/* 
      <div className="flex bg-orangish-500 rounded-lg p-4 my-6 ">
        <div className="flex items-center pr-4 text-trinidad-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div>
          <h4 className="font-bold text-xl text-trinidad-500">
            Action Vétérinexpo
          </h4>
          <p className="text-midnight-blue-500">
            Toute souscription avant le 31/12 vaut également pour l'année
            suivante.
          </p>
           <p className="text-midnight-blue-500">
            Sur notre stand : Chaque jour tirage au sort - une année à gagner
          </p> 
        </div> 
      </div>*/}
      <AffiliationForm />
    </Layout>
  );
};

export default AffiliationPage;
