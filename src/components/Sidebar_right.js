import user from "./images/user.png";
import caret_down from "./images/caret-down.png";
import crosshair from "./images/crosshair.png";
import sun from "./images/sun.png";
import feather from "./images/feather.png";
import file_text from "./images/file-text.png";
import caret_left from "./images/caret-left.png";
import caret_right from "./images/caret-right.png";


function Sidebar_right() {
  return (
    <div className="sidebar_right bg-[#f4f9f8]">
      <div className="min-w-[280px] max-w-[280px]  h-[100vh] sticky top-0 overflow-y-scroll hidden md:block pr-4">
        <div className="w-full mb-[75px]">
          <div className="float-right flex justify-center items-center mx-4 h-[60px] cursor-pointer">
            <img src={user} alt="" className="w-[22px]" />
            <p className="mx-2">My Profile</p>
            <img src={caret_down} alt="" className="w-[10px]" />
          </div>
        </div>
        <div>
          <div className="bg-white p-4 rounded-sm shadow-md">
            <div className="flex items-center justify-between mb-2">
              <p className="mx-2 font-medium text-[15px] text-[#072d4b]">Coimbatore, Tamil Nadu</p>
              <img src={crosshair} alt="" />
            </div>
            <hr />
            <div className="flex justify-between my-3">
              <div>
                <p className="mx-2 font-medium text-[15px] text-[#072d4b]">Sunny</p>
                <p className="mx-2 font-bold text-[25px] text-[#072d4b]">31 C</p>
              </div>
              <img src={sun} alt="" />
            </div>
            <div className="flex">
              <p className="font-normal text-[13px] text-[#072d4b]">Celsius</p>
              <p className="font-normal text-[13px] text-[#a0b9cc] mx-2">Farenheit</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-sm mt-4 shadow-md">
            <div className="flex items-center">
              <img src={feather} alt="" />
              <p className="mx-2 font-medium text-[15px] text-[#072d4b]">Become a Story Writer</p>
            </div>
            <div className="flex mt-4">
              <p className="font-medium text-[12px] text-[#072d4b]">Contribute stories and start earning.</p>
              <div className="mx-2 font-medium text-[16px] text-[#0768b5] w-[210px] border-[#0768b5] border h-[40px] flex justify-center items-center rounded-sm">Know More</div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-sm mt-4 shadow-md">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <img src={file_text} alt="" />
                <p className="mx-2 font-medium text-[16px] text-
                [#072d4b]">Quick Bytes</p>
              </div>
              <div className="flex items-center">
                <img src={caret_left} alt="" />
                <img src={caret_right} alt="" className="ml-1" />
              </div>
            </div>
            <hr />
            <div className="my-4">
              <p className="font-normal text-[13px] text-[#8094A3]">The price of petrol remained unchanged on July 6 after reaching a new record high on the previous day, according to a price notification by state-owned fuel retailers. The diesel price remained stable for the second consecutive day.</p>
              <p className="font-normal text-[13px] text-[#8094A3] mt-4">The increase on July 5, 35th in two months, took the petrol price in Delhi closer to Rs 100 per litre-mark. The petrol price in the
            national capital soared to Rs 99.9 a litre and diesel was priced at Rs 89.4 per litre, according to Bharat Petroleum's price listing.</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-sm mt-4 shadow-md">
            <p className="mx-2 font-medium text-[16px] text-[#072d4b]">Subscribe to our newsletter</p>
            <input type="text" className="w-full py-[6px] px-3 border outline-none my-2 bg-[#f4f9f8] rounded-sm" placeholder="Enter Email" />
            <button className="text-center py-[6px] text-white bg-[#2f9ff8] w-full">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Sidebar_right;