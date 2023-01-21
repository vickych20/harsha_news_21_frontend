import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar_right from "./Sidebar_right";
import Sidebar_left from "./Sidebar_left";
import Sidebar_mobile_left from "./Sidebar_mobile_left";
import { API } from "./Constant";

export default function Register() {
  const [full_name, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function Register_user() {
    const response = axios
      .post(`${API}/register`, {
        full_name: full_name,
        username: username,
        phone: phone,
        email: email,
        password: password,
      })
      .then(function (response) {
        console.log(response);
        alert("Registeration Successful");
      })
      .catch(function (error) {
        console.log(error);
        alert("Registeration Failed");
      });
  }
  return (
    <>
    <div className="flex">
      <Sidebar_left/>
      <div className="register w-full min-h-[100vh] bg-[#f4f9f8] p-6">
        <div className="w-full min-h-[100vh] flex items-center justify-center">
          <div className="sm:w-[400px] h-full bg-[#0768b5] rounded-md shadow-md p-6">
            <h1 className="text-white font-semibold text-[30px]">Register</h1>
            <input
            type="text"
            placeholder="Full Name"
            className="w-full h-[40px] border-[#0768b5] border rounded-sm px-2"
            onChange={(e) => setFullName(e.target.value)}
            name={full_name}
            />
            <input
            type="number"
            placeholder="Phone Number"
            className="w-full h-[40px] border-[#0768b5] border rounded-sm  mt-4 px-2"
            onChange={(e) => setPhone(e.target.value)}
            name={phone}
            />
            <input
            type="email"
            placeholder="Email"
            className="w-full h-[40px] border-[#0768b5] border rounded-sm mt-4 px-2"
            onChange={(e) => setEmail(e.target.value)}
            name={email}
            />
            <input
            type="text"
            placeholder="Username"
            className="w-full h-[40px] border-[#0768b5] border rounded-sm mt-4 px-2"
            onChange={(e) => setUsername(e.target.value)}
            name={username}
            />
            <input
            type="password"
            placeholder="Password"
            className="w-full h-[40px] border-[#0768b5] border rounded-sm mt-4 px-2"
            onChange={(e) => setPassword(e.target.value)}
            name={password}
            />
            <button type="submit" className="w-full h-[40px] border-[#0768b5] border rounded-sm  mt-4 px-2 bg-white text-[#0768b5] font-medium" onClick={()=>{Register_user()}} >Register</button>
          </div>
        </div>
      </div>
      <Sidebar_right/>
    </div>
    <Sidebar_mobile_left/>
    </>
  );
}
