import React from "react";
import SupportButtons from "../buttons/SupportButtons";
import Footer from "./Footer";
import Header from "./Header";
import { Toaster } from "react-hot-toast";
const Layout = ({ children }) => {
  // const { keycloak, initialized } = useKeycloak();
  return (
    <div className="overflow-x-hidden">
      <Toaster />
      <Header />

      <div className=" container mx-auto min-h-screen pt-40">
        <div className="hidden fixed z-50 left-4 lg:block ">
          <SupportButtons vertical />
        </div>
        <main className="px-4 sm:px-8">{children}</main>
      </div>
      {/* <div>The user is {keycloak.authenticated ? "" : "NOT"} authenticated</div>
      <button type="button" onClick={() => keycloak.login()}>
        Login
      </button> */}
      <Footer />
    </div>
  );
};

export default Layout;
