import React from "react";

const News = () => {
  return (
    <section className="min-h-screen px-10 pt-24 pb-28 bg-[#e8ebed] flex flex-col items-center">
      <div className="text-center text-[#1c1c1c] text-[40px] font-bold font-['Plus Jakarta Sans'] leading-[60px] mb-10">
        News
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
        <div className="bg-[#fcfcfc] rounded-[20px] overflow-hidden shadow-lg">
          <img
            className="w-full h-[300px] object-cover"
            src="https://via.placeholder.com/428x300"
            alt="News"
          />
          <div className="p-6">
            <div className="text-black text-[28px] font-bold font-['Plus Jakarta Sans'] leading-[42px] mb-4">
              Lorem ipsum dolor sit amet consectetur.
            </div>
            <div className="text-black text-base font-normal font-['Plus Jakarta Sans'] leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Viverra tristique eget
              pulvinar vitae. Fames ut ridiculus quis amet sit integer id
              molestie. Ut lacus tortor nunc aliquam sed id. Purus pulvinar sed
              feugiat arcu eget velit.
            </div>
          </div>
        </div>
        <div className="bg-[#fcfcfc] rounded-[20px] overflow-hidden shadow-lg">
          <img
            className="w-full h-[300px] object-cover"
            src="https://via.placeholder.com/428x300"
            alt="News"
          />
          <div className="p-6">
            <div className="text-black text-[28px] font-bold font-['Plus Jakarta Sans'] leading-[42px] mb-4">
              Lorem ipsum dolor sit amet consectetur.
            </div>
            <div className="text-black text-base font-normal font-['Plus Jakarta Sans'] leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Viverra tristique eget
              pulvinar vitae. Fames ut ridiculus quis amet sit integer id
              molestie. Ut lacus tortor nunc aliquam sed id. Purus pulvinar sed
              feugiat arcu eget velit.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
