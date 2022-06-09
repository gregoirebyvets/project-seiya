import React from "react";
import { Toaster } from "react-hot-toast";
import SupportButtons from "../buttons/SupportButtons";
import Footer from "./Footer";
import UnloggedHeader from "./UnloggedHeader";

const UnloggedLayout = ({ children }) => {
  return (
    <div className="overflow-x-hidden">
      <Toaster />
      <UnloggedHeader />

      <div className=" container mx-auto min-h-screen pt-40">
        <div className="hidden fixed  left-4 lg:block "></div>
        <main className="px-4 sm:px-8">{children}</main>
      </div>

      <Footer />
    </div>
  );
};

export default UnloggedLayout;
