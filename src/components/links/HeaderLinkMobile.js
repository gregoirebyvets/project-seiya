import { Link } from "gatsby";
import React from "react";

const HeaderLinkMobile = props => {
  return (
    <Link
      {...props}
      className={`border rounded-full my-1 font-light py-2 mx-5 ${
        props.secondary
          ? "border-trinidad-500 bg-trinidad-500 text-white hover:text-white hover:bg-midnight-blue-500 hover:border-midnight-blue-500"
          : "border-midnight-blue-500 text-midnight-blue-500  hover:text-white hover:bg-trinidad-500 hover:border-trinidad-500"
      }`}
    >
      {props.children}
    </Link>
  );
};

export default HeaderLinkMobile;
