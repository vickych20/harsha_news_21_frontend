import { useEffect, useState } from "react";
import { API } from "./Constant";
import axios from "axios";

import Sidebar_left_new from "./Sidebar_left_new";
import Sidebar_mobile_left from "./Sidebar_mobile_left";
import Sidebar_right from "./Sidebar_right";
import User_dashboard_mid from "./User_dashboard_mid";

function User_dashboard_watchlists(){
    const [ user, setUser ] = useState([]);

    const getUser = () => {

        axios.get(`${API}/profile`).then((response) => {
            console.log(response.data);
            setUser(response.data);
            });
    }

    useEffect(() => {getUser();}, []);
    
    return(
        <>
            <div className="flex">
                <Sidebar_left_new/>
                <div className="grow shrink">
                    <div>{user.full_name}</div>
                    <div>{user.dp}</div>
                    <div>{user.title}</div>
                    <div>{user.about}</div>
                    <div>{user.phone}</div>
                    <div>{user.email}</div>
                    <div>{user.username}</div>
                    <div>{user.country}</div>
                    <div>{user.language}</div>
                </div>
                <Sidebar_right/>
            </div>
            <Sidebar_mobile_left/>
        </>
)
}
export default User_dashboard_watchlists;