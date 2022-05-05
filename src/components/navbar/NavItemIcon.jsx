import React from "react";

export default function NavItemIcon(props) {
  const { src, alt } = props;
  return <img className="pr-10" src={src} alt={alt} />;
}
