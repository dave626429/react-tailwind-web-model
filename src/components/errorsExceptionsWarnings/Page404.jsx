import React from "react";
import { Link } from "react-router-dom";

export default function Page404() {
  return (
    <div>
      <h1 className="text-9xl">404</h1>
      <Link className="text-blue-600" to={"/"}>
        Navigate to dashboard
      </Link>
    </div>
  );
}
