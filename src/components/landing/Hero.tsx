"use client";

import React from "react";
import { HeroSpline } from "./HeroSpline";

const Hero: React.FC = () => {
  return (
    <section className="relative flex w-full max-w-full flex-col overflow-hidden items-center py-24 px-6 md:px-8 mt-0">
      {/* 背景渐变效果 */}

      <div className="relative w-[1440px] max-w-full flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-20 z-10">
        {/* 文本内容 */}
        <div className="flex flex-col items-start text-left max-w-xl">
          <h1 className="text-primary text-[52px] md:text-[72px] font-bold leading-[1.1] font-ubuntu tracking-[-2px] uppercase max-md:text-[40px]">
            On-Chain Liquidity meets
            <br />
            <span className="bg-clip-text text-transparent bg-primary/70 ">
              Cross-Border Payments
            </span>
          </h1>

          <p className="text-muted-foreground text-lg md:text-xl font-normal leading-7 mt-6">
            Empower your global payment operations with a secure, efficient, and
            compliant RWA platform—unlocking stable yield opportunities for
            on-chain investors and rapid working capital for payment businesses.
          </p>

          <div className="flex gap-5 mt-10">
            <a
              href="https://tmr-frontend.vercel.app/"
              className="bg-primary flex justify-center text-primary-foreground min-h-12 py-4 px-8 rounded-[50px] hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              aria-label="Get Started"
            >
              Get Started
            </a>
            <a
              href="#"
              className="flex justify-center text-primary min-h-12 py-4 px-8 rounded-[50px] border border-primary hover:bg-primary/5 transition-all duration-300"
              aria-label="Learn More"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* WebM视频展示 */}
        <div className="relative w-full md:w-1/2 flex justify-center items-center">
          <div className="absolute w-[600px] h-[600px] rounded-full blur-3xl"></div>
          <div
            className="relative w-full aspect-square max-w-[600px] rounded-full overflow-hidden"
            style={{ background: "transparent" }}
          >
            <HeroSpline className="rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

// 添加浮动动画到全局样式
// 在你的globals.css中添加以下内容:
/*
@keyframes float {
  0% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
  }
  100% {
    transform: translateY(0px) rotate(0deg);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}
*/
