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
      id: "wired",
      name: "Wired",
    },
    author: "Louryn Strampe, Gear Team",
    title:
      "35 Best Memorial Day Sales and Deals: Pizza Ovens, Recycled Bags, and More",
    description:
      "Wondering where to start during this weekend's sales bonanza? Right here.",
    url: "https://www.wired.com/story/best-memorial-day-sales-2023/",
    urlToImage:
      "https://media.wired.com/photos/646fc5c0a6c1fece8f4bb223/191:100/w_1280,c_limit/VIZIO-50-inch-MQX-Series-Premium-4K-120Hz-QLED-HDR-Smart-TV-Gear.jpg",
    publishedAt: "2023-05-26T11:00:00Z",
    content:
      "As with many other sales events, Memorial Day weekend deals can be confusing. It seems like every store on the internet is offering some sort of promotion. Not all that glitters is discounted, but we… [+14301 chars]",
  },
  {
    source: {
      id: "ars-technica",
      name: "Ars Technica",
    },
    author: "Chuong Nguyen",
    title: "Dealmaster: Lenovo’s ThinkPad doorbusters top Memorial Day deals",
    description:
      "Savings on laptops, blenders, sports watches, headphones, and more for Memorial Day.",
    url: "https://arstechnica.com/shopping/2023/05/dealmaster-lenovos-thinkpad-doorbusters-top-memorial-day-deals/",
    urlToImage:
      "https://cdn.arstechnica.net/wp-content/uploads/2012/08/thinkpad_x1_carbon_touchpoint-640x215.jpg",
    publishedAt: "2023-05-26T11:15:29Z",
    content:
      "2 with \r\nThe X1 Carbon's fingerprint reader.\r\nAmong other things, Memorial Day marks the unofficial start of summer. Hopefully, you're headed to the mountains, a beach, or at least grilling something… [+7476 chars]",
  },
  {
    source: {
      id: null,
      name: "Android Central",
    },
    author: "nicholas.sutrich@futurenet.com (Nicholas Sutrich)",
    title: "Motorola Edge+ (2023) review: Moto's back, baby",
    description:
      "The Motorola Edge+ (2023) is Motorola's first major flagship in a long time that doesn't feel like it has any major compromises. It's gorgeous, fast, and actually lives up to the Motorola name.",
    url: "https://www.androidcentral.com/phones/motorola-edge-2023-review",
    urlToImage:
      "https://cdn.mos.cms.futurecdn.net/DaWZBQgeakTZ8SKcVXKJrU-1200-80.jpg",
    publishedAt: "2023-05-26T14:00:00Z",
    content:
      "The Motorola Edge+ (2023) is the best \"proper\" flagship phone we've seen from Motorola in years. While I said the same thing about the ThinkPhone when I reviewed that a month ago, the phone's limited… [+23785 chars]",
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
            <div className="slide-content relative m-4 flex flex-row-reverse items-end">
              <img
                className="w-full object-cover h-full"
                src={item.urlToImage}
                alt={item.title}
              />
              <div className="hidden lg:block flex flex-row-reverse slide-body absolute bg-gray-100 rounded-tl-lg p-4">
                <div className="">{item.description}</div>

                <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-3xl">
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <button className="slide-button">المزيد</button>
                  </a>
                </button>
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
