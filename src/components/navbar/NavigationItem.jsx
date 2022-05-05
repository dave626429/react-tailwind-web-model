import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import NavItemIcon from "./NavItemIcon";

function NavigationItem(props) {
  const { item } = props;
  return (
    <Link to={item.pathTo}>
      <div className="flex py-5 px-10 hover:bg-white text-secondary hover:font-bold cursor-pointer">
        <NavItemIcon src={item.src} alt={item.alt} />
        {/* <NavItemLabell label={item.itemName} /> */}
        <p>{item.itemName}</p>
      </div>
    </Link>
  );
}
export default NavigationItem;
