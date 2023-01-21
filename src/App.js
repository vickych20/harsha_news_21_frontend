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
import axios from "axios";
axios.defaults.withCredentials = true;
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/"  exact element={<Home />} />
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
      </Routes>
    </div>
  );
}

export default App;
