import React, { Profiler } from "react";
import { Routes, Route } from "react-router-dom";
import { Page404 } from "../errorsExceptionsWarnings";
import {
  Feed,
  Help,
  Profile,
  VerificationScore,
  Matches,
  Messages,
} from "../main";

export default function Main() {
  return (
    <div className="flex flex-1 py-20 sm:p-0">
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/verificationscore" element={<VerificationScore />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/help" element={<Help />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}
