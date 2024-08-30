import React from "react";

const AboutUs = () => {
  return (
    <div className="h-[1024px] pl-36 pr-[148px] pt-24 pb-[97px] bg-[#e8ebed] flex flex-col">
      <div className="text-center text-black text-[40px] font-bold font-['Plus Jakarta Sans'] leading-[60px]">
        About Us
      </div>
      <div className="flex justify-between items-start gap-[84px] mt-10">
        <div className="w-[632px] flex flex-col gap-[25px]">
          <div className="text-[#1aa6f1] text-[33px] font-bold font-['Plus Jakarta Sans'] leading-[49.50px]">
            Export & Import Services PPJK
          </div>
          <div className="flex flex-col gap-6">
            <div className="text-black text-[23px] font-normal font-['Plus Jakarta Sans'] leading-[34.50px]">
              Started in 2014, we established a PPJK (Customs Brokerage) company
              named PT. Buana Indotimur Gemilang, a Sea Cargo Expedition company
              (EMKL).
            </div>
            <div className="text-black text-[23px] font-normal font-['Plus Jakarta Sans'] leading-[34.50px]">
              Since its establishment, we have expanded our capacity to handle
              export, import, and inter-island shipments. This is evidenced by
              our monthly capacity of more than 500 containers (20”, 40”,
              flexibag, and iso tank).
            </div>
            <div className="text-black text-[23px] font-normal font-['Plus Jakarta Sans'] leading-[34.50px]">
              In 2016, we decided to expand our service portfolio to not only
              include services like FCL (Full Container Load) but also other
              services such as LCL (Less Container Load) by air and sea,
              trucking/trailer, domestic cargo, and freight forwarding services.
              PT. Berkat Cipta Logistik was eventually formed to achieve this
              goal.
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[51px]">
          <div className="relative">
            <img
              className="w-[400px] h-[307.55px]"
              src="https://via.placeholder.com/400x308"
              alt="Placeholder"
            />
            <div className="w-20 h-[154px] absolute left-0 bottom-0 bg-[#e8ebed]" />
          </div>
          <div className="relative">
            <img
              className="w-[400px] h-[312px]"
              src="https://via.placeholder.com/400x312"
              alt="Placeholder"
            />
            <div className="w-20 h-[154px] absolute left-0 bottom-0 bg-[#e8ebed]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
