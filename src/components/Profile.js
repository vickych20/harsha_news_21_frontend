import axios from "axios";
import { useEffect, useState } from "react";
import { API } from "./Constant";

export default function Profile() {
  const [profile, setProfile] = useState([]);
  const getProfile = () => {
    axios.get(`${API}/profile`).then((response) => {
      console.log(response.data);
      setProfile(response.data);
    });
  };
  useEffect(() => {
    getProfile();
  }, []);
  return (
    <div>
      <>
        <div className="text-left text-[#272727] text-[14px] h-[45px]">
          <div className="px-4 py-2 border text-[#008eff]">
            {profile.full_name}
          </div>
          <div className="px-4 py-2 border">{profile.email}</div>
          <div className="px-4 py-2 border">{profile.phone}</div>
          <div className="px-4 py-2 border">{profile.username}</div>
        </div>
      </>
    </div>
  );
}
