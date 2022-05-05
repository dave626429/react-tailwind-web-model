import React from "react";

export default function NavItemLabel(props) {
  const { label } = props;
  return (
    <p className=" flex-1 hover:font-bold  font-sans font-medium">{label}</p>
  );
}
