import React from "react";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./src/utils/keycloak";

import "./src/styles/global.css";
import "./src/styles/style.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const url = typeof window !== "undefined" ? window.location.pathname : "";
let params = "";

params = window.location.search;

const Loading = () => (
  <div
    style={{
      height: "100vh",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  ></div>
);

let myUrl;

if (url === "/logout/success" || url === "/logout/sucess") {
  myUrl = "/";
} else {
  myUrl = url;
}

export const wrapRootElement = ({ element }) => {
  return (
    <ReactKeycloakProvider
      authClient={keycloak}
      initOptions={{
        checkLoginIframe: false,
        redirectUri: process.env.CLIENT_URL + myUrl + params,
      }}
      LoadingComponent={<Loading />}
    >
      {element}
    </ReactKeycloakProvider>
  );
};
