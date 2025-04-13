interface BottomNavTab {
  id: string;
  icon: {
    defaultUrl: string;
    selectedUrl: string;
    highlightUrl?: string;
  };
  label: {
    text: string;
    color: string;
  };
  cta: {
    type: string;
    url: string;
  };
  bgImage: string;
  navBar: boolean;
  header: {
    bgColor: string;
    statusBar: {
      theme: string;
      bgColor: string;
    };
    title: {
      text: string;
      color: string;
    };
    subtitle: {
      text: string;
      color: string;
    };
    buttons: Array<{
      id: string;
      iconTintColor: string;
    }>;
    bgImage: string;
  };
}

interface BottomNavProps {
  navTabs?: {
    defaultSelected: string;
    bgColor: string;
    tabs: Array<BottomNavTab>;
  };
}

const BottomNav = ({ navTabs }: BottomNavProps) => {
  const currentUrl = window.location.href;

  return (
    <div
      style={{
        zIndex: 1000,
      }}
      className="sticky bottom-0 bg-white pt-[5px] pb-[6px] border-t-[#eee] border-t-[1px] shadow-md"
    >
      <div className="flex flex-row items-center w-full">
        {navTabs?.tabs.map((tab) => (
          <a
            key={tab.id}
            href={tab.cta.url}
            className="flex flex-col items-center text-center w-full"
            onClick={() => console.log(`${tab.label.text} clicked`)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={
                currentUrl.includes(tab.id)
                  ? tab.icon.selectedUrl
                  : tab.icon.defaultUrl
              }
              alt={tab.label.text}
              className="w-6 h-6"
            />
            <span
              className="text-xs"
              style={{
                color: currentUrl.includes(tab.id)
                  ? "#DC354B"
                  : tab.label.color,
              }}
            >
              {tab.label.text}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default BottomNav;
