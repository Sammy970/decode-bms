// import { styles } from "../../sample.json";
import Card from "./Card";

const styles = [
  {
    id: "1731161595816223629",
    aspectRatio: 2.0,
    padding: "32,16,32,16",
    type: "widget",
    shimmer: false,
    imageVerticalAlignment: "bottom",
    indicatorProperties: {
      colors: {
        active: "",
        inactive: "",
      },
    },
  },
  {
    id: "7086961849741629663",
    type: "card",
    shimmer: false,
    imageVerticalAlignment: "bottom",
  },
  {
    id: "-3274594736959734990",
    aspectRatio: 6.0,
    margin: "16,0,0,0",
    type: "widget",
    cardsContainer: {
      padding: "0,0,0,0",
      margin: "0,0,0,0",
    },
    shimmer: false,
    imageVerticalAlignment: "bottom",
    indicatorProperties: {
      colors: {
        active: "",
        inactive: "",
      },
    },
  },
  {
    id: "-9146536873934355770",
    type: "card",
    imageContainer: {
      aspectRatio: 6.0,
      shimmer: false,
      border: {
        cornerRadius: "0,0,0,0",
        opacity: 1.0,
        width: 0.0,
      },
      widthpct: 100.0,
    },
    textContainer: {
      elevation: 1,
    },
    border: {
      cornerRadius: "0,0,0,0",
      opacity: 1.0,
      width: 0.0,
    },
    shimmer: false,
    alignVertical: "top",
    imageVerticalAlignment: "bottom",
    direction: "ltr",
  },
  {
    id: "2040790894673779911",
    padding: "16,0,16,0",
    margin: "0,0,0,0",
    type: "widget",
    headerContainer: {
      padding: "0,0,0,0",
      margin: "0,16,0,16",
    },
    cardsContainer: {
      padding: "0,16,0,16",
      margin: "16,0,0,0",
    },
    shimmer: false,
    imageVerticalAlignment: "bottom",
    indicatorProperties: {
      colors: {
        active: "",
        inactive: "",
      },
    },
  },
  {
    id: "-1669035614408230846",
    type: "card",
    imageContainer: {
      aspectRatio: 1.0,
      shimmer: false,
      border: {
        cornerRadius: "4,4,4,4",
        opacity: 1.0,
        width: 0.0,
      },
    },
    shimmer: false,
    imageVerticalAlignment: "bottom",
  },
  {
    id: "-8176765359127332365",
    type: "text",
    font: "subtitle-large",
    fontColor: "#333333",
    shimmer: false,
    horizontalAlignment: "left",
    imageVerticalAlignment: "bottom",
  },
  {
    id: "981900565152682651",
    type: "text",
    font: "body-regular",
    fontColor: "#666666",
    shimmer: false,
    horizontalAlignment: "left",
    imageVerticalAlignment: "bottom",
  },
  {
    id: "5330088296335279945",
    type: "widget",
    background: {
      color: "#ffffff",
    },
    shimmer: false,
    imageVerticalAlignment: "bottom",
    indicatorProperties: {
      colors: {
        active: "",
        inactive: "",
      },
    },
  },
  {
    id: "-4278837926783854781",
    type: "card",
    imageContainer: {
      aspectRatio: 3.0,
      shimmer: false,
    },
    shimmer: false,
    imageVerticalAlignment: "bottom",
  },
  {
    id: "7119461345226941667",
    padding: "16,0,16,0",
    margin: "16,0,0,0",
    type: "widget",
    headerContainer: {
      padding: "0,16,0,16",
      margin: "0,0,0,0",
    },
    cardsContainer: {
      padding: "0,16,0,16",
      margin: "16,0,0,0",
    },
    shimmer: false,
    imageVerticalAlignment: "bottom",
    indicatorProperties: {
      colors: {
        active: "",
        inactive: "",
      },
    },
  },
  {
    id: "8468485909260217330",
    type: "card",
    imageContainer: {
      aspectRatio: 0.6667,
      margin: "0,0,0,0",
      shimmer: false,
      border: {
        cornerRadius: "8,8,8,8",
        opacity: 1.0,
        width: 0.0,
      },
    },
    textContainer: {
      padding: "4,0,0,0",
      elevation: 1,
    },
    shimmer: false,
    imageVerticalAlignment: "bottom",
  },
  {
    id: "-3820565965690871482",
    type: "text",
    font: "body-regular",
    fontColor: "#3E6EEA",
    shimmer: false,
    horizontalAlignment: "left",
    imageVerticalAlignment: "bottom",
  },
  {
    id: "7785389241114011138",
    type: "text",
    font: "body-regular",
    fontColor: "#222222",
    lineMargin: "0,0,2,0",
    shimmer: false,
    horizontalAlignment: "left",
    imageVerticalAlignment: "bottom",
  },
  {
    id: "-6370600663246037609",
    type: "text",
    font: "body-small",
    fontColor: "#555555",
    lineMargin: "0,0,2,0",
    shimmer: false,
    horizontalAlignment: "left",
    imageVerticalAlignment: "bottom",
  },
  {
    id: "-7802096846920430298",
    aspectRatio: 5.0,
    padding: "0,0,0,0",
    margin: "4,0,0,0",
    type: "metaImage",
    border: {
      cornerRadius: "0,0,0,0",
      opacity: 1.0,
      width: 0.0,
    },
    shimmer: false,
    imageVerticalAlignment: "bottom",
    contentMode: "aspectFill",
  },
  {
    id: "widget-scroll-cta-01",
    type: "text",
    font: "body-regular",
    fontColor: "#DC3558",
    lineMargin: "0,0,0,0",
    shimmer: false,
    horizontalAlignment: "left",
    imageVerticalAlignment: "bottom",
  },
  {
    id: "header-title-01",
    type: "text",
    font: "title",
    fontColor: "#222222",
    lineMargin: "8,4,0,16",
    shimmer: false,
    horizontalAlignment: "left",
    imageVerticalAlignment: "bottom",
  },
  {
    id: "header-subtitle-01",
    type: "text",
    font: "tiny-medium",
    fontColor: "#DC354B",
    lineMargin: "0,0,0,16",
    shimmer: false,
    horizontalAlignment: "left",
    imageVerticalAlignment: "bottom",
  },
  {
    id: "listing-header-title-01",
    type: "text",
    font: "subtitle-regular",
    fontColor: "#222222",
    lineMargin: "0,0,0,16",
    shimmer: false,
    horizontalAlignment: "left",
    imageVerticalAlignment: "bottom",
  },
  {
    id: "listing-header-subtitle-01",
    type: "text",
    font: "body-small",
    fontColor: "#666666",
    lineMargin: "0,0,0,16",
    shimmer: false,
    horizontalAlignment: "left",
    imageVerticalAlignment: "bottom",
  },
  {
    id: "-1591248389725590333",
    type: "text",
    font: "overline",
    fontColor: "#ffffff",
    shimmer: false,
    horizontalAlignment: "left",
    imageVerticalAlignment: "bottom",
  },
  {
    id: "2759634946264020090",
    padding: "2,4,2,4",
    type: "tag",
    background: {
      color: "#DC354B",
    },
    border: {
      cornerRadius: "2,2,2,2",
      opacity: 1.0,
      width: 0.0,
    },
    shimmer: false,
    imageVerticalAlignment: "bottom",
  },
  {
    id: "vcp-header-title-01",
    type: "text",
    font: "subtitle-large",
    fontColor: "#222222",
    lineMargin: "4,4,4,0",
    shimmer: false,
    horizontalAlignment: "left",
    imageVerticalAlignment: "bottom",
  },
  {
    id: "tooltip-style",
    padding: "12,12,12,12",
    margin: "0,16,0,16",
    type: "tooltip",
    background: {
      color: "#3E6EEA",
      opacity: 1.0,
    },
    font: "extra-tiny-medium",
    fontColor: "#ffffff",
    border: {
      cornerRadius: "24,24,24,24",
    },
    shimmer: false,
    imageVerticalAlignment: "bottom",
  },
];

