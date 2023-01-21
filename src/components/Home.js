import logo from "./images/logo.png";
import home2 from "./images/home2.png";
import globe from "./images/globe.png";
import briefcase from "./images/briefcase.png";
import activity from "./images/activity.png";
import shield from "./images/shield.png";
import play_circle from "./images/play-circle.png";
import award from "./images/award.png";
import message_circle from "./images/message-circle.png";
import bell from "./images/bell.png";
import React from "react";
import settings from "./images/settings.png";
import gift from "./images/gift.png";
import search from "./images/search.png";
import samsung_galaxy_f22 from "./images/samsung_galaxy_f22.png";
import share from "./images/share.png";
import pocket from "./images/pocket.png";
import battlegrounds from "./images/battlegrounds.png";
import instagram from "./images/instagram.png";
import android_smartphone from "./images/android_smartphone.png";
import windows11 from "./images/windows11.png";
import iphone13 from "./images/iphone13.png";
import user from "./images/user.png";
import caret_down from "./images/caret-down.png";
import crosshair from "./images/crosshair.png";
import sun from "./images/sun.png";
import feather from "./images/feather.png";
import file_text from "./images/file-text.png";
import caret_left from "./images/caret-left.png";
import caret_right from "./images/caret-right.png";
import Sidebar_left from "./Sidebar_left";
import Sidebar_mobile_left from "./Sidebar_mobile_left";
import Sidebar_right from "./Sidebar_right";
import Home_mid_new from "./Home_mid_new";

function Home() {
  return (
    <div className="bg-[#F4F9F8]">
        <div className="flex">
            <Sidebar_left/>
            <Home_mid_new/>
            <Sidebar_right/>
        </div>
        <Sidebar_mobile_left/>
    </div>
  );
}
export default Home;