import { useEffect, useState } from "react";
import "./App.css";
import Advertisement from "./components/common/Advertisement";
import CarouselComp from "./components/common/CarouselComp";
import Flexbox from "./components/common/Flexbox";
import HorizontalScroll from "./components/common/HorizontalScroll";
import Header from "./components/Header";
import BottomNav from "./components/common/BottomNav";

import {
  AD_HOME_HERO_WIDGET_MWEB,
  ADS_HOME_CAROUSEL_MWEB,
  ADS_TECH_BANNER_MWEB,
  ADS_TECH_BANNER_WEB,
  BOTTOM_NAVIGATION_TABS,
  DISCOVER_ONLINE_COLLECTIONS_MOBILE,
  DISCOVER_ONLINE_COLLECTIONS_WEB,
  ICD_TOP_NAV_MENU_MOBILE_VARIANT,
  LayoutScreenWidgets,
  STREAM_LEAD_IN_WEB,
  TOP_KIDS,
  TOP_MOVIES_MOBILE,
  TOP_MOVIES_WEB,
  TVOD_SHOWCASE,
  ULTIMATE_EVENTS_LIST_COLLECTIONS_IOS_MWEB_VARIANT,
} from "./utils/Content";
import HeaderSubWeb from "./components/HeaderSubWeb";
import HeaderWeb from "./components/HeaderWeb";

function App() {
  const [mobileMode, setMobileMode] = useState(window.innerWidth < 480);

  // Redirect the user automatically to /home if they are not on the home page
  useEffect(() => {
    const currentUrl = window.location.href;
    if (!currentUrl.includes("/home")) {
      window.location.href = "/home";
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setMobileMode(window.innerWidth < 480);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {mobileMode ? (
        <>
          <Header />
          <HorizontalScroll data={ICD_TOP_NAV_MENU_MOBILE_VARIANT} />
          <Advertisement ads={ADS_HOME_CAROUSEL_MWEB} />

          <div className="w-full h-full flex flex-col items-center justify-center">
            <Advertisement ads={ADS_TECH_BANNER_MWEB} />

            <div className="w-full px-[16px]">
              <HorizontalScroll data={TOP_MOVIES_MOBILE} />
            </div>

            <Advertisement ads={AD_HOME_HERO_WIDGET_MWEB} />

            {LayoutScreenWidgets.map((widget) => {
              if (widget.type === "flexbox") {
                return (
                  <Flexbox
                    key={widget.id}
                    title={widget.title}
                    subtitle={widget.subtitle}
                    cards={widget.cards}
                    itemsPerRow={widget.itemsPerRow}
                    styleId={widget.styleId}
                  />
                );
              }
              return null;
            })}
            <div className="w-full px-[16px]">
              <HorizontalScroll data={TOP_KIDS} />
              <HorizontalScroll data={DISCOVER_ONLINE_COLLECTIONS_MOBILE} />
              <HorizontalScroll
                data={ULTIMATE_EVENTS_LIST_COLLECTIONS_IOS_MWEB_VARIANT}
              />
            </div>

            <CarouselComp data={TVOD_SHOWCASE} />
          </div>
          <BottomNav navTabs={BOTTOM_NAVIGATION_TABS} />
        </>
      ) : (
        <>
          <HeaderWeb />
          <HeaderSubWeb />
          <Advertisement ads={ADS_TECH_BANNER_WEB} />
          <div className="w-full h-full flex flex-col items-center justify-center pt-5 px-[90px]">
            <HorizontalScroll data={TOP_MOVIES_WEB} />
            <Flexbox
              cards={STREAM_LEAD_IN_WEB.cards}
              itemsPerRow={STREAM_LEAD_IN_WEB.itemsPerRow}
              styleId={STREAM_LEAD_IN_WEB.styleId}
            />
            <HorizontalScroll data={DISCOVER_ONLINE_COLLECTIONS_WEB} />
          </div>
        </>
      )}
    </>
  );
}

export default App;
