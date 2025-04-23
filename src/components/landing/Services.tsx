import React, { useState } from "react";
import { Check } from "lucide-react";

interface ServiceProps {
  title: string;
  image: string;
  isImageLeft: boolean;
  sections: {
    heading: string;
    description: string;
  }[];
  benefits?: string[];
  imageClassName?: string;
}

// Tab组件
interface TabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const Tab: React.FC<TabProps> = ({ label, isActive, onClick }) => {
  return (
    <button
      className={`py-3 px-8 rounded-full text-base font-medium transition-colors ${
        isActive
          ? "bg-primary text-primary-foreground"
          : "bg-transparent text-primary hover:bg-primary/5"
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

const ServiceCard: React.FC<ServiceProps> = ({
  title,
  image,
  isImageLeft,
  sections,
  benefits,
  imageClassName,
}) => {
  const content = (
    <div className="self-stretch overflow-hidden w-full md:w-1/2 p-10 bg-icon-bg rounded-r-[32px]">
      <div className="w-full overflow-hidden">
        <h3 className="text-primary text-[32px] font-bold leading-none tracking-[-0.64px]">
          {title}
        </h3>
        {sections.map((section, index) => (
          <div
            key={index}
            className={`${index > 0 ? "mt-5" : "mt-5"} max-w-full`}
          >
            <h4 className="text-primary text-xl font-semibold leading-[1.4]">
              {section.heading}
            </h4>
            <p className="text-muted-foreground text-base font-normal leading-6 mt-2 whitespace-pre-line">
              {section.description}
            </p>
          </div>
        ))}

        {benefits && (
          <div className="mt-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center mt-3">
                <div className="text-primary">
                  <Check size={20} className="mr-2" />
                </div>
                <span className="text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      <a
        href="https://tmr-frontend.vercel.app/"
        className="bg-primary flex w-40 max-w-full items-center overflow-hidden text-base text-primary-foreground font-medium tracking-[-0.4px] leading-none mt-8 py-3 px-8 rounded-[50px] hover:bg-primary/90 transition-colors"
        aria-label="Get Started"
      >
        <span className="self-stretch my-auto">Get Started</span>
      </a>
    </div>
  );

  const imageElement = (
    <div className="w-full md:w-1/2 bg-primary flex justify-center items-center p-10 rounded-l-[32px]">
      <div className="w-full h-full flex justify-center items-center">
        <img
          src={image}
          alt={title}
          className={`object-contain max-w-full h-auto max-h-[400px] ${
            imageClassName || ""
          }`}
        />
      </div>
    </div>
  );

  return (
    <div className="flex w-full overflow-hidden flex-wrap max-md:flex-col rounded-[32px]">
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
  const [activeTab, setActiveTab] = useState<string>("yield");

  const services = [
    {
      id: "yield",
      tabLabel: "On-Chain Yield",
      title: "ON-CHAIN YIELD POOLS",
      image: "/s1.svg",
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
      benefits: [
        "Physical and virtual cards",
        "Issue cards in multiple countries",
        "Over 11 million cards issued as Wise",
      ],
    },
    {
      id: "capital",
      tabLabel: "Working Capital",
      title: "WORKING CAPITAL FINANCING",
      image: "/s2.svg",
      isImageLeft: true,
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
      benefits: [
        "Multi-currency debit cards with our API",
        "Set up multi-user group configurations",
        "Over 11 million debit cards issued so far",
      ],
    },
    {
      id: "compliance",
      tabLabel: "Compliance & KYB",
      title: "COMPLIANCE & KYB",
      image: "/s3.svg",
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
      benefits: [
        "Transparent credit assessments",
        "Secure repayment structures",
        "Comprehensive KYB protocols",
      ],
    },
    {
      id: "revolution",
      tabLabel: "Payment Revolution",
      title: "A PAYMENT REVOLUTION",
      image: "/s4.svg",
      isImageLeft: true,
      imageClassName: "w-[350px] h-[350px] object-contain",
      sections: [
        {
          heading: "Real Results with On-Chain Liquidity",
          description:
            "Discover how our RWA platform channels liquidity from digital \nasset markets into cross-border payments, cutting transaction \ndelays and propelling your business forward.",
        },
        {
          heading: "Strategic Integration Pays Off",
          description:
            "Through meticulous risk management and streamlined \nprocesses, we enable rapid funding access for scaling your \noperations.",
        },
      ],
      benefits: [
        "Reduced transaction delays",
        "Streamlined cross-border payments",
        "Blockchain-based transparency",
      ],
    },
  ];

  const activeService =
    services.find((service) => service.id === activeTab) || services[0];

  return (
    <section className="w-[1440px] max-w-full overflow-hidden mt-[133px] px-5 max-md:mt-10">
      <h2 className="text-primary text-5xl font-medium leading-none tracking-[-2px] max-md:text-[40px] mb-12">
        Services That Fuel Your Business Growth
      </h2>

      <div>
        {/* Tab 选项卡 */}
        <div className="flex bg-icon-bg rounded-full p-2 max-w-fit overflow-x-auto mb-10">
          {services.map((service) => (
            <Tab
              key={service.id}
              label={service.tabLabel}
              isActive={activeTab === service.id}
              onClick={() => setActiveTab(service.id)}
            />
          ))}
        </div>

        {/* 服务卡片内容 */}
        <div>
          <ServiceCard
            title={activeService.title}
            image={activeService.image}
            isImageLeft={activeService.isImageLeft}
            sections={activeService.sections}
            benefits={activeService.benefits}
            imageClassName={activeService.imageClassName}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
