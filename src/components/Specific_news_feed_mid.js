import React from 'react';
import search from "./images/search.png";
import arrow_right from "./images/arrow-right.png";
import samsung_z_fold_3 from "./images/samsung_z_fold3.png";
import caret_down_bg from "./images/caret_down_bg.png";
import thumbs_up from "./images/thumbs-up.png";
import thumbs_down from "./images/thumbs-down.png";
import trash from "./images/trash.png";
import undraw_Newsletter_re_wrob1 from "./images/undraw_Newsletter_re_wrob 1.png";
import ind_vs_eng from "./images/ind_vs_eng.png";
import share from "./images/share.png";
import pocket from "./images/pocket.png";
import android_smartphone from "./images/android_smartphone.png";
import hardik_pandya from "./images/hardik_pandya.png";

export default function Specific_news_feed_mid(){
    
    return(
        <div className='p-4 bg-[#f4f9f8]'>
           <div className="flex items-center justify-between">
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
            <div className="flex items-center bg-[#ecf5f8] px-3 py-2 w-2/3 md:mr-5">
                <input
                type="text"
                placeholder="Search for news.."
                className="outline-none bg-[#ecf5f8] w-full rounded-sm placeholder:text-[14px]"
                />
                <img src={search} alt="" />
            </div>
            <div className="w-1/3 md:flex hidden justify-between items-center border px-3 py-[6px] bg-[#f4f9f8] rounded-sm">
                <p className="font-medium text-[14px] text-[#072d4b]">
                    Latest news on{" "}
                    <b className="text-[14px] font-semibold text-[#2f9ff8]">Covid 19</b>
                </p>
                <img src={arrow_right} alt="" className="w-[16px]" />
            </div>
           </div>
           <div className="">
            <div className="my-4">
                <p className="text-[#072d4b] font-bold text-[25px]">Leak: Samsung to announce the Z Fold 3 and Galaxy Watch 4 in August</p>
                <div className="flex mt-4">
                    <p className="text-[13px] text-[#2f9ff8] bg-[#cde7f8] py-[2px] px-2">Tech</p>
                    <p className="text-[13px] text-[#2f9ff8] bg-[#cde7f8] py-[2px] px-2 mx-2">Mobile</p>
                </div>
                <p className="text-[#1F496A] text-[16px] mt-4">Samsung's next Unpacked event reportedly lands August 11</p>
            </div>
            <img src={samsung_z_fold_3} alt="" className="w-full" />
            <p className="text-[#7d92a1] text-[16px] mt-4">Samsung had a pretty quiet Mobile World Congress   event, but it did tell us we’d learn more about its upcoming Google-approved smartwatch at its next
            Unpacked event. Unfortunately, the company didn’t tell us when exactly that would be, but a new report from Korean publication DigitalDaily News (via 9to5Google) claims the next Unpacked will take place on August 11, at 10 AM ET.</p>
            <p className="text-[#7d92a1] text-[16px] mt-4">According to the report, Samsung will be launching five devices at the event:</p>
            <ul className="my-10 font-normal">
                <li className="flex items-center my-2">
                    <div className="w-[15px] h-[15px] bg-[#2f9ff8] mr-5" />
                    <p className="text-[#7d92a1] text-[18px]">Galaxy Z Fold 3</p>
                </li>
                <li className="flex items-center my-2">
                    <div className="w-[15px] h-[15px] bg-[#2f9ff8] mr-5" />
                    <p className="text-[#7d92a1] text-[18px]">Galaxy Z Flip 3</p>
                </li>
                <li className="flex items-center my-2">
                    <div className="w-[15px] h-[15px] bg-[#2f9ff8] mr-5" />
                    <p className="text-[#7d92a1] text-[18px]">Galaxy Watch 4</p>
                </li>
                <li className="flex items-center my-2">
                    <div className="w-[15px] h-[15px] bg-[#2f9ff8] mr-5" />
                    <p className="text-[#7d92a1] text-[18px]">Galaxy Watch 4 Active</p>
                </li>
                <li className="flex items-center my-2">
                    <div className="w-[15px] h-[15px] bg-[#2f9ff8] mr-5" />
                    <p className="text-[#7d92a1] text-[18px]">Galaxy Buds 2</p>
                </li>
            </ul>
            <p className="text-[#7d92a1] text-[16px] mt-4">Notably, the new Galaxy Watches will be Samsung’s first to not use Tizen OS. Google collaborated with Samsung to revamp Wear OS from the ground up, making it smoother and more efficient.</p>

            <p className="text-[#7d92a1] text-[16px] mt-4">Hopefully, the devices are able to maintain the long battery life Samsung’s smartwatches have been known for, while having much greater compatibility with smartwatch apps via Wear OS. That said, the watch will use a custom One UI Watch skin — because it wouldn’t be Samsung if it didn’t put its own twist on the software.</p>

            <p className="text-[#7d92a1] text-[16px] mt-4">As for the Z Fold 3, it’s expected to be a refinement of the original Fold’s concept without major changes to the form factor. The biggest change aside from the expected spec bump is that the Z Fold 3 will support the S-Pen.</p>

            <p className="text-[#7d92a1] text-[16px] mt-4">The event will reportedly be broadcast via YouTube, as per usual, and there is no indication the company plans to hold a concurrent physical event. With the rumored date a little over a month away, I’d expect an official announcement from Samsung within the next week or two.</p>
            
            <div className="my-12 text-center">
                <p className="text-[#7d92a1] text-[12px]">Published July 5, 2021 - 8:16 pm IST</p>
                <p className="text-[15px] font-medium text-[#072d4b]">by John Abraham</p>
                <a href="" className="underline text-[#2f9ff8] font-medium text-[12px]">Back to Top</a>
            </div>
            <div className="">
                <p className="text-[#072d4b] text-[20px] font-semibold">Add your comment</p>
                <textarea
                name=""
                id=""
                cols={30}
                rows={3}
                className="bg-[#ECF5F8] p-4 w-full rounded-md"
                placeholder="Enter your comment here.."
                defaultValue={""}
                />
                <button className="px-8 py-[6px] bg-[#2f9ff8] text-white mt-3 rounded-sm">Post Comment</button>
            </div>
            <div className="flex items-center my-4">
                <p className="text-[#2f9ff8] underline mr-2">View All Comment (4)</p>
                <img src={caret_down_bg} alt="" />
            </div>
            <div className="my-10">
                <div>
                    <div className="flex justify-between">
                        <p className="text-[#2f9ff8] underline mr-2">Rakshan (You)</p>
                        <div className="flex">
                            <img src={thumbs_up} alt="" className="w-[25px] mr-2" />
                            <img src={thumbs_down} alt="" className="w-[25px]" />
                        </div>
                    </div>
                    <p className="text-[#7d92a1] text-[16px] mt-4">I’ve been a great fan of Samsung products since 2010. Can’t wait for this one. 🔥🔥🔥</p>
                    <div className="flex justify-between w-full items-center">
                        <p className="text-[#7d92a1] text-[12px] mt-2">Posted July 5, 2021 - 6:22 am</p>
                        <div className="flex items-center">
                            <img src={trash} alt="" className="w-[20px]" />
                            <p className="text-[13px] text-[#FF8C8C] ml-2 underline">Delete Comment</p>
                        </div>
                    </div>
                    <p className="text-[#2f9ff8]  mr-2 text-[14px]">Reply</p>
                </div>
                <div className="pl-8 border-l-[#a17025] border-l-[3px] my-8">
                    <div className="flex justify-between">
                        <p className="text-[#2f9ff8] underline mr-2">Sharma KL</p>
                        <div className="flex">
                            <img src={thumbs_up} alt="" className="w-[25px] mr-2" />
                            <img src={thumbs_down} alt="" className="w-[25px]" />
                        </div>
                    </div>
                    <p className="text-[#7d92a1] text-[16px] mt-4">This Samsung Fold packs plenty of power into its small stature and sets the stage for better 5G phone performance in the future.
                    </p>
                    <div className="flex justify-between w-full items-center">
                        <p className="text-[#7d92a1] text-[12px] mt-2">Posted July 5, 2021 - 6:22 am</p>
                    </div>
                    <p className="text-[#2f9ff8]  mr-2 text-[14px]">Reply</p>
                </div>
                <div>
                    <div className="flex justify-between">
                        <p className="text-[#2f9ff8] underline mr-2">Yokesh Mat</p>
                        <div className="flex">
                            <img src={thumbs_up} alt="" className="w-[25px] mr-2" />
                            <img src={thumbs_down} alt="" className="w-[25px]" />
                        </div>
                    </div>
                    <p className="text-[#7d92a1] text-[16px] mt-4">Thinking of buying the Z fold 2. Is it any good? or should I wait for fold 3?</p>
                    <div className="flex justify-between w-full items-center">
                        <p className="text-[#7d92a1] text-[12px] mt-2">Posted July 5, 2021 - 6:22 am</p>
                    </div>
                    <p className="text-[#2f9ff8]  mr-2 text-[14px]">Reply</p>
                </div>
                <div className="pl-8 border-l-[#a17025] border-l-[3px] my-8">
                    <div className="flex justify-between">
                        <p className="text-[#2f9ff8] underline mr-2">Sharath</p>
                        <div className="flex">
                            <img src={thumbs_up} alt="" className="w-[25px] mr-2" />
                            <img src={thumbs_down} alt="" className="w-[25px]" />
                        </div>
                    </div>
                    <p className="text-[#7d92a1] text-[16px] mt-4">The Samsung Galaxy Z Fold 2 fixes many of the flaws of the original to deliver a foldable big-screen experience that really works, for the first folding phone we recommend.</p>
                    <div className="flex justify-between w-full items-center">
                        <p className="text-[#7d92a1] text-[12px] mt-2">Posted July 5, 2021 - 6:22 am</p>
                    </div>
                    <p className="text-[#2f9ff8]  mr-2 text-[14px]">Reply</p>
                </div>
            </div>
            <div className="flex items-center justify-between bg-[#FFE8C5] p-4 rounded-md">
                <div>
                    <p className="text-[#072d4b] font-semibold text-[15px] mb-4">Subscribe to our newsletter</p>
                    <div className="lg:flex">
                        <input type="text" className="bg-[#FFF5E5] px-4 py-2" placeholder="Enter Email" />
                        <button className="bg-[#2f9ff8] text-[white] py-[6px] px-5 lg:ml-5 my-2">Subscribe</button>
                    </div>
                </div>
                <div>
                    <img src={undraw_Newsletter_re_wrob1} alt="" />
                </div>
            </div>
            <p className="text-[#072d4b] text-[17px] font-semibold my-4">More News for you</p>
            <div className="lg:flex w-full mt-4 shadow-md">
                <div className="lg:mr-2 bg-white p-4 lg:w-1/2">
                    <div className="sm:flex justify-between">
                        <div className="sm:hidden w-full">
                            <img src={ind_vs_eng} className="w-full" alt="" />
                        </div>
                        <div className="pr-4 mt-4 sm:mt-0">
                            <h1 className="text-[#072d4b] text-[17px] font-semibold">INDvENG Tests to be played in front of crowd</h1>
                            <p className="font-normal text-[14px] text-[#072d4b] my-2">The 5-Test series between India &amp; England is set to be played in front of packed..</p>
                        </div>
                        <div className="min-w-[120px] hidden sm:block">
                            <img src={ind_vs_eng} className="w-full" alt="" />
                        </div>
                    </div>
                    <div className="sm:file:marker:flex justify-between items-center my-2">
                        <div className="flex items-center text-[#072d4b] font-medium">
                            <div className="text-[12px]">Sport Biz</div>
                            <div className="text-[12px] mx-2">7 hours ago</div>
                        </div>
                        <div className="flex items-center sm:mt-0 mt-4">
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
                <div className="lg:ml-2 bg-white p-4 lg:w-1/2 mt-4 lg:mt-0">
                    <div className="sm:flex justify-between">
                        <div className="sm:hidden w-full">
                            <img src={android_smartphone} className="w-full" alt="" />
                        </div>
                        <div className="pr-4 mt-4 sm:mt-0">
                            <h1 className="text-[#072d4b] text-[17px] font-semibold">The 10 Coolest Wearable Tech Gadgets Of 2021 (So Far)</h1>
                            <p className="font-normal text-[14px] text-[#072d4b] my-2">Driven by demand for connected earbuds and a..</p>
                        </div>
                        <div className="min-w-[140px] hidden sm:block">
                            <img src={android_smartphone} className="w-full" alt="" />
                        </div>
                    </div>
                    <div className="sm:flex justify-between items-center my-2">
                        <div className="flex items-center text-[#072d4b] font-medium">
                            <div className="text-[12px]">The Mint</div>
                            <div className="text-[12px] mx-2">7 hours ago</div>
                        </div>
                        <div className="flex items-center mt-4 sm:mt-0">
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
                <div className="lg:mr-2 bg-white p-4 lg:w-1/2">
                    <div className="flex justify-between">
                        <div className="pr-4">
                            <h1 className="text-[#072d4b] text-[17px] font-semibold">Biden's cold response to Afghanistan's collapse to have far consequences</h1>
                            <p className="font-normal text-[14px] text-[#072d4b] my-2">When US President Joe Biden chose in April to withdraw all American forces from Afghanistan by September, we were among those who judged..</p>
                        </div>
                        <div className="">
                            <img src="" className="w-full" alt="" />
                        </div>
                    </div>
                    <div className="sm:flex justify-between items-center my-2">
                        <div className="flex items-center text-[#072d4b] font-medium">
                            <div className="text-[12px]">Radar 52</div>
                            <div className="text-[12px] mx-2">8 hours ago</div>
                        </div>
                        <div className="flex items-center mt-4 sm:mt-0">
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
                <div className="lg:ml-2 bg-white p-4 lg:w-1/2 mt-4 lg:mt-0">
                    <div className="sm:flex justify-between">
                        <div className="sm:hidden w-full">
                            <img src={hardik_pandya} className="w-full" alt="" />
                        </div>
                        <div className="pr-4 mt-4 sm:mt-0">
                            <h1 className="text-[#072d4b] text-[17px] font-semibold">Hardik Pandya 'is bowling and it is a very good sign' - Suryakumar</h1>
                            <p className="font-normal text-[14px] text-[#072d4b] my-2">I think that the team management and Hardik..</p>
                        </div>
                        <div className="min-w-[140px] sm:block hidden">
                            <img src={hardik_pandya} className="w-full" alt="" />
                        </div>
                    </div>
                    <div className="sm:flex justify-between items-center my-2">
                        <div className="flex items-center text-[#072d4b] font-medium">
                            <div className="text-[12px]">Cric Mint</div>
                            <div className="text-[12px] mx-2">9 hours ago</div>
                        </div>
                        <div className="flex items-center mt-4 sm:mt-0">
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
            <hr />
            <div className="border-t h-[80px] text-[12px] font-semibold text-[#192123] flex justify-between items-center mt-2">
                <div>copyright 2022</div>
                <div className="flex items-center">
                    <a href="">Privacy Policy</a>&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="">Terms of Service</a>
                </div>
            </div>
           </div>
        </div>
    );
}

