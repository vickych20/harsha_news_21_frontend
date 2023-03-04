import React from "react";
import search from "./images/search.png";
import samsung_galaxy_f22 from "./images/samsung_galaxy_f22.png";
import share from "./images/share.png";
import pocket from "./images/pocket.png";
import battlegrounds from "./images/battlegrounds.png";
import instagram from "./images/instagram.png";
import android_smartphone from "./images/android_smartphone.png";
import windows11 from "./images/windows11.png";
import iphone13 from "./images/iphone13.png";
import hardik_pandya from "./images/hardik_pandya.png";
import ind_vs_eng from "./images/ind_vs_eng.png";
import feather from "./images/feather.png";  
import arrow_left from "./images/arrow-left.png";
import arrow_right from "./images/arrow-right.png";

function Home_mid(){
    return(
        <div className="home_mid">
          <div className="">
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
            <div className="w-full p-4">
              <div className="w-auto">
                <p className="font-bold text-[#072d4b] text-[20px]">Top stories for you</p>
                <ul className="my-5">
                  <li className="m-1 px-4 py-1 rounded-full bg-[#2f9ff8] text-white text-[14px] shadow-md inline-block cursor-pointer">All</li>
                  <li className="m-1 px-4 py-1 rounded-full bg-white hover:bg-[#2f9ff8] hover:text-white  text-[#072d4b] shadow-md inline-block cursor-pointer">Android</li>
                  <li className="m-1 px-4 py-1 rounded-full bg-white hover:bg-[#2f9ff8] hover:text-white  text-[#072d4b] shadow-md inline-block cursor-pointer">Cricket</li>
                  <li className="m-1 px-4 py-1 rounded-full bg-white hover:bg-[#2f9ff8] hover:text-white  text-[#072d4b] shadow-md inline-block cursor-pointer">iPhone</li>
                  <li className="m-1 px-4 py-1 rounded-full bg-white hover:bg-[#2f9ff8] hover:text-white  text-[#072d4b] shadow-md inline-block cursor-pointer">Google</li>
                  <li className="m-1 px-4 py-1 rounded-full bg-white hover:bg-[#2f9ff8] hover:text-white  text-[#072d4b] shadow-md inline-block cursor-pointer">Nano Technology</li>
                  <li className="m-1 px-4 py-1 rounded-full bg-white hover:bg-[#2f9ff8] hover:text-white text-[#072d4b] shadow-md inline-block cursor-pointer">Mental Health</li>
                  <li className="mx-3 my-1 inline-block">...</li>
                </ul>
                <div className="bg-white w-full p-4 sm:flex mb-4 shadow-md">
                  <div className="sm:hidden w-full">
                    <img src={samsung_galaxy_f22} className="w-full" alt="" />
                  </div>
                  <div className="mt-4 sm:mt-0 pr-4">
                    <h1 className="text-[#072d4b] text-[17px] font-semibold">Samsung Galaxy F22 launched in India: Price, features, other details</h1>
                    <p className="font-normal text-[14px] text-[#072d4b] my-2">Samsung Galaxy F22 has been launched in India. The new smartphone has been priced in the mid-range segment. The new smartphone is powered by a MediaTek chipset and features a high refresh rate AMOLED  display.</p>
                    <div className="sm:flex justify-between items-center my-2">
                      <div className="flex items-center text-[#072d4b] font-medium">
                        <div className="text-[12px]">The Mint</div>
                        <div className="text-[12px] mx-2">15 mins ago</div>
                      </div>
                      <div className=" flex items-center mt-6 sm:mt-0">
                        <div className="flex items-center ">
                          <img src={share} alt="" />
                          <p className="text-[#0768b5] text-[13px] font-medium mx-2">Share</p>
                        </div>
                        <div className="ml-2 flex items-center">
                          <img src={pocket} alt="" />
                          <p className="text-[#0768b5] text-[13px] font-medium mx-2">Read Later</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="min-w-[180px] hidden sm:block">
                    <img src={samsung_galaxy_f22} className="w-full" alt="" />
                  </div>
                </div>
                <div className="lg:flex w-full mt-4 shadow-md">
                  <div className="mr-2 bg-white p-4 lg:w-1/2">
                    <div className="sm:hidden w-full">
                      <img src={battlegrounds} className="w-full" alt="" />
                    </div>
                    <div className="flex">
                      <div className="pr-4 mt-4 sm:mt-0">
                        <h1 className="text-[#072d4b] text-[17px] font-semibold">Battlegrounds Mobile India iOS release date</h1>
                        <p className="font-normal text-[14px] text-[#072d4b] my-2">The reason behind their disappointment is that iPhone users have been..</p>
                      </div>
                      <div className="w-full hidden sm:block">
                        <div className="min-w-[140px] max-w-[140px] float-right">
                          <img src={battlegrounds} className="w-full" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="sm:flex justify-between items-center my-2">
                      <div className="flex items-center text-[#072d4b] font-medium">
                        <div className="text-[12px]">Sport Biz</div>
                        <div className="text-[12px] mx-2">42 mins ago</div>
                      </div>
                      <div className="mt-6 sm:mt-0 flex items-center">
                        <div className="flex items-center ">
                          <img src={share} alt="" />
                          <p className="text-[#0768b5] text-[13px] font-medium mx-2">Share</p>
                        </div>
                        <div className="ml-2 flex items-center">
                          <img src={pocket} alt="" />
                          <p className="text-[#0768b5] text-[13px] font-medium mx-2">Read Later</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ml-2 bg-white p-4 lg:w-1/2 mt-4 lg:mt-0">
                    <div className="sm:hidden w-full">
                      <img src={instagram} className="w-full" alt="" />
                    </div>
                    <div className="flex">
                      <div className="mt-4 sm:mt-0 pr-4">
                        <h1 className="text-[#072d4b] text-[17px] font-semibold">
                          Instagram working on ‘Exclusive Stories’ for subscribers
                        </h1>
                        <p className="font-normal text-[14px] text-[#072d4b] my-2">Instagram could be jumping on the paid subscription..</p>
                      </div>
                      <div className="w-full hidden sm:block">
                        <div className="min-w-[140px] max-w-[140px] float-right">
                          <img src={instagram} className="w-full" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="sm:flex justify-between items-center my-2">
                      <div className="flex items-center text-[#072d4b] font-medium">
                        <div className="text-[12px]">The Mint</div>
                        <div className="text-[12px] mx-2">52 mins ago</div>
                      </div>
                      <div className="mt-6 sm:mt-0 flex items-center">
                        <div className="flex items-center ">
                          <img src={share} alt="" />
                          <p className="text-[#0768b5] text-[13px] font-medium mx-2">Share</p>
                        </div>
                        <div className="ml-2 flex items-center">
                          <img src={pocket} alt="" />
                          <p className="text-[#0768b5] text-[13px] font-medium mx-2">Read Later</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:flex w-full mt-4 shadow-md">
                  <div className="mr-2 bg-white p-4 lg:w-1/2">
                    <div className="flex">
                      <div className="pr-4">
                        <h1 className="text-[#072d4b] text-[17px] font-semibold">Petrol, diesel prices - July 6: Fuel prices unchanged after touching record high </h1>
                        <p className="font-normal text-[14px] text-[#072d4b] my-2">The price of petrol remained unchanged on July 6 after reaching a new record high on the previous day, according to a price notification by state-owned..</p>
                      </div>
                      <div className="">
                        <img src="" className="w-full" alt="" />
                      </div>
                    </div>
                    <div className="sm:flex justify-between items-center my-2">
                      <div className="flex items-center text-[#072d4b] font-medium">
                        <div className="text-[12px]">Radar 52</div>
                        <div className="text-[12px] mx-2">1 hr ago</div>
                      </div>
                      <div className="mt-6 sm:mt-0 flex items-center">
                        <div className="flex items-center">
                          <img src={share} alt="" />
                          <p className="text-[#0768b5] text-[13px] font-medium mx-2">Share</p>
                        </div>
                        <div className="ml-2 flex items-center">
                          <img src={pocket} alt="" />
                          <p className="text-[#0768b5] text-[13px] font-medium mx-2">Read Later</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ml-2 bg-white p-4 lg:w-1/2 mt-4 lg:mt-0">
                    <div className="sm:hidden w-full">
                      <img src={android_smartphone} className="w-full" alt="" />
                    </div>
                    <div className="flex">
                      <div className="mt-4 sm:mt-0 pr-4">
                        <h1 className="text-[#072d4b] text-[17px] font-semibold">Android smartphone users alert! Remove these 9 apps now</h1>
                        <p className="font-normal text-[14px] text-[#072d4b] my-2">Stealer trojans were spread as harmless software..</p>
                      </div>
                      <div className=" w-full hidden sm:block">
                        <div className="min-w-[140px] max-w-[140px] float-right">
                          <img src={android_smartphone} className="w-full" alt=""/>
                        </div>
                      </div>
                    </div>
                    <div className="sm:first-line:flex justify-between items-center my-2">
                      <div className="flex items-center text-[#072d4b] font-medium">
                        <div className="text-[12px]">Live Mint</div>
                        <div className="text-[12px] mx-2">2 hrs ago</div>
                      </div>
                      <div className="mt-6 sm:mt-0 flex items-center">
                        <div className="flex items-center ">
                          <img src={share} alt="" />
                          <p className="text-[#0768b5] text-[13px] font-medium mx-2">Share</p>
                        </div>
                        <div className="ml-2 flex items-center">
                          <img src={pocket} alt="" />
                          <p className="text-[#0768b5] text-[13px] font-medium mx-2">Read Later</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
        
        <div className="lg:flex w-full mt-4 shadow-md">
          <div className="mr-2 bg-white p-4 lg:w-1/2">
            <div className="sm:hidden w-full">
              <img src={windows11} className="w-full" alt="" />
            </div>
            <div className="flex">
              <div className="mt-4 sm:mt-0 pr-4">
                <h1 className="text-[#072d4b] text-[17px] font-semibold">
                  How to install Windows 11 on almost any unsupported PC
                </h1>
                <p className="font-normal text-[14px] text-[#072d4b] my-2">
                  Microsoft is allowing some unsupported computers..
                </p>
              </div>
              <div className="w-full hidden sm:block">
                <div className="min-w-[140px] max-w-[140px] float-right">
                  <img src={windows11} className="w-full" alt="" />
                </div>
              </div>
            </div>
            <div className="sm:flex justify-between items-center my-2">
              <div className="flex items-center text-[#072d4b] font-medium">
                <div className="text-[12px]">Tech Mint</div>
                <div className="text-[12px] mx-2">3 hrs ago</div>
              </div>
              <div className="mt-6 sm:mt-0 flex items-center">
                <div className="flex items-center ">
                  <img src={share} alt="" />
                  <p className="text-[#0768b5] text-[13px] font-medium mx-2">
                    Share
                  </p>
                </div>
                <div className="ml-2 flex items-center">
                  <img src={pocket} alt="" />
                  <p className="text-[#0768b5] text-[13px] font-medium mx-2">
                    Read Later
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-2 bg-white p-4 lg:w-1/2 mt-4 lg:mt-0">
            <div className="sm:hidden w-full">
              <img src={iphone13} className="w-full" alt="" />
            </div>
            <div className="flex">
              <div className="mt-4 sm:mt-0 pr-4">
                <h1 className="text-[#072d4b] text-[17px] font-semibold">This charging feature from Android phones may come to iPhone13</h1>
                <p className="font-normal text-[14px] text-[#072d4b] my-2">You will always find a set of people who will say that..</p>
              </div>
              <div className="w-full hidden sm:block">
                <div className="min-w-[140px] max-w-[140px] float-right">
                  <img src={iphone13} className="w-full" alt="" />
                </div>
              </div>
            </div>
            <div className="sm:flex justify-between items-center my-2">
              <div className="flex items-center text-[#072d4b] font-medium">
                <div className="text-[12px]">Live Mint</div>
                <div className="text-[12px] mx-2">5 hrs ago</div>
              </div>
              <div className="mt-6 sm:mt-0 flex items-center">
                <div className="flex items-center ">
                  <img src={share} alt="" />
                  <p className="text-[#0768b5] text-[13px] font-medium mx-2">
                    Share
                  </p>
                </div>
                <div className="ml-2 flex items-center">
                  <img src={pocket} alt="" />
                  <p className="text-[#0768b5] text-[13px] font-medium mx-2">
                    Read Later
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src={feather} alt="" />
              <p className="mx-2 font-bold text-[18px] text-[#072d4b]">
                Creators you should follow
              </p>
            </div>
            <div className="flex items-center">
              <img src={arrow_left} alt="" />
              <img src={arrow_right} alt="" className="ml-3" />
            </div>
          </div>
          <div className="mt-8 ">
            {/* <div class="wrapper">
                          <div class="carousel2 owl-carousel">
                              <div class="p-3 bg-white text-center">
                                  <div class="w-[80px] h-[80px] m-auto">
                                      <img src="images/shan_teylor.png" class="w-full h-full rounded-full">
                                  </div> 
                                  <p class="font-semibold text-[#072d4b] text-[15px] my-1">Shan Teylor</p>
                                  <p class="font-medium text-[#92a9b9] text-[13px]">Tech Mint</p>
                                  <button class="bg-[#2f9ff8] text-white w-full py-[5px] rounded-sm mt-2">Follow</button>
                              </div>
                              <div class="p-3 bg-white text-center">
                                  <div class="w-[80px] h-[80px] m-auto">
                                      <img src="images/mary_angela.png" class="w-full h-full rounded-full">
                                  </div> 
                                  <p class="font-semibold text-[#072d4b] text-[15px] my-1">Mary Angela</p>
                                  <p class="font-medium text-[#92a9b9] text-[13px]">Live Mint</p>
                                  <button class="bg-[#2f9ff8] text-white w-full py-[5px] rounded-sm mt-2">Follow</button>
                              </div>
                              <div class="p-3 bg-white text-center">
                                  <div class="w-[80px] h-[80px] m-auto">
                                      <img src="images/kyon_chon_chi.png" class="w-full h-full rounded-full">
                                  </div> 
                                  <p class="font-semibold text-[#072d4b] text-[15px] my-1">Kyon Cho Chi</p>
                                  <p class="font-medium text-[#92a9b9] text-[13px]">Bizz Daily</p>
                                  <button class="bg-[#2f9ff8] text-white w-full py-[5px] rounded-sm mt-2">Follow</button>
                              </div>
                              <div class="p-3 bg-white text-center">
                                  <div class="w-[80px] h-[80px] m-auto">
                                      <img src="images/paul_livingstone.png" class="w-full h-full rounded-full">
                                  </div> 
                                  <p class="font-semibold text-[#072d4b] text-[15px] my-1">Paul Livingstone</p>
                                  <p class="font-medium text-[#92a9b9] text-[13px]">Sport Biz</p>
                                  <button class="bg-[#2f9ff8] text-white w-full py-[5px] rounded-sm mt-2">Follow</button>
                              </div>
                              <div class="p-3 bg-white text-center">
                                  <div class="w-[80px] h-[80px] m-auto">
                                      <img src="images/sara_jay.png" class="w-full h-full rounded-full">
                                  </div> 
                                  <p class="font-semibold text-[#072d4b] text-[15px] my-1">Sara Jay</p>
                                  <p class="font-medium text-[#92a9b9] text-[13px]">Tech Mint</p>
                                  <button class="bg-[#2f9ff8] text-white w-full py-[5px] rounded-sm mt-2">Follow</button>
                              </div>
                          </div>
                      </div> */}
          </div>
        </div>
        <div className="lg:flex w-full mt-4 shadow-md">
          <div className="mr-2 bg-white p-4 lg:w-1/2">
            <div className="sm:hidden w-full">
              <img src={ind_vs_eng} className="w-full" alt="" />
            </div>
            <div className="flex">
              <div className="pr-4 mt-4 sm:mt-0">
                <h1 className="text-[#072d4b] text-[17px] font-semibold">
                  INDvENG Tests to be played in front of crowd
                </h1>
                <p className="font-normal text-[14px] text-[#072d4b] my-2">
                  The 5-Test series between India &amp; England is set to be
                  played in front of packed..
                </p>
              </div>
              <div className="w-full hidden sm:block">
                <div className="min-w-[140px] max-w-[140px] float-right">
                  <img src={ind_vs_eng} className="w-full" alt="" />
                </div>
              </div>
            </div>
            <div className="sm:flex justify-between items-center my-2">
              <div className="flex items-center text-[#072d4b] font-medium">
                <div className="text-[12px]">Sport Biz</div>
                <div className="text-[12px] mx-2">7 hours ago</div>
              </div>
              <div className="mt-6 sm:mt-0 flex items-center">
                <div className="flex items-center ">
                  <img src={share} alt="" />
                  <p className="text-[#0768b5] text-[13px] font-medium mx-2">
                    Share
                  </p>
                </div>
                <div className="ml-2 flex items-center">
                  <img src={pocket} alt="" />
                  <p className="text-[#0768b5] text-[13px] font-medium mx-2">
                    Read Later
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-2 bg-white p-4 lg:w-1/2 mt-4 lg:mt-0">
            <div className="sm:hidden w-full">
              <img
                src={android_smartphone}
                className="w-full"
                alt=""
              />
            </div>
            <div className="flex">
              <div className="pr-4 mt-4 sm:mt-0">
                <h1 className="text-[#072d4b] text-[17px] font-semibold">
                  The 10 Coolest Wearable Tech Gadgets Of 2021 (So Far)
                </h1>
                <p className="font-normal text-[14px] text-[#072d4b] my-2">
                  Driven by demand for connected earbuds and a..
                </p>
              </div>
              <div className="w-full hidden sm:block">
                <div className="min-w-[140px] max-w-[140px] float-right">
                  <img
                    src={android_smartphone}
                    className="w-full"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="sm:flex justify-between items-center my-2">
              <div className="flex items-center text-[#072d4b] font-medium">
                <div className="text-[12px]">The Mint</div>
                <div className="text-[12px] mx-2">7 hours ago</div>
              </div>
              <div className="mt-6 sm:mt-0 flex items-center">
                <div className="flex items-center ">
                  <img src={share} alt="" />
                  <p className="text-[#0768b5] text-[13px] font-medium mx-2">
                    Share
                  </p>
                </div>
                <div className="ml-2 flex items-center">
                  <img src={pocket} alt="" />
                  <p className="text-[#0768b5] text-[13px] font-medium mx-2">
                    Read Later
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex w-full mt-4 shadow-md">
          <div className="mr-2 bg-white p-4 lg:w-1/2">
            <div className="flex">
              <div className="pr-4">
                <h1 className="text-[#072d4b] text-[17px] font-semibold">
                  Biden's cold response to Afghanistan's collapse to have far
                  consequences
                </h1>
                <p className="font-normal text-[14px] text-[#072d4b] my-2">
                  When US President Joe Biden chose in April to withdraw all
                  American forces from Afghanistan by September, we were among
                  those who judged..
                </p>
              </div>
              <div className="">
                <img src="" className="w-full" alt="" />
              </div>
            </div>
            <div className=" sm:flex justify-between items-center my-2">
              <div className="flex items-center text-[#072d4b] font-medium">
                <div className="text-[12px]">Radar 52</div>
                <div className="text-[12px] mx-2">8 hours ago</div>
              </div>
              <div className="mt-6 sm:mt-0 flex items-center">
                <div className="flex items-center ">
                  <img src={share} alt="" />
                  <p className="text-[#0768b5] text-[13px] font-medium mx-2">
                    Share
                  </p>
                </div>
                <div className="ml-2 flex items-center">
                  <img src={pocket} alt="" />
                  <p className="text-[#0768b5] text-[13px] font-medium mx-2">Read Later</p>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-2 bg-white p-4 lg:w-1/2 mt-4 lg:mt-0">
            <div className="sm:flex">
              <div className="sm:hidden w-full">
                <img src={hardik_pandya} className="w-full" alt="" />
              </div>
              <div className="pr-4 mt-4 sm:mt-0">
                <h1 className="text-[#072d4b] text-[17px] font-semibold">
                  Hardik Pandya 'is bowling and it is a very good sign' -
                  Suryakumar
                </h1>
                <p className="font-normal text-[14px] text-[#072d4b] my-2">
                  I think that the team management and Hardik..
                </p>
              </div>
              <div className="w-full">
                <div className="min-w-[140px] max-w-[140px] float-right hidden sm:block">
                  <img
                    src={hardik_pandya}
                    className="w-full"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="sm:flex justify-between items-center my-2">
              <div className="flex items-center text-[#072d4b] font-medium">
                <div className="text-[12px]">Cric Mint</div>
                <div className="text-[12px] mx-2">9 hours ago</div>
              </div>
              <div className="mt-6 sm:mt-0 flex items-center">
                <div className="flex items-center ">
                  <img src={share} alt="" />
                  <p className="text-[#0768b5] text-[13px] font-medium mx-2">
                    Share
                  </p>
                </div>
                <div className="ml-2 flex items-center">
                  <img src={pocket} alt="" />
                  <p className="text-[#0768b5] text-[13px] font-medium mx-2">
                    Read Later
                  </p>
                </div>
              </div>
            </div>
          </div>
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
export default Home_mid;
