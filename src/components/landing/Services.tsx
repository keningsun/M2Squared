import React from "react";

interface ServiceProps {
  title: string;
  image: string;
  isImageLeft: boolean;
  sections: {
    heading: string;
    description: string;
  }[];
}

const ServiceCard: React.FC<ServiceProps> = ({
  title,
  image,
  isImageLeft,
  sections,
}) => {
  const content = (
    <div className="self-stretch min-w-60 overflow-hidden w-[510px] my-auto max-md:max-w-full">
      <div className="w-full overflow-hidden max-md:max-w-full">
        <h3 className="text-[rgba(36,29,201,1)] text-[32px] font-bold leading-none tracking-[-0.64px]">
          {title}
        </h3>
        {sections.map((section, index) => (
          <div
            key={index}
            className={`${index > 0 ? "mt-5" : "mt-5"} max-w-full ${
              index === 0 ? "w-[500px]" : "w-full"
            }`}
          >
            <h4 className="text-[rgba(36,29,201,1)] text-xl font-semibold leading-[1.4] max-md:max-w-full">
              {section.heading}
            </h4>
            <p className="text-[rgba(98,100,128,1)] text-base font-normal leading-6 mt-2 max-md:max-w-full">
              {section.description}
            </p>
          </div>
        ))}
      </div>
      <a
        href="https://tmr-frontend.vercel.app/"
        className="bg-[rgba(36,29,201,1)] flex w-40 max-w-full items-center gap-4 overflow-hidden text-base text-white font-medium tracking-[-0.4px] leading-none mt-12 px-5 py-3 rounded-[50px] max-md:mt-10 hover:bg-opacity-90 transition-colors"
        aria-label="Get Started"
      >
        <span className="self-stretch my-auto">Get Started</span>
        <img
          src={
            isImageLeft
              ? "https://cdn.builder.io/api/v1/image/assets/ca7652c2d00348659dd4a4ce2925ad0b/01bfbd00bdcc6907875a2d59175464e289e12de1?placeholderIfAbsent=true"
              : "https://cdn.builder.io/api/v1/image/assets/ca7652c2d00348659dd4a4ce2925ad0b/6678f687ae963112775f15b887efbf199bcb9e38?placeholderIfAbsent=true"
          }
          alt="Arrow right"
          className="aspect-[1] object-contain w-3 self-stretch shrink-0 my-auto"
        />
      </a>
    </div>
  );

  const imageElement = (
    <img
      src={image}
      alt={title}
      className="aspect-[0.98] object-contain w-[510px] self-stretch min-w-60 my-auto max-md:max-w-full"
    />
  );

  return (
    <div
      className={`bg-[rgba(241,241,249,1)] flex w-full items-center gap-[40px_58px] overflow-hidden justify-between flex-wrap mt-10 ${
        isImageLeft ? "pl-5 pr-[60px]" : "pl-[60px] pr-5"
      } py-5 rounded-[32px] max-md:max-w-full max-md:${
        isImageLeft ? "pr-5" : "pl-5"
      }`}
    >
      {isImageLeft ? (
        <>
          {imageElement}
          {content}
        </>
      ) : (
        <>
          {content}
          {imageElement}
        </>
      )}
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: "ON-CHAIN YIELD POOLS",
      image:
        "https://cdn.builder.io/api/v1/image/assets/ca7652c2d00348659dd4a4ce2925ad0b/3f676c9cac3a8e2a2b9213f064aec432a2baa162?placeholderIfAbsent=true",
      isImageLeft: true,
      sections: [
        {
          heading: "Earn Stable Returns",
          description:
            "Access diversified lending pools designed to connect your \ndigital assets with real-world cross-border payment demands\n—maximize yields confidently.",
        },
        {
          heading: "Transparent & Secure",
          description:
            "Leverage blockchain-powered smart contracts for trustless \nlending. Enjoy real-time visibility into pool performance and \nrobust risk management strategies.",
        },
      ],
    },
    {
      title: "WORKING CAPITAL FINANCING",
      image:
        "https://cdn.builder.io/api/v1/image/assets/ca7652c2d00348659dd4a4ce2925ad0b/f6324bf23994ebc91b6f5ff563cc99a2b91fbe88?placeholderIfAbsent=true",
      isImageLeft: false,
      sections: [
        {
          heading: "Accelerate Cross-Border Operations",
          description:
            "Empower your payment company with immediate liquidity for \ninternational transactions. Overcome lengthy bank transfers \nand reduce operational bottlenecks.",
        },
        {
          heading: "Scale Faster",
          description:
            "Take advantage of stablecoin-based settlements to expand \nyour global reach. Secure real-time funds to seize opportunities \nwithout waiting on traditional finance.",
        },
      ],
    },
    {
      title: "COMPLIANCE & KYB",
      image:
        "https://cdn.builder.io/api/v1/image/assets/ca7652c2d00348659dd4a4ce2925ad0b/ac33c444a9d3d976005468337b6072cabd453636?placeholderIfAbsent=true",
      isImageLeft: true,
      sections: [
        {
          heading: "Trusted Partnerships",
          description:
            "We implement thorough Know Your Business protocols, \nensuring borrower legitimacy and compliance. Build \nconfidence with verified partnerships.",
        },
        {
          heading: "Reduced Risk",
          description:
            "Our RWA platform safeguards lenders through transparent \ncredit assessments and secure repayment structures, creating \na trustworthy environment for all stakeholders.",
        },
      ],
    },
  ];

  return (
    <section className="w-[1200px] max-w-full overflow-hidden mt-[133px] px-5 max-md:mt-10">
      <h2 className="text-[rgba(36,29,201,1)] text-5xl font-bold leading-none tracking-[-2px] text-center uppercase max-md:max-w-full max-md:text-[40px]">
        Services That Fuel Your Business Growth
      </h2>

      {services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          image={service.image}
          isImageLeft={service.isImageLeft}
          sections={service.sections}
        />
      ))}
    </section>
  );
};

export default Services;
