import React from 'react';
import { ArrowRight } from 'lucide-react';

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

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 px-8 md:px-20 w-full max-w-[1440px] mx-auto">
          <div className="flex flex-col items-start text-[#70B6E8] max-w-[500px]">
            <h2 className="text-4xl md:text-5xl font-bold font-ubuntu leading-tight tracking-[-0.72px] uppercase">
              Start Building on Stablecoins
            </h2>
            <p className="text-[#70B6E8]/80 text-lg mt-4">
              Join businesses already using M2Square for instant cross-border
              payments and liquidity management.
            </p>

            <div className="flex items-center gap-4 mt-8">
              <a
                href="https://tmr-frontend.vercel.app/"
                className="flex justify-center items-center text-primary bg-[#70B6E8] text-base font-medium tracking-[-0.32px] min-h-12 py-3 px-8 rounded-[30px] hover:bg-[#70B6E8]/90 hover:scale-105 transition-all duration-300 shadow-lg group"
                aria-label="Get Started"
              >
                Get Started
                <ArrowRight
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  size={18}
                />
              </a>
            </div>
          </div>

          <div className="hidden md:flex flex-col items-center">
            <div className="relative w-[300px] h-[300px]">
              {/* Central core */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-[#70B6E8]/90 rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-[#70B6E8]/60 rounded-full"></div>
                </div>
              </div>

              {/* Orbiting elements */}
              <div
                className="absolute inset-0 animate-spin"
                style={{ animationDuration: '20s' }}
              >
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-[#70B6E8]/40 rounded-xl flex items-center justify-center">
                  <div className="w-8 h-8 bg-[#70B6E8]/70 rounded-lg"></div>
                </div>
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-[#70B6E8]/40 rounded-xl flex items-center justify-center">
                  <div className="w-8 h-8 bg-[#70B6E8]/70 rounded-lg"></div>
                </div>
                <div className="absolute left-8 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-[#70B6E8]/40 rounded-xl flex items-center justify-center">
                  <div className="w-8 h-8 bg-[#70B6E8]/70 rounded-lg"></div>
                </div>
                <div className="absolute right-8 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-[#70B6E8]/40 rounded-xl flex items-center justify-center">
                  <div className="w-8 h-8 bg-[#70B6E8]/70 rounded-lg"></div>
                </div>
              </div>

              {/* Connection lines */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 border border-[#70B6E8]/30 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
