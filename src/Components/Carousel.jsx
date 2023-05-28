import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";

// JSON data
const newsData = [
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "wsj",
    title: "Did Merkel Pave Way for War in Ukraine?",
    description:
      "The former German chancellor is unapologetic as critics reexamine her deals with Putin and reluctance to punish his previous aggressions.",
    url: "https://www.wsj.com/articles/did-merkel-pave-the-way-for-the-war-in-ukraine-4abef297",
    urlToImage: "https://images.wsj.net/im-788810/social",
    publishedAt: "2023-05-26T21:00:04Z",
    content:
      "Essay | Did Merkel Pave the Way for the War in Ukraine?Dressed in an imperial purple blazer, Angela Merkel beamed at a ceremony in April as she received Germany’s highest honor, recognizing the achie… [+1019 chars]",
  },
  {
    source: {
      id: "rt",
      name: "RT",
    },
    author: "RT",
    title: "EU commissioner reprimands Musk over disinfo",
    description:
      "Twitter CEO Elon Musk is once again squaring off against EU thought police chief Thierry Breton Read Full Article at RT.com",
    url: "https://www.rt.com/news/577057-musk-twitter-disinfo-code-threat/",
    urlToImage:
      "https://mf.b37mrtl.ru/files/2023.05/article/6473baa485f5400dbb0b97b0.jpeg",
    publishedAt: "2023-05-28T20:37:02Z",
    content:
      "European Commissioner Thierry Breton threatened Twitter CEO Elon Musk with “enforcement” in a tweet on Friday after Musk announced he was pulling Twitter out of the EU’s voluntary Code of Practice on… [+2255 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "Ryan Dezember, Will Feuer",
    title: "Wall Street's Next Big Play Is Garbage - The Wall Street Journal",
    description:
      "Landfill firms are investing in trash-gas production and recycling technology",
    url: "https://www.wsj.com/articles/wall-streets-next-big-play-is-garbage-b7b2ff4d",
    urlToImage: "https://images.wsj.net/im-789298/social",
    publishedAt: "2023-05-28T13:00:00Z",
    content: null,
  },
];

export default function Carousel() {
  return (
    <div className="rounded-b-lg">
      <Swiper
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          type: "bullets",
        }}
        allowTouchMove={true}
        modules={[Navigation, Pagination]}
        className="mySwiper rounded-b-lg"
      >
        {newsData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content relative flex flex-row-reverse items-end">
              <img
                className="w-full object-cover h-full"
                src={item.urlToImage}
                alt={item.title}
              />
              <div className="hidden lg:block flex-row-reverse slide-body absolute bg-gray-500/50 text-white font-bold rounded-tl-lg text-xl w-1/2 pb-4">
                <div className="p-4">{item.description}</div>

                <div className="flex flex-row-reverse">
                  <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-3xl mr-8">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="slide-button">المزيد</button>
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-button-next swiper-button-white" />
      <div className="swiper-button-prev swiper-button-white" />
    </div>
  );
}
