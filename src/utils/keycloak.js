import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  realm: process.env.KC_REALM,
  url: process.env.KC_URL,
  clientId: process.env.KC_CLIENT_ID,
});

export default keycloak;
