import { useEffect, useState } from "react";
import "./App.css";
import Advertisement from "./components/common/Advertisement";
import CarouselComp from "./components/common/CarouselComp";
import Flexbox from "./components/common/Flexbox";
import HorizontalScroll from "./components/common/HorizontalScroll";
import Header from "./components/Header";
import {
  ADS_WEB,
  AdsV1,
  AdsV2,
  AdsV3,
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

function App() {
  const [mobileMode, setMobileMode] = useState(window.innerWidth < 480);

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
          <Advertisement ads={AdsV1} />

          <div className="w-full h-full flex flex-col items-center justify-center px-3">
            <Advertisement ads={AdsV2} />
            <HorizontalScroll data={TOP_MOVIES_MOBILE} />

            <Advertisement ads={AdsV3} />

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
            <HorizontalScroll data={TOP_KIDS} />
            <HorizontalScroll data={DISCOVER_ONLINE_COLLECTIONS_MOBILE} />
            <HorizontalScroll
              data={ULTIMATE_EVENTS_LIST_COLLECTIONS_IOS_MWEB_VARIANT}
            />
            <CarouselComp data={TVOD_SHOWCASE} />
          </div>
        </>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center p-10">
          <Advertisement ads={ADS_WEB} />
          <HorizontalScroll data={TOP_MOVIES_WEB} />
          <Flexbox
            cards={STREAM_LEAD_IN_WEB.cards}
            itemsPerRow={STREAM_LEAD_IN_WEB.itemsPerRow}
            styleId={STREAM_LEAD_IN_WEB.styleId}
          />
          <HorizontalScroll data={DISCOVER_ONLINE_COLLECTIONS_WEB} />
        </div>
      )}
    </>
  );
}

export default App;
