import { motion, useAnimation, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { styles } from "@/utils/styles.json";
import Card from "./Card";
// import { ChevronLeft, ChevronRight } from "lucide-react";

interface HorizontalScrollProps {
  id: string;
  type: string;
  isSticky: boolean;
  styleId: string;
  visibleItems: number;
  itemsPerRow: number;
  horizontalSpacing: number;
  verticalSpacing: number;
  title?: {
    maxLines: number;
    styleId: string;
    components: Array<{ type: string; text: string }>;
  };
  subtitle?: {
    maxLines: number;
    styleId: string;
    components: Array<{ type: string; text: string }>;
  };
  cta?: {
    label: {
      maxLines: number;
      styleId: string;
      components: Array<{ type: string; text: string }>;
    };
    url: string;
  };
  cards: Array<{
    id: string;
    type: string;
    styleId: string;
    ctaUrl: string;
    text: Array<{
      maxLines: number;
      styleId: string;
      components: Array<{ type: string; text: string }>;
    }>;
    metaImages: Array<{
      styleId: string;
      image: { url: string; altText: string };
    }>;
    image: { url: string; altText: string };
    tags?: Array<{
      styleId: string;
      label: {
        maxLines: number;
        styleId: string;
        components: Array<{ type: string; text: string }>;
      };
    }>;
  }>;
}

const getStyle = (styleId: string, styles: any[]) => {
  return styles.find((style) => style.id === styleId);
};

const getTextStyle = (styleId: string, styles: any[]) => {
  const style = getStyle(styleId, styles);
  if (!style) return {};

  const fontSizeMap: { [key: string]: number } = {
    "subtitle-large": 18,
    "body-regular": 15,
  };

  const fontWeightMap: { [key: string]: number } = {
    "subtitle-large": 500,
    "body-regular": 400,
  };

  return {
    color: style.fontColor,
    textAlign: style.horizontalAlignment,
    fontSize: fontSizeMap[style.font] || 16,
    fontWeight: fontWeightMap[style.font] || 400,
    margin: style.lineMargin
      ?.split(",")
      .map((val: string) => `${val}px`)
      .join(" "),
  };
};

const getHorizontalScrollStyle = (
  data: HorizontalScrollProps,
  styles: any[]
): React.CSSProperties => {
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
  };
};

const HorizontalScroll = ({
  data,
}: {
  data: HorizontalScrollProps;
  styles?: any[];
}) => {
  const titleStyle = data?.title?.styleId
    ? getTextStyle(data.title.styleId, styles)
    : {};
  const subtitleStyle = data?.subtitle?.styleId
    ? getTextStyle(data.subtitle.styleId, styles)
    : {};
  const ctaStyle = data?.cta?.label?.styleId
    ? getTextStyle(data.cta.label.styleId, styles)
    : {};

  const { cards, itemsPerRow = 5 } = data;
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [_isDragging, setIsDragging] = useState(false);
  const controls = useAnimation();
  const x = useMotionValue(0);
  const [_canScrollLeft, setCanScrollLeft] = useState(false);
  const [_canScrollRight, setCanScrollRight] = useState(true);

  // Organize cards into rows based on itemsPerRow
  const rows = [];
  for (let i = 0; i < cards.length; i += itemsPerRow) {
    rows.push(cards.slice(i, i + itemsPerRow));
  }

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(
        carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
      );
    }
  }, [cards]);

  // Update scroll buttons visibility
  useEffect(() => {
    const updateScrollButtons = () => {
      const currentX = x.get();
      setCanScrollLeft(currentX < 0);
      setCanScrollRight(currentX > -width);
    };

    const unsubscribe = x.onChange(updateScrollButtons);
    return () => unsubscribe();
  }, [x, width]);

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  // const handleScroll = (direction: "left" | "right") => {
  //   const scrollAmount = carouselRef.current?.offsetWidth || 0;
  //   const currentX = x.get();
  //   const newX =
  //     direction === "left"
  //       ? Math.min(0, currentX + scrollAmount * 0.8)
  //       : Math.max(-width, currentX - scrollAmount * 0.8);

  //   controls.start({ x: newX });
  // };

  return (
    <div style={getHorizontalScrollStyle(data, styles)} className="w-full">
      {/* Header Section */}
      {data.title || data.subtitle ? (
        <div className="flex justify-between items-center px-5">
          <div>
            <h2 className="text-xl font-semibold" style={titleStyle}>
              {data.title?.components[0]?.text || ""}
            </h2>
            <p className="text-sm mt-1" style={subtitleStyle}>
              {data.subtitle?.components[0].text || ""}
            </p>
          </div>

          {data.cta && (
            <a
              href={data.cta.url}
              className="text-sm hover:underline"
              style={ctaStyle}
            >
              {data.cta.label.components[0].text}
            </a>
          )}
        </div>
      ) : null}

      {/* Custom Carousel with Framer Motion */}
      <div className="relative pt-2 px-1.5 w-full">
        {/* {canScrollLeft && (
          <button
            onClick={() => handleScroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-1 shadow-md"
            style={{ left: "10px" }}
          >
            <ChevronLeft size={24} />
          </button>
        )} */}

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
            {/* Display cards in a grid layout */}
            <div
              className="grid gap-y-4"
              style={{
                display: "grid",
                gridTemplateRows: `repeat(${rows.length}, auto)`,
                gridAutoFlow: "column",
                gridGap: `${data.verticalSpacing}px ${data.horizontalSpacing}px`,
              }}
            >
              {rows.map((row) =>
                row.map((card) => (
                  <div
                    key={card.id}
                    className={`w-[calc(${
                      100 / (data.visibleItems || 2.5)
                    }vw - ${data.horizontalSpacing * 2}px)]`}
                    style={{
                      minWidth: `${96 / (data.visibleItems || 2.5)}vw`,
                      maxWidth: "400px",
                    }}
                  >
                    <Card
                      ctaUrl={card.ctaUrl}
                      styleId={card.styleId}
                      imageUrl={card.image.url}
                      altText={card.image.altText}
                      text={card?.text}
                      tags={card?.tags}
                      metaImages={card?.metaImages}
                      type={card.type}
                    />
                  </div>
                ))
              )}
            </div>
          </motion.div>
        </div>

        {/* {canScrollRight && (
          <button
            onClick={() => handleScroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-1 shadow-md"
            style={{ right: "10px" }}
          >
            <ChevronRight size={24} />
          </button>
        )} */}
      </div>
    </div>
  );
};

export default HorizontalScroll;
