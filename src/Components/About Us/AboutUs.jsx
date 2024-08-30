import React from "react";

const AboutUs = () => {
  return (
    <section className="min-h-screen px-6 md:px-16 lg:pl-36 lg:pr-[148px] pt-24 pb-24 bg-gray-300 flex flex-col">
      <div className="text-center text-brandBrown text-[32px] md:text-[40px] font-bold font-['Plus Jakarta Sans'] leading-tight md:leading-[60px]">
        About Us
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-[84px] mt-10">
        <div className="w-full lg:w-[632px] flex flex-col gap-6">
          <div className="text-brandBrown text-[28px] md:text-[33px] font-bold font-['Plus Jakarta Sans'] leading-tight md:leading-[49.50px]">
            Export & Import Services PPJK
          </div>
          <div className="flex flex-col gap-4 md:gap-6">
            <div className="text-gray-600 text-[18px] md:text-[23px] font-normal font-['Plus Jakarta Sans'] leading-relaxed md:leading-[34.50px]">
              Started in 2014, we established a PPJK (Customs Brokerage) company
              named PT. Buana Indotimur Gemilang, a Sea Cargo Expedition company
              (EMKL).
            </div>
            <div className="text-gray-600 text-[18px] md:text-[23px] font-normal font-['Plus Jakarta Sans'] leading-relaxed md:leading-[34.50px]">
              Since its establishment, we have expanded our capacity to handle
              export, import, and inter-island shipments. This is evidenced by
              our monthly capacity of more than 500 containers (20”, 40”,
              flexibag, and iso tank).
            </div>
            <div className="text-gray-600 text-[18px] md:text-[23px] font-normal font-['Plus Jakarta Sans'] leading-relaxed md:leading-[34.50px]">
              In 2016, we decided to expand our service portfolio to not only
              include services like FCL (Full Container Load) but also other
              services such as LCL (Less Container Load) by air and sea,
              trucking/trailer, domestic cargo, and freight forwarding services.
              PT. Berkat Cipta Logistik was eventually formed to achieve this
              goal.
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 lg:gap-[51px] w-full lg:w-auto">
          <div className="relative">
            <img
              className="w-full lg:w-[400px] h-[250px] md:h-[307.55px] object-cover rounded-lg"
              src="https://via.placeholder.com/400x308"
              alt="Placeholder"
            />
            <div className="w-16 md:w-20 h-[100px] md:h-[154px] absolute left-0 bottom-0 bg-gray-300" />
          </div>
          <div className="relative">
            <img
              className="w-full lg:w-[400px] h-[250px] md:h-[312px] object-cover rounded-lg"
              src="https://via.placeholder.com/400x312"
              alt="Placeholder"
            />
            <div className="w-16 md:w-20 h-[100px] md:h-[154px] absolute left-0 bottom-0 bg-gray-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
