import { styles } from "@/utils/styles.json";
import Card from "./Card";

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
