import React from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

export default function Application() {
  return (
    <div className="App">
      <div className="page h-screen flex flex-1">
        <LeftSection />
        <RightSection />
      </div>
    </div>
  );
}
