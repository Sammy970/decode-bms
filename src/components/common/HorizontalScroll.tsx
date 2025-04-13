import { motion, useAnimation, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { styles } from "@/utils/stylesV2.json";
import Card from "./Card";
import { fontSizeMap, fontWeightMap } from "@/utils/commonFunc";
import { ChevronLeft, ChevronRight } from "lucide-react";
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

  const styleContainer = {
    backgroundColor: style?.background?.color,
    // margin:
    //   style?.headerContainer?.margin === "0,0,0,0"
    //     ? String(style.margin)
    //         .split(",")
    //         .map((val) => `${val}px`)
    //         .join(" ")
    //     : String(style.headerContainer.margin)
    //         .split(",")
    //         .map((val) => `${val}px`)
    //         .join(" "),
    // padding:
    //   style?.headerContainer?.padding === "0,0,0,0"
    //     ? String(style.padding)
    //         .split(",")
    //         .map((val) => `${val}px`)
    //         .join(" ")
    //     : String(style.headerContainer.padding)
    //         .split(",")
    //         .map((val) => `${val}px`)
    //         .join(" "),
    margin: String(style.margin)
      .split(",")
      .map((val: string) => `${val}px`)
      .join(" "),
    padding: String(style.padding)
      .split(",")
      .map((val: string) => `${val}px`)
      .join(" "),
    width: "100%",
  };

  return styleContainer;
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
  const [scrollIndicatorEnabled, setScrollIndicatorEnabled] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Organize cards into rows based on itemsPerRow
  const rows = [];
  for (let i = 0; i < cards.length; i += itemsPerRow) {
    rows.push(cards.slice(i, i + itemsPerRow));
  }

  useEffect(() => {
    if (String(data?.id).trim().includes("_WEB")) {
      setScrollIndicatorEnabled(true);
    } else {
      setScrollIndicatorEnabled(false);
    }
  }, [data?.id]);

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

  const handleScroll = (direction: "left" | "right") => {
    const scrollAmount = carouselRef.current?.offsetWidth || 0;
    const currentX = x.get();
    const newX =
      direction === "left"
        ? Math.min(0, currentX + scrollAmount * 0.8)
        : Math.max(-width, currentX - scrollAmount * 0.8);

    controls.start({ x: newX });
  };

  return (
    <div style={getHorizontalScrollStyle(data, styles)}>
      {/* Header Section */}
      {data.title || data.subtitle ? (
        <div className="flex flex-col items-start">
          <div className="w-full justify-between items-center flex">
            <h2 className="text-xl font-semibold" style={titleStyle}>
              {data.title?.components[0]?.text || ""}
            </h2>

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
          <p className="text-sm" style={subtitleStyle}>
            {data.subtitle?.components[0].text || ""}
          </p>
        </div>
      ) : null}

      {/* Custom Carousel with Framer Motion */}
      <div className="relative pt-2 w-full">
        {scrollIndicatorEnabled && canScrollLeft && (
          <button
            onClick={() => handleScroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#999] rounded-full p-1 shadow-md"
            style={{ left: "-20px" }}
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
            {/* Display cards in a grid layout */}
            <div
              className="grid gap-y-4"
              style={{
                display: "grid",
                width: "100%",
                height: "100%",
                gridTemplateRows: `repeat(${rows.length}, auto)`,
                gridAutoFlow: "column",
                gridGap: `${data.verticalSpacing}px ${data.horizontalSpacing}px`,
              }}
            >
              {rows.map((row) =>
                row.map((card) => (
                  <div
                    key={card.id}
                    style={{
                      minWidth: `${
                        String(data.id).includes("_WEB")
                          ? `${100 / 7}vw`
                          : `${100 / (data.visibleItems || 1)}vw`
                      }`,
                      maxWidth: `${
                        String(data.id).includes("_WEB")
                          ? `${100 / itemsPerRow}vw`
                          : "400px"
                      }`,
                      maxHeight: "100%",
                    }}
                    // style={{
                    //   minWidth: `${96 / (data.visibleItems || 2.5)}vw`,
                    //   maxWidth: "400px",
                    // }}
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

        {scrollIndicatorEnabled && canScrollRight && (
          <button
            onClick={() => handleScroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#999] rounded-full p-1 shadow-md"
            style={{ right: "-20px" }}
          >
            <ChevronRight size={30} color="white" />
          </button>
        )}
      </div>
    </div>
  );
};

export default HorizontalScroll;
