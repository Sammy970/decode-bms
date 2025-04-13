const HeaderSubWeb = () => {
  const List = {
    left: [
      {
        title: "Movies",
        ctaUrl: "https://in.bookmyshow.com/explore/movies-bengaluru",
      },
      {
        title: "Stream",
        ctaUrl: "https://in.bookmyshow.com/explore/c/stream",
      },
      {
        title: "Events",
        ctaUrl: "https://in.bookmyshow.com/explore/events-bengaluru",
      },
      {
        title: "Plays",
        ctaUrl: "https://in.bookmyshow.com/explore/plays-bengaluru",
      },
      {
        title: "Sports",
        ctaUrl: "https://in.bookmyshow.com/explore/sports-bengaluru",
      },
      {
        title: "Activities",
        ctaUrl: "https://in.bookmyshow.com/explore/activities-bengaluru",
      },
    ],
    right: [
      {
        title: "ListYourShow",
        ctaUrl: "https://in.bookmyshow.com/list-your-show",
      },
      {
        title: "Corporates",
        ctaUrl: "https://in.bookmyshow.com/voucher",
      },
      {
        title: "Offers",
        ctaUrl: "https://in.bookmyshow.com/offers",
      },
      {
        title: "Gift Cards",
        ctaUrl: "https://in.bookmyshow.com/giftcards",
      },
    ],
  };
  return (
    <div className="w-full h-[40px] bg-[#f5f5f5] flex items-center justify-between px-[90px] border-b border-[#e5e5e5]">
      <div className="flex items-center gap-4">
        {List.left.map((item, index) => (
          <a
            key={index}
            href={item.ctaUrl}
            className="text-[#333] text-[14px] font-normal cursor-pointer"
          >
            {item.title}
          </a>
        ))}
      </div>
      <div className="flex items-center">
        {List.right.map((item, index) => (
          <a
            key={index}
            href={item.ctaUrl}
            className="text-[#333] text-[12px] px-[12px] font-normal cursor-pointer"
          >
            {item.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default HeaderSubWeb;
