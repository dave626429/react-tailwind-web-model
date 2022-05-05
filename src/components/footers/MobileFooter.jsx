import React from "react";
import HomeSVG from "../svg-components/HomeSVG";
import NotificationSVG from "../svg-components/NotificationSVG";
import PeopleSVG from "../svg-components/PeopleSVG";

export default function MobileFooter() {
  return (
    <div className="mobile-footer px-12 flex h-20 justify-between items-center bg-white border-2 border-secondary rounded-t-2xl w-full fixed bottom-0 sm:hidden">
      <HomeSVG width="40px" height="40px" />
      <PeopleSVG width="40px" height="40px" />
      <NotificationSVG width="40px" height="40px" />
    </div>
  );
}
