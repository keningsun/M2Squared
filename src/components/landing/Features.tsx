import React from "react";
import { Wallet, LineChart, BookOpen } from "lucide-react";

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => {
  return (
    <div className="bg-white self-stretch flex-1 min-w-60 rounded-[32px] h-[420px] flex">
      <div className="border-gray-100 border py-8 px-5 rounded-[50px] border-solid flex flex-col flex-1 justify-between">
        <div>
          <div className="bg-icon-bg w-[72px] h-[72px] rounded-full flex justify-center items-center text-primary">
            {icon}
          </div>
          <h3 className="text-primary text-[50px] font-bold font-ubuntu leading-[48px] tracking-[-3.3px] uppercase mt-[26px] whitespace-pre-line">
            {title}
          </h3>
          <p className="text-muted-foreground text-base font-normal leading-[28px] tracking-[0.2px] mt-8 max-md:mr-[3px] whitespace-pre-line">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Wallet size={36} strokeWidth={1.5} />,
      title: "INSTANT ACCESS \nTO CAPITAL",
      description:
        "Simplified process for obtaining cross-border \nworking capital. Reduces dependence on \nbank loans or VC.",
    },
    {
      icon: <LineChart size={36} strokeWidth={1.5} />,
      title: "ON-CHAIN YIELD\nOPPORTUNITIES",
      description:
        "Diverse lending pools with different maturities \nand APYs. Transparent smart contracts for \nsecure yield generation.",
    },
    {
      icon: <BookOpen size={36} strokeWidth={1.5} />,
      title: "DEEP INDUSTRY\nEXPERTISE",
      description:
        "Built by a team with extensive DeFi and global \npayments experience. Driving the PayFi \nrevolution.",
    },
  ];

  return (
    <section className="bg-icon-bg self-stretch flex w-full flex-col items-center justify-center mt-[60px] px-20 pt-[140px] pb-[120px] max-md:max-w-full max-md:mt-10 max-md:px-5 max-md:pt-[100px] max-md:pb-[80px] relative overflow-hidden">
      {/* 装饰元素 - 左上区域 */}
      {/* <img
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
      /> */}

      {/* 装饰元素 - 右上区域 */}
      {/* <img
        src="/tpt_1.svg"
        alt="Decorative element"
        className="absolute top-[20%] right-[10%] w-[175px] object-contain pointer-events-none z-0 opacity-100 transform rotate-180"
      /> */}

      {/* 装饰元素 - 右下区域 */}
      {/* <img
        src="/tpt_1.svg"
        alt="Decorative element"
        className="absolute -bottom-10 -right-10 w-[480px] object-contain pointer-events-none z-0 opacity-100 transform rotate-180"
      />
      <img
        src="/tpt_1.svg"
        alt="Decorative element"
        className="absolute bottom-[30%] right-[20%] w-[150px] object-contain pointer-events-none z-0 opacity-100 transform rotate-90"
      /> */}

      {/* 装饰元素 - 左下区域 */}
      {/* <img
        src="/tpt_1.svg"
        alt="Decorative element"
        className="absolute bottom-[15%] left-[18%] w-[145px] object-contain pointer-events-none z-0 opacity-100 transform -rotate-60"
      /> */}

      <div className="flex w-[1440px] max-w-full flex-col items-stretch max-md:mb-2.5 relative z-10">
        <h2 className="text-primary text-[40px] font-semibold leading-[44px] tracking-[-1.2px] text-center self-center max-md:max-w-full font-inter antialiased mb-[50px]">
          Empowering businesses with next-gen payment solutions
        </h2>
        <div className="flex items-stretch gap-5 mt-[30px] max-md:mt-10 max-md:flex-col">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
