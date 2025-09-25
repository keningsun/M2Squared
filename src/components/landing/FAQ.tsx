import React, { useState } from 'react';
import { Plus } from 'lucide-react';

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
            isOpen ? 'rotate-45' : ''
          }`}
        >
          <Plus className="w-5 h-5 text-[#70B6E8]" />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
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
      question: 'What is a stablecoin and why does it matter for businesses?',
      answer:
        'Stablecoins are digital tokens pegged to real-world currencies like the US dollar. They enable instant, low-cost cross-border payments without relying on traditional banking intermediaries.',
    },
    {
      question: 'What is M2Square’s Global Payment Network?',
      answer:
        'A unified platform that lets businesses collect payments in stablecoins, pay expenses in fiat or stablecoins, and access liquidity — all within a compliant, secure framework.',
    },
    {
      question: 'How does M2Square ensure compliance and regulatory coverage?',
      answer:
        'We operate under licenses in regions such as Mexico, Argentina, Peru, US, Philippines, and Chile, aligned with global standards like EU MiCA and US GENIUS Act.',
    },
    {
      question: 'Which businesses benefit most from stablecoin payments?',
      answer:
        'E-commerce merchants, gaming and live-streaming platforms, and payment companies seeking faster settlement, lower fees, and reliable access to global markets.',
    },
    {
      question: 'How does M2Square make money?',
      answer:
        'Revenue comes from settlement fees, interest rate spreads, and liquidity optimization, ensuring a sustainable business model without hidden charges for merchants.',
    },
    {
      question: 'What is M2Square’s long-term vision?',
      answer:
        'To become the trusted business bank on stablecoins — powering $1B+ in monthly settlement volume and serving as the global clearing rail for digital commerce.',
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
