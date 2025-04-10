import "./App.css";
import CarouselComp from "./components/common/CarouselComp";
import Flexbox from "./components/common/Flexbox";
import HorizontalScroll from "./components/common/HorizontalScroll";
import Header from "./components/Header";

const LayoutScreenWidgets = [
  {
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
  },
  {
    id: "TVOD_SHOWCASE_BANNER",
    type: "flexbox",
    isSticky: false,
    styleId: "5330088296335279945",
    itemsPerRow: 1,
    horizontalSpacing: 8,
    verticalSpacing: 8,
    matchMaxCardHeight: true,
    cards: [
      {
        id: "520cc685-544b-403e-a250-847670670f25",
        type: "vertical",
        styleId: "-4278837926783854781",
        ctaUrl: "https://in.bookmyshow.com/explore/c/stream",
        text: [],
        metaImages: [],
        image: {
          url: "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-480:w-600/stream-showcase-banner-exp-collection-202406050332.gif",
          altText: "Stream",
        },
        tags: [],
        buttons: [],
        cardDivisions: [],
      },
    ],
    childWidgets: [],
  },
];

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

const DISCOVER_ONLINE_COLLECTIONS_MOBILE = {
  id: "DISCOVER_ONLINE_COLLECTIONS_MOBILE",
  type: "horizontal-scroll",
  isSticky: false,
  styleId: "2040790894673779911",
  visibleItems: 2.2,
  itemsPerRow: 6,
  horizontalSpacing: 16,
  verticalSpacing: 16,
  title: {
    maxLines: 1,
    styleId: "-8176765359127332365",
    components: [
      {
        type: "text",
        text: "Browse Events By Category",
      },
    ],
  },
  subtitle: {
    maxLines: 1,
    styleId: "2539177250022568885",
    components: [
      {
        type: "text",
        text: "Live events for all your entertainment needs",
      },
    ],
  },
  matchMaxCardHeight: true,
  cards: [
    {
      id: "86e057a8-120d-4d14-98e5-6bea7fdd1925",
      type: "vertical",
      styleId: "580671950667129662",
      ctaUrl:
        "https://in.bookmyshow.com/explore/comedy-shows-bengaluru?referrerBase=",
      text: [],
      metaImages: [],
      image: {
        url: "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:l-text,ie-MTc1KyBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-40,lx-50,ly-300,tg-b,pa-8_0_0_0,l-end/comedy-shows-collection-202305100822.png",
        altText: "Comedy Shows",
      },
      tags: [],
      buttons: [],
      cardDivisions: [],
    },
    {
      id: "b44e9b39-2d3a-4142-91ae-421879bc4a56",
      type: "vertical",
      styleId: "580671950667129662",
      ctaUrl:
        "https://in.bookmyshow.com/explore/amusement-parks-bengaluru?referrerBase=",
      text: [],
      metaImages: [],
      image: {
        url: "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:l-text,ie-MTUrIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-40,lx-50,ly-300,tg-b,pa-8_0_0_0,l-end/amusement-parks-collection-collection-202503240122.png",
        altText: "Amusement Parks",
      },
      tags: [],
      buttons: [],
      cardDivisions: [],
    },
    {
      id: "94ce0527-6fcd-4b16-b24c-1ff7df4e1806",
      type: "vertical",
      styleId: "580671950667129662",
      ctaUrl:
        "https://in.bookmyshow.com/explore/theatre-plays-bengaluru?referrerBase=",
      text: [],
      metaImages: [],
      image: {
        url: "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:l-text,ie-NjArIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-40,lx-50,ly-300,tg-b,pa-8_0_0_0,l-end/theatre-shows-collection-202305100822.png",
        altText: "Theatre Shows",
      },
      tags: [],
      buttons: [],
      cardDivisions: [],
    },
    {
      id: "00cded5f-d6e1-4d04-9774-28e3be848727",
      type: "vertical",
      styleId: "580671950667129662",
      ctaUrl: "https://in.bookmyshow.com/explore/kids-bengaluru?referrerBase=",
      text: [],
      metaImages: [],
      image: {
        url: "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:l-text,ie-NDArIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-40,lx-50,ly-300,tg-b,pa-8_0_0_0,l-end/kids-collection-collection-202503240122.png",
        altText: "Kids",
      },
      tags: [],
      buttons: [],
      cardDivisions: [],
    },
    {
      id: "60355b82-8af8-4441-84b5-e72b78549fd4",
      type: "vertical",
      styleId: "580671950667129662",
      ctaUrl:
        "https://in.bookmyshow.com/explore/adventure-bengaluru?referrerBase=",
      text: [],
      metaImages: [],
      image: {
        url: "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:l-text,ie-MjE1KyBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-40,lx-50,ly-300,tg-b,pa-8_0_0_0,l-end/adventure-and-fun-collection-202305100822.png",
        altText: "Adventure",
      },
      tags: [],
      buttons: [],
      cardDivisions: [],
    },
    {
      id: "023632ea-b1c7-49f4-8fe2-45a6f74da082",
      type: "vertical",
      styleId: "580671950667129662",
      ctaUrl:
        "https://in.bookmyshow.com/explore/music-shows-bengaluru?referrerBase=",
      text: [],
      metaImages: [],
      image: {
        url: "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:l-text,ie-MTE1KyBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-40,lx-50,ly-300,tg-b,pa-8_0_0_0,l-end/music-shows-collection-202305100822.png",
        altText: "Music Shows",
      },
      tags: [],
      buttons: [],
      cardDivisions: [],
    },
    {
      id: "14eeab43-88f5-4929-8d3e-cbab4b5fcc2e",
      type: "vertical",
      styleId: "580671950667129662",
      ctaUrl:
        "https://in.bookmyshow.com/explore/arts-and-crafts-workshops-bengaluru?referrerBase=",
      text: [],
      metaImages: [],
      image: {
        url: "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:l-text,ie-MjU1KyBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-40,lx-50,ly-300,tg-b,pa-8_0_0_0,l-end/arts-and-crafts-collection-202305100822.png",
        altText: "Arts and Crafts",
      },
      tags: [],
      buttons: [],
      cardDivisions: [],
    },
    {
      id: "72eb7550-236c-4ede-bf6e-6f6c5a99451f",
      type: "vertical",
      styleId: "580671950667129662",
      ctaUrl:
        "https://in.bookmyshow.com/explore/workshops-bengaluru?referrerBase=",
      text: [],
      metaImages: [],
      image: {
        url: "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:l-text,ie-NDIwKyBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-40,lx-50,ly-300,tg-b,pa-8_0_0_0,l-end/workshops-and-more-collection-202305100822.png",
        altText: "Workshops",
      },
      tags: [],
      buttons: [],
      cardDivisions: [],
    },
    {
      id: "693eacc5-d604-4da4-ba80-f0f1623202e1",
      type: "vertical",
      styleId: "580671950667129662",
      ctaUrl:
        "https://in.bookmyshow.com/explore/gaming-bengaluru?referrerBase=",
      text: [],
      metaImages: [],
      image: {
        url: "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:l-text,ie-MTUrIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-40,lx-50,ly-300,tg-b,pa-8_0_0_0,l-end/interactive-games-collection-202305100822.png",
        altText: "Interactive Games",
      },
      tags: [],
      buttons: [],
      cardDivisions: [],
    },
    {
      id: "b12d9cac-f7a1-4f2d-a3c2-728f90ba10f6",
      type: "vertical",
      styleId: "580671950667129662",
      ctaUrl:
        "https://in.bookmyshow.com/explore/upskill-bengaluru?referrerBase=",
      text: [],
      metaImages: [],
      image: {
        url: "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:l-text,ie-MjUrIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-40,lx-50,ly-300,tg-b,pa-8_0_0_0,l-end/upskill-and-training-collection-202305100822.png",
        altText: "Upskill & training",
      },
      tags: [],
      buttons: [],
      cardDivisions: [],
    },
  ],
  snapping: false,
  fillViewport: false,
  childWidgets: [],
};

