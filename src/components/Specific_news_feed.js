import Sidebar_mobile_left from "./Sidebar_mobile_left";
import Sidebar_left from "./Sidebar_left";
import Sidebar_right from "./Sidebar_right";
import Specific_news_feed_mid_new from "./Specific_news_feed_mid_new";
 

function Specific_news_feed() {
  return (
    <div>
      <div className="flex">
        <Sidebar_left />
        <Specific_news_feed_mid_new />
        <Sidebar_right />
      </div>
      <Sidebar_mobile_left />
    </div>
  );
}
export default Specific_news_feed;