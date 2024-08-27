import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import image1 from "../../assets/slide1.png";
import image2 from "../../assets/slide2.png";
import image3 from "../../assets/slide3.png";
import image4 from "../../assets/slide4.png";
import image5 from "../../assets/slide5.png";
import image6 from "../../assets/slide6.png";
import image7 from "../../assets/slide7.png";
import image8 from "../../assets/slide8.png";
import bgImage1 from "../../assets/bgslide1.png";

const slides = [
  {
    image: image1,
    heading: "Delapan Prinsip Ibu Kota Negara",
    title: "1. Mendesain Dengan Kondisi Alam",
    list: [
      "Lebih dari 75% kawasan hijau di Kawasan Pemerintahan IKN",
      "100% penduduk dapat mengakses ruang terbuka hijau rekreasi dalam 10 menit",
      "100% konstruksi ramah lingkungan untuk setiap bangunan bertingkat institusional, komersial, dan hunian ",
    ],
    backgroundImage: bgImage1,
  },
  {
    image: image2,
    heading: "Delapan Prinsip Ibu Kota Negara",
    title: "2. Bhineka Tunggal Ika",
    list: [
      "Lebih dari 75% kawasan hijau di Kawasan Pemerintahan IKN",
      "100% warga dapat mengakses layanan sosial atau masyarakat dalam 10 menit",
      "100% tempat umum dirancang menggunakan prinsip akses universal, kearifan lokal, dan desain inklusif",
    ],
  },
  {
    image: image3,
    heading: "Delapan Prinsip Ibu Kota Negara",
    title: "3. Terhubung, Aktif, dan Mudah di Pakai",
    list: [
      "80% perjalanan dengan transportasi umum atau mobilitas aktif ",
      "10 menit ke fasilitas penting dan simpul transportasi umum ",
      "<50 Menit koneksi transit ekspres dari Kawasan Inti Pusat Pemerintahan ke bandara strategis pada 2030 ",
    ],
  },
  {
    image: image4,
    heading: "Delapan Prinsip Ibu Kota Negara",
    title: "4. Rendah Emisi Karbon",
    list: [
      "Instalasi kapasitas energi terbarukan akan memenuhi 100% kebutuhan energi IKN ",
      "60% peningkatan efisiensi energi dalam bangunan umum yang baru di 2045 ",
      "Net Zero Emissions di IKN pada 2045 ",
    ],
  },
  {
    image: image5,
    heading: "Delapan Prinsip Ibu Kota Negara",
    title: "5. Sirkuler dan Tangguh",
    list: [
      "10% dari lahan seluas Kawasan Pemerintahan IKN tersedia untuk kebutuhan produksi pangan",
      "60% daur ulang semua timbulan sampah di 2045",
      "100% air limbah akan diolah melalui sistem pengolahan pada 2035",
    ],
  },
  {
    image: image6,
    heading: "Delapan Prinsip Ibu Kota Negara",
    title: "6. Aman dan Terjangkau",
    list: [
      "10 Kota terbaik menurut Global Liveablity Index pada 2045  ",
      "Semua permukiman di Kawasan Pemerintahan IKN memiliki akses terhadap infrastruktur penting di 2045  ",
      "Perumahan yang adil dengan perbandingan 1:3:6 untuk jenis perumahan mewah, menengah, dan sederhana  ",
    ],
  },
  {
    image: image7,
    heading: "Delapan Prinsip Ibu Kota Negara",
    title: "7. Kenyamanan dan Efisiensi Melalui Teknologi",
    list: [
      "Memperoleh peringkat Very High dalam perangkat e-Gov Development Index oleh PBB",
      "100% Konektivitas digital dan TIK untuk semua penduduk dan bisnis",
      "Lebih dari 75% kepuasan bisnis dengan peringkat layanan digital",
    ],
  },
  {
    image: image8,
    heading: "Delapan Prinsip Ibu Kota Negara",
    title: "8. Peluang Ekonomi Untuk Semua",
    list: [
      "0% Kemiskinan di IKN pada 2035",
      "PDB per kapita negara berpendapatan tinggi",
      "Rasio Gini regional terendah di Indonesia pada 2045",
    ],
  },
  // Add more slides as needed
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };
  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <section className="relative w-full h-[500px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] flex items-center justify-center overflow-hidden">
      {/* Fixed Position h1 */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 flex transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background image */}
          {slide.backgroundImage && (
            <div
              className="absolute inset-0 bg-cover bg-center opacity-50"
              style={{ backgroundImage: `url(${slide.backgroundImage})` }}
            />
          )}

          {/* Main image and content */}
          <div className="relative w-1/2 bg-cover bg-center">
            <div
              className="w-full h-full"
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>
          </div>
          {/* Content with Heading above */}
          <div className="relative w-1/2 flex flex-col justify-center  p-6 sm:p-8 md:p-10 lg:p-12 bg-white z-10 text-left">
            {/* Heading */}
            {slide.heading && (
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-3 sm:mb-5 md:mb-6 lg:mb-8 text-brandBrown">
                {slide.heading}
              </h1>
            )}
            {/* Title and List */}
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 sm:mb-5 md:mb-6 lg:mb-8 text-black">
              {slide.title}
            </h2>
            <ul className="list-disc mb-4 sm:mb-6 md:mb-8 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-black ml-4">
              {slide.list.map((item, idx) => (
                <li key={idx} className="mb-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-brandBrown bg-opacity-50 text-brandWhite p-3 rounded-full shadow-lg hover:bg-opacity-75 transition-colors duration-300 z-20"
        style={{ width: "40px", height: "40px" }}
        onClick={handlePrevSlide}
      >
        <FaArrowLeft />
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-brandBrown bg-opacity-50 text-brandWhite p-3 rounded-full shadow-lg hover:bg-opacity-75 transition-colors duration-300 z-20"
        style={{ width: "40px", height: "40px" }}
        onClick={handleNextSlide}
      >
        <FaArrowRight />
      </button>
    </section>
  );
};

export default Slider;
