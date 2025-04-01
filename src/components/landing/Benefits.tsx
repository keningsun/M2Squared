
import React from "react";

interface BenefitProps {
  title: string;
  description: string;
  icon?: string;
}

const BenefitCard: React.FC<BenefitProps> = ({ title, description, icon }) => {
  return (
    <div className="flex-1 px-4 max-md:w-full max-md:ml-0">
      <div className="flex grow flex-col items-center text-base text-[rgba(98,100,128,1)] font-normal text-center mt-[34px] max-md:mt-10">
        {icon && (
          <img
            src={icon}
            alt={title}
            className="aspect-[1] object-contain w-10"
          />
        )}
        <h3 className="text-[rgba(36,29,201,1)] text-xl font-semibold leading-7">
          {title}
        </h3>
        <p className="leading-[26px] self-stretch mt-[29px]">{description}</p>
      </div>
    </div>
  );
};

const Benefits: React.FC = () => {
  const benefits = [
    {
      title: "Elevate Your Cross-Border \nReach",
      description:
        "Enhance your international payment \ncapabilities with near-instant settlements \nand streamlined operations, positioning \nyour business for worldwide success.",
    },
    {
      title: "Optimize Capital Efficiency\n",
      description:
        "Leverage our on-chain yield pools for \nstable returns on your digital assets, \nensuring consistent liquidity while \nminimizing the overheads of conventional \nfinancing.",
      icon: "https://cdn.builder.io/api/v1/image/assets/ca7652c2d00348659dd4a4ce2925ad0b/9832ac28a9e63d1a9248cc51ae919a25c5a55821?placeholderIfAbsent=true",
    },
    {
      title: "Compliance That Fits Your \nNeeds",
      description:
        "Our robust KYB and regulatory framework \nadapt to businesses of all sizes—enabling \nsecure, compliant expansion across \nborders without the usual headaches.",
    },
  ];

  return (
    <section className="flex flex-col items-center mt-[133px] max-md:mt-10">
      <h2 className="text-[rgba(36,29,201,1)] text-5xl font-bold leading-[56px] tracking-[-2.2px] text-center uppercase max-md:max-w-full max-md:text-[40px] max-md:leading-[52px]">
        UNLOCK YOUR GLOBAL <br />
        POTENTIAL
      </h2>
      <div className="w-[1145px] max-w-full mt-[39px] px-4">
        <div className="gap-8 flex justify-between items-stretch max-md:flex-col max-md:items-center">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
