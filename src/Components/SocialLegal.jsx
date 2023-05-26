import React from "react";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import linkedin from "../images/linkedin.png";
import { useQuery } from "react-query";

function SocialLegal() {
  const { isLoading } = useQuery("subscribe", () => {
    // Subscription logic goes here
  });

  return (
    <div className="">
      <div className="flex gap-10 bg-gray-200 pb-16">
        <div className="hidden xl:block w-fit">
          <div className="grid grid-cols-3">
            <div className="px-4 mx-4">
              <div className="flex flex-row-reverse">
                <h1 className="text-2xl text-gray-600 font-bold">بما تتطلبه</h1>
              </div>
              <p className="text-gray-500 underline flex flex-row-reverse">
                هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
                سيلهي القارئ عن التركيز على الشكل الخارجي للنص
              </p>
            </div>
            <div className="px-4 mx-4">
              <div className="flex flex-row-reverse">
                <h1 className="text-2xl text-gray-600 font-bold">بما تتطلبه</h1>
              </div>
              <p className="text-gray-500 underline flex flex-row-reverse">
                هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
                سيلهي القارئ عن التركيز على الشكل الخارجي للنص
              </p>
            </div>
            <div className="px-4 mx-4">
              <div className="flex flex-row-reverse">
                <h1 className="text-2xl text-gray-600 font-bold">بما تتطلبه</h1>
              </div>
              <p className="text-gray-500 underline flex flex-row-reverse">
                هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
                سيلهي القارئ عن التركيز على الشكل الخارجي للنص
              </p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex justify-center sm:justify-normal sm:flex-row-reverse text-2xl text-gray-600 font-bold p-8 sm:pr-12">
            مشاهدة على تويتر
          </div>
          <div className="grid grid-cols-1 sm:flex sm:flex-row-reverse sm:pr-10 sm:gap-4">
            <div className="flex justify-center items-center">
              <img src={twitter} alt="" className="h-12" />
              <img src={facebook} alt="" className="h-12" />
              <img src={linkedin} alt="" className="h-12" />
            </div>
            <div className="flex justify-center sm:justify-normal sm:flex-row-reverse pt-4 sm:pt-0 sm:w-3/5">
              <div className="relative w-full m-2">
                <input
                  type="text"
                  className="py-3 pr-12 pl-4 w-full rounded-3xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  placeholder="أدخل بريدك الإلكتروني"
                />
                <button
                  type="submit"
                  className="absolute right-0 top-0 bottom-0 px-4 flex items-center justify-center rounded-r-3xl bg-orange-600 text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                  disabled={isLoading}
                >
                  {isLoading ? "..." : "الاشتراك"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-emerald-400 p-8 font-semibold">
       Copyright(c) website name
      </div>
    </div>
  );
}

export default SocialLegal;
