import React from "react";
import Card from "./Card";
import { styles } from "@/utils/styles.json";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

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

const getCarouselContainerStyle = (data: any): React.CSSProperties => {
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
    width: "100%",
    position: "relative",
  };
};

const getHeaderContainerStyle = (data: any): React.CSSProperties => {
  const style = styles.find((s) => s.id === data.styleId);

  return {
    padding: style?.headerContainer?.padding
      ? String(style?.headerContainer?.padding)
          .split(",")
          .map((val) => `${val}px`)
          .join(" ")
      : undefined,
    margin: style?.headerContainer?.margin
      ? String(style?.headerContainer?.margin)
          .split(",")
          .map((val) => `${val}px`)
          .join(" ")
      : undefined,
    width: "100%",
  };
};

const getTextStyle = (styleId: string): React.CSSProperties => {
  const style = styles.find((s) => s.id === styleId);
  if (!style) return {};

  const fontSizeMap: { [key: string]: number } = {
    "subtitle-large": 18,
    "body-regular": 15,
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

  return {
    color: style.fontColor,
    textAlign: style.horizontalAlignment as
      | "left"
      | "center"
      | "right"
      | "justify"
      | undefined,
    fontSize:
      style.font && fontSizeMap[style.font] ? fontSizeMap[style.font] : 16,
    fontWeight:
      style.font && fontWeightMap[style.font] ? fontWeightMap[style.font] : 400,
    margin: style.lineMargin
      ?.split(",")
      .map((val: string) => `${val}px`)
      .join(" "),
  };
};

const CarouselComp = ({ data = TVOD_SHOWCASE }) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div style={getCarouselContainerStyle(data)}>
      {/* Header Section */}
      <div style={getHeaderContainerStyle(data)}>
        <div>
          <h2 style={getTextStyle(data.title?.styleId)}>
            {data.title?.components[0].text}
          </h2>
          <p style={getTextStyle(data.subtitle?.styleId)}>
            {data.subtitle?.components[0].text}
          </p>
        </div>
      </div>

      {/* Carousel Container */}
      {/* <div
        style={getCardsContainerStyle(data)}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        {canScrollLeft && (
          <button
            onClick={() => handleScroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 rounded-r-none rounded-l-md p-2 shadow-md"
            aria-label="Previous slide"
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
            {data.cards.map((card) => (
              <div
                key={card.id}
                className="flex-shrink-0 px-2 w-full"
                style={{ minWidth: "100%" }}
              >
                <Card
                  ctaUrl={card.ctaUrl}
                  styleId={card.styleId}
                  imageUrl={card.image.url}
                  altText={card.image.altText}
                  text={card.text}
                  tags={card.tags}
                  metaImages={card.metaImages}
                  buttons={card.buttons}
                  type={card.type}
                />
              </div>
            ))}
          </motion.div>
        </div>

        {canScrollRight && (
          <button
            onClick={() => handleScroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 rounded-r-none rounded-l-md p-2 shadow-md"
            aria-label="Next slide"
          >
            <ChevronRight size={30} color="white" />
          </button>
        )}

        {data.showIndicators && (
          <div className="flex justify-center mt-6 gap-2">
            {data.cards.map((_, i) => (
              <button
                key={i}
                className={`h-2 rounded-full transition-all ${
                  activeIndex === i ? "w-6 bg-blue-500" : "w-2 bg-gray-300"
                }`}
                onClick={() => {
                  scrollToIndex(i);
                  setAutoScrollEnabled(false);
                  setTimeout(() => setAutoScrollEnabled(true), 5000);
                }}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={activeIndex === i ? "true" : "false"}
              />
            ))}
          </div>
        )}
      </div> */}

      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          duration: 30,
        }}
        className="p-3"
        plugins={[
          Autoplay({
            delay: 3000,
            playOnInit: true,
          }),
        ]}
      >
        <CarouselContent className="">
          {data.cards.map((card) => (
            <CarouselItem key={card.id}>
              <Card
                ctaUrl={card.ctaUrl}
                styleId={card.styleId}
                imageUrl={card.image.url}
                altText={card.image.altText}
                text={card.text}
                tags={card.tags}
                metaImages={card.metaImages}
                buttons={card.buttons}
                type={card.type}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 rounded-r-md rounded-l-none top-1/2 -translate-y-1/2 z-10 w-[42px] h-[50px] bg-black/50 hover:bg-black/50 active:bg-black/50 border-none p-1" />
        <CarouselNext className="absolute right-0 rounded-l-md rounded-r-none top-1/2 -translate-y-1/2 z-10 w-[42px] h-[50px] bg-black/50 hover:bg-black/50 active:bg-black/50 border-none p-1" />
      </Carousel>

      <div className="flex justify-center gap-2 absolute bottom-4 left-0 right-0">
        {data.cards.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              current === index + 1 ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => api?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselComp;
