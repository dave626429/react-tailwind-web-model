import React from "react";
import MenuSVG from "../svg-components/MenuSVG";
import MobileLogoSVG from "../svg-components/MobileLogoSVG";
import SearchSVG from "../svg-components/SearchSVG";

export default function MobileHeader() {
  return (
    <div className="mobile-header w-full fixed t-0 flex justify-between items-center h-20 bg-secondary px-6 sm:hidden">
      <MenuSVG />
      <MobileLogoSVG />
      <SearchSVG />
    </div>
  );
}
