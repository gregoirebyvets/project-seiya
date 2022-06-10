import React from "react";

const TitleParagraphe = props => {
  let style = `text-${
    props.size || "xl"
  } font-medium text-midnight-blue-500 leading-relaxed mb-2`;
  if (props.balise === "h1") {
    return <h1 className={style}>{props.children} </h1>;
  }
  if (props.balise === "h2") {
    return <h2 className={style}>{props.children}</h2>;
  }
  if (props.balise === "h3") {
    return <h3 className={style}>{props.children}</h3>;
  }
  if (props.balise === "h4") {
    return <h4 className={style}>{props.children}</h4>;
  }
  return <h2 className={style}>{props.children}</h2>;
};

export default TitleParagraphe;
