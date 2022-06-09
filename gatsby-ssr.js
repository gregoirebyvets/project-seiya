/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
const React = require("react");
const { ReactKeycloakProvider } = require("@react-keycloak/web");

const url = typeof window !== "undefined" ? window.location.pathname : "";

function wrapRootElement({ element }) {
  return (
    <ReactKeycloakProvider
      authClient={{}}
      initOptions={{
        checkLoginIframe: false,
        redirectUri: process.env.CLIENT_URL + url,
      }}
    >
      {element}
    </ReactKeycloakProvider>
  );
}

exports.wrapRootElement = wrapRootElement;
