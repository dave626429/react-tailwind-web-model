import React from "react";
import Logo from "../logo/Logo";
import Navigation from "../navbar/Navigation";

export default function LeftSection() {
  return (
    <div className="flex-col navigation-logo bg-green-600 hidden sm:flex h-screen">
      <Logo />
      <Navigation />
    </div>
  );
}
