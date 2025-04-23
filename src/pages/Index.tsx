import React from "react";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Services from "@/components/landing/Services";
import Benefits from "@/components/landing/Benefits";
import ProfitEngine from "@/components/landing/ProfitEngine";
import Revolution from "@/components/landing/Revolution";
import FAQ from "@/components/landing/FAQ";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

const Index: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="bg-white flex w-full flex-col overflow-hidden items-center pt-4 max-md:max-w-full">
        <Header />
        <Hero />
        <Features />
        <CTA />
        <Services />
        {/* 暂时隐藏Benefits组件 */}
        {/* <Benefits /> */}
        <ProfitEngine />
        {/* 已将Revolution内容集成到Services组件中 */}
        {/* <Revolution /> */}
        <FAQ />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
