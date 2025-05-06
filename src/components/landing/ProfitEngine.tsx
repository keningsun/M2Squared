import React from "react";
import { DollarSign, ArrowUpDown, BarChart3 } from "lucide-react";

interface ProfitCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  items: {
    label: string;
    value: string;
    isTotal?: boolean;
  }[];
}

const ProfitCard: React.FC<ProfitCardProps> = ({
  title,
  description,
  icon,
  items,
}) => {
  const totalItem = items.find((item) => item.isTotal);
  const regularItems = items.filter((item) => !item.isTotal);

  return (
    <div className="bg-white self-stretch flex-1 rounded-[20px] shadow-sm">
      <div className="p-8 flex flex-col h-full">
        <div className="flex items-center mb-6">
          <div className="bg-primary w-[60px] h-[60px] rounded-full flex justify-center items-center text-white">
            {icon}
          </div>
          <h3 className="text-primary text-[28px] font-bold font-ubuntu ml-5 tracking-tight">
            {title}
          </h3>
        </div>

        <p className="text-muted-foreground text-base font-normal leading-[24px] mb-6 border-b pb-6 border-gray-100">
          {description}
        </p>

        <div className="mt-auto w-full">
          <div className="flex flex-col space-y-4">
            {regularItems.map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <div className="text-muted-foreground font-normal flex items-center">
                  <span className="w-2 h-2 rounded-full bg-primary opacity-70 mr-2"></span>
                  {item.label}
                </div>
                <div className="text-primary font-semibold text-lg">
                  {item.value}
                </div>
              </div>
            ))}

            {totalItem && (
              <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200 bg-icon-bg p-4 rounded-lg">
                <div className="text-primary font-medium">
                  {totalItem.label}
                </div>
                <div className="text-primary font-bold text-xl">
                  {totalItem.value}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProfitEngine: React.FC = () => {
  const profitCards = [
    {
      title: "Rate Difference",
      description:
        "Margin-based revenue through interest rate spreads between borrowers and lenders, creating sustainable profit.",
      icon: <ArrowUpDown size={28} strokeWidth={2} />,
      items: [
        { label: "Borrower Rate", value: "8-12%" },
        { label: "Lender Rate", value: "5-9%" },
        { label: "M2Squared Margin", value: "2-4%", isTotal: true },
      ],
    },
    {
      title: "On-Chain Management",
      description:
        "Additional returns from liquidity mining and DeFi yield optimizations, enhancing overall platform value.",
      icon: <BarChart3 size={28} strokeWidth={2} />,
      items: [
        { label: "Liquidity Mining", value: "1-2%" },
        { label: "DeFi Yield Farming", value: "2-5%" },
        { label: "Total Additional Yield", value: "3-7%", isTotal: true },
      ],
    },
    {
      title: "Revenue Streams",
      description:
        "Diverse income sources from transaction fees and platform services, providing consistent cash flow.",
      icon: <DollarSign size={28} strokeWidth={2} />,
      items: [
        { label: "Transaction Fees", value: "0.5-1%" },
        { label: "Platform Services", value: "1-3%" },
        { label: "Total Revenue", value: "1.5-4%", isTotal: true },
      ],
    },
  ];

  return (
    <section className="bg-icon-bg self-stretch flex w-full flex-col mt-[80px] px-20 py-[100px] max-md:max-w-full max-md:mt-10 max-md:px-5 max-md:py-[80px] relative overflow-hidden border-t border-b border-gray-100">
      <div className="flex w-[1440px] max-w-full mx-auto relative z-10">
        <div className="w-full">
          <div className="flex items-baseline mb-4">
            <div className="w-10 h-1 bg-primary rounded-full mr-4"></div>
            <h3 className="text-primary text-xl font-medium">
              Profit Mechanisms
            </h3>
          </div>

          <h2 className="text-primary text-[40px] font-semibold leading-[44px] tracking-[-1.2px] mb-4 font-inter antialiased">
            Our Triple-Engine{" "}
            <span className="text-primary font-bold">Profit Model</span>
          </h2>

          <p className="text-muted-foreground text-xl max-w-[700px] mb-12">
            Leveraging blockchain technology to create multiple revenue streams
            while maintaining competitive rates for all parties.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {profitCards.map((card, index) => (
              <ProfitCard
                key={index}
                title={card.title}
                description={card.description}
                icon={card.icon}
                items={card.items}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfitEngine;
