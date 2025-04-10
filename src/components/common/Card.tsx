import { styles } from "../../sample.json";

interface CardProps {
  ctaUrl: string;
  styleId: string;
  imageUrl: string;
  altText: string;
  text?: Array<{
    maxLines: number;
    styleId: string;
    components: Array<{
      type: string;
      text: string;
    }>;
  }>;
  tags?: Array<{
    styleId: string;
    label: {
      maxLines: number;
      styleId: string;
      components: Array<{ type: string; text: string }>;
    };
  }>;
  metaImages?: Array<{
    styleId: string;
    image: { url: string; altText: string };
  }>;
  type?: string;
}

const Card = ({
  ctaUrl,
  styleId,
  imageUrl,
  altText,
  text,
  metaImages,
  tags,
}: CardProps) => {
  // Find the matching style from the styles array
  const style = styles.find((s) => s.id === styleId);

  if (!style) {
    return null; // Or some fallback UI
  }

  // Parse padding if it exists
  const [paddingTop, paddingRight, paddingBottom, paddingLeft] = style.padding
    ?.split(",")
    .map(Number) || [0, 0, 0, 0];

  // Create dynamic style object
  const containerStyle = {
    padding: `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px`,
    margin: style.margin
      ?.split(",")
      .map((val) => `${val}px`)
      .join(" "),
    backgroundColor: style.background?.color,
    width: "100%",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: style.horizontalAlignment === "left" ? "flex-start" : "center",
  };

  const imageStyle = {
    aspectRatio: style.aspectRatio || style.imageContainer?.aspectRatio,
    borderRadius: style.imageContainer?.border?.cornerRadius
      ?.split(",")
      .map((val) => `${val}px`)
      .join(" "),
    width: style.imageContainer?.widthpct
      ? `${style.imageContainer.widthpct}%`
      : "auto",
    objectFit: "cover" as const,
  };

  const textContainerStyle = {
    padding: style.textContainer?.padding
      ?.split(",")
      .map((val) => `${val}px`)
      .join(" "),
    // marginTop: "8px",
    width: "100%",
  };

  return (
    <a href={ctaUrl} style={{ textDecoration: "none" }}>
      <div style={containerStyle}>
        <div className="relative">
          <img src={imageUrl} alt={altText} style={imageStyle} />
          {tags && (
            <div className="absolute bg-red-500 rounded-[2px] right-1.5 top-1.5 px-1 text-[10.5px] font-roboto text-white break-words">
              {tags[0]?.label.components[0].text}
            </div>
          )}
        </div>
        {metaImages && (
          <div className="flex flex-row gap-2 mt-2 w-full">
            {metaImages.map((metaImage, index) => {
              const metaImageStyle = styles.find(
                (s) => s.id === metaImage.styleId
              );
              return (
                <img
                  key={index}
                  src={metaImage.image.url}
                  alt={metaImage.image.altText}
                  style={{
                    borderRadius: metaImageStyle?.border?.cornerRadius,
                    objectFit: "contain",
                  }}
                />
              );
            })}
          </div>
        )}
        {text && (
          <div style={textContainerStyle}>
            {text.map((textItem, index) => {
              const textStyle = styles.find((s) => s.id === textItem.styleId);
              return (
                <p
                  key={index}
                  className={`line-clamp-${textItem.maxLines}`}
                  style={{
                    color: textStyle?.fontColor,
                    fontSize:
                      textStyle?.font === "body-small" ? "12px" : "14px",
                    marginBottom: "4px",
                    display: "-webkit-box",
                    WebkitLineClamp: textItem.maxLines,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {textItem.components[0].text}
                </p>
              );
            })}
          </div>
        )}
      </div>
    </a>
  );
};

export default Card;
