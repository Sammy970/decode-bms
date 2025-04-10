import { motion, useAnimation, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { styles } from "../../sample.json";
import Card from "./Card";
// import { ChevronLeft, ChevronRight } from "lucide-react";

const TOP_KIDS = {
  id: "TOP_KIDS",
  type: "horizontal-scroll",
  isSticky: false,
  styleId: "7119461345226941667",
  visibleItems: 2.75,
  itemsPerRow: 10,
  horizontalSpacing: 8,
  verticalSpacing: 0,
  title: {
    maxLines: 1,
    styleId: "-8176765359127332365",
    components: [
      {
        type: "text",
        text: "Kids' Special",
      },
    ],
  },
  subtitle: {
    maxLines: 1,
    styleId: "-3820565965690871482",
    components: [
      {
        type: "text",
        text: "Summer Specials for the Li'l Ones",
      },
    ],
  },
  matchMaxCardHeight: true,
  cta: {
    label: {
      maxLines: 1,
      styleId: "widget-scroll-cta-01",
      components: [
        {
          type: "text",
          text: "See All ›",
        },
      ],
    },
    url: "https://in.bookmyshow.com/explore/kids-bengaluru",
    analytics: {
      schema_version: "3.0",
      widget_id: "TOP_KIDS",
      widget_title: "Kids' Special",
      display_position: 8,
      title: "See All &rsaquo;",
      screen_name: "home_discover",
      event: "gtm_std_event",
      event_name: "view_all_clicked",
      event_type: "click",
      category: "kids",
      product: "discovery",
      filtervalues: "",
      is_tvod: "",
      metadata: "",
    },
  },
  cards: [
    {
      id: "EG00388030",
      type: "vertical",
      styleId: "8468485909260217330",
      ctaUrl: "https://in.bookmyshow.com/events/rambo-circus/ET00389464",
      text: [
        {
          maxLines: 2,
          styleId: "7785389241114011138",
          components: [
            {
              type: "text",
              text: "Rambo Circus - Bengaluru",
            },
          ],
        },
        {
          maxLines: 2,
          styleId: "-6370600663246037609",
          components: [
            {
              type: "text",
              text: "St. John`s Auditorium: Bengaluru",
            },
          ],
        },
      ],
      metaImages: [
        {
          styleId: "-7802096846920430298",
          image: {
            url: "https://assets-in.bmscdn.com/discovery-catalog/icons/tr:l-text,ie-U2F0LCAxOSBBcHIgb253YXJkcw%3D%3D,fs-48,ly-15,lx-15,ff-Roboto,pa-15_0_0_0,l-end/bottom-band-new-202212010458.png",
            altText: "Sat, 19 Apr onwards",
          },
        },
      ],
      image: {
        url: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00389464-hsnaugnavz-portrait.jpg",
        altText: "Rambo Circus - Bengaluru",
      },
      tags: [
        {
          styleId: "2759634946264020090",
          label: {
            maxLines: 1,
            styleId: "-1591248389725590333",
            components: [
              {
                type: "text",
                text: "PROMOTED",
              },
            ],
          },
        },
      ],
      buttons: [],
      seoText: "Rambo Circus - Bengaluru",
      cardDivisions: [],
    },
    {
      id: "EG00437762",
      type: "vertical",
      styleId: "8468485909260217330",
      ctaUrl:
        "https://in.bookmyshow.com/events/flubber-friends-show-forum-south-bengaluru/ET00439764",
      text: [
        {
          maxLines: 2,
          styleId: "7785389241114011138",
          components: [
            {
              type: "text",
              text: "Flubber & Friends Show @Forum South Bengaluru",
            },
          ],
        },
        {
          maxLines: 2,
          styleId: "-6370600663246037609",
          components: [
            {
              type: "text",
              text: "Prestige Centre for Performing Arts: Bengaluru",
            },
          ],
        },
      ],
      metaImages: [
        {
          styleId: "-7802096846920430298",
          image: {
            url: "https://assets-in.bmscdn.com/discovery-catalog/icons/tr:l-text,ie-U2F0LCAyNiBBcHI%3D,fs-48,ly-15,lx-15,ff-Roboto,pa-15_0_0_0,l-end/bottom-band-new-202212010458.png",
            altText: "Sat, 26 Apr",
          },
        },
      ],
      image: {
        url: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00439764-uxrhmwdypc-portrait.jpg",
        altText: "Flubber & Friends Show @Forum South Bengaluru",
      },
      tags: [],
      buttons: [],
      seoText: "Flubber & Friends Show @Forum South Bengaluru",
      cardDivisions: [],
    },
    {
      id: "EG00366350",
      type: "vertical",
      styleId: "8468485909260217330",
      ctaUrl:
        "https://in.bookmyshow.com/events/rubik-s-revenge-solve-the-4-x-4-x-4-master-cube/ET00367500",
      text: [
        {
          maxLines: 2,
          styleId: "7785389241114011138",
          components: [
            {
              type: "text",
              text: "Solve Rubik' Cube In 6 Steps!",
            },
          ],
        },
        {
          maxLines: 2,
          styleId: "-6370600663246037609",
          components: [
            {
              type: "text",
              text: "Happy Skills Events: Ghatkopar",
            },
          ],
        },
      ],
      metaImages: [
        {
          styleId: "-7802096846920430298",
          image: {
            url: "https://assets-in.bmscdn.com/discovery-catalog/icons/tr:l-text,ie-U3VuLCAxMyBBcHI%3D,fs-48,ly-15,lx-15,ff-Roboto,pa-15_0_0_0,l-end/bottom-band-new-202212010458.png",
            altText: "Sun, 13 Apr",
          },
        },
      ],
      image: {
        url: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00367500-synunrdefq-portrait.jpg",
        altText: "Solve Rubik' Cube In 6 Steps!",
      },
      tags: [],
      buttons: [],
      seoText: "Solve Rubik' Cube In 6 Steps!",
      cardDivisions: [],
    },
    {
      id: "EG00438440",
      type: "vertical",
      styleId: "8468485909260217330",
      ctaUrl:
        "https://in.bookmyshow.com/events/kids-chess-championship-online/ET00440469",
      text: [
        {
          maxLines: 2,
          styleId: "7785389241114011138",
          components: [
            {
              type: "text",
              text: "Kids Chess Championship (Online)",
            },
          ],
        },
        {
          maxLines: 2,
          styleId: "-6370600663246037609",
          components: [
            {
              type: "text",
              text: "Your Place and Your Time: India",
            },
          ],
        },
      ],
      metaImages: [
        {
          styleId: "-7802096846920430298",
          image: {
            url: "https://assets-in.bmscdn.com/discovery-catalog/icons/tr:l-text,ie-U2F0LCAyNiBBcHIgb253YXJkcw%3D%3D,fs-48,ly-15,lx-15,ff-Roboto,pa-15_0_0_0,l-end/bottom-band-new-202212010458.png",
            altText: "Sat, 26 Apr onwards",
          },
        },
      ],
      image: {
        url: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00440469-mylysuesvx-portrait.jpg",
        altText: "Kids Chess Championship (Online)",
      },
      tags: [],
      buttons: [],
      seoText: "Kids Chess Championship (Online)",
      cardDivisions: [],
    },
    {
      id: "EG00106799",
      type: "vertical",
      styleId: "8468485909260217330",
      ctaUrl:
        "https://in.bookmyshow.com/events/magic-beans-the-wonderful-world-of-alphabets/ET00131524",
      text: [
        {
          maxLines: 2,
          styleId: "7785389241114011138",
          components: [
            {
              type: "text",
              text: "Magic Beans - The Wonderful World of Jolly Phonics",
            },
          ],
        },
        {
          maxLines: 2,
          styleId: "-6370600663246037609",
          components: [
            {
              type: "text",
              text: "Online Streaming",
            },
          ],
        },
      ],
      metaImages: [
        {
          styleId: "-7802096846920430298",
          image: {
            url: "https://assets-in.bmscdn.com/discovery-catalog/icons/tr:l-text,ie-VHVlLCAxNSBBcHIgb253YXJkcw%3D%3D,fs-48,ly-15,lx-15,ff-Roboto,pa-15_0_0_0,l-end/bottom-band-new-202212010458.png",
            altText: "Tue, 15 Apr onwards",
          },
        },
      ],
      image: {
        url: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00131524-xxvqhjaqnw-portrait.jpg",
        altText: "Magic Beans - The Wonderful World of Jolly Phonics",
      },
      tags: [],
      buttons: [],
      seoText: "Magic Beans - The Wonderful World of Jolly Phonics",
      cardDivisions: [],
    },
    {
      id: "EG00392717",
      type: "vertical",
      styleId: "8468485909260217330",
      ctaUrl:
        "https://in.bookmyshow.com/events/canvas-painting-for-kids/ET00394192",
      text: [
        {
          maxLines: 2,
          styleId: "7785389241114011138",
          components: [
            {
              type: "text",
              text: "Canvas painting for kids",
            },
          ],
        },
        {
          maxLines: 2,
          styleId: "-6370600663246037609",
          components: [
            {
              type: "text",
              text: "Art Beat: Bengaluru",
            },
          ],
        },
      ],
      metaImages: [
        {
          styleId: "-7802096846920430298",
          image: {
            url: "https://assets-in.bmscdn.com/discovery-catalog/icons/tr:l-text,ie-VGh1LCAxMCBBcHIgb253YXJkcw%3D%3D,fs-48,ly-15,lx-15,ff-Roboto,pa-15_0_0_0,l-end/bottom-band-new-202212010458.png",
            altText: "Thu, 10 Apr onwards",
          },
        },
      ],
      image: {
        url: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00394192-sjcdgpkldu-portrait.jpg",
        altText: "Canvas painting for kids",
      },
      tags: [],
      buttons: [],
      seoText: "Canvas painting for kids",
      cardDivisions: [],
    },
    {
      id: "EG00382128",
      type: "vertical",
      styleId: "8468485909260217330",
      ctaUrl: "https://in.bookmyshow.com/events/fun-at-salt-cave/ET00383490",
      text: [
        {
          maxLines: 2,
          styleId: "7785389241114011138",
          components: [
            {
              type: "text",
              text: "Fun at Salt Cave",
            },
          ],
        },
        {
          maxLines: 2,
          styleId: "-6370600663246037609",
          components: [
            {
              type: "text",
              text: "Salt World: Bengaluru",
            },
          ],
        },
      ],
      metaImages: [
        {
          styleId: "-7802096846920430298",
          image: {
            url: "https://assets-in.bmscdn.com/discovery-catalog/icons/tr:l-text,ie-U3VuLCAxMyBBcHIgb253YXJkcw%3D%3D,fs-48,ly-15,lx-15,ff-Roboto,pa-15_0_0_0,l-end/bottom-band-new-202212010458.png",
            altText: "Sun, 13 Apr onwards",
          },
        },
      ],
      image: {
        url: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00383490-buapcrddmy-portrait.jpg",
        altText: "Fun at Salt Cave",
      },
      tags: [],
      buttons: [],
      seoText: "Fun at Salt Cave",
      cardDivisions: [],
    },
    {
      id: "EG00437594",
      type: "vertical",
      styleId: "8468485909260217330",
      ctaUrl:
        "https://in.bookmyshow.com/events/scaling-up-with-scaly-tales/ET00439595",
      text: [
        {
          maxLines: 2,
          styleId: "7785389241114011138",
          components: [
            {
              type: "text",
              text: "Scaling up With Scaly Tales",
            },
          ],
        },
        {
          maxLines: 2,
          styleId: "-6370600663246037609",
          components: [
            {
              type: "text",
              text: "Atta Galatta: Indiranagar",
            },
          ],
        },
      ],
      metaImages: [
        {
          styleId: "-7802096846920430298",
          image: {
            url: "https://assets-in.bmscdn.com/discovery-catalog/icons/tr:l-text,ie-U2F0LCAxMiBBcHI%3D,fs-48,ly-15,lx-15,ff-Roboto,pa-15_0_0_0,l-end/bottom-band-new-202212010458.png",
            altText: "Sat, 12 Apr",
          },
        },
      ],
      image: {
        url: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00439595-qkdhrycasm-portrait.jpg",
        altText: "Scaling up With Scaly Tales",
      },
      tags: [],
      buttons: [],
      seoText: "Scaling up With Scaly Tales",
      cardDivisions: [],
    },
    {
      id: "EG00438345",
      type: "vertical",
      styleId: "8468485909260217330",
      ctaUrl:
        "https://in.bookmyshow.com/events/kadhai-kalam-with-agan-adhigaram/ET00440366",
      text: [
        {
          maxLines: 2,
          styleId: "7785389241114011138",
          components: [
            {
              type: "text",
              text: "Kadhai Kalam with Agan Adhigaram",
            },
          ],
        },
        {
          maxLines: 2,
          styleId: "-6370600663246037609",
          components: [
            {
              type: "text",
              text: "Atta Galatta: Indiranagar",
            },
          ],
        },
      ],
      metaImages: [
        {
          styleId: "-7802096846920430298",
          image: {
            url: "https://assets-in.bmscdn.com/discovery-catalog/icons/tr:l-text,ie-U2F0LCAxMiBBcHI%3D,fs-48,ly-15,lx-15,ff-Roboto,pa-15_0_0_0,l-end/bottom-band-new-202212010458.png",
            altText: "Sat, 12 Apr",
          },
        },
      ],
      image: {
        url: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00440366-vybnpjmlke-portrait.jpg",
        altText: "Kadhai Kalam with Agan Adhigaram",
      },
      tags: [],
      buttons: [],
      seoText: "Kadhai Kalam with Agan Adhigaram",
      cardDivisions: [],
    },
    {
      id: "EG00387984",
      type: "vertical",
      styleId: "8468485909260217330",
      ctaUrl: "https://in.bookmyshow.com/events/fun-play-and-learn/ET00389418",
      text: [
        {
          maxLines: 2,
          styleId: "7785389241114011138",
          components: [
            {
              type: "text",
              text: "Fun Play and Learn",
            },
          ],
        },
        {
          maxLines: 2,
          styleId: "-6370600663246037609",
          components: [
            {
              type: "text",
              text: "Tiny Dots 4 Brainy Tots: Bengaluru",
            },
          ],
        },
      ],
      metaImages: [
        {
          styleId: "-7802096846920430298",
          image: {
            url: "https://assets-in.bmscdn.com/discovery-catalog/icons/tr:l-text,ie-VGh1LCAxMCBBcHIgb253YXJkcw%3D%3D,fs-48,ly-15,lx-15,ff-Roboto,pa-15_0_0_0,l-end/bottom-band-new-202212010458.png",
            altText: "Thu, 10 Apr onwards",
          },
        },
      ],
      image: {
        url: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00389418-dydrbewyqu-portrait.jpg",
        altText: "Fun Play and Learn",
      },
      tags: [],
      buttons: [],
      seoText: "Fun Play and Learn",
      cardDivisions: [],
    },
  ],
  snapping: false,
  fillViewport: false,
};

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

  console.log("style", style);

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
      <div className="relative pt-2 px-4 w-full">
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
