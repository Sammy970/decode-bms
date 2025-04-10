import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        position: isScrolled ? "fixed" : "static",
        zIndex: 1000,
        top: 0,
        backgroundColor: "white",
        width: "100%",
        height: "60px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "14px 16px 14px",
        transition: "background-color 0.3s, box-shadow 0.3s",
        boxShadow: isScrolled ? "0 2px 4px rgba(0, 0, 0, 0.1)" : "none",
        borderBottomWidth: "1px",
        borderBottomColor: "#d0d5e5",
      }}
    >
      <div className="flex flex-col items-start justify-center w-full">
        <h1 className="text-2xl text-[#404040] font-semibold">
          It All Starts Here!
        </h1>
        <h2 className="text-[#dc354b] text-[13px]">{"Bengaluru >"}</h2>
      </div>
      <div className="rounded-md border-[1px] border-[#e5e5e5] px-2 py-1 mr-2">
        <h1 className="whitespace-nowrap text-sm">Use App</h1>
      </div>
      <div style={{ width: "24px", height: "24px", marginTop: 5 }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            fill="#666666"
            fill-rule="evenodd"
            d="M9.5 2a7.5 7.5 0 0 1 5.645 12.438L20.707 20l-.707.707-5.562-5.562A7.5 7.5 0 1 1 9.5 2zm0 1a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Header;