const ICD_TOP_NAV_MENU_MOBILE_VARIANT = {
  id: "ICD_TOP_NAV_MENU_MOBILE_VARIANT",
  type: "horizontal-scroll",
  isSticky: false,
  styleId: "5603708271604843483",
  visibleItems: 5.5,
  itemsPerRow: 60,
  horizontalSpacing: 0,
  verticalSpacing: 0,
  matchMaxCardHeight: true,
  cards: [
    {
      id: "36387972-7583-4c3d-89c9-5b84ef40e811",
      type: "vertical",
      styleId: "-3669474706481655019",
      ctaUrl:
        "https://in.bookmyshow.com/explore/movies-bengaluru?referrerBase=",
      text: [],
      metaImages: [],
      image: {
        url: "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/icd-movies-collection-202201201113.png",
        altText: "Cinema Movies",
      },
      tags: [],
      buttons: [],
      cardDivisions: [],
    },
    {
      id: "090aa846-e5f4-4194-a93f-4c69ad92800c",
      type: "vertical",
      styleId: "-3669474706481655019",
      ctaUrl: "https://ent-lounge.bookmyshow.com/",
      text: [],
      metaImages: [],
      image: {
        url: "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/hsbc-top-nav-icon-collection-202408011243.png",
        altText: "HSBC",
      },
      tags: [],
      buttons: [],
      cardDivisions: [],
    },
    {
      id: "af21bdb1-4773-40a4-a036-c53dd80d177a",
      type: "vertical",
      styleId: "-3669474706481655019",
      ctaUrl:
        "https://in.bookmyshow.com/explore/music-shows-bengaluru?referrerBase=",
      text: [],
      metaImages: [],
      image: {
        url: "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/icd-music-shows-collection-202201201113.png",
        altText: "Music Shows",
      },
      tags: [],
      buttons: [],
      cardDivisions: [],
    },
    {
      id: "93c7f02e-7ba3-4fe8-95f5-57dd5862e364",
      type: "vertical",
      styleId: "-3669474706481655019",
      ctaUrl:
        "https://in.bookmyshow.com/explore/comedy-shows-bengaluru?referrerBase=",
      text: [],
      metaImages: [],
      image: {
        url: "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/icd-comedy-shows-collection-202201201113.png",
        altText: "Comedy Shows",
      },
      tags: [],
      buttons: [],
      cardDivisions: [],
    },
    {
      id: "826e648b-2f37-4df5-bca6-c75b71070cc2",
      type: "vertical",
      styleId: "-3669474706481655019",
      ctaUrl:
        "https://in.bookmyshow.com/explore/sports-bengaluru?referrerBase=",
      text: [],
      metaImages: [],
      image: {
        url: "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/icd-sports-collection-202201201113.png",
        altText: "Sports",
      },
      tags: [],
      buttons: [],
      cardDivisions: [],
    },
    {
      id: "aa54d7a7-ffdf-47f7-8554-6ad464b7d373",
      type: "vertical",
      styleId: "-3669474706481655019",
      ctaUrl: "https://in.bookmyshow.com/explore/plays-bengaluru?referrerBase=",
      text: [],
      metaImages: [],
      image: {
        url: "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/icd-plays-collection-202201201113.png",
        altText: "Plays",
      },
      tags: [],
      buttons: [],
      cardDivisions: [],
    },
    {
      id: "b44d5edf-bfd0-4dab-819b-1d75c9efa60f",
      type: "vertical",
      styleId: "-3669474706481655019",
      ctaUrl: "https://in.bookmyshow.com/explore/c/see-all",
      text: [],
      metaImages: [],
      image: {
        url: "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/icd-see-all-collection-202201201113.png",
        altText: "See All",
      },
      tags: [],
      buttons: [],
      cardDivisions: [],
    },
  ],
  snapping: false,
  fillViewport: false,
  childWidgets: [],
};