const sampleJson = {
  id: "DISCOVER_EVENTS_WEEK_MOBILE",
  type: "flexbox",
  isSticky: false,
  styleId: "2040790894673779911",
  itemsPerRow: 3,
  horizontalSpacing: 16,
  verticalSpacing: 16,
  title: {
    maxLines: 1,
    styleId: "-8176765359127332365",
    components: [
      {
        type: "text",
        text: "Best Events This Week",
      },
    ],
  },
  subtitle: {
    maxLines: 1,
    styleId: "981900565152682651",
    components: [
      {
        type: "text",
        text: "Monday to Sunday, we got you covered",
      },
    ],
  },
  matchMaxCardHeight: true,
  cards: [
    {
      id: "de46dce1-8210-418a-a34c-61f632708490",
      type: "vertical",
      styleId: "-1669035614408230846",
      ctaUrl:
        "https://in.bookmyshow.com/explore/plan-for-today-bengaluru?referrerBase=",
      text: [],
      metaImages: [],
      image: {
        url: "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-400,h-400:l-text,ie-OSBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-40,lx-40,ly-324,tg-b,pa-8_0_0_0,l-end/plan-for-today-collection-202409041119.png",
        altText: "Plan for Today",
      },
      tags: [],
      buttons: [],
      cardDivisions: [],
    },
    {
      id: "0c0551bb-376f-44c5-9a58-de11874942c7",
      type: "vertical",
      styleId: "-1669035614408230846",
      ctaUrl:
        "https://in.bookmyshow.com/explore/happening-tomorrow-bengaluru?referrerBase=",
      text: [],
      metaImages: [],
      image: {
        url: "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-400,h-400:l-text,ie-Mjg1KyBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-40,lx-40,ly-324,tg-b,pa-8_0_0_0,l-end/plan-for-tomorrow-collection-202409041119.png",
        altText: "Happening Tomorrow",
      },
      tags: [],
      buttons: [],
      cardDivisions: [],
    },
    {
      id: "f067fb2f-7a16-4cfe-a9d6-6a4fb3af0497",
      type: "vertical",
      styleId: "-1669035614408230846",
      ctaUrl:
        "https://in.bookmyshow.com/explore/head-out-this-weekend-bengaluru?referrerBase=",
      text: [],
      metaImages: [],
      image: {
        url: "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-400,h-400:l-text,ie-NzkwKyBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-40,lx-40,ly-324,tg-b,pa-8_0_0_0,l-end/weekend-plans-collection-202409041119.png",
        altText: "Head Out Weekend",
      },
      tags: [],
      buttons: [],
      cardDivisions: [],
    },
  ],
  childWidgets: [],
};

