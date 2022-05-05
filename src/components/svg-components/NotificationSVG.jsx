import React from "react";

export default function NotificationSVG(props) {
  const { width, height, fill, stroke, strokeWidth } = props;
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width, height }}
    >
      <path
        d="M12.0206 2.91016C8.71058 2.91016 6.02058 5.60016 6.02058 8.91016V11.8002C6.02058 12.4102 5.76058 13.3402 5.45058 13.8602L4.30058 15.7702C3.59058 16.9502 4.08058 18.2602 5.38058 18.7002C9.69058 20.1402 14.3406 20.1402 18.6506 18.7002C19.8606 18.3002 20.3906 16.8702 19.7306 15.7702L18.5806 13.8602C18.2806 13.3402 18.0206 12.4102 18.0206 11.8002V8.91016C18.0206 5.61016 15.3206 2.91016 12.0206 2.91016Z"
        stroke="black"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        style={{ fill, stroke }}
      />
      <path
        d="M13.8699 3.20141C13.5599 3.11141 13.2399 3.04141 12.9099 3.00141C11.9499 2.88141 11.0299 2.95141 10.1699 3.20141C10.4599 2.46141 11.1799 1.94141 12.0199 1.94141C12.8599 1.94141 13.5799 2.46141 13.8699 3.20141Z"
        stroke="black"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ fill, stroke, strokeWidth }}
      />
      <path
        opacity="0.4"
        d="M15.0195 19.0586C15.0195 20.7086 13.6695 22.0586 12.0195 22.0586C11.1995 22.0586 10.4395 21.7186 9.89953 21.1786C9.35953 20.6386 9.01953 19.8786 9.01953 19.0586"
        stroke="black"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        style={{ fill, stroke }}
      />
    </svg>
  );
}