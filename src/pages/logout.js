import { useKeycloak } from "@react-keycloak/web";
import React, { useEffect } from "react";
import Layout from "../components/layout";

const LogoutURL = () => {
  const { keycloak, initialized } = useKeycloak();
  useEffect(() => {
    if (initialized) {
      if (keycloak.authenticated) {
        keycloak.logout();
      } else {
        window.location = process.env.CLIENT_URL;
      }
    }
  }, [keycloak, initialized]);

  return <Layout></Layout>;
};

export default LogoutURL;
