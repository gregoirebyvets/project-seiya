import { Link } from "gatsby";
import React from "react";

const HeaderLink = (props) => {
  return (
    <Link
      {...props}
      className=" my-2 text-midnight-blue-500 text-base hover:text-trinidad-500 font-semibold lg:my-0 lg:mx-5"
    >
      {props.children}
    </Link>
  );
};

export default HeaderLink;
