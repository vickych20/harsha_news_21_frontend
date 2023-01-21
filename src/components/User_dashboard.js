import React from "react";

import Sidebar_left from "./Sidebar_left";
import Sidebar_mobile_left from "./Sidebar_mobile_left";
import Sidebar_right from "./Sidebar_right";
import User_dashboard_mid from "./User_dashboard_mid";

function User_dashboard() {
  return (
    <div className="bg-[#F4F9F8]">
        <div className="flex">
            <Sidebar_left/>
            <User_dashboard_mid/>
            <Sidebar_right/>
        </div>
        <Sidebar_mobile_left/>
    </div>
  );
}
export default User_dashboard;