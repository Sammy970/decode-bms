import { styles } from "@/utils/styles.json";

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
  buttons?: Array<{
    styleId: string;
    label: {
      maxLines: number;
      styleId: string;
      components: Array<{ type: string; text: string }>;
    };
    ctaUrl: string;
  }>;
  type?: string;
}

const fontSizeMap: { [key: string]: number } = {
  "subtitle-large": 18,
  "body-regular": 14,
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

const Card = ({
  ctaUrl,
  styleId,
  imageUrl,
  altText,
  text,
  metaImages,
  tags,
  buttons,
  type,
}: CardProps) => {
  // Find the matching style from the styles array
  const style = styles.find((s) => s.id === styleId);

  if (!style) {
    return null; // Or some fallback UI
  }

  // Parse padding if it exists
  // const [paddingTop, paddingRight, paddingBottom, paddingLeft] = style.padding
  //   ?.split(",")
  //   .map(Number) || [0, 0, 0, 0];

  // Create dynamic style object
  const containerStyle = {
    // padding: `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px`,
    margin: style.margin
      ?.split(",")
      .map((val) => `${val}px`)
      .join(" "),
    backgroundColor: style.background?.color,
    width: "100%",
    display: "flex",
    flexDirection:
      type === "horizontal" ? ("row" as const) : ("column" as const),
    alignItems: style.horizontalAlignment === "left" ? "flex-start" : "center",
  };

  const imageStyle = {
    // aspectRatio: style.aspectRatio || style.imageContainer?.aspectRatio,
    borderRadius: style.imageContainer?.border?.cornerRadius
      ?.split(",")
      .map((val) => `${val}px`)
      .join(" "),
    // width: style.imageContainer?.widthpct
    //   ? `${style.imageContainer.widthpct}%`
    //   : "auto",
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
      {type === "horizontal" ? (
        <>
          <div
            style={containerStyle}
            className="justify-evenly items-center gap-1"
          >
            {/* image */}
            <div className="w-[60%]">
              <img
                src={imageUrl}
                alt={altText}
                className=""
                style={imageStyle}
              />
              {tags && (
                <div className="absolute bg-red-500 rounded-[2px] right-1.5 top-1.5 px-1 text-[10.5px] font-roboto text-white break-words">
                  {tags[0]?.label.components[0].text}
                </div>
              )}
            </div>
            {/* text */}
            <div className="w-full">
              {text && (
                <div style={textContainerStyle}>
                  {text.map((textItem, index) => {
                    const textStyle = styles.find(
                      (s) => s.id === textItem.styleId
                    );

                    return (
                      <p
                        key={index}
                        className={`line-clamp-${textItem.maxLines}`}
                        style={{
                          color: textStyle?.fontColor,
                          fontSize: textStyle?.font
                            ? fontSizeMap[textStyle.font]
                            : undefined,
                          fontWeight: textStyle?.font
                            ? fontWeightMap[textStyle.font]
                            : undefined,
                          margin: String(textStyle?.lineMargin)
                            ?.split(",")
                            .map((val) => `${val}px`)
                            .join(" "),

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
          </div>
          {buttons && (
            <div className="flex flex-row gap-2 mt-2 w-full">
              {buttons.map((button, index) => {
                const buttonStyle = styles.find((s) => s.id === button.styleId);
                return (
                  <button
                    key={index}
                    onClick={() => window.open(button.ctaUrl, "_blank")}
                    className="bg-red-500 text-white rounded-md px-4 py-2"
                    style={{
                      backgroundColor: buttonStyle?.background?.color,
                      borderRadius: buttonStyle?.border?.cornerRadius
                        ?.split(",")
                        .map((val) => `${val}px`)
                        .join(" "),
                      width: buttonStyle?.widthpct
                        ? `${buttonStyle.widthpct}%`
                        : "auto",
                      textAlign: "center",
                      height: buttonStyle?.minHeight,
                      color: buttonStyle?.fontColor,
                      fontSize: fontSizeMap[String(buttonStyle?.font)],
                      fontWeight: fontWeightMap[String(buttonStyle?.font)],
                      margin: String(buttonStyle?.margin)
                        ?.split(",")
                        .map((val) => `${val}px`)
                        .join(" "),
                      padding: String(buttonStyle?.padding)
                        ?.split(",")
                        .map((val) => `${val}px`)
                        .join(" "),
                    }}
                  >
                    {button.label.components[0].text}
                  </button>
                );
              })}
            </div>
          )}
        </>
      ) : (
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
                      margin: String(style.lineMargin)
                        ?.split(",")
                        .map((val) => `${val}px`)
                        .join(" "),
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
      )}
    </a>
  );
};

export default Card;
