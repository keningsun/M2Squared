import React from "react";

const FeatureCard: React.FC<{
  icon: string;
  title: string;
  description: string;
}> = ({ icon, title, description }) => {
  return (
    <div className="bg-white self-stretch min-w-60 grow shrink w-80 my-auto rounded-[32px]">
      <div className="border-gray-100 border pt-4 pb-[47px] px-5 rounded-[50px] border-solid">
        <img
          src={icon}
          alt={title}
          className="aspect-[1] object-contain w-[72px] rounded-[50px]"
        />
        <h3 className="text-[rgba(36,29,201,1)] text-[40px] font-bold leading-[48px] tracking-[-3.3px] uppercase mt-[26px]">
          {title}
        </h3>
        <p className="text-[rgba(98,100,128,1)] text-base font-normal leading-[26px] tracking-[0.16px] mt-8 max-md:mr-[3px]">
          {description}
        </p>
      </div>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/ca7652c2d00348659dd4a4ce2925ad0b/3fc49d7f04723fa07f5577e6f425e7cd3d243b16?placeholderIfAbsent=true",
      title: "Instant Access to \nCapital",
      description:
        "Simplified process for obtaining cross-border \nworking capital. Reduces dependence on \nbank loans or VC.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/ca7652c2d00348659dd4a4ce2925ad0b/2da0600b7ab86a5ed22c18a2e4d6fc6848008ba2?placeholderIfAbsent=true",
      title: "On-Chain Yield \nOpportunities",
      description:
        "Diverse lending pools with different maturities \nand APYs. Transparent smart contracts for \nsecure yield generation.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/ca7652c2d00348659dd4a4ce2925ad0b/e5449501822a9222da365860c9e5b43e64c31bba?placeholderIfAbsent=true",
      title: "Deep Industry \nExpertise",
      description:
        "Built by a team with extensive DeFi and global \npayments experience. Driving the PayFi \nrevolution.",
    },
  ];

  return (
    <section className="bg-[rgba(237,237,240,1)] self-stretch flex w-full flex-col items-center justify-center mt-[60px] px-20 py-[165px] max-md:max-w-full max-md:mt-10 max-md:px-5 max-md:py-[100px]">
      <div className="flex w-[1240px] max-w-full flex-col items-stretch -mb-9 max-md:mb-2.5">
        <h2 className="text-[rgba(36,29,201,1)] text-5xl font-bold leading-none tracking-[-2px] text-center uppercase self-center max-md:max-w-full max-md:text-[40px]">
          Our Unmatched Edge
        </h2>
        <div className="flex items-center gap-5 overflow-hidden flex-wrap mt-[50px] max-md:mt-10">
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
