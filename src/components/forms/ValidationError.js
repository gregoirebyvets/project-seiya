import React from "react";

const ValidationError = ({ children }) => {
  return <div className="text-red-500 ml-2">{children}</div>;
};

export default ValidationError;
