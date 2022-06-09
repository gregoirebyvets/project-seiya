import { Link } from "gatsby";
import React from "react";

const ContentButton = (props) => {
  let style =
    "text-sm sm:text-base flex items-center justify-center content-button bg-trinidad-500 text-white font-light rounded-full text-center py-2 px-10 sm:p-2 cursor-pointer";

  if (props.secondary) {
    style =
      "text-sm sm:text-base flex items-center justify-center content-button-2 bg-midnight-blue-500 text-white font-light rounded-full text-center py-2 px-10 sm:p-2 cursor-pointer";
  }

  if (props.styleName) {
    style = style + props.styleName;
  }

  if (props.type === "link") {
    return (
      <Link to={props.to} className={style}>
        <span> {props.children}</span>
      </Link>
    );
  }
  if (props.type === "external") {
    return (
      <a href={props.to} target="_blank" rel="noreferrer" className={style}>
        <span>{props.children}</span>
      </a>
    );
  }
  if (props.type === "submit") {
    return (
      <button type="submit" className={style}>
        {props.children}
      </button>
    );
  }
  return <div></div>;
};

export default ContentButton;
