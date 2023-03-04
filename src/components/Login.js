import axios from "axios";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

import Sidebar_right from "./Sidebar_right";
import Sidebar_left from "./Sidebar_left";
import Sidebar_mobile_left from "./Sidebar_mobile_left";
import { API } from "./Constant";


export default function Register() {

  // work`s vicky
  // const email = useRef();
  // const password = useRef();
  
  const handleClick = (e) => {
    e.preventDefault();
    console.log(email.current.value)
  }










  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

   const handleEvent = async () => {
     console.log(email, password);
     const result = await fetch("http://localhost:4000/api/v1/login", {
       method: "post",
       body: JSON.stringify({ password, email }),

       headers: {
         "Content-Type": "application/json",
       },
     });

     console.log(await result.json());
   };


  return (
    <>
      <div className="flex">
        <Sidebar_left />
        <div className="login w-full min-h-[100vh] p-6 bg-[#f4f9f8]">
          <div className="w-full min-h-[100vh] flex items-center justify-center">
            <div
              className="w-[400px] h-full bg-[#0768b5] rounded-md shadow-md  p-6"
              onSubmit={handleClick}
            >
              <h1 className="text-white font-semibold text-[30px]">Login</h1>
              <input
                type="email"
                placeholder="Email"
                className="w-[350px] h-[40px] border-[#0768b5] border rounded-sm  mt-4 px-2 outline-none"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <input
                type="password"
                placeholder="Password"
                className="w-[350px] h-[40px] border-[#0768b5] border rounded-sm  mt-4 px-2 outline-none"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
               
              />
              <button
                type="submit"
                className="w-[350px] h-[40px] border-[#0768b5] border rounded-sm mt-4 px-2 bg-white text-[#0768b5] font-medium"
                // onClick={() => {
                //   Login_user();
                // }}
                onClick={handleEvent}
              >
                Login
              </button>
            </div>
          </div>
        </div>
        <Sidebar_right />
      </div>
      <Sidebar_mobile_left />
    </>
  );
}