interface FlexboxProps {
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
  cards?: Array<{
    id: string;
    type: string;
    styleId: string;
    ctaUrl: string;
    text: Array<{ type: string; text: string }>;
    metaImages: Array<{ type: string; url: string; altText: string }>;
    image: { url: string; altText: string };
    tags: Array<{ type: string; text: string }>;
    buttons: Array<{ type: string; text: string; url: string }>;
    cardDivisions: Array<{ type: string; text: string }>;
  }>;
  itemsPerRow?: number;
  styleId?: string;
}

const getTextStyle = (styleId?: string) => {
  const style = styles.find((s) => s.id === styleId);

  const fontSizeMap: { [key: string]: number } = {
    "subtitle-large": 18,
    "body-regular": 15,
  };

  const fontWeightMap: { [key: string]: number } = {
    "subtitle-large": 500,
    "body-regular": 400,
  };

  return style && style.font
    ? {
        width: "100%",
        padding: "0px 20px",
        color: style.fontColor,
        textAlign: style.horizontalAlignment as
          | "left"
          | "right"
          | "center"
          | "justify",
        fontSize: fontSizeMap[style.font] || 16,
        fontWeight: fontWeightMap[style.font] || 400,
      }
    : undefined;
};

const getFlexboxStyle = (styleId?: string) => {
  const style = styles.find((s) => s.id === styleId);

  return {
    padding: style?.padding
      ?.split(",")
      .map((val) => `${val}px`)
      .join(" "),
    margin: style?.margin
      ?.split(",")
      .map((val) => `${val}px`)
      .join(" "),
    backgroundColor: style?.background?.color,
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
  };
};

const getCardContainerStyle = (
  itemsPerRow: number | undefined,
  styleId?: string
) => {
  const style = styles.find((s) => s.id === styleId);

  return {
    display: "grid",
    gridTemplateColumns: `repeat(${itemsPerRow ?? 1}, 1fr)`,
    gap: `${sampleJson.horizontalSpacing}px`,
    marginTop: `${sampleJson.verticalSpacing}px`,
    marginBottom: `${sampleJson.verticalSpacing}px`,
    padding: style?.cardsContainer?.padding
      ?.split(",")
      .map((val) => `${val}px`)
      .join(" "),
    margin: style?.cardsContainer?.margin
      ?.split(",")
      .map((val) => `${val}px`)
      .join(" "),
    backgroundColor: style?.background?.color,
  };
};

const Flexbox = ({
  title,
  subtitle,
  cards,
  itemsPerRow,
  styleId,
}: FlexboxProps) => {
  return (
    <div style={getFlexboxStyle(styleId)}>
      <h1 style={getTextStyle(title?.styleId)}>{title?.components[0].text}</h1>
      <h2 style={getTextStyle(subtitle?.styleId)}>
        {subtitle?.components[0].text}
      </h2>
      {cards && cards.length > 0 && (
        <div style={getCardContainerStyle(itemsPerRow, styleId)}>
          {cards.map((card) => (
            <Card
              key={card.id}
              styleId={card.styleId}
              type={card.type}
              ctaUrl={card.ctaUrl}
              imageUrl={card.image.url}
              altText={card.image.altText}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Flexbox;
