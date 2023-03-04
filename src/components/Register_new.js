import React, { useState,useEffect } from "react";
import svg_img from "./../assets/svg/graph.svg";
import login_img from "./../assets/img/login_img.jpg";

const Register_new = () => {
    const [backend, setBackendData] = useState([{}]);


    useEffect(() => {
        fetch("/").then(
            response=>response.json()
        ).then(
            data => {
                setBackendData(data)
            }
        )
    },[])

    // const history = unstable_HistoryRouter();

    // const [user, setUser] = useState({ name: "", email: "", phone: "", password: ""});
    //      let name, value;
   
    // const handleInputs = (e) => {
    //     console.log(e);
    //     name = e.target.value;

    //     setUser({ ...user, [name]: value });
        
    // }

    // const postData = async (e) => {
    //     e.praventDefault();
    //     const { name, email, phone, password } = user;
    //     const res = await fetch("/", {
          
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({
    //             name, email, phone, password
                
    //         })
            
    //     });
        // const data = await res.json();
        // if (data.status === 422 || !data) {
        //     window.alert("Invalid registration")
        //    console.log("Invalid registration")
        // }
        // else {
        //       window.alert("Successful registration");
        //     console.log("Successful registration");
            
        //     // history.push("/login")
            
        // }

        
    
 

  return (
    <div>
      <section>
        <div className="w-full min-h-[100vh] bg-[#F4F9F8] p-10  flex">
          <div className="w-full grow bg-[#F4F9F8] shadow-md border lg:flex">
            <div className="left-div lg:w-[40vw] h-full border-r-2 p-4 flex flex-col   justify-center items-center">
              <div className="">
                <h1 className="text-5xl text-center font-bold text-[#262A2D]">
                  {" "}
                  Welcome
                </h1>
              </div>
              <div className="w-full h-[400px]">
                <div
                  className=" w-full min-w-[400px] h-[400px]"
                  style={{
                    backgroundImage: `url(${login_img})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                  }}
                ></div>
              </div>
            </div>
            <div
              style={{
                backgroundImage: `url(${svg_img})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
              className="right_div w-full h-full p-4 flex justify-center items-center"
            >
              <div className="w-full ">
                <h1 className="text-5xl text-center font-bold text-[#262A2D]">
                  Create Account
                </h1>
                <div className="w-full flex justify-center mt-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className=" input input-bordered  input-info max-w-[600px] w-full h-[45px]"
                    // value={user.name}
                    // onChange={handleInputs}
                  />
                </div>
                <div className="w-full flex justify-center mt-4">
                  <input
                    type="text"
                    placeholder="Phone"
                    className=" input input-bordered  input-info max-w-[600px] w-full h-[45px]"
                    // value={user.phone}
                    // onChange={handleInputs}
                  />
                </div>
                <div className="w-full flex justify-center mt-4">
                  <input
                    type="text"
                    placeholder="Email"
                    className=" input input-bordered  input-info max-w-[600px] w-full h-[45x]"
                    // value={user.email}
                    // onChange={handleInputs}
                  />
                </div>
                <div className="w-full flex justify-center mt-4">
                  <input
                    type="text"
                    placeholder="Password"
                    className=" input input-bordered  input-info max-w-[600px] w-full h-[45px]"
                    // value={user.password}
                    // onChange={handleInputs}
                  />
                </div>
                <div className="w-full flex justify-center mt-4">
                  <button
                    className="w-[90px] h-[45px] bg-[#4B70E2] rounded-xl text-white font-bold tracking-wider px-4 py-2"
                    // onClick={postData}
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register_new;
