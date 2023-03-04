import React from "react";

import Sidebar_left_new from "./Sidebar_left_new";
import Sidebar_mobile_left from "./Sidebar_mobile_left";
import Sidebar_right from "./Sidebar_right";
import User_dashboard_mid from "./User_dashboard_mid";
import User_dashboard_profile from "./User_dashboard_profile";

function User_dashboard() {
  return (
    <div className="bg-[#F4F9F8]">
        <div className="flex w-full">
          <div className=""><Sidebar_left_new/></div>
          <div className="grow shrink"><User_dashboard_mid/></div>
          <div><Sidebar_right/></div>
        </div>
        <div><Sidebar_mobile_left/></div>
    </div>
  );
}
export default User_dashboard;