import { Link } from "gatsby";
import React from "react";

const HeaderButton = (props) => {
  const baseStyle = props.className || "";
  let style = `bg-trinidad-500 font-normal text-white rounded-full px-3 py-2 mx-2 lg:px-6 lg:py-2 lg:mx-2 text-sm lg:text-base`;
  if (props.secondary) {
    style = `${baseStyle} bg-white border border-midnight-blue  font-normal text-trinidad rounded-full px-6 py-2 mx-2`;
  }
  if (props.link) {
    return (
      <Link className={style} to={props.to}>
        {props.children}
      </Link>
    );
  }
  if (props.tel) {
    return (
      <a className={style} href={props.to}>
        {props.children}
      </a>
    );
  }
  return (
    <button onClick={props.onClick} className={style}>
      {props.children}
    </button>
  );
};

export default HeaderButton;
