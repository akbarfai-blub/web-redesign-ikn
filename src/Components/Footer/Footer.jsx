import React from "react";

const Footer = () => {
  return (
    <section className="bg-brandBrown py-10 px-6 md:px-16 lg:px-36 flex flex-col lg:flex-row justify-between items-start text-brandWhite">
      <div className="flex flex-col gap-5 mb-10 lg:mb-0">
        <div className="flex items-center gap-4">
          <img
            className="w-10 h-[36.66px]"
            src="https://via.placeholder.com/40x37"
            alt="Logo"
          />
          <div className="text-[20px] md:text-[23px] font-bold font-['Plus Jakarta Sans'] leading-tight md:leading-[34.50px]">
            PT. Berkat Cipta Logistik
          </div>
        </div>
        <div className="max-w-xs text-[13px] md:text-[15px] leading-relaxed">
          International Domestics Logistic Service. Supported by experienced
          staff members, processes, and technologies, we are committed to
          delivering one-stop solutions and results for our business clients. We
          are located in Tanjung Perak Surabaya.
        </div>
      </div>

      <div className="flex flex-col gap-5 mb-10 lg:mb-0">
        <div className="text-[20px] md:text-[23px] font-bold font-['Plus Jakarta Sans']">
          Company
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-base">About</div>
          <div className="text-base">Our Service</div>
          <div className="text-base">Careers</div>
        </div>
      </div>

      <div className="flex flex-col gap-5 mb-10 lg:mb-0">
        <div className="text-[20px] md:text-[23px] font-bold font-['Plus Jakarta Sans']">
          Contact
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-base">Email: info@bclog.co.id</div>
          <div className="text-base">Phone: +62 (31) 9909-3003</div>
          <div className="text-base">Fax: +62 (31) 9909-3004</div>
          <div className="text-base">WhatsApp: +62 812 4936</div>
        </div>
        <div className="flex gap-4 mt-4">
          <div className="w-10 h-10 bg-[#c1bfbf] rounded-full flex justify-center items-center">
            {/* Icon placeholder */}
          </div>
          <div className="w-10 h-10 bg-[#c1bfbf] rounded-full flex justify-center items-center">
            {/* Icon placeholder */}
          </div>
          <div className="w-10 h-10 bg-[#c1bfbf] rounded-full flex justify-center items-center">
            {/* Icon placeholder */}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div className="text-[20px] md:text-[23px] font-bold font-['Plus Jakarta Sans']">
          Address
        </div>
        <div className="text-[13px] md:text-[15px] leading-relaxed max-w-xs">
          Jl. Ikan Dorang No.24, Perak Barat, Kec. Krembangan, ‌Kota SBY, Jawa
          Timur 60177, Indonesia‌‌
        </div>
      </div>
    </section>
  );
};

export default Footer;
