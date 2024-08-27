import React from "react";
import hero from "../../assets/heroBG.mp4";

const Hero = () => {
  return (
    <>
      <section className="relative min-h-[600px] md:min-h-[800px] lg:min-h-[900px] flex h-screen items-center justify-center">
        <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
          <video
            src={hero}
            className="h-full w-full object-cover"
            muted
            autoPlay
            loop
            playsInline
            poster={hero}
          ></video>
          <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
          {/* Dark overlay */}
        </div>

        {/* <div></div> */}

        <div className="relative z-10 flex flex-col items-center text-center text-white px-4">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold mb-4">
            Kota Dunia Untuk Semua
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-8">
            Menuju visi Indonesia 2045.
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;
