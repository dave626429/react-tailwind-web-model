import React from "react";

export default function Logo() {
  return (
    <div
      id="logo-container"
      className="pointer-events-none flex flex-col justify-center items-center py-8 px-16 lg:px-28 bg-primary "
    >
      <img id="logo" src="./Logo_QP_1.svg" alt="logo.svg" />
      <div>
        <span className="font-bold text-2xl text-secondary font-sans">
          Quark
        </span>
        &nbsp;
        <span className="font-normal text-2xl text-secondary font-sans">
          Project
        </span>
      </div>
    </div>
  );
}
