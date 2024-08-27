import React, { useEffect, useState } from "react";
import Logo from "../../assets/Logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex flex-row justify-around items-center py-4 md:py-8 uppercase font-semibold z-20 text-xs md:text-lg text-white transition-colors duration-300 ${
        isScrolled ? "bg-brandBrown " : "bg-transparent "
      }`}
    >
      <a
        href="#"
        className="hover:text-gray-400 transition-colors duration-300"
      >
        About
      </a>
      <a
        href="#"
        className="hover:text-gray-400 transition-colors duration-300"
      >
        Explore
      </a>
      <a href="#">
        <img src={Logo} alt="" className="w-20" />
      </a>
      <a
        href="#"
        className="hover:text-gray-400 transition-colors duration-300"
      >
        Journal
      </a>
      <a
        href="#"
        className="hover:text-gray-400 transition-colors duration-300"
      >
        Search
      </a>
    </nav>
  );
};

export default Navbar;