const TOP_MOVIES_MOBILE = {
  id: "TOP_MOVIES_MOBILE",
  type: "horizontal-scroll",
  isSticky: false,
  styleId: "5340090739233308580",
  visibleItems: 2.75,
  itemsPerRow: 10,
  horizontalSpacing: 8,
  verticalSpacing: 0,
  title: {
    maxLines: 1,
    styleId: "7987316217275958678",
    components: [
      {
        type: "text",
        text: "Recommended Movies",
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
    url: "https://in.bookmyshow.com/explore/movies-bengaluru",
    analytics: {
      schema_version: "3.0",
      widget_id: "TOP_MOVIES_MOBILE",
      widget_title: "Recommended Movies",
      display_position: 4,
      title: "See All &rsaquo;",
      screen_name: "home_discover",
      event: "gtm_std_event",
      event_name: "view_all_clicked",
      event_type: "click",
      category: "movies",
      product: "movies",
      filtervalues: "",
      is_tvod: "",
      metadata: "",
    },
  },
  cards: [
    {
      id: "EG00435798",
      type: "vertical",
      styleId: "5207475275481226612",
      ctaUrl:
        "https://in.bookmyshow.com/bengaluru/movies/the-amateur/ET00437775",
      text: [
        {
          maxLines: 2,
          styleId: "7785389241114011138",
          components: [
            {
              type: "text",
              text: "The Amateur",
            },
          ],
        },
      ],
      metaImages: [
        {
          styleId: "-7802096846920430298",
          image: {
            url: "https://assets-in.bmscdn.com/discovery-catalog/icons/tr:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-30,ly-25,w-0.5,l-end:l-text,ie-M0s%3D,fs-48,ff-Roboto,lx-90,ly-15,pa-15_0_0_0,l-end:l-text,ie-bGlrZXM,fs-48,ff-Roboto,lx-158,ly-15,co-747EAA,pa-15_0_0_0,l-end/bottom-band-new-202212010458.png",
            altText: "123",
          },
        },
      ],
      image: {
        url: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00437775-dgulrlqznk-portrait.jpg",
        altText: "The Amateur",
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
      seoText: "The Amateur",
      cardDivisions: [],
    },
    {
      id: "EG00418338",
      type: "vertical",
      styleId: "5207475275481226612",
      ctaUrl: "https://in.bookmyshow.com/bengaluru/movies/vidyapati/ET00420153",
      text: [
        {
          maxLines: 2,
          styleId: "7785389241114011138",
          components: [
            {
              type: "text",
              text: "Vidyapati",
            },
          ],
        },
      ],
      metaImages: [
        {
          styleId: "-7802096846920430298",
          image: {
            url: "https://assets-in.bmscdn.com/discovery-catalog/icons/tr:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-30,ly-25,w-0.5,l-end:l-text,ie-Ni43Sw%3D%3D,fs-48,ff-Roboto,lx-90,ly-15,pa-15_0_0_0,l-end:l-text,ie-bGlrZXM,fs-48,ff-Roboto,lx-206,ly-15,co-747EAA,pa-15_0_0_0,l-end/bottom-band-new-202212010458.png",
            altText: "123",
          },
        },
      ],
      image: {
        url: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00420153-uupnwlhcxm-portrait.jpg",
        altText: "Vidyapati",
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
      seoText: "Vidyapati",
      cardDivisions: [],
    },
    {
      id: "EG00406996",
      type: "vertical",
      styleId: "5207475275481226612",
      ctaUrl: "https://in.bookmyshow.com/bengaluru/movies/chhaava/ET00408691",
      text: [
        {
          maxLines: 2,
          styleId: "7785389241114011138",
          components: [
            {
              type: "text",
              text: "Chhaava",
            },
          ],
        },
      ],
      metaImages: [
        {
          styleId: "-7802096846920430298",
          image: {
            url: "https://assets-in.bmscdn.com/discovery-catalog/icons/tr:l-image,i-discovery-catalog@@icons@@big-star-202212021156.png,lx-30,ly-22,w-0.5,l-end:l-text,ie-OS4y,fs-48,ff-Roboto,lx-90,ly-15,pa-15_0_0_0,l-end:l-text,ie-MzM5LjFL,fs-48,ff-Roboto,lx-190,ly-15,pa-15_0_0_0,l-end:l-text,ie-dm90ZXM,fs-48,ff-Roboto,lx-345,ly-15,co-747EAA,pa-15_0_0_0,l-end/bottom-band-new-202212010458.png",
            altText: "9.2",
          },
        },
      ],
      image: {
        url: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00408691-ccqetrbtcj-portrait.jpg",
        altText: "Chhaava",
      },
      tags: [],
      buttons: [],
      seoText: "Chhaava",
      cardDivisions: [],
    },
    {
      id: "EG00356098",
      type: "vertical",
      styleId: "5207475275481226612",
      ctaUrl: "https://in.bookmyshow.com/bengaluru/movies/bazooka/ET00357031",
      text: [
        {
          maxLines: 2,
          styleId: "7785389241114011138",
          components: [
            {
              type: "text",
              text: "Bazooka",
            },
          ],
        },
      ],
      metaImages: [
        {
          styleId: "-7802096846920430298",
          image: {
            url: "https://assets-in.bmscdn.com/discovery-catalog/icons/tr:l-image,i-discovery-catalog@@icons@@big-star-202212021156.png,lx-30,ly-22,w-0.5,l-end:l-text,ie-OC40,fs-48,ff-Roboto,lx-90,ly-15,pa-15_0_0_0,l-end:l-text,ie-OTY1,fs-48,ff-Roboto,lx-252,ly-15,pa-15_0_0_0,l-end:l-text,ie-dm90ZXM,fs-48,ff-Roboto,lx-345,ly-15,co-747EAA,pa-15_0_0_0,l-end/bottom-band-new-202212010458.png",
            altText: "8.4",
          },
        },
      ],
      image: {
        url: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00357031-zeeuldzzcj-portrait.jpg",
        altText: "Bazooka",
      },
      tags: [],
      buttons: [],
      seoText: "Bazooka",
      cardDivisions: [],
    },
    {
      id: "EG00438461",
      type: "vertical",
      styleId: "5207475275481226612",
      ctaUrl:
        "https://in.bookmyshow.com/bengaluru/movies/alappuzha-gymkhana/ET00440491",
      text: [
        {
          maxLines: 2,
          styleId: "7785389241114011138",
          components: [
            {
              type: "text",
              text: "Alappuzha Gymkhana",
            },
          ],
        },
      ],
      metaImages: [
        {
          styleId: "-7802096846920430298",
          image: {
            url: "https://assets-in.bmscdn.com/discovery-catalog/icons/tr:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-30,ly-25,w-0.5,l-end:l-text,ie-MzQuN0s%3D,fs-48,ff-Roboto,lx-90,ly-15,pa-15_0_0_0,l-end:l-text,ie-bGlrZXM,fs-48,ff-Roboto,lx-230,ly-15,co-747EAA,pa-15_0_0_0,l-end/bottom-band-new-202212010458.png",
            altText: "123",
          },
        },
      ],
      image: {
        url: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00440491-kwjrvtxnqk-portrait.jpg",
        altText: "Alappuzha Gymkhana",
      },
      tags: [],
      buttons: [],
      seoText: "Alappuzha Gymkhana",
      cardDivisions: [],
    },
    {
      id: "EG00415157",
      type: "vertical",
      styleId: "5207475275481226612",
      ctaUrl: "https://in.bookmyshow.com/bengaluru/movies/jaat/ET00416952",
      text: [
        {
          maxLines: 2,
          styleId: "7785389241114011138",
          components: [
            {
              type: "text",
              text: "Jaat",
            },
          ],
        },
      ],
      metaImages: [
        {
          styleId: "-7802096846920430298",
          image: {
            url: "https://assets-in.bmscdn.com/discovery-catalog/icons/tr:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-30,ly-25,w-0.5,l-end:l-text,ie-NTguN0s%3D,fs-48,ff-Roboto,lx-90,ly-15,pa-15_0_0_0,l-end:l-text,ie-bGlrZXM,fs-48,ff-Roboto,lx-230,ly-15,co-747EAA,pa-15_0_0_0,l-end/bottom-band-new-202212010458.png",
            altText: "123",
          },
        },
      ],
      image: {
        url: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00416952-zqedfpjhxe-portrait.jpg",
        altText: "Jaat",
      },
      tags: [],
      buttons: [],
      seoText: "Jaat",
      cardDivisions: [],
    },
    {
      id: "EG00421645",
      type: "vertical",
      styleId: "5207475275481226612",
      ctaUrl:
        "https://in.bookmyshow.com/bengaluru/movies/veera-dheera-sooran-part-2/ET00423507",
      text: [
        {
          maxLines: 2,
          styleId: "7785389241114011138",
          components: [
            {
              type: "text",
              text: "Veera Dheera Sooran - Part 2",
            },
          ],
        },
      ],
      metaImages: [
        {
          styleId: "-7802096846920430298",
          image: {
            url: "https://assets-in.bmscdn.com/discovery-catalog/icons/tr:l-image,i-discovery-catalog@@icons@@big-star-202212021156.png,lx-30,ly-22,w-0.5,l-end:l-text,ie-OC40,fs-48,ff-Roboto,lx-90,ly-15,pa-15_0_0_0,l-end:l-text,ie-MjdL,fs-48,ff-Roboto,lx-252,ly-15,pa-15_0_0_0,l-end:l-text,ie-dm90ZXM,fs-48,ff-Roboto,lx-345,ly-15,co-747EAA,pa-15_0_0_0,l-end/bottom-band-new-202212010458.png",
            altText: "8.4",
          },
        },
      ],
      image: {
        url: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00423507-bavrucgtpa-portrait.jpg",
        altText: "Veera Dheera Sooran - Part 2",
      },
      tags: [],
      buttons: [],
      seoText: "Veera Dheera Sooran - Part 2",
      cardDivisions: [],
    },
    {
      id: "EG00438340",
      type: "vertical",
      styleId: "5207475275481226612",
      ctaUrl:
        "https://in.bookmyshow.com/bengaluru/movies/maranamass/ET00440368",
      text: [
        {
          maxLines: 2,
          styleId: "7785389241114011138",
          components: [
            {
              type: "text",
              text: "Maranamass",
            },
          ],
        },
      ],
      metaImages: [
        {
          styleId: "-7802096846920430298",
          image: {
            url: "https://assets-in.bmscdn.com/discovery-catalog/icons/tr:l-image,i-discovery-catalog@@icons@@big-star-202212021156.png,lx-30,ly-22,w-0.5,l-end:l-text,ie-OS41,fs-48,ff-Roboto,lx-90,ly-15,pa-15_0_0_0,l-end:l-text,ie-MjM5,fs-48,ff-Roboto,lx-252,ly-15,pa-15_0_0_0,l-end:l-text,ie-dm90ZXM,fs-48,ff-Roboto,lx-345,ly-15,co-747EAA,pa-15_0_0_0,l-end/bottom-band-new-202212010458.png",
            altText: "9.5",
          },
        },
      ],
      image: {
        url: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00440368-jqdqfpqqnf-portrait.jpg",
        altText: "Maranamass",
      },
      tags: [],
      buttons: [],
      seoText: "Maranamass",
      cardDivisions: [],
    },
    {
      id: "EG00408970",
      type: "vertical",
      styleId: "5207475275481226612",
      ctaUrl:
        "https://in.bookmyshow.com/bengaluru/movies/a-minecraft-movie/ET00410687",
      text: [
        {
          maxLines: 2,
          styleId: "7785389241114011138",
          components: [
            {
              type: "text",
              text: "A Minecraft Movie",
            },
          ],
        },
      ],
      metaImages: [
        {
          styleId: "-7802096846920430298",
          image: {
            url: "https://assets-in.bmscdn.com/discovery-catalog/icons/tr:l-image,i-discovery-catalog@@icons@@big-star-202212021156.png,lx-30,ly-22,w-0.5,l-end:l-text,ie-OC4y,fs-48,ff-Roboto,lx-90,ly-15,pa-15_0_0_0,l-end:l-text,ie-Mi40Sw%3D%3D,fs-48,ff-Roboto,lx-245,ly-15,pa-15_0_0_0,l-end:l-text,ie-dm90ZXM,fs-48,ff-Roboto,lx-345,ly-15,co-747EAA,pa-15_0_0_0,l-end/bottom-band-new-202212010458.png",
            altText: "8.2",
          },
        },
      ],
      image: {
        url: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00410687-ctlnataapv-portrait.jpg",
        altText: "A Minecraft Movie",
      },
      tags: [],
      buttons: [],
      seoText: "A Minecraft Movie",
      cardDivisions: [],
    },
    {
      id: "EG00393319",
      type: "vertical",
      styleId: "5207475275481226612",
      ctaUrl: "https://in.bookmyshow.com/bengaluru/movies/sikandar/ET00394804",
      text: [
        {
          maxLines: 2,
          styleId: "7785389241114011138",
          components: [
            {
              type: "text",
              text: "Sikandar",
            },
          ],
        },
      ],
      metaImages: [
        {
          styleId: "-7802096846920430298",
          image: {
            url: "https://assets-in.bmscdn.com/discovery-catalog/icons/tr:l-image,i-discovery-catalog@@icons@@big-star-202212021156.png,lx-30,ly-22,w-0.5,l-end:l-text,ie-Ni4x,fs-48,ff-Roboto,lx-90,ly-15,pa-15_0_0_0,l-end:l-text,ie-MjguOEs%3D,fs-48,ff-Roboto,lx-212,ly-15,pa-15_0_0_0,l-end:l-text,ie-dm90ZXM,fs-48,ff-Roboto,lx-345,ly-15,co-747EAA,pa-15_0_0_0,l-end/bottom-band-new-202212010458.png",
            altText: "6.1",
          },
        },
      ],
      image: {
        url: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00394804-ujrgqmlwjv-portrait.jpg",
        altText: "Sikandar",
      },
      tags: [],
      buttons: [],
      seoText: "Sikandar",
      cardDivisions: [],
    },
  ],
  snapping: false,
  fillViewport: false,
};

const ULTIMATE_EVENTS_LIST_COLLECTIONS_IOS_MWEB_VARIANT = {
  id: "ULTIMATE_EVENTS_LIST_COLLECTIONS_IOS_MWEB_VARIANT",
  type: "horizontal-scroll",
  isSticky: false,
  styleId: "2040790894673779911",
  visibleItems: 2.2,
  itemsPerRow: 4,
  horizontalSpacing: 16,
  verticalSpacing: 16,
  title: {
    maxLines: 1,
    styleId: "-8176765359127332365",
    components: [
      {
        type: "text",
        text: "The Ultimate Events List",
      },
    ],
  },
  subtitle: {
    maxLines: 1,
    styleId: "981900565152682651",
    components: [
      {
        type: "text",
        text: "Good times outdoor or at home",
      },
    ],
  },
  matchMaxCardHeight: true,
  cards: [
    {
      id: "782e4e28-5779-4312-a5d4-27919d98e556",
      type: "vertical",
      styleId: "580671950667129662",
      ctaUrl:
        "https://in.bookmyshow.com/explore/wellbeing-starts-here-bengaluru?referrerBase=",
      text: [],
      metaImages: [],
      image: {
        url: "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:l-text,ie-MzA1KyBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-40,lx-50,ly-300,tg-b,pa-8_0_0_0,l-end/wellness-events-collection-202305100824.png",
        altText: "WellBeing",
      },
      tags: [],
      analytics: {
        id: "ultimate_events_list_collections_ios_mweb_variant_wellbeing",
        in_widget_position: 1,
        schema_version: "3.0",
        widget_id: "ULTIMATE_EVENTS_LIST_COLLECTIONS_IOS_MWEB_VARIANT",
        widget_title: "The Ultimate Events List",
        display_position: 12,
        title: "WellBeing",
        screen_name: "home_discover",
        event: "gtm_std_event",
        event_name: "card_clicked",
        event_type: "click",
        region_code: "BANG",
        category: "health-and-fitness|workshops|events",
        tags: "",
        genre: "",
        language: "",
        product: "events",
        label: "BMS_Transactors_17102023|LE_Transactors_1yr_08042024",
        is_tvod: "",
        metadata: "",
      },
      impressionAnalytics: {
        schema_version: "3.0",
        screen_name: "home_discover",
        event_name: "card_viewed",
        event_type: "impression",
        is_tvod: "",
        metadata: "",
      },
      buttons: [],
      cardDivisions: [],
    },
    {
      id: "14b0436b-3371-482e-9adf-b9d0c79c6c45",
      type: "vertical",
      styleId: "580671950667129662",
      ctaUrl:
        "https://in.bookmyshow.com/explore/experience-stage-craft-bengaluru?referrerBase=",
      text: [],
      metaImages: [],
      image: {
        url: "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:l-text,ie-MTI1KyBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-40,lx-50,ly-300,tg-b,pa-8_0_0_0,l-end/enjoy-plays-and-performance-collection-202305100824.png",
        altText: "Experience Stage",
      },
      tags: [],
      analytics: {
        id: "ultimate_events_list_collections_ios_mweb_variant_experience-stage",
        in_widget_position: 2,
        schema_version: "3.0",
        widget_id: "ULTIMATE_EVENTS_LIST_COLLECTIONS_IOS_MWEB_VARIANT",
        widget_title: "The Ultimate Events List",
        display_position: 12,
        title: "Experience Stage",
        screen_name: "home_discover",
        event: "gtm_std_event",
        event_name: "card_clicked",
        event_type: "click",
        region_code: "BANG",
        category: "plays",
        tags: "",
        genre: "",
        language: "",
        product: "plays",
        label: "BMS_Transactors_17102023|LE_Transactors_1yr_08042024",
        is_tvod: "",
        metadata: "",
      },
      impressionAnalytics: {
        schema_version: "3.0",
        screen_name: "home_discover",
        event_name: "card_viewed",
        event_type: "impression",
        is_tvod: "",
        metadata: "",
      },
      buttons: [],
      cardDivisions: [],
    },
    {
      id: "f572ceeb-f1dd-4d49-9d98-bc6f3ac2d423",
      type: "vertical",
      styleId: "580671950667129662",
      ctaUrl:
        "https://in.bookmyshow.com/explore/head-out-hang-out-bengaluru?referrerBase=",
      text: [],
      metaImages: [],
      image: {
        url: "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:l-text,ie-Mzk1KyBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-40,lx-50,ly-300,tg-b,pa-8_0_0_0,l-end/comedy-music-and-more-collection-202305100824.png",
        altText: "Head Hang Out",
      },
      tags: [],
      analytics: {
        id: "ultimate_events_list_collections_ios_mweb_variant_head-hang-out",
        in_widget_position: 3,
        schema_version: "3.0",
        widget_id: "ULTIMATE_EVENTS_LIST_COLLECTIONS_IOS_MWEB_VARIANT",
        widget_title: "The Ultimate Events List",
        display_position: 12,
        title: "Head Hang Out",
        screen_name: "home_discover",
        event: "gtm_std_event",
        event_name: "card_clicked",
        event_type: "click",
        region_code: "BANG",
        category: "comedy-shows|events",
        tags: "outdoor-events",
        genre: "",
        language: "",
        product: "events",
        label: "BMS_Transactors_17102023|LE_Transactors_1yr_08042024",
        is_tvod: "",
        metadata: "",
      },
      impressionAnalytics: {
        schema_version: "3.0",
        screen_name: "home_discover",
        event_name: "card_viewed",
        event_type: "impression",
        is_tvod: "",
        metadata: "",
      },
      buttons: [],
      cardDivisions: [],
    },
    {
      id: "aec2e503-d888-4675-92b1-77b48989edc3",
      type: "vertical",
      styleId: "580671950667129662",
      ctaUrl:
        "https://in.bookmyshow.com/explore/fuel-your-passion-bengaluru?referrerBase=",
      text: [],
      metaImages: [],
      image: {
        url: "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:l-text,ie-MzY1KyBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-40,lx-50,ly-300,tg-b,pa-8_0_0_0,l-end/grow-out-hobby-collection-202305100824.png",
        altText: "Fuel Passion",
      },
      tags: [],
      analytics: {
        id: "ultimate_events_list_collections_ios_mweb_variant_fuel-passion",
        in_widget_position: 4,
        schema_version: "3.0",
        widget_id: "ULTIMATE_EVENTS_LIST_COLLECTIONS_IOS_MWEB_VARIANT",
        widget_title: "The Ultimate Events List",
        display_position: 12,
        title: "Fuel Passion",
        screen_name: "home_discover",
        event: "gtm_std_event",
        event_name: "card_clicked",
        event_type: "click",
        region_code: "BANG",
        category: "dance-workshops|workshops|events",
        tags: "",
        genre: "",
        language: "",
        product: "events",
        label: "BMS_Transactors_17102023|LE_Transactors_1yr_08042024",
        is_tvod: "",
        metadata: "",
      },
      impressionAnalytics: {
        schema_version: "3.0",
        screen_name: "home_discover",
        event_name: "card_viewed",
        event_type: "impression",
        is_tvod: "",
        metadata: "",
      },
      buttons: [],
      cardDivisions: [],
    },
    {
      id: "e06a0ce4-9d9d-4443-b1ea-c4b3068aa5af",
      type: "vertical",
      styleId: "580671950667129662",
      ctaUrl:
        "https://in.bookmyshow.com/explore/level-up-career-bengaluru?referrerBase=",
      text: [],
      metaImages: [],
      image: {
        url: "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:l-text,ie-MjA1KyBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-40,lx-50,ly-300,tg-b,pa-8_0_0_0,l-end/courses-and-master-class-collection-202305100824.png",
        altText: "Level Up",
      },
      tags: [],
      analytics: {
        id: "ultimate_events_list_collections_ios_mweb_variant_level-up",
        in_widget_position: 5,
        schema_version: "3.0",
        widget_id: "ULTIMATE_EVENTS_LIST_COLLECTIONS_IOS_MWEB_VARIANT",
        widget_title: "The Ultimate Events List",
        display_position: 12,
        title: "Level Up",
        screen_name: "home_discover",
        event: "gtm_std_event",
        event_name: "card_clicked",
        event_type: "click",
        region_code: "BANG",
        category: "conferences|events",
        tags: "",
        genre: "",
        language: "",
        product: "events",
        label: "BMS_Transactors_17102023|LE_Transactors_1yr_08042024",
        is_tvod: "",
        metadata: "",
      },
      impressionAnalytics: {
        schema_version: "3.0",
        screen_name: "home_discover",
        event_name: "card_viewed",
        event_type: "impression",
        is_tvod: "",
        metadata: "",
      },
      buttons: [],
      cardDivisions: [],
    },
    {
      id: "85b6e471-4cca-49fa-86a7-7ca68e8d1961",
      type: "vertical",
      styleId: "580671950667129662",
      ctaUrl:
        "https://in.bookmyshow.com/explore/new-adventure-awaits-bengaluru?referrerBase=",
      text: [],
      metaImages: [],
      image: {
        url: "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:l-text,ie-Mjg1KyBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-40,lx-50,ly-300,tg-b,pa-8_0_0_0,l-end/thrilling-activities-collection-202309120630.png",
        altText: "Thrilling Activities",
      },
      tags: [],
      analytics: {
        id: "ultimate_events_list_collections_ios_mweb_variant_thrilling-activities",
        in_widget_position: 6,
        schema_version: "3.0",
        widget_id: "ULTIMATE_EVENTS_LIST_COLLECTIONS_IOS_MWEB_VARIANT",
        widget_title: "The Ultimate Events List",
        display_position: 12,
        title: "Thrilling Activities",
        screen_name: "home_discover",
        event: "gtm_std_event",
        event_name: "card_clicked",
        event_type: "click",
        region_code: "BANG",
        category: "amusement-parks|activities",
        tags: "",
        genre: "",
        language: "",
        product: "activities",
        label: "BMS_Transactors_17102023|LE_Transactors_1yr_08042024",
        is_tvod: "",
        metadata: "",
      },
      impressionAnalytics: {
        schema_version: "3.0",
        screen_name: "home_discover",
        event_name: "card_viewed",
        event_type: "impression",
        is_tvod: "",
        metadata: "",
      },
      buttons: [],
      cardDivisions: [],
    },
  ],
  analytics: {
    id: "ultimate_events_list_collections_ios_mweb_variant",
    schema_version: "3.0",
    is_tvod: "",
    metadata: "",
  },
  impressionAnalytics: {
    schema_version: "3.0",
    widget_id: "ULTIMATE_EVENTS_LIST_COLLECTIONS_IOS_MWEB_VARIANT",
    widget_title: "The Ultimate Events List",
    display_position: 12,
    screen_name: "home_discover",
    event: "gtm_allpages",
    event_name: "widget_viewed",
    event_type: "impression",
    category: "",
    product: "discovery",
    filtervalues: "",
    is_tvod: "",
    metadata: "",
  },
  snapping: false,
  fillViewport: false,
  childWidgets: [],
};

const TVOD_SHOWCASE = {
  id: "TVOD_SHOWCASE",
  type: "carousel",
  isSticky: false,
  styleId: "8429547327424683329",
  horizontalSpacing: 16,
  title: {
    maxLines: 1,
    styleId: "-4509315044828611300",
    components: [
      {
        type: "text",
        text: "Watch Top Movies Online",
      },
    ],
  },
  subtitle: {
    maxLines: 1,
    styleId: "-5103615806931264414",
    components: [
      {
        type: "text",
        text: "Buy or Rent movies on BMS STREAM",
      },
    ],
  },
  matchMaxCardHeight: false,
  cards: [
    {
      id: "EG00420522",
      type: "horizontal",
      styleId: "6034184666535124515",
      ctaUrl:
        "https://in.bookmyshow.com/bengaluru/movies/the-brutalist/ET00422382",
      text: [
        {
          maxLines: 2,
          styleId: "-6553488546853243560",
          components: [
            {
              type: "text",
              text: "The Brutalist",
            },
          ],
        },
        {
          maxLines: 2,
          styleId: "8335147091351660677",
          components: [
            {
              type: "text",
              text: "3h 34m • Drama, Historical • A",
            },
          ],
        },
        {
          maxLines: 2,
          styleId: "730510250647356683",
          components: [
            {
              type: "text",
              text: "English, Hindi",
            },
          ],
        },
        {
          maxLines: 3,
          styleId: "2893295442276044474",
          components: [
            {
              type: "text",
              text: "Escaping postwar Europe, visionary architect Lszl Toth arrives in America to rebuild his life, his career, and his marriage. On his own in a strange new country, Lszl settles in Pennsylvania, where the wealthy and prominent industrialist Harrison Lee Van Buren recognizes his talent.",
            },
          ],
        },
      ],
      metaImages: [],
      image: {
        url: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00422382-tlrwuczldt-portrait.jpg",
        altText: "The Brutalist",
      },
      tags: [],
      analytics: {
        id: "tvod_showcase_eg00420522_et00422382",
        in_widget_position: 1,
        schema_version: "3.0",
        widget_id: "TVOD_SHOWCASE",
        widget_title: "Watch Top Movies Online",
        display_position: 11,
        title: "The Brutalist",
        screen_name: "home_discover",
        event: "gtm_std_event",
        event_name: "card_clicked",
        event_type: "click",
        event_code: "ET00422382",
        event_group: "EG00420522",
        region_code: "BANG",
        category: "",
        tags: "bms-premier|coming-soon|online-streaming",
        genre: "drama|historical",
        language: "english",
        product: "movies",
        label: "BMS_Transactors_17102023|LE_Transactors_1yr_08042024",
        is_tvod: "",
        metadata: "",
      },
      impressionAnalytics: {
        schema_version: "3.0",
        screen_name: "home_discover",
        event_name: "card_viewed",
        event_type: "impression",
        is_tvod: "",
        metadata: "",
      },
      buttons: [
        {
          styleId: "4132622510035248234",
          label: {
            maxLines: 1,
            styleId: "-3341313454232951668",
            components: [
              {
                type: "text",
                text: "Buy or Rent",
              },
            ],
          },
          ctaUrl:
            "https://in.bookmyshow.com/bengaluru/movies/the-brutalist/ET00422382",
          analytics: {
            id: "tvod_showcase_eg00420522_et00422382",
            in_widget_position: 1,
            schema_version: "3.0",
            widget_id: "TVOD_SHOWCASE",
            widget_title: "Watch Top Movies Online",
            display_position: 11,
            title: "The Brutalist",
            screen_name: "home_discover",
            event: "gtm_std_event",
            event_name: "card_clicked",
            event_type: "click",
            event_code: "ET00422382",
            event_group: "EG00420522",
            region_code: "BANG",
            category: "",
            tags: "bms-premier|coming-soon|online-streaming",
            genre: "drama|historical",
            language: "english",
            product: "movies",
            label: "BMS_Transactors_17102023|LE_Transactors_1yr_08042024",
            is_tvod: "",
            metadata: "",
          },
        },
      ],
      seoText: "The Brutalist",
    },
    {
      id: "EG00428660",
      type: "horizontal",
      styleId: "6034184666535124515",
      ctaUrl: "https://in.bookmyshow.com/bengaluru/movies/babygirl/ET00430586",
      text: [
        {
          maxLines: 2,
          styleId: "-6553488546853243560",
          components: [
            {
              type: "text",
              text: "Babygirl",
            },
          ],
        },
        {
          maxLines: 2,
          styleId: "8335147091351660677",
          components: [
            {
              type: "text",
              text: "1h 53m • Drama, Romantic, Thriller • A",
            },
          ],
        },
        {
          maxLines: 2,
          styleId: "730510250647356683",
          components: [
            {
              type: "text",
              text: "English",
            },
          ],
        },
        {
          maxLines: 3,
          styleId: "2893295442276044474",
          components: [
            {
              type: "text",
              text: "A high-powered CEO puts her career and family on the line when she begins a torrid affair with her much younger intern.",
            },
          ],
        },
      ],
      metaImages: [],
      image: {
        url: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00430586-geekxfypdv-portrait.jpg",
        altText: "Babygirl",
      },
      tags: [],
      analytics: {
        id: "tvod_showcase_eg00428660_et00430586",
        in_widget_position: 2,
        schema_version: "3.0",
        widget_id: "TVOD_SHOWCASE",
        widget_title: "Watch Top Movies Online",
        display_position: 11,
        title: "Babygirl",
        screen_name: "home_discover",
        event: "gtm_std_event",
        event_name: "card_clicked",
        event_type: "click",
        event_code: "ET00430586",
        event_group: "EG00428660",
        region_code: "BANG",
        category: "",
        tags: "bms-premier|online-streaming|premieres-of-the-week",
        genre: "drama|romantic|thriller",
        language: "english",
        product: "movies",
        label: "BMS_Transactors_17102023|LE_Transactors_1yr_08042024",
        is_tvod: "",
        metadata: "",
      },
      impressionAnalytics: {
        schema_version: "3.0",
        screen_name: "home_discover",
        event_name: "card_viewed",
        event_type: "impression",
        is_tvod: "",
        metadata: "",
      },
      buttons: [
        {
          styleId: "4132622510035248234",
          label: {
            maxLines: 1,
            styleId: "-3341313454232951668",
            components: [
              {
                type: "text",
                text: "Buy or Rent",
              },
            ],
          },
          ctaUrl:
            "https://in.bookmyshow.com/bengaluru/movies/babygirl/ET00430586",
          analytics: {
            id: "tvod_showcase_eg00428660_et00430586",
            in_widget_position: 2,
            schema_version: "3.0",
            widget_id: "TVOD_SHOWCASE",
            widget_title: "Watch Top Movies Online",
            display_position: 11,
            title: "Babygirl",
            screen_name: "home_discover",
            event: "gtm_std_event",
            event_name: "card_clicked",
            event_type: "click",
            event_code: "ET00430586",
            event_group: "EG00428660",
            region_code: "BANG",
            category: "",
            tags: "bms-premier|online-streaming|premieres-of-the-week",
            genre: "drama|romantic|thriller",
            language: "english",
            product: "movies",
            label: "BMS_Transactors_17102023|LE_Transactors_1yr_08042024",
            is_tvod: "",
            metadata: "",
          },
        },
      ],
      seoText: "Babygirl",
    },
    {
      id: "EG00438360",
      type: "horizontal",
      styleId: "6034184666535124515",
      ctaUrl:
        "https://in.bookmyshow.com/bengaluru/movies/missing-face/ET00440385",
      text: [
        {
          maxLines: 2,
          styleId: "-6553488546853243560",
          components: [
            {
              type: "text",
              text: "Missing Face",
            },
          ],
        },
        {
          maxLines: 2,
          styleId: "8335147091351660677",
          components: [
            {
              type: "text",
              text: "1h 36m • Suspense, Thriller • UA",
            },
          ],
        },
        {
          maxLines: 2,
          styleId: "730510250647356683",
          components: [
            {
              type: "text",
              text: "Hindi",
            },
          ],
        },
        {
          maxLines: 3,
          styleId: "2893295442276044474",
          components: [
            {
              type: "text",
              text: "Aryan suffers from a rare neurological disorder, face blindness, that prevents him from recognizing faces, even of those closest to him. Six months after his younger brother Rohan mysteriously disappears, Aryan receives an urgent SOS call from him. The last time Aryan saw Rohan was during a campfire night with friends, where Aryan witnessed someone being thrown off a cliffbut due to his condition, he couldnt identify the victim or the perpetrators. When Aryan reports this to the police, hes stunned to learn that every person present at the campfire is still alive. So, who died that night? And who is now threatening Rohan? As Aryan races against time to find his brother, he is met with increasing hostility from his friends, skepticism from the police, and his own mind working against him. With his closest allies turning on him and his inability to even recognize his own face in the mirror, Aryan must uncover the truth behind Rohans disappearance. But is he being set up to take the fall for a crime he didnt commit? Or worsehis own murder?",
            },
          ],
        },
      ],
      metaImages: [],
      image: {
        url: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00440385-yedfulnjmg-portrait.jpg",
        altText: "Missing Face",
      },
      tags: [],
      analytics: {
        id: "tvod_showcase_eg00438360_et00440385",
        in_widget_position: 3,
        schema_version: "3.0",
        widget_id: "TVOD_SHOWCASE",
        widget_title: "Watch Top Movies Online",
        display_position: 11,
        title: "Missing Face",
        screen_name: "home_discover",
        event: "gtm_std_event",
        event_name: "card_clicked",
        event_type: "click",
        event_code: "ET00440385",
        event_group: "EG00438360",
        region_code: "BANG",
        category: "",
        tags: "bms-premier|coming-soon|online-streaming",
        genre: "suspense|thriller",
        language: "hindi",
        product: "movies",
        label: "BMS_Transactors_17102023|LE_Transactors_1yr_08042024",
        is_tvod: "",
        metadata: "",
      },
      impressionAnalytics: {
        schema_version: "3.0",
        screen_name: "home_discover",
        event_name: "card_viewed",
        event_type: "impression",
        is_tvod: "",
        metadata: "",
      },
      buttons: [
        {
          styleId: "4132622510035248234",
          label: {
            maxLines: 1,
            styleId: "-3341313454232951668",
            components: [
              {
                type: "text",
                text: "Buy or Rent",
              },
            ],
          },
          ctaUrl:
            "https://in.bookmyshow.com/bengaluru/movies/missing-face/ET00440385",
          analytics: {
            id: "tvod_showcase_eg00438360_et00440385",
            in_widget_position: 3,
            schema_version: "3.0",
            widget_id: "TVOD_SHOWCASE",
            widget_title: "Watch Top Movies Online",
            display_position: 11,
            title: "Missing Face",
            screen_name: "home_discover",
            event: "gtm_std_event",
            event_name: "card_clicked",
            event_type: "click",
            event_code: "ET00440385",
            event_group: "EG00438360",
            region_code: "BANG",
            category: "",
            tags: "bms-premier|coming-soon|online-streaming",
            genre: "suspense|thriller",
            language: "hindi",
            product: "movies",
            label: "BMS_Transactors_17102023|LE_Transactors_1yr_08042024",
            is_tvod: "",
            metadata: "",
          },
        },
      ],
      seoText: "Missing Face",
    },
    {
      id: "EG00438611",
      type: "horizontal",
      styleId: "6034184666535124515",
      ctaUrl:
        "https://in.bookmyshow.com/bengaluru/movies/aamir-khan-and-mansoor-khan-at-red-lorry-film-festival/ET00440648",
      text: [
        {
          maxLines: 2,
          styleId: "-6553488546853243560",
          components: [
            {
              type: "text",
              text: "Aamir Khan and Mansoor Khan at Red Lorry Film Festival",
            },
          ],
        },
        {
          maxLines: 2,
          styleId: "8335147091351660677",
          components: [
            {
              type: "text",
              text: "Drama",
            },
          ],
        },
        {
          maxLines: 2,
          styleId: "730510250647356683",
          components: [
            {
              type: "text",
              text: "Hinglish",
            },
          ],
        },
        {
          maxLines: 3,
          styleId: "2893295442276044474",
          components: [
            {
              type: "text",
              text: "At the Red Lorry Film Festival, Aamir Khan and Mansoor Khan reunited to share the behind-the-scenes story of their iconic film, Qayamat Se Qayamat Tak (QSQT), marking their first movie experience together. The session offered a fascinating look into the making of the film that changed the course of Bollywood romance. Aamir Khan, in his early days as an actor, spoke about the challenges and joys of playing Raj, a role that became a defining moment in his career. Mansoor Khan, the visionary director, reflected on the creative process and how the film`s unique narrative, music, and emotional depth came together. Their conversation also delved into the challenges of creating a love story with such universal appeal, overcoming the odds of familial conflicts and societal norms. Celebrity/Guest: Mansoor Khan, Aamir Khan",
            },
          ],
        },
      ],
      metaImages: [],
      image: {
        url: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00440648-utxneucxsf-portrait.jpg",
        altText: "Aamir Khan and Mansoor Khan at Red Lorry Film Festival",
      },
      tags: [],
      analytics: {
        id: "tvod_showcase_eg00438611_et00440648",
        in_widget_position: 4,
        schema_version: "3.0",
        widget_id: "TVOD_SHOWCASE",
        widget_title: "Watch Top Movies Online",
        display_position: 11,
        title: "Aamir Khan and Mansoor Khan at Red Lorry Film Festival",
        screen_name: "home_discover",
        event: "gtm_std_event",
        event_name: "card_clicked",
        event_type: "click",
        event_code: "ET00440648",
        event_group: "EG00438611",
        region_code: "BANG",
        category: "",
        tags: "bms-premier|online-streaming|premieres-of-the-week|the-redlorry-masterclass",
        genre: "drama",
        language: "hinglish",
        product: "movies",
        label: "BMS_Transactors_17102023|LE_Transactors_1yr_08042024",
        is_tvod: "",
        metadata: "",
      },
      impressionAnalytics: {
        schema_version: "3.0",
        screen_name: "home_discover",
        event_name: "card_viewed",
        event_type: "impression",
        is_tvod: "",
        metadata: "",
      },
      buttons: [
        {
          styleId: "4132622510035248234",
          label: {
            maxLines: 1,
            styleId: "-3341313454232951668",
            components: [
              {
                type: "text",
                text: "Buy or Rent",
              },
            ],
          },
          ctaUrl:
            "https://in.bookmyshow.com/bengaluru/movies/aamir-khan-and-mansoor-khan-at-red-lorry-film-festival/ET00440648",
          analytics: {
            id: "tvod_showcase_eg00438611_et00440648",
            in_widget_position: 4,
            schema_version: "3.0",
            widget_id: "TVOD_SHOWCASE",
            widget_title: "Watch Top Movies Online",
            display_position: 11,
            title: "Aamir Khan and Mansoor Khan at Red Lorry Film Festival",
            screen_name: "home_discover",
            event: "gtm_std_event",
            event_name: "card_clicked",
            event_type: "click",
            event_code: "ET00440648",
            event_group: "EG00438611",
            region_code: "BANG",
            category: "",
            tags: "bms-premier|online-streaming|premieres-of-the-week|the-redlorry-masterclass",
            genre: "drama",
            language: "hinglish",
            product: "movies",
            label: "BMS_Transactors_17102023|LE_Transactors_1yr_08042024",
            is_tvod: "",
            metadata: "",
          },
        },
      ],
      seoText: "Aamir Khan and Mansoor Khan at Red Lorry Film Festival",
    },
    {
      id: "EG00420527",
      type: "horizontal",
      styleId: "6034184666535124515",
      ctaUrl:
        "https://in.bookmyshow.com/bengaluru/movies/bridget-jones-mad-about-the-boy/ET00422388",
      text: [
        {
          maxLines: 2,
          styleId: "-6553488546853243560",
          components: [
            {
              type: "text",
              text: "Bridget Jones: Mad About the Boy",
            },
          ],
        },
        {
          maxLines: 2,
          styleId: "8335147091351660677",
          components: [
            {
              type: "text",
              text: "2h 5m • Comedy, Romantic • A",
            },
          ],
        },
        {
          maxLines: 2,
          styleId: "730510250647356683",
          components: [
            {
              type: "text",
              text: "English",
            },
          ],
        },
        {
          maxLines: 3,
          styleId: "2893295442276044474",
          components: [
            {
              type: "text",
              text: 'As a single career woman living in London, Bridget Jones not only introduced the world to her romantic adventures, but added "Singletons," "Smug-Marrieds" and "f---wittage" into the global lexicon. Bridget`s ability to triumph despite adversity led her to finally marry top lawyer Mark Darcy and to become the mother of their baby boy. Happiness at last. But in Bridget Jones: Mad About the Boy, Bridget is alone once again, widowed four years ago, when Mark was killed on a humanitarian mission in the Sudan. She`s now a single mother to 9-year-old Billy and 4-year-old Mabel, and is stuck in a state of emotional limbo, raising her children with help from her loyal friends and even her former lover, Daniel Cleaver (Hugh Grant). Pressured by her Urban Family -Shazzer, Jude and Tom, her work colleague Miranda, her mother, and her gynecologist Dr. Rawlings (Oscar_ winner Emma Thompson) - to forge a new path toward life and love, Bridget goes back to work and even tries out the dating apps, where she`s soon pursued by a dreamy and enthusiastic younger man (Leo Woodall). Now juggling work, home and romance, Bridget grapples with the judgment of the perfect mums at school, worries about Billy as he struggles with the absence of his father, and engages in a series of awkward interactions with her son`s rational-to-a-fault science teacher (Oscar_ nominee Chiwetel Ejiofor).',
            },
          ],
        },
      ],
      metaImages: [],
      image: {
        url: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00422388-syqydxdukt-portrait.jpg",
        altText: "Bridget Jones: Mad About the Boy",
      },
      tags: [],
      analytics: {
        id: "tvod_showcase_eg00420527_et00422388",
        in_widget_position: 5,
        schema_version: "3.0",
        widget_id: "TVOD_SHOWCASE",
        widget_title: "Watch Top Movies Online",
        display_position: 11,
        title: "Bridget Jones: Mad About the Boy",
        screen_name: "home_discover",
        event: "gtm_std_event",
        event_name: "card_clicked",
        event_type: "click",
        event_code: "ET00422388",
        event_group: "EG00420527",
        region_code: "BANG",
        category: "",
        tags: "bms-past-premier|online-streaming",
        genre: "comedy|romantic",
        language: "english",
        product: "movies",
        label: "BMS_Transactors_17102023|LE_Transactors_1yr_08042024",
        is_tvod: "",
        metadata: "",
      },
      impressionAnalytics: {
        schema_version: "3.0",
        screen_name: "home_discover",
        event_name: "card_viewed",
        event_type: "impression",
        is_tvod: "",
        metadata: "",
      },
      buttons: [
        {
          styleId: "4132622510035248234",
          label: {
            maxLines: 1,
            styleId: "-3341313454232951668",
            components: [
              {
                type: "text",
                text: "Buy or Rent",
              },
            ],
          },
          ctaUrl:
            "https://in.bookmyshow.com/bengaluru/movies/bridget-jones-mad-about-the-boy/ET00422388",
          analytics: {
            id: "tvod_showcase_eg00420527_et00422388",
            in_widget_position: 5,
            schema_version: "3.0",
            widget_id: "TVOD_SHOWCASE",
            widget_title: "Watch Top Movies Online",
            display_position: 11,
            title: "Bridget Jones: Mad About the Boy",
            screen_name: "home_discover",
            event: "gtm_std_event",
            event_name: "card_clicked",
            event_type: "click",
            event_code: "ET00422388",
            event_group: "EG00420527",
            region_code: "BANG",
            category: "",
            tags: "bms-past-premier|online-streaming",
            genre: "comedy|romantic",
            language: "english",
            product: "movies",
            label: "BMS_Transactors_17102023|LE_Transactors_1yr_08042024",
            is_tvod: "",
            metadata: "",
          },
        },
      ],
      seoText: "Bridget Jones: Mad About the Boy",
    },
    {
      id: "EG00430118",
      type: "horizontal",
      styleId: "6034184666535124515",
      ctaUrl:
        "https://in.bookmyshow.com/bengaluru/movies/the-last-showgirl/ET00432058",
      text: [
        {
          maxLines: 2,
          styleId: "-6553488546853243560",
          components: [
            {
              type: "text",
              text: "The Last Showgirl",
            },
          ],
        },
        {
          maxLines: 2,
          styleId: "8335147091351660677",
          components: [
            {
              type: "text",
              text: "1h 25m • Drama • 18+",
            },
          ],
        },
        {
          maxLines: 2,
          styleId: "730510250647356683",
          components: [
            {
              type: "text",
              text: "English",
            },
          ],
        },
        {
          maxLines: 3,
          styleId: "2893295442276044474",
          components: [
            {
              type: "text",
              text: "A glamorous showgirl must plan for her future when her show abruptly closes after a 30-year run.",
            },
          ],
        },
      ],
      metaImages: [],
      image: {
        url: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00432058-jeakpvagkl-portrait.jpg",
        altText: "The Last Showgirl",
      },
      tags: [],
      analytics: {
        id: "tvod_showcase_eg00430118_et00432058",
        in_widget_position: 6,
        schema_version: "3.0",
        widget_id: "TVOD_SHOWCASE",
        widget_title: "Watch Top Movies Online",
        display_position: 11,
        title: "The Last Showgirl",
        screen_name: "home_discover",
        event: "gtm_std_event",
        event_name: "card_clicked",
        event_type: "click",
        event_code: "ET00432058",
        event_group: "EG00430118",
        region_code: "BANG",
        category: "",
        tags: "bms-past-premier|online-streaming",
        genre: "drama",
        language: "english",
        product: "movies",
        label: "BMS_Transactors_17102023|LE_Transactors_1yr_08042024",
        is_tvod: "",
        metadata: "",
      },
      impressionAnalytics: {
        schema_version: "3.0",
        screen_name: "home_discover",
        event_name: "card_viewed",
        event_type: "impression",
        is_tvod: "",
        metadata: "",
      },
      buttons: [
        {
          styleId: "4132622510035248234",
          label: {
            maxLines: 1,
            styleId: "-3341313454232951668",
            components: [
              {
                type: "text",
                text: "Buy or Rent",
              },
            ],
          },
          ctaUrl:
            "https://in.bookmyshow.com/bengaluru/movies/the-last-showgirl/ET00432058",
          analytics: {
            id: "tvod_showcase_eg00430118_et00432058",
            in_widget_position: 6,
            schema_version: "3.0",
            widget_id: "TVOD_SHOWCASE",
            widget_title: "Watch Top Movies Online",
            display_position: 11,
            title: "The Last Showgirl",
            screen_name: "home_discover",
            event: "gtm_std_event",
            event_name: "card_clicked",
            event_type: "click",
            event_code: "ET00432058",
            event_group: "EG00430118",
            region_code: "BANG",
            category: "",
            tags: "bms-past-premier|online-streaming",
            genre: "drama",
            language: "english",
            product: "movies",
            label: "BMS_Transactors_17102023|LE_Transactors_1yr_08042024",
            is_tvod: "",
            metadata: "",
          },
        },
      ],
      seoText: "The Last Showgirl",
    },
    {
      id: "EG00308457",
      type: "horizontal",
      styleId: "6034184666535124515",
      ctaUrl: "https://in.bookmyshow.com/bengaluru/movies/ahaan/ET00308539",
      text: [
        {
          maxLines: 2,
          styleId: "-6553488546853243560",
          components: [
            {
              type: "text",
              text: "Ahaan",
            },
          ],
        },
        {
          maxLines: 2,
          styleId: "8335147091351660677",
          components: [
            {
              type: "text",
              text: "1h 21m • Drama • U",
            },
          ],
        },
        {
          maxLines: 2,
          styleId: "730510250647356683",
          components: [
            {
              type: "text",
              text: "Hindi",
            },
          ],
        },
        {
          maxLines: 3,
          styleId: "2893295442276044474",
          components: [
            {
              type: "text",
              text: "A young man with Down Syndrome forms an unusual friendship with a self-indulgent man suffering from OCD.",
            },
          ],
        },
      ],
      metaImages: [],
      image: {
        url: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00308539-gnnkqaqbus-portrait.jpg",
        altText: "Ahaan",
      },
      tags: [],
      analytics: {
        id: "tvod_showcase_eg00308457_et00308539",
        in_widget_position: 7,
        schema_version: "3.0",
        widget_id: "TVOD_SHOWCASE",
        widget_title: "Watch Top Movies Online",
        display_position: 11,
        title: "Ahaan",
        screen_name: "home_discover",
        event: "gtm_std_event",
        event_name: "card_clicked",
        event_type: "click",
        event_code: "ET00308539",
        event_group: "EG00308457",
        region_code: "BANG",
        category: "",
        tags: "bms-premier|online-streaming|premieres-of-the-week",
        genre: "drama",
        language: "hindi",
        product: "movies",
        label: "BMS_Transactors_17102023|LE_Transactors_1yr_08042024",
        is_tvod: "",
        metadata: "",
      },
      impressionAnalytics: {
        schema_version: "3.0",
        screen_name: "home_discover",
        event_name: "card_viewed",
        event_type: "impression",
        is_tvod: "",
        metadata: "",
      },
      buttons: [
        {
          styleId: "4132622510035248234",
          label: {
            maxLines: 1,
            styleId: "-3341313454232951668",
            components: [
              {
                type: "text",
                text: "Buy or Rent",
              },
            ],
          },
          ctaUrl: "https://in.bookmyshow.com/bengaluru/movies/ahaan/ET00308539",
          analytics: {
            id: "tvod_showcase_eg00308457_et00308539",
            in_widget_position: 7,
            schema_version: "3.0",
            widget_id: "TVOD_SHOWCASE",
            widget_title: "Watch Top Movies Online",
            display_position: 11,
            title: "Ahaan",
            screen_name: "home_discover",
            event: "gtm_std_event",
            event_name: "card_clicked",
            event_type: "click",
            event_code: "ET00308539",
            event_group: "EG00308457",
            region_code: "BANG",
            category: "",
            tags: "bms-premier|online-streaming|premieres-of-the-week",
            genre: "drama",
            language: "hindi",
            product: "movies",
            label: "BMS_Transactors_17102023|LE_Transactors_1yr_08042024",
            is_tvod: "",
            metadata: "",
          },
        },
      ],
      seoText: "Ahaan",
    },
    {
      id: "EG00369278",
      type: "horizontal",
      styleId: "6034184666535124515",
      ctaUrl:
        "https://in.bookmyshow.com/bengaluru/movies/ab-toh-sab-bhagwan-bharose/ET00370489",
      text: [
        {
          maxLines: 2,
          styleId: "-6553488546853243560",
          components: [
            {
              type: "text",
              text: "Ab Toh Sab  Bhagwan Bharose",
            },
          ],
        },
        {
          maxLines: 2,
          styleId: "8335147091351660677",
          components: [
            {
              type: "text",
              text: "1h 36m • Drama • UA",
            },
          ],
        },
        {
          maxLines: 2,
          styleId: "730510250647356683",
          components: [
            {
              type: "text",
              text: "Hindi",
            },
          ],
        },
        {
          maxLines: 3,
          styleId: "2893295442276044474",
          components: [
            {
              type: "text",
              text: "A South Asian tale of an eight-year-old`s journey through faith, self-discovery, and redemption. In a world blinded by faith, will innocence win over hate? In the rural 1980s, India, two impressionable kids struggle with their understanding of God and faith while experiencing the everyday challenges of childhood, conservative upbringing, and communal surroundings until their idyllic world is blown apart by events that they can no longer fathom. The film explores tolerance, education, and the power of innocence in a world teetering on the edge.",
            },
          ],
        },
      ],
      metaImages: [],
      image: {
        url: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00370489-uuzlkbgaet-portrait.jpg",
        altText: "Ab Toh Sab  Bhagwan Bharose",
      },
      tags: [],
      analytics: {
        id: "tvod_showcase_eg00369278_et00370489",
        in_widget_position: 8,
        schema_version: "3.0",
        widget_id: "TVOD_SHOWCASE",
        widget_title: "Watch Top Movies Online",
        display_position: 11,
        title: "Ab Toh Sab  Bhagwan Bharose",
        screen_name: "home_discover",
        event: "gtm_std_event",
        event_name: "card_clicked",
        event_type: "click",
        event_code: "ET00370489",
        event_group: "EG00369278",
        region_code: "BANG",
        category: "",
        tags: "online-streaming",
        genre: "drama",
        language: "hindi",
        product: "movies",
        label: "BMS_Transactors_17102023|LE_Transactors_1yr_08042024",
        is_tvod: "",
        metadata: "",
      },
      impressionAnalytics: {
        schema_version: "3.0",
        screen_name: "home_discover",
        event_name: "card_viewed",
        event_type: "impression",
        is_tvod: "",
        metadata: "",
      },
      buttons: [
        {
          styleId: "4132622510035248234",
          label: {
            maxLines: 1,
            styleId: "-3341313454232951668",
            components: [
              {
                type: "text",
                text: "Buy or Rent",
              },
            ],
          },
          ctaUrl:
            "https://in.bookmyshow.com/bengaluru/movies/ab-toh-sab-bhagwan-bharose/ET00370489",
          analytics: {
            id: "tvod_showcase_eg00369278_et00370489",
            in_widget_position: 8,
            schema_version: "3.0",
            widget_id: "TVOD_SHOWCASE",
            widget_title: "Watch Top Movies Online",
            display_position: 11,
            title: "Ab Toh Sab  Bhagwan Bharose",
            screen_name: "home_discover",
            event: "gtm_std_event",
            event_name: "card_clicked",
            event_type: "click",
            event_code: "ET00370489",
            event_group: "EG00369278",
            region_code: "BANG",
            category: "",
            tags: "online-streaming",
            genre: "drama",
            language: "hindi",
            product: "movies",
            label: "BMS_Transactors_17102023|LE_Transactors_1yr_08042024",
            is_tvod: "",
            metadata: "",
          },
        },
      ],
      seoText: "Ab Toh Sab  Bhagwan Bharose",
    },
  ],
  analytics: {
    id: "tvod_showcase",
    schema_version: "3.0",
    is_tvod: "",
    metadata: "",
  },
  impressionAnalytics: {
    schema_version: "3.0",
    widget_id: "TVOD_SHOWCASE",
    widget_title: "Watch Top Movies Online",
    display_position: 11,
    screen_name: "home_discover",
    event: "gtm_allpages",
    event_name: "widget_viewed",
    event_type: "impression",
    category: "",
    product: "discovery",
    filtervalues: "",
    is_tvod: "",
    metadata: "",
  },
  snapping: false,
  fillViewport: false,
  immersive: false,
  minPeek: 0,
  autoScrollDuration: 3000,
  showIndicators: true,
  sliderDuration: 3000,
};

function App() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <Header />
      <HorizontalScroll data={ICD_TOP_NAV_MENU_MOBILE_VARIANT} />
      <HorizontalScroll data={TOP_MOVIES_MOBILE} />
      {LayoutScreenWidgets.map((widget) => {
        if (widget.type === "flexbox") {
          return (
            <Flexbox
              key={widget.id}
              title={widget.title}
              subtitle={widget.subtitle}
              cards={widget.cards}
              itemsPerRow={widget.itemsPerRow}
              styleId={widget.styleId}
            />
          );
        }
        return null;
      })}
      <HorizontalScroll data={TOP_KIDS} />
      <HorizontalScroll data={DISCOVER_ONLINE_COLLECTIONS_MOBILE} />
      <HorizontalScroll
        data={ULTIMATE_EVENTS_LIST_COLLECTIONS_IOS_MWEB_VARIANT}
      />
      <CarouselComp data={TVOD_SHOWCASE} />
    </div>
  );
}

export default App;
