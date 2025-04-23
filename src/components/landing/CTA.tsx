import React from "react";
import { ArrowRight } from "lucide-react";

const CTA: React.FC = () => {
  return (
    <section className="flex flex-col self-stretch relative w-full overflow-hidden items-center text-xl text-primary justify-center px-0 pt-0 pb-0 max-md:max-w-full max-md:px-0">
      <div className="w-full bg-primary py-16 md:py-20 shadow-lg overflow-hidden relative">
        <div className="absolute left-0 top-0 w-full h-full">
          <div className="absolute -top-20 -left-20 w-[300px] h-[300px] rounded-full bg-[#70B6E8]/10 blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-[250px] h-[250px] rounded-full bg-[#70B6E8]/10 blur-3xl"></div>
        </div>

        <div className="absolute right-0 top-0 w-1/2 h-full opacity-10">
          <img
            src="/cta_bg.png"
            alt="Background pattern"
            className="object-cover h-full w-full"
          />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 px-8 md:px-20 w-full max-w-[1440px] mx-auto">
          <div className="flex flex-col items-start text-[#70B6E8] max-w-[600px]">
            <div className="flex items-center mb-4">
              <div className="h-1 w-10 bg-[#70B6E8] rounded-full mr-3"></div>
              <span className="text-[#70B6E8] font-medium">
                Global Payments Solution
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-ubuntu leading-tight tracking-[-0.72px] uppercase">
              Ready to Scale Your Payments?
            </h2>

            <div className="flex items-center gap-4 mt-8">
              <a
                href="#"
                className="flex justify-center items-center text-primary bg-[#70B6E8] text-base font-medium tracking-[-0.32px] min-h-12 py-3 px-8 rounded-[30px] hover:bg-[#70B6E8]/90 hover:scale-105 transition-all duration-300 shadow-lg group"
                aria-label="Learn More"
              >
                Learn More
                <ArrowRight
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  size={18}
                />
              </a>
            </div>
          </div>

          <div className="hidden md:flex flex-col items-center">
            <div className="w-[260px] h-[260px] bg-[#70B6E8]/5 backdrop-blur-sm rounded-full p-3 border border-[#70B6E8]/30">
              <div className="w-full h-full rounded-full border-2 border-[#70B6E8]/20 flex items-center justify-center">
                <div className="text-[#70B6E8] flex flex-col items-center justify-center text-center">
                  <span className="text-5xl font-bold">24/7</span>
                  <span className="text-[#70B6E8] text-lg mt-2">
                    Working Capital
                  </span>
                  <div className="flex items-center gap-1 mt-3">
                    <div className="h-1 w-1 rounded-full bg-[#70B6E8]"></div>
                    <div className="h-1 w-1 rounded-full bg-[#70B6E8]"></div>
                    <div className="h-1 w-8 rounded-full bg-[#70B6E8]"></div>
                    <div className="h-1 w-1 rounded-full bg-[#70B6E8]"></div>
                    <div className="h-1 w-1 rounded-full bg-[#70B6E8]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
