import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="flex w-[1440px] max-w-full flex-col overflow-hidden items-center mt-[74px] max-md:mt-10">
      <div className="flex flex-col items-center text-center max-md:max-w-full">
        <h1 className="text-primary text-[72px] font-bold leading-[72px] font-ubuntu tracking-[-2px] uppercase max-md:max-w-full max-md:text-[40px] max-md:leading-[50px]">
          On-Chain Liquidity meets <br />
          Cross-Border Payments
        </h1>
        <p className="text-muted-foreground text-xl font-normal leading-6 mt-5 max-md:max-w-full">
          Empower your global payment operations with a secure, efficient, and
          compliant RWA platform—unlocking stable yield <br />
          opportunities for on-chain investors and rapid working capital for
          payment businesses.
        </p>
      </div>
      <div className="flex gap-5 overflow-hidden text-base font-medium tracking-[-0.32px] leading-none mt-[57px] max-md:mt-10">
        <a
          href="https://tmr-frontend.vercel.app/"
          className="bg-primary flex justify-center text-primary-foreground min-h-10 py-4 px-12 rounded-[50px] hover:bg-primary/90 transition-colors"
          aria-label="Get Started"
        >
          Get Started
        </a>
        <a
          href="#"
          className="flex justify-center text-primary min-h-10 py-4 px-12 rounded-[50px] border border-primary hover:bg-primary/5 transition-colors"
          aria-label="Learn More"
        >
          Learn More
        </a>
      </div>
      <img
        src="/hero_cover.png"
        alt="Cards illustration"
        className="w-full max-w-[900px] object-contain mt-[71px] max-md:mt-10"
      />
    </section>
  );
};

export default Hero;
