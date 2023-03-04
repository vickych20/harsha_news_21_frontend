import React from "react";
import search from "./images/search.png";
import share from "./images/share.png";
import pocket from "./images/pocket.png";

import { useState, useEffect } from "react";
import axios from "axios";
import { API } from "./Constant";

function User_dashboard_feed_mid(){

    const [news, setNews] = useState([]);
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState("");

    // add bookmark
    const getNews = () => {
        axios.get(`${API}/news`).then((response) => {
          console.log(response.data);
          setNews(response.data);
        });
      };
      
    const getCategories = () => {
        axios.get(`${API}/categories`).then((response) => {
          console.log(response.data);
          setCategories(response.data);
        });
      };
      useEffect(() => {
        getNews();
        getCategories();
      }, []);

    const addBookmark = (_id) => {
        axios.post(`${API}/bookmarks`,{
          news_id: _id,
        },{
          withCredentials: true,
        }).then((response) => {
          console.log(response.data);
          console.log(_id);
          getNews();
          alert("Bookmark added");
        });
      };

      const removeBookmark = (_id) => {
        axios.delete(`${API}/bookmarks/${_id}`).then((response) => {getNews();});};    
      
    return(
        <div className="home_mid">
          <div className="bg-[#F4F9F8]">
            <div className="flex items-center h-[60px] px-4 w-full">
              <div className="flex items-center justify-between w-full">
                <div className="min-w-[30px] max-w-[30px] mx-2 menu_icon xl:hidden cursor-pointer" 
                onClick={()=>{
                  document.getElementsByClassName("sidebar_mobile_left")[0].style.left = "0px";
                  document.getElementsByClassName("sidebar_mobile_left")[0].style.transition = "0.5s";
                }}>
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
            <div className="w-full p-4">
              <div className="w-auto">
                <p className="font-bold text-[#072d4b] text-[20px]">Top stories for you</p>
                <div className="h-[150px] max-w-full overflow-y-scroll my-5">
                  <ul className="w-full flex flex-wrap justify-evenly">
                    {categories.map((val, key) => {
                      return (<>
                      <li className="m-1 px-4 py-1 rounded-full bg-white hover:bg-[#2f9ff8] hover:text-white text-[#072d4b] shadow-md  cursor-pointer w-[200px] text-center inline-block" onClick={()=>{setCategory(val.name)}}>{val.name}
                      </li>
                      </>);
                    })}
                  </ul>
                </div>
                <div className="lg:flex flex-wrap w-full mt-4 shadow-md p-2 items-stretch">
                {news.map((val, key) => {
                  if(val.category == category || category == "")
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
                                  <div className="flex items-center cursor-pointer sm:justify-end  my-1" onClick={()=>{addBookmark(val._id)}}>
                                    <img src={pocket} alt="" />
                                    <p className="text-[#0768b5] text-[13px] font-medium mx-2">Read Later</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })}
                </div>
                
                <div className="px-3 py-2 border m-auto w-[110px] font-semibold text-[15px] text-[#072d4b] my-10 text-center">Show More</div>
                <div className="border-t h-[80px] text-[12px] font-semibold text-[#192123] flex justify-between items-center">
                  <div>copyright 2022</div>
                  <div className="flex items-center">
                    <a href="">Privacy Policy</a>&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="">Terms of Service</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}
export default User_dashboard_feed_mid;
