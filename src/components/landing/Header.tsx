import React, { useState, useEffect } from "react";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
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
    <header
      className={`flex w-full flex-col overflow-hidden items-center pt-4 ${
        isScrolled
          ? "fixed top-0 left-0 z-50 bg-white transition-all duration-300"
          : ""
      } max-md:max-w-full`}
    >
      <div className="flex w-[1440px] max-w-full gap-5 text-base font-medium tracking-[-0.32px] flex-wrap justify-between items-center px-4 md:px-20">
        <img
          src="/m2square_logo.svg"
          alt="M2Square Finance Logo"
          className="h-[60px] object-contain"
        />
        <a
          href="https://tmr-frontend.vercel.app/"
          className="bg-primary text-white flex items-center justify-center h-10 py-3 px-8 rounded-[50px] max-md:px-5 hover:bg-primary/90 transition-colors"
          aria-label="Launch App"
        >
          Launch App
        </a>
      </div>
      <div
        className="bg-white/10 self-stretch flex min-h-px w-full mt-4 max-md:max-w-full"
        aria-hidden="true"
      />
    </header>
  );
};

export default Header;
