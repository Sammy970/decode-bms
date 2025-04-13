import React from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";
import { styles } from "@/utils/stylesV2.json";

interface AdsCardsProps {
  adtype: string;
  reqid: string;
  adunitcode: string;
  size: string;
  assets: {
    adm: string;
    iurl: string;
    position: number;
  };
  ext: {
    thirdpartyclicktracker: string;
    thirdpartyimpressiontracker: string;
  };
}

interface AdvertisementProps {
  ads: {
    id: string;
    adtechId: string;
    type: string;
    isSticky: boolean;
    styleId: string;
    matchMaxCardHeight: boolean;
    cards: AdsCardsProps[];
  };
}

const getAdsContainerStyle = (styleId: string): React.CSSProperties => {
  const style = styles.find((style) => style.id === styleId);

  if (!style) {
    return {};
  }

  const containerStyle = {
    // padding: String(style.padding)
    //   .split(",")
    //   .map((val) => `${val}px`)
    //   .join(" "),
    padding: "10px",
  };

  console.log(containerStyle, style);

  return containerStyle;
};

const Advertisement: React.FC<AdvertisementProps> = ({ ads }) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  // Extract image URLs from all ads
  const imageUrls = ads.cards
    .map((ad) => {
      const match = ad.assets.adm.match(/src="([^"]+)"/);
      return match ? match[1] : null;
    })
    .filter(Boolean) as string[];

  // No need for carousel if only one image
  if (imageUrls.length <= 1) {
    return imageUrls.length === 1 ? (
      <div className="w-full" style={getAdsContainerStyle(ads.styleId)}>
        <img src={imageUrls[0]} alt="Advertisement" className="w-full h-auto" />
      </div>
    ) : null;
  }

  return (
    <div style={getAdsContainerStyle(ads.styleId)}>
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          dragFree: false,
        }}
        className="relative"
        plugins={[
          Autoplay({
            delay: 3000, // Adjust delay time (in milliseconds) between slides
            stopOnInteraction: false, // Stop autoplay when user interacts with carousel
            stopOnMouseEnter: false, // Optional: stop on mouse enter
            playOnInit: true, // Start autoplay immediately
            rootNode: (emblaRoot) => emblaRoot,
          }),
        ]}
        onSelect={(index) => console.log(`Selected index: ${index}`)}
      >
        <CarouselContent>
          {imageUrls.map((url, index) => (
            <CarouselItem key={index} className="w-full h-auto">
              <img
                src={url}
                alt={`Advertisement ${index + 1}`}
                className={cn(
                  "w-full h-auto",
                  String(ads?.cards[index].adunitcode).trim().includes("_mweb")
                    ? "rounded-[0px]"
                    : "rounded-[10px]"
                )}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 rounded-r-md rounded-l-none top-1/2 -translate-y-1/2 z-10 w-[42px] h-[50px] bg-black/50 hover:bg-black/50 active:bg-black/50 border-none p-1" />
        <CarouselNext className="absolute right-0 rounded-l-md rounded-r-none top-1/2 -translate-y-1/2 z-10 w-[42px] h-[50px] bg-black/50 hover:bg-black/50 active:bg-black/50 border-none p-1" />

        <div className="flex z-40 justify-center gap-2 absolute bottom-4 left-0 right-0">
          {imageUrls.map((_, index) => (
            <button
              key={index}
              className={`w-[7px] h-[7px] rounded-full transition-colors ${
                current === index + 1 ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
};

export default Advertisement;
