import React from "react";

const Revolution: React.FC = () => {
  return (
    <section className="w-[1171px] max-w-full mt-[117px] px-5 max-md:mt-10">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-[54%] max-md:w-full max-md:ml-0">
          <div className="flex grow flex-col items-stretch justify-center px-[66px] py-14 rounded-[40px] max-md:max-w-full max-md:mt-10 max-md:px-5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/ca7652c2d00348659dd4a4ce2925ad0b/d462579ad37941e8df6d2fe23c1f8e2ecfde70ff?placeholderIfAbsent=true"
              alt="Payment revolution illustration"
              className="aspect-[1.08] object-contain w-full max-md:max-w-full"
            />
          </div>
        </div>
        <div className="w-[46%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex grow flex-col text-[rgba(36,29,201,1)] mt-2.5 max-md:max-w-full max-md:mt-10 max-md:px-4">
            <h2 className="text-[50px] font-bold leading-[55px] tracking-[-2.75px] uppercase max-md:text-[40px] max-md:leading-[49px]">
              A PAYMENT <br />
              REVOLUTION
            </h2>
            <h3 className="text-[22px] font-semibold leading-[1.2] mt-8">
              Real Results with On-Chain Liquidity
            </h3>
            <p className="text-[rgba(98,100,128,1)] text-base font-normal leading-[26px] self-stretch mt-[15px] max-md:max-w-full">
              Discover how our RWA platform channels liquidity from digital{" "}
              <br className="max-md:hidden" />
              asset markets into cross-border payments, cutting transaction{" "}
              <br className="max-md:hidden" />
              delays and propelling your business forward.
            </p>
            <h3 className="text-[22px] font-semibold leading-[1.2] mt-[37px]">
              Strategic Integration Pays Off
            </h3>
            <p className="text-[rgba(98,100,128,1)] text-base font-normal leading-[26px] self-stretch mt-[15px] max-md:max-w-full">
              Through meticulous risk management and streamlined{" "}
              <br className="max-md:hidden" />
              processes, we enable rapid funding access for scaling your{" "}
              <br className="max-md:hidden" />
              operations. Every transaction becomes part of a success story{" "}
              <br className="max-md:hidden" />
              when powered by our transparent, blockchain-based{" "}
              <br className="max-md:hidden" />
              infrastructure.
            </p>
            <a
              href="https://tmr-frontend.vercel.app/"
              className="bg-[rgba(36,29,201,1)] flex items-center gap-2.5 overflow-hidden text-white text-base font-medium tracking-[-0.32px] min-h-10 px-[27px] py-2 rounded-[50px] hover:bg-opacity-90 transition-colors mt-[49px] w-fit"
              aria-label="Get Started"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Revolution;
