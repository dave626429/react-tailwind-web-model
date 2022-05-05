import React from "react";
import NavigationItem from "./NavigationItem";
import navigationitems from "./data";

function Navigation() {
  const { top, bottom } = navigationitems;

  return (
    <div className="navigation flex flex-col flex-1 justify-between bg-primary">
      <div className="top-sec">
        {top.map((item, index) => (
          <NavigationItem
            key={`top-sec-${item.itemName}-${index}`}
            item={item}
          />
        ))}
      </div>
      <div className="bottom-sec">
        {bottom.map((item, index) => (
          <NavigationItem
            key={`bottom-sec-${item.itemName}-${index}`}
            item={item}
          />
        ))}
      </div>
    </div>
  );
}

export default Navigation;
