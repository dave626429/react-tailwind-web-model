import React from "react";
import MobileFooter from "../footers/MobileFooter";
import Header from "../headers/Header";
import MobileHeader from "../headers/MobileHeader";
import Main from "../main/Main";

export default function RightSection() {
  return (
    <div className="header-main flex flex-1 flex-col ">
      <Header />
      <MobileHeader />
      <Main />
      <MobileFooter />
    </div>
  );
}
