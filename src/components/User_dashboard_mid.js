import search from "./images/search.png";
import bookmark from "./images/bookmark.png";

import share from "./images/share.png";
import pocket from "./images/pocket.png";

import { API } from "./Constant";

import axios from "axios";

import { useState, useEffect } from "react";

function User_dashboard(){

  const [news, setNews] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);

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
      axios.get(`${API}/bookmarks`).then((response) => {
        console.log(response.data);
        setBookmarks(response.data);
      })};

      useEffect(() => {getNews();getBookmarks();}, []);
    return (
        <div className="bg-[#F4F9F8] w-full">
            <div className="flex items-center h-[60px] px-4 w-full">
              <div className="flex items-center justify-between w-full">
                <div className="min-w-[30px] max-w-[30px] mx-2 menu_icon xl:hidden cursor-pointer" 
                onClick={()=>{
                  document.getElementsByClassName("sidebar_mobile_left")[0].style.left = "0px";
                  document.getElementsByClassName("sidebar_mobile_left")[0].style.transition = "0.5s";
                }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" 
                  className="bi bi-list" viewBox="0 0 16 16" >
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                  </svg>
                </div>
                <div className="flex items-center bg-[#ecf5f8] px-3 py-2 w-full mr-5 hover:shadow-md">
                  <input type="text" placeholder="Search for news.." className="outline-none bg-[#ecf5f8] w-full rounded-sm placeholder:text-[14px]" />
                  <img src={search} alt="" />
                </div>
                <div className="sm:min-w-[250px] sm:max-w-[250px] min-w-[200px] max-w-[200px] hidden sm:flex justify-between items-center border px-3 py-[6px] bg-[#f4f9f8] rounded-sm hover:shadow-md">
                  <p className="font-medium text-[14px] text-[#072d4b]">
                    Latest news on{" "}
                    <b className="text-[14px] font-semibold text-[#2f9ff8]">Covid 19</b>
                  </p>
                  <img src="images/arrow-right.png" alt="" className="w-[16px]" />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-between">
                <div className="w-[150px] flex items-center justify-center border-[#072d4b] border-2 rounded-md  m-4 py-2 shadow-md bg-white cursor-pointer">
                    <div className="text-center">
                        <img src={bookmark} className="w-[50px] m-auto" />
                        <p className="text-[20px] font-medium text-[#072d4b] mt-3">Bookmarks</p>
                    </div>
                </div>
                {/* <div className="w-[150px] flex items-center justify-center border-[#072d4b] border-2 rounded-md  m-4 py-2 shadow-md bg-white cursor-pointer">
                    <div className="text-center">
                        <img src={bookmark} className="w-[50px] m-auto" />
                        <p className="text-[20px] font-medium text-[#072d4b] mt-3">Bookmarks</p>
                    </div>
                </div>
                <div className="w-[150px] flex items-center justify-center border-[#072d4b] border-2 rounded-md  m-4 py-2 shadow-md bg-white cursor-pointer">
                    <div className="text-center">
                        <img src={bookmark} className="w-[50px] m-auto" />
                        <p className="text-[20px] font-medium text-[#072d4b] mt-3">Bookmarks</p>
                    </div>
                </div>
                <div className="w-[150px] flex items-center justify-center border-[#072d4b] border-2 rounded-md m-4 py-2 shadow-md bg-white cursor-pointer">
                    <div className="text-center">
                        <img src={bookmark} className="w-[50px] m-auto" />
                        <p className="text-[20px] font-medium text-[#072d4b] mt-3">Bookmarks</p>
                    </div>
                </div>
                <div className="w-[150px] flex items-center justify-center border-[#072d4b] border-2 rounded-md m-4  py-2 shadow-md bg-white cursor-pointer">
                    <div className="text-center">
                        <img src={bookmark} className="w-[50px] m-auto" />
                        <p className="text-[20px] font-medium text-[#072d4b] mt-3">Bookmarks</p>
                    </div>
                </div> */}
            </div>
        </div>
    );
}
export default User_dashboard;