import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="flex w-[1200px] max-w-full flex-col overflow-hidden items-center mt-[74px] max-md:mt-10">
      <div className="flex flex-col items-center text-center max-md:max-w-full">
        <h1 className="text-[rgba(36,29,201,1)] text-[64px] font-bold leading-[72px] tracking-[-2px] uppercase max-md:max-w-full max-md:text-[40px] max-md:leading-[50px]">
          Bridging On-Chain Liquidity with <br />
          Real-World Cross-Border
          <br />
          Payments
        </h1>
        <p className="text-[rgba(98,100,128,1)] text-xl font-normal leading-7 mt-5 max-md:max-w-full">
          Empower your global payment operations with a secure, efficient, and
          compliant RWA platform—unlocking stable yield <br />
          opportunities for on-chain investors and rapid working capital for
          payment businesses.
        </p>
      </div>
      <div className="flex gap-5 overflow-hidden text-base font-medium tracking-[-0.32px] leading-none mt-[57px] max-md:mt-10">
        <a
          href="https://tmr-frontend.vercel.app/"
          className="bg-[rgba(36,29,201,1)] flex items-center gap-2.5 overflow-hidden text-white min-h-10 px-[27px] py-2 rounded-[50px] hover:bg-opacity-90 transition-colors"
          aria-label="Get Started"
        >
          <span>Get Started</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/ca7652c2d00348659dd4a4ce2925ad0b/67769e4e93262c47df521441ba7427c518932542?placeholderIfAbsent=true"
            alt="Arrow right"
            className="aspect-[1] object-contain w-3"
          />
        </a>
        <a
          href="#"
          className="flex items-center gap-2.5 overflow-hidden text-[rgba(36,29,201,1)] min-h-10 px-[27px] py-2 rounded-[50px] border border-[rgba(36,29,201,1)] hover:bg-[rgba(36,29,201,0.05)] transition-colors"
          aria-label="Learn More"
        >
          Learn More
        </a>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/ca7652c2d00348659dd4a4ce2925ad0b/6ab41dbd012263e804bd6dada3d3cdc629d41d88?placeholderIfAbsent=true"
        alt="Platform illustration"
        className="aspect-[2.12] object-contain w-[769px] max-w-full mt-[71px] max-md:mt-10"
      />
    </section>
  );
};

export default Hero;
