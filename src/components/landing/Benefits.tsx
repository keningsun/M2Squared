import React from "react";

interface BenefitProps {
  title: string;
  description: string;
  icon?: string;
}

const BenefitCard: React.FC<BenefitProps> = ({ title, description, icon }) => {
  return (
    <div className="flex-1 px-4 max-md:w-full max-md:ml-0">
      <div className="flex grow flex-col items-center text-base text-muted-foreground font-normal text-center mt-[34px] max-md:mt-10">
        {icon && (
          <img
            src={icon}
            alt={title}
            className="aspect-[1] object-contain w-10"
          />
        )}
        <h3 className="text-primary text-xl font-semibold leading-7 whitespace-pre-line">
          {title}
        </h3>
        <p className="leading-[26px] self-stretch mt-[29px] whitespace-pre-line">
          {description}
        </p>
      </div>
    </div>
  );
};

const Benefits: React.FC = () => {
  const benefits = [
    {
      title: "Elevate Your Cross-Border Reach",
      description:
        "Enhance your international payment\ncapabilities with near-instant settlements\nand streamlined operations, positioning\nyour business for worldwide success.",
    },
    {
      title: "Optimize Capital Efficiency",
      description:
        "Leverage our on-chain yield pools for\nstable returns on your digital assets,\nensuring consistent liquidity while\nminimizing the overheads of conventional\nfinancing.",
    },
    {
      title: "Compliance That Fits Your Needs",
      description:
        "Our robust KYB and regulatory framework\nadapt to businesses of all sizes—enabling\nsecure, compliant expansion across\nborders without the usual headaches.",
    },
  ];

  return (
    <section className="flex flex-col items-center mt-[133px] max-md:mt-10">
      <h2 className="text-primary text-5xl font-bold leading-[56px] tracking-[-2.2px] text-center uppercase max-md:max-w-full max-md:text-[40px] max-md:leading-[52px]">
        UNLOCK YOUR GLOBAL POTENTIAL
      </h2>
      <div className="w-[1440px] max-w-full mt-[39px] px-4">
        <div className="gap-8 flex justify-between items-stretch max-md:flex-col max-md:items-center">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
