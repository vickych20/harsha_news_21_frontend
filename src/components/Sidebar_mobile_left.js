import logo from "./images/logo.png";
import home from "./images/home.png";
import home2 from "./images/home2.png";
import globe from "./images/globe.png";
import globe2 from "./images/globe2.png";
import briefcase from "./images/briefcase.png";
import briefcase2 from "./images/briefcase2.png";
import activity from "./images/activity.png";
import activity2 from "./images/activity2.png";
import shield from "./images/shield.png";
import shield2 from "./images/shield2.png";
import play_circle from "./images/play-circle.png";
import play_circle2 from "./images/play-circle2.png";
import award from "./images/award.png";
import award2 from "./images/award2.png";
import message_circle from "./images/message-circle.png";
import message_circle2 from "./images/message-circle2.png";
import bell from "./images/bell.png";
import bell2 from "./images/bell2.png";
import settings from "./images/settings.png";
import settings2 from "./images/settings2.png";
import gift from "./images/gift.png";
import { useState } from "react";


function Sidebar_mobile_left() {

    const [liImage1, setLiImage1] = useState(true);
    const [liImage2, setLiImage2] = useState(true);
    const [liImage3, setLiImage3] = useState(true);
    const [liImage4, setLiImage4] = useState(true);
    const [liImage5, setLiImage5] = useState(true);
    const [liImage6, setLiImage6] = useState(true);
    const [liImage7, setLiImage7] = useState(true);
    const [liImage8, setLiImage8] = useState(true);
    const [liImage9, setLiImage9] = useState(true);
    const [liImage10, setLiImage10] = useState(true);
    
  return (
    <div className="bg-[#f4f9f8]">
      <div className="h-[100vh] fixed top-0 min-w-[260px] max-w-[260px] pr-2 overflow-y-scroll bg-white left-[-260px] sidebar_mobile_left">
        <div>
          <div className="flex items-center justify-center my-5 pr-2">
            <img src={logo} alt="" className="cursor-pointer"/>
            <p className="text-[22px] font-bold text-[#0768b5] mx-4 cursor-pointer">Aster News</p>
            <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="currentColor" className="bi bi-x close_icon cursor-pointer" viewBox="0 0 16 16"
            onClick={()=>{
              document.getElementsByClassName("sidebar_mobile_left")[0].style.left = "-280px";
              document.getElementsByClassName("sidebar_mobile_left")[0].style.transition = "0.5s";
            }}
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </div>
          <ul className="">
            <li className="flex items-center pl-4 py-[10px] my-2 hover:bg-[#e0f0f8] rounded-r-full sidebar_li cursor-pointer"
            onMouseOver={()=>{
              document.getElementsByClassName("li_dot")[10].style.background = "#2f9ff8";
              setLiImage1(false);
              document.getElementsByClassName("li_p")[10].style.color = "#2f9ff8";
              document.getElementsByClassName("li_p")[10].style.fontWeight = "700";
            }}
            onMouseOut={()=>{
              document.getElementsByClassName("li_dot")[10].style.background = "#f4f9f8";
              setLiImage1(true);
              document.getElementsByClassName("li_p")[10].style.color = "#072d4b";
              document.getElementsByClassName("li_p")[10].style.fontWeight = "500";
            }} 
            >
              <div className="h-[5px] w-[5px] rounded-full li_dot" />
              <div className="ml-3 mr-4"> 
                <img src={liImage1 ? home2 : home } alt="" className="li_icon" />
              </div>
              <p className="font-medium text-[15px] text-[#072d4b] li_p">Top Stories</p>
            </li>
            <li className="flex items-center pl-4 py-[10px] my-2 hover:bg-[#e0f0f8] rounded-r-full sidebar_li cursor-pointer"
            onMouseOver={()=>{
              document.getElementsByClassName("li_dot")[11].style.background = "#2f9ff8";
              setLiImage2(false);
              document.getElementsByClassName("li_p")[11].style.color = "#2f9ff8";
              document.getElementsByClassName("li_p")[11].style.fontWeight = "700";
            }}
            onMouseOut={()=>{
              document.getElementsByClassName("li_dot")[11].style.background = "#f4f9f8";
              setLiImage2(true);
              document.getElementsByClassName("li_p")[11].style.color = "#072d4b";
              document.getElementsByClassName("li_p")[11].style.fontWeight = "500";
            }}
            >
              <div className="h-[5px] w-[5px] rounded-full li_dot" />
              <div className="ml-3 mr-4">
                <img src={liImage2 ? globe : globe2} alt="" className="li_icon" />
              </div>
              <p className="font-medium text-[15px] text-[#072d4b] li_p">Around the World</p>
            </li>
            <li className="flex items-center pl-4 py-[10px] my-2 hover:bg-[#e0f0f8] rounded-r-full sidebar_li cursor-pointer" 
            onMouseOver={()=>{
              document.getElementsByClassName("li_dot")[12].style.background = "#2f9ff8";
              setLiImage3(false);
              document.getElementsByClassName("li_p")[12].style.color = "#2f9ff8";
              document.getElementsByClassName("li_p")[12].style.fontWeight = "700";
            }}
            onMouseOut={()=>{
              document.getElementsByClassName("li_dot")[12].style.background = "#f4f9f8";
              setLiImage3(true);
              document.getElementsByClassName("li_p")[12].style.color = "#072d4b";
              document.getElementsByClassName("li_p")[12].style.fontWeight = "500";
            }}
            >
              <div className="h-[5px] w-[5px] rounded-full li_dot" />
              <div className="ml-3 mr-4">
                <img src={liImage3 ? briefcase : briefcase2} alt="" className="li_icon" />
              </div>
              <p className="font-medium text-[15px] text-[#072d4b] li_p">Business</p>
            </li>
            <li className="flex items-center pl-4 py-[10px] my-2 hover:bg-[#e0f0f8] rounded-r-full sidebar_li cursor-pointer"
            onMouseOver={()=>{
              document.getElementsByClassName("li_dot")[13].style.background = "#2f9ff8";
              setLiImage4(false);
              document.getElementsByClassName("li_p")[13].style.color = "#2f9ff8";
              document.getElementsByClassName("li_p")[13].style.fontWeight = "700";
            }}
            onMouseOut={()=>{
              document.getElementsByClassName("li_dot")[13].style.background = "#f4f9f8";
              setLiImage4(true);
              document.getElementsByClassName("li_p")[13].style.color = "#072d4b";
              document.getElementsByClassName("li_p")[13].style.fontWeight = "500";
            }}
            >
              <div className="h-[5px] w-[5px] rounded-full li_dot" />
              <div className="ml-3 mr-4">
                <img src={liImage4 ? activity : activity2} alt="" className="li_icon" />
              </div>
              <p className="font-medium text-[15px] text-[#072d4b] li_p">Health</p>
            </li>
            <hr />
            <li className="flex items-center pl-4 py-[10px] my-3 hover:bg-[#e0f0f8] rounded-r-full sidebar_li cursor-pointer" 
            onMouseOver={()=>{
              document.getElementsByClassName("li_dot")[14].style.background = "#2f9ff8";
              setLiImage5(false);
              document.getElementsByClassName("li_p")[14].style.color = "#2f9ff8";
              document.getElementsByClassName("li_p")[14].style.fontWeight = "700";
            }}
            onMouseOut={()=>{
              document.getElementsByClassName("li_dot")[14].style.background = "#f4f9f8";
              setLiImage5(true);
              document.getElementsByClassName("li_p")[14].style.color = "#072d4b";
              document.getElementsByClassName("li_p")[14].style.fontWeight = "500";
            }}
            >
              <div className="h-[5px] w-[5px] rounded-full li_dot" />
              <div className="ml-3 mr-4">
                <img src={liImage5 ? shield : shield2} alt="" className="li_icon" />
              </div>
              <p className="font-medium text-[15px] text-[#072d4b] li_p">Covid 19</p>
            </li>
            <hr />
            <li className="flex items-center pl-4 py-[10px] my-2 hover:bg-[#e0f0f8] rounded-r-full sidebar_li cursor-pointer" 
            onMouseOver={()=>{
              document.getElementsByClassName("li_dot")[15].style.background = "#2f9ff8";
              setLiImage6(false);
              document.getElementsByClassName("li_p")[15].style.color = "#2f9ff8";
              document.getElementsByClassName("li_p")[15].style.fontWeight = "700";
            }}
            onMouseOut={()=>{
              document.getElementsByClassName("li_dot")[15].style.background = "#f4f9f8";
              setLiImage6(true);
              document.getElementsByClassName("li_p")[15].style.color = "#072d4b";
              document.getElementsByClassName("li_p")[15].style.fontWeight = "500";
            }}
            >
              <div className="h-[5px] w-[5px] rounded-full li_dot" />
              <div className="ml-3 mr-4">
                <img src={liImage6 ? play_circle : play_circle2} alt="" className="li_icon" />
              </div>
              <p className="font-medium text-[15px] text-[#072d4b] li_p">Entertainment</p>
            </li>
            <li className="flex items-center pl-4 py-[10px] my-2 hover:bg-[#e0f0f8] rounded-r-full sidebar_li cursor-pointer"
            onMouseOver={()=>{
              document.getElementsByClassName("li_dot")[16].style.background = "#2f9ff8";
              setLiImage7(false);
              document.getElementsByClassName("li_p")[16].style.color = "#2f9ff8";
              document.getElementsByClassName("li_p")[16].style.fontWeight = "700";
            }}
            onMouseOut={()=>{
              document.getElementsByClassName("li_dot")[16].style.background = "#f4f9f8";
              setLiImage7(true);
              document.getElementsByClassName("li_p")[16].style.color = "#072d4b";
              document.getElementsByClassName("li_p")[16].style.fontWeight = "500";
            }}
            >
              <div className="h-[5px] w-[5px] rounded-full li_dot" />
              <div className="ml-3 mr-4">
                <img src={liImage7 ? award : award2} alt="" className="li_icon" />
              </div>
              <p className="font-medium text-[15px] text-[#072d4b] li_p">Sports</p>
            </li>
            <li className="flex items-center pl-4 py-[10px] my-2 hover:bg-[#e0f0f8] rounded-r-full sidebar_li cursor-pointer" 
            onMouseOver={()=>{
              document.getElementsByClassName("li_dot")[17].style.background = "#2f9ff8";
              setLiImage8(false);
              document.getElementsByClassName("li_p")[17].style.color = "#2f9ff8";
              document.getElementsByClassName("li_p")[17].style.fontWeight = "700";
            }}
            onMouseOut={()=>{
              document.getElementsByClassName("li_dot")[17].style.background = "#f4f9f8";
              setLiImage8(true);
              document.getElementsByClassName("li_p")[17].style.color = "#072d4b";
              document.getElementsByClassName("li_p")[17].style.fontWeight = "500";
            }}
            >
              <div className="h-[5px] w-[5px] rounded-full li_dot" />
              <div className="ml-3 mr-4">
                <img src={liImage8 ? message_circle : message_circle2} alt="" className="li_icon" />
              </div>
              <p className="font-medium text-[15px] text-[#072d4b] li_p">Discussion</p>
            </li>
            <li className="flex items-center pl-4 py-[10px] my-2 hover:bg-[#e0f0f8] rounded-r-full sidebar_li cursor-pointer" 
            onMouseOver={()=>{
              document.getElementsByClassName("li_dot")[18].style.background = "#2f9ff8";
              setLiImage9(false);
              document.getElementsByClassName("li_p")[18].style.color = "#2f9ff8";
              document.getElementsByClassName("li_p")[18].style.fontWeight = "700";
            }}
            onMouseOut={()=>{
              document.getElementsByClassName("li_dot")[18].style.background = "#f4f9f8";
              setLiImage9(true);
              document.getElementsByClassName("li_p")[18].style.color = "#072d4b";
              document.getElementsByClassName("li_p")[18].style.fontWeight = "500";
            }}
            >
              <div className="h-[5px] w-[5px] rounded-full li_dot" />
              <div className="ml-3 mr-4">
                <img src={liImage9 ? bell : bell2} alt="" className="li_icon" />
              </div>
              <p className="font-medium text-[15px] text-[#072d4b] li_p">Notifications</p>
            </li>
            <li className="flex items-center pl-4 py-[10px] my-2 hover:bg-[#e0f0f8] rounded-r-full sidebar_li cursor-pointer"
            onMouseOver={()=>{
              document.getElementsByClassName("li_dot")[19].style.background = "#2f9ff8";
              setLiImage10(false);
              document.getElementsByClassName("li_p")[19].style.color = "#2f9ff8";
              document.getElementsByClassName("li_p")[19].style.fontWeight = "700";
            }}
            onMouseOut={()=>{
              document.getElementsByClassName("li_dot")[19].style.background = "#f4f9f8";
              setLiImage10(true);
              document.getElementsByClassName("li_p")[19].style.color = "#072d4b";
              document.getElementsByClassName("li_p")[19].style.fontWeight = "500";
            }}
            >
              <div className="h-[5px] w-[5px] rounded-full li_dot" />
              <div className="ml-3 mr-4">
                <img src={liImage10 ? settings : settings2} alt="" className="li_icon" />
              </div>
              <p className="font-medium text-[15px] text-[#072d4b] li_p">News Feed Settings</p>
            </li>
          </ul>
          <div className="mt-[100px] bg-[#2f9ff8] text-white p-3 m-3 rounded-r-md">
            <div className="flex items-center justify-between">
              <img src="images/gift.png" alt="" className="mr-2" />
              <p className="text-[15px]">Subscribe to Premium</p>
            </div>
            <div className="flex items-center mt-2 justify-between">
              <p className="text-[25px]">
                $8/<b className="text-[18px] font-normal">m</b>
              </p>
              <button className="bg-[#0768b5] py-[6px] px-3 rounded-sm">Upgrade</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Sidebar_mobile_left;