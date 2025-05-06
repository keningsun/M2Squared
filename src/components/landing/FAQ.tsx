import React, { useState } from "react";
import { Plus } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t border-[#70B6E8]/20">
      <button
        className="flex justify-between items-center w-full py-6 text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="text-[#70B6E8] text-lg font-medium">{question}</h3>
        <div
          className={`rounded-full border border-[#70B6E8] p-1 transition-transform ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          <Plus className="w-5 h-5 text-[#70B6E8]" />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-[#70B6E8]/90 pr-8">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqItems = [
    {
      question: "What is M2Squared's RWA platform?",
      answer:
        "M2Squared is a Real World Asset (RWA) platform that connects on-chain liquidity with cross-border payment operations. We provide a bridge between digital asset markets and traditional payment systems, enabling stable yield opportunities for investors while offering rapid working capital solutions for payment businesses.",
    },
    {
      question: "How does M2Squared generate yield for investors?",
      answer:
        "M2Squared offers diversified lending pools with various maturities and APYs, designed specifically for cross-border payment demands. Our platform uses blockchain-powered smart contracts for trustless lending, providing real-time visibility into pool performance while implementing robust risk management strategies to maximize yields confidently.",
    },
    {
      question: "What working capital solutions does M2Squared offer?",
      answer:
        "We provide immediate liquidity for international transactions, helping payment companies overcome lengthy bank transfers and reduce operational bottlenecks. Our stablecoin-based settlement system allows businesses to expand their global reach and secure real-time funds without waiting on traditional finance channels.",
    },
    {
      question: "How does M2Squared ensure compliance and security?",
      answer:
        "M2Squared implements thorough Know Your Business (KYB) protocols to verify borrower legitimacy and ensure regulatory compliance. Our platform safeguards all participants through transparent credit assessments and secure repayment structures, while employing bank-level security measures including 256-bit encryption and continuous monitoring systems to protect your funds and information.",
    },
  ];

  return (
    <section className="flex flex-col w-full bg-primary py-20 px-4 md:px-20">
      <div className="w-[1440px] max-w-full mx-auto">
        <h2 className="text-[#70B6E8] text-6xl font-bold mb-16">FAQs</h2>

        <div className="flex flex-col w-full">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
          <div className="border-t border-[#70B6E8]/20 mt-6"></div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
