import React from "react";

const TitleSection = props => {
  let style = `${
    props.size || "text-4xl"
  } font-semibold text-midnight-blue-500 leading-relaxed mb-4`;
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

export default TitleSection;
