import React from "react";
import hero from "../../assets/heroBG.mp4";

const Hero = () => {
  return (
    <>
      <section className="relative min-h-[900px] flex h-screen items-center justify-center">
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
        </div>

        {/* <div></div> */}

        <div className="relative z-10 flex flex-col items-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Kota Dunia Untuk Semua
          </h1>
          <p className="text-lg md:text-2xl mb-8">
            Menuju visi Indonesia 2045.
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;
