import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

import Sidebar_right from "./Sidebar_right";
import Sidebar_left from "./Sidebar_left";
import Sidebar_mobile_left from "./Sidebar_mobile_left";
import { API } from "./Constant";


export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function Login_user() {
    const response = axios.post(`${API}/login`, {
        email: email,
        password: password
      },{
        withCredentials: true
      })
      .then(function (response) {
        console.log(response);
        window.location.href="user-dashboard";
      })
      .catch(function (error) {
        console.log(error);
        alert("Login Failed");
    });
  }
  return (
    <>
    <div className="flex">
      <Sidebar_left/>
      <div className="login w-full min-h-[100vh] p-6 bg-[#f4f9f8]">
        <div className="w-full min-h-[100vh] flex items-center justify-center">
          <div className="w-[400px] h-full bg-[#0768b5] rounded-md shadow-md  p-6">
            <h1 className="text-white font-semibold text-[30px]">Login</h1>
            <input
            type="email"
            placeholder="Email"
            className="w-[350px] h-[40px] border-[#0768b5] border rounded-sm  mt-4 px-2"
            onChange={(e) => setEmail(e.target.value)}
            name={email}
            />
            <input
            type="password"
            placeholder="Password"
            className="w-[350px] h-[40px] border-[#0768b5] border rounded-sm  mt-4 px-2"
            onChange={(e) => setPassword(e.target.value)}
            name={password}
            />
            <button type="submit" className="w-[350px] h-[40px] border-[#0768b5] border rounded-sm mt-4 px-2 bg-white text-[#0768b5] font-medium" onClick={()=>{Login_user()}} >Login</button>
          </div>
        </div>
      </div>
      <Sidebar_right/>
    </div>
    <Sidebar_mobile_left/>
    </>
  );
}
