import React from "react";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Services from "@/components/landing/Services";
import Benefits from "@/components/landing/Benefits";
import ProfitEngine from "@/components/landing/ProfitEngine";
import Revolution from "@/components/landing/Revolution";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

const Index: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="bg-white flex w-full flex-col overflow-hidden items-center pt-4 max-md:max-w-full">
        <Header />
        <Hero />
        <Features />
        <Services />
        <Benefits />
        <ProfitEngine />
        <Revolution />
        <CTA />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
