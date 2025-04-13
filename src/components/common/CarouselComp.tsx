import React from "react";
import Card from "./Card";
import { styles } from "@/utils/styles.json";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { TVOD_SHOWCASE } from "@/utils/Content";

const getCarouselContainerStyle = (data: any): React.CSSProperties => {
  const style = styles.find((s) => s.id === data.styleId);
  return {
    margin: style?.margin
      ? String(style.margin)
          .split(",")
          .map((val) => `${val}px`)
          .join(" ")
      : undefined,
    backgroundColor: style?.background?.color,
    padding: style?.padding
      ? String(style.padding)
          .split(",")
          .map((val) => `${val}px`)
          .join(" ")
      : undefined,
    width: "100%",
    position: "relative",
  };
};

const getHeaderContainerStyle = (data: any): React.CSSProperties => {
  const style = styles.find((s) => s.id === data.styleId);

  return {
    padding: style?.headerContainer?.padding
      ? String(style?.headerContainer?.padding)
          .split(",")
          .map((val) => `${val}px`)
          .join(" ")
      : undefined,
    margin: style?.headerContainer?.margin
      ? String(style?.headerContainer?.margin)
          .split(",")
          .map((val) => `${val}px`)
          .join(" ")
      : undefined,
    width: "100%",
  };
};

const getTextStyle = (styleId: string): React.CSSProperties => {
  const style = styles.find((s) => s.id === styleId);
  if (!style) return {};

  const fontSizeMap: { [key: string]: number } = {
    "subtitle-large": 18,
    "body-regular": 15,
    "body-small": 12,
    "extra-tiny-medium": 12,
    title: 24,
  };

  const fontWeightMap: { [key: string]: number } = {
    "subtitle-large": 500,
    "body-regular": 400,
    "body-small": 400,
    "extra-tiny-medium": 400,
    title: 700,
  };

  return {
    color: style.fontColor,
    textAlign: style.horizontalAlignment as
      | "left"
      | "center"
      | "right"
      | "justify"
      | undefined,
    fontSize:
      style.font && fontSizeMap[style.font] ? fontSizeMap[style.font] : 16,
    fontWeight:
      style.font && fontWeightMap[style.font] ? fontWeightMap[style.font] : 400,
    margin: style.lineMargin
      ?.split(",")
      .map((val: string) => `${val}px`)
      .join(" "),
  };
};

const CarouselComp = ({ data = TVOD_SHOWCASE }) => {
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

  return (
    <div style={getCarouselContainerStyle(data)}>
      {/* Header Section */}
      <div style={getHeaderContainerStyle(data)}>
        <div>
          <h2 style={getTextStyle(data.title?.styleId)}>
            {data.title?.components[0].text}
          </h2>
          <p style={getTextStyle(data.subtitle?.styleId)}>
            {data.subtitle?.components[0].text}
          </p>
        </div>
      </div>

      {/* Carousel Container */}
      {/* <div
        style={getCardsContainerStyle(data)}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        {canScrollLeft && (
          <button
            onClick={() => handleScroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 rounded-r-none rounded-l-md p-2 shadow-md"
            aria-label="Previous slide"
          >
            <ChevronLeft size={30} color="white" />
          </button>
        )}

        <div className="overflow-hidden">
          <motion.div
            ref={carouselRef}
            className="flex"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            style={{ x }}
            animate={controls}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            whileTap={{ cursor: "grabbing" }}
          >
            {data.cards.map((card) => (
              <div
                key={card.id}
                className="flex-shrink-0 px-2 w-full"
                style={{ minWidth: "100%" }}
              >
                <Card
                  ctaUrl={card.ctaUrl}
                  styleId={card.styleId}
                  imageUrl={card.image.url}
                  altText={card.image.altText}
                  text={card.text}
                  tags={card.tags}
                  metaImages={card.metaImages}
                  buttons={card.buttons}
                  type={card.type}
                />
              </div>
            ))}
          </motion.div>
        </div>

        {canScrollRight && (
          <button
            onClick={() => handleScroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 rounded-r-none rounded-l-md p-2 shadow-md"
            aria-label="Next slide"
          >
            <ChevronRight size={30} color="white" />
          </button>
        )}

        {data.showIndicators && (
          <div className="flex justify-center mt-6 gap-2">
            {data.cards.map((_, i) => (
              <button
                key={i}
                className={`h-2 rounded-full transition-all ${
                  activeIndex === i ? "w-6 bg-blue-500" : "w-2 bg-gray-300"
                }`}
                onClick={() => {
                  scrollToIndex(i);
                  setAutoScrollEnabled(false);
                  setTimeout(() => setAutoScrollEnabled(true), 5000);
                }}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={activeIndex === i ? "true" : "false"}
              />
            ))}
          </div>
        )}
      </div> */}

      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          duration: 30,
        }}
        className="p-3"
        plugins={[
          Autoplay({
            delay: 3000, // Adjust delay time (in milliseconds) between slides
            stopOnInteraction: false, // Stop autoplay when user interacts with carousel
            stopOnMouseEnter: false, // Optional: stop on mouse enter
            playOnInit: true, // Start autoplay immediately
            rootNode: (emblaRoot) => emblaRoot,
          }),
        ]}
      >
        <CarouselContent className="">
          {data.cards.map((card) => (
            <CarouselItem key={card.id}>
              <Card
                ctaUrl={card.ctaUrl}
                styleId={card.styleId}
                imageUrl={card.image.url}
                altText={card.image.altText}
                text={card.text}
                tags={card.tags}
                metaImages={card.metaImages}
                buttons={card.buttons}
                type={card.type}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 rounded-r-md rounded-l-none top-1/2 -translate-y-1/2 z-10 w-[42px] h-[50px] bg-black/50 hover:bg-black/50 active:bg-black/50 border-none p-1" />
        <CarouselNext className="absolute right-0 rounded-l-md rounded-r-none top-1/2 -translate-y-1/2 z-10 w-[42px] h-[50px] bg-black/50 hover:bg-black/50 active:bg-black/50 border-none p-1" />
      </Carousel>

      <div className="flex justify-center gap-1.5 absolute bottom-4 left-0 right-0">
        {data.cards.map((_, index) => (
          <button
            key={index}
            className={`w-[6px] h-[6px] rounded-full transition-colors ${
              current === index + 1 ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => api?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselComp;
