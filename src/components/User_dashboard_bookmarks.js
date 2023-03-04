import { useEffect, useState } from "react";
import { API } from "./Constant";
import axios from "axios";

import Sidebar_left_new from "./Sidebar_left_new";
import Sidebar_mobile_left from "./Sidebar_mobile_left";
import Sidebar_right from "./Sidebar_right";
// import User_dashboard_mid from "./User_dashboard_mid";

import share from "./images/share.png";
import pocket from "./images/pocket.png";

function User_dashboard_bookmarks(){
  const [news, setNews] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [user, setUser] = useState([]);

  const getNews = () => {
    axios.get(`${API}/news`).then((response) => {
    console.log(response.data);
    setNews(response.data);
    });
  };

  const removeBookmark = (_id) => {
    axios.delete(`${API}/bookmarks/${_id}`)
    .then((response) => {
      console.log(response);
      getNews();
      alert('Bookmark Removed');
    });};

    //code to get bookmarks from database
    const getBookmarks = () => {
      axios.get(`${API}/bookmarks`,{
        withCredentials:true,
      }).then((response) => {
        console.log(response.data);
        setBookmarks(response.data);
      })};

      //code to get user profile
      const getUser = () => {
        axios.get(`${API}/profile`).then((response) => {
          console.log(response.data);
          setUser(response.data);
        })};

      useEffect(() => {getNews();getBookmarks();getUser()},[]);

return(
    <>
        <div className="flex">
            <Sidebar_left_new/>
            <div className="bg-[#f4f9f8]">
              <div className="lg:flex flex-wrap w-full mt-4 shadow-md p-2 items-stretch ">
                {news.map((val, key) => {
                    for(var i=0;i<bookmarks.length;i++){
                        if(user._id == bookmarks[i].user_id)
                        {
                          return (
                            <>
                              <div className="p-2 lg:w-1/2 2xl:w-1/3">
                                
                                <div className="bg-white p-4 shadow-md min-h-full flex flex-col justify-between">
                                  <div className="sm:hidden w-full cursor-pointer">
                                    <img src={val.image} className="w-full" alt="" />
                                  </div>
                                  <div className="flex flex-col">
                                    <div className="pr-4 mt-4 sm:mt-0 order-2">
                                      <a href={val.read_more} className="text-[#072d4b] hover:text-[#0768b5] text-[17px] font-semibold cursor-pointer hover:underline">{val.title}</a>
                                      <p className="font-normal text-[14px] text-[#072d4b] my-2 max-h-[120px] overflow-hidden cursor-pointer">{val.articles}</p>
                                      <a href={val.read_more} className="text-[#0768b5] text-[15px] font-semibold  cursor-pointer">Read More</a>
                                    </div>
                                    <div className="w-full hidden sm:block order-1">
                                      <div className="w-full float-right h-[240px] bg-cover bg-center cursor-pointer" style={{ backgroundImage: `url(${val.image})` }}>
                                        {/* <img src={val.image} className="w-full" alt="" /> */}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="sm:flex justify-between items-end my-2">
                                    <div className="items-center text-[#072d4b] font-medium">
                                      <div className="text-[12px] my-1">{val.publisher}</div>
                                      <div className="text-[12px] my-1">{val.category}</div>
                                      <div className="text-[12px] my-1">{val.updated_at}</div>
                                    </div>
                                    <div className="mt-6 sm:mt-0 ">
                                      <div className="flex items-center cursor-pointer sm:justify-end my-1">
                                        <img src={share} alt="" />
                                        <p className="text-[#0768b5] text-[13px] font-medium mx-2">Share</p>
                                      </div>
                                      <div className="flex items-center cursor-pointer sm:justify-end  my-1" onClick={()=>{removeBookmark(val._id)}}>
                                        <img src={pocket} alt="" />
                                        <p className="text-[#0768b5] text-[13px] font-medium mx-2">Remove Bookmark</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                          );
                        }
                }})}
              </div>
            </div>
            <Sidebar_right/>
        </div>
        <Sidebar_mobile_left/>
    </>
)
}
export default User_dashboard_bookmarks;