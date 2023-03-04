import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Sidebar_left from "./components/Sidebar_left";
import Sidebar_mobile_left from "./components/Sidebar_mobile_left";
import Sidebar_right from "./components/Sidebar_right";
import Home_mid from "./components/Home_mid";
import Home_mid_new from "./components/Home_mid_new";
import Specific_news_feed from "./components/Specific_news_feed";
import Specific_news_feed_mid from "./components/Specific_news_feed_mid";
import Specific_news_feed_mid_new from "./components/Specific_news_feed_mid_new";
import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./components/Profile";
import User_dashboard from "./components/User_dashboard";
import User_dashboard_profile from "./components/User_dashboard_profile";
import User_dashboard_bookmarks from "./components/User_dashboard_bookmarks";
import User_dashboard_feed from "./components/User_dashboard_feed";
import User_dashboard_feed_mid from "./components/User_dashboard_feed_mid";
import User_dashboard_myposts from "./components/User_dashboard_myposts";
import User_dashboard_notifications from "./components/User_dashboard_notifications";
import User_dashboard_watchlists from "./components/User_dashboard_watchlists";
import axios from "axios";
import Register_new from "./components/Register_new";
axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/news-feed" element={<Home />} />
        <Route path="/sidebar-left" element={<Sidebar_left />} />
        <Route path="/sidebar-mobile-left" element={<Sidebar_mobile_left />} />
        <Route path="/sidebar-right" element={<Sidebar_right />} />
        <Route path="/home-mid" element={<Home_mid />} />
        <Route path="/home-mid-new" element={<Home_mid_new />} />
        <Route path="/specific-news-feed" element={<Specific_news_feed />} />
        <Route path="/specific-news-feed-mid" element={<Specific_news_feed_mid />} />
        <Route path="/specific-news-feed-mid-new" element={<Specific_news_feed_mid_new />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/user-dashboard" element={<User_dashboard/>}/>
        <Route path="/user-dashboard-profile" element={<User_dashboard_profile/>}/>
        <Route path="/user-dashboard-bookmarks" element={<User_dashboard_bookmarks/>}/>
        <Route path="/user-dashboard-feed" element={<User_dashboard_feed/>}/>
        <Route path="/user-dashboard-feed-mid" element={<User_dashboard_feed_mid/>}/>
        <Route path="/user-dashboard-myposts" element={<User_dashboard_myposts/>}/>
        <Route path="/user-dashboard-notifications" element={<User_dashboard_notifications/>}/>
        <Route path="/user-dashboard-watchlists" element={<User_dashboard_watchlists/>}/>
        <Route path="/" element={<Register_new/>}/>
      </Routes>
    </div>
  );
}

export default App;
