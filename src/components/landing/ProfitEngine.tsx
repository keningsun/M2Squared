import React from "react";

interface ProfitCardProps {
  title: string;
  description: string;
  items: {
    label: string;
    value: string;
    isTotal?: boolean;
  }[];
}

const ProfitCard: React.FC<ProfitCardProps> = ({
  title,
  description,
  items,
}) => {
  const totalItem = items.find((item) => item.isTotal);
  const regularItems = items.filter((item) => !item.isTotal);

  return (
    <div className="bg-white flex grow flex-col text-base tracking-[0.16px] leading-[1.6] w-full pt-[35px] pb-[58px] px-[33px] rounded-[32px] max-md:max-w-full max-md:mt-10 max-md:px-5">
      <h3 className="text-[rgba(36,29,201,1)] text-3xl font-bold leading-none tracking-[-1.5px] uppercase">
        {title}
      </h3>
      <p className="text-gray-600 font-normal mt-[25px]">{description}</p>
      <div className="bg-[rgba(237,237,240,1)] self-stretch mt-7 rounded-[20px] max-md:max-w-full">
        <div className="border-gray-100 border w-full px-[17px] py-5 rounded-[20px] border-solid max-md:max-w-full">
          <div className="flex items-stretch gap-5 text-[rgba(2,8,23,1)] flex-wrap justify-between max-md:max-w-full max-md:mr-0.5">
            <div className="flex flex-col items-stretch font-normal">
              {regularItems.map((item, index) => (
                <div key={index} className={index > 0 ? "mt-[22px]" : ""}>
                  {item.label}
                </div>
              ))}
            </div>
            <div className="flex flex-col items-stretch font-semibold whitespace-nowrap">
              {regularItems.map((item, index) => (
                <div
                  key={index}
                  className={index > 0 ? "mt-[22px] max-md:ml-2" : ""}
                >
                  {item.value}
                </div>
              ))}
            </div>
          </div>
          {totalItem && (
            <div className="border flex items-stretch gap-5 flex-wrap justify-between mt-[15px] pt-[15px] pb-[5px] border-t max-md:max-w-full">
              <div className="text-[rgba(2,8,23,1)] font-normal">
                {totalItem.label}
              </div>
              <div className="text-[rgba(36,29,201,1)] font-semibold">
                {totalItem.value}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ProfitEngine: React.FC = () => {
  const profitCards = [
    {
      title: "Rate Difference",
      description: "Margin-based revenue through interest rate spreads.",
      items: [
        { label: "Borrower Rate", value: "8-12%" },
        { label: "Lender Rate", value: "5-9%" },
        { label: "Tomorrow Margin", value: "2-4%", isTotal: true },
      ],
    },
    {
      title: "On-Chain Capital Management",
      description:
        "Additional returns from liquidity mining and DeFi collaborations.",
      items: [
        { label: "Liquidity Mining", value: "1-2%" },
        { label: "DeFi Yield Farming", value: "2-5%" },
        { label: "Total Additional Yield", value: "3-7%", isTotal: true },
      ],
    },
  ];

  return (
    <section className="bg-[rgba(237,237,240,1)] self-stretch flex w-full flex-col items-center mt-[123px] px-20 py-20 max-md:max-w-full max-md:mt-10 max-md:px-5 relative overflow-hidden">
      {/* 装饰元素 - 左上区域 */}
      <img
        src="/tpt_1.svg"
        alt="Decorative element"
        className="absolute -top-10 -left-10 w-[350px] object-contain pointer-events-none z-0 opacity-100"
      />
      <img
        src="/tpt_1.svg"
        alt="Decorative element"
        className="absolute top-[10%] left-[15%] w-[160px] object-contain pointer-events-none z-0 opacity-100 transform rotate-45"
      />
      <img
        src="/tpt_1.svg"
        alt="Decorative element"
        className="absolute top-[25%] left-[5%] w-[140px] object-contain pointer-events-none z-0 opacity-100 transform -rotate-15"
      />
      <img
        src="/tpt_1.svg"
        alt="Decorative element"
        className="absolute top-[35%] left-[15%] w-[240px] object-contain pointer-events-none z-0 opacity-100 transform -rotate-15"
      />

      {/* 装饰元素 - 右上区域 */}
      <img
        src="/tpt_1.svg"
        alt="Decorative element"
        className="absolute top-[20%] right-[10%] w-[175px] object-contain pointer-events-none z-0 opacity-100 transform rotate-180"
      />

      {/* 装饰元素 - 右下区域 */}
      <img
        src="/tpt_1.svg"
        alt="Decorative element"
        className="absolute -bottom-10 -right-10 w-[480px] object-contain pointer-events-none z-0 opacity-100 transform rotate-180"
      />
      <img
        src="/tpt_1.svg"
        alt="Decorative element"
        className="absolute bottom-[30%] right-[20%] w-[150px] object-contain pointer-events-none z-0 opacity-100 transform rotate-90"
      />

      {/* 装饰元素 - 左下区域 */}
      <img
        src="/tpt_1.svg"
        alt="Decorative element"
        className="absolute bottom-[15%] left-[18%] w-[145px] object-contain pointer-events-none z-0 opacity-100 transform -rotate-60"
      />

      <div className="flex w-[1240px] max-w-full flex-col relative z-10">
        <h2 className="text-[rgba(36,29,201,1)] text-5xl font-bold leading-none tracking-[-2px] text-center uppercase self-center max-md:max-w-full max-md:text-[40px]">
          The Profit Engine
        </h2>
        <div className="mt-12 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            {profitCards.map((card, index) => (
              <div key={index} className="w-6/12 max-md:w-full max-md:ml-0">
                <ProfitCard
                  title={card.title}
                  description={card.description}
                  items={card.items}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfitEngine;
