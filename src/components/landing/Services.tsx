import React, { useState } from 'react';
import { Check } from 'lucide-react';

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
          ? 'bg-primary text-primary-foreground'
          : 'bg-transparent text-primary hover:bg-primary/5'
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
            className={`${index > 0 ? 'mt-5' : 'mt-5'} max-w-full`}
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
            imageClassName || ''
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
  const [activeTab, setActiveTab] = useState<string>('settlement');

  const services = [
    {
      id: 'settlement',
      tabLabel: 'Global Settlement',
      title: 'GLOBAL SETTLEMENT NETWORK',
      image: '/s1.svg',
      isImageLeft: true,
      sections: [
        {
          heading: 'Global Settlement Network',
          description:
            'Power your business with unified rails that connect stablecoin \nliquidity to local payment methods across high-growth markets.',
        },
        {
          heading: 'Transparent & Secure',
          description:
            'Licensed operations across key regions with instant, low-cost transactions, backed by compliance-first APIs built for enterprises.',
        },
      ],
      benefits: [
        'Licensed operations across key regions',
        'Instant, low-cost transactions',
        'Compliance-first APIs for enterprises',
      ],
    },
    {
      id: 'payouts',
      tabLabel: 'Pay-in & Payouts',
      title: 'PAY-IN & PAYOUTS',
      image: '/s2.svg',
      isImageLeft: true,
      sections: [
        {
          heading: 'Collect & Disburse Globally',
          description:
            'Seamlessly collect payments worldwide and disburse in local \nfiat or stablecoins, enabling true borderless commerce.',
        },
        {
          heading: 'Flexible Settlement Options',
          description:
            'Choose from multiple settlement methods to optimize for speed, \ncost, and regulatory requirements across different markets.',
        },
      ],
      benefits: [
        'Global payment collection',
        'Multi-currency disbursement',
        'Flexible settlement options',
      ],
    },
    {
      id: 'liquidity',
      tabLabel: 'Liquidity Solutions',
      title: 'LIQUIDITY SOLUTIONS',
      image: '/s3.svg',
      isImageLeft: true,
      sections: [
        {
          heading: 'On-Chain Liquidity Management',
          description:
            'Access pre-funded settlement pools and optimized cash flow \nmanagement through our comprehensive liquidity infrastructure.',
        },
        {
          heading: 'Smart Capital Allocation',
          description:
            'Automated liquidity optimization across multiple markets \nensures efficient capital utilization and minimal settlement delays.',
        },
      ],
      benefits: [
        'Pre-funded settlement pools',
        'Optimized cash flow management',
        'Automated capital allocation',
      ],
    },
    {
      id: 'compliance',
      tabLabel: 'Compliance & KYC',
      title: 'COMPLIANCE & KYC',
      image: '/s4.svg',
      isImageLeft: true,
      imageClassName: 'max-h-[400px] object-contain',
      sections: [
        {
          heading: 'Regulatory Excellence',
          description:
            'Comprehensive compliance framework ensuring adherence to \nglobal regulatory standards across all operational markets.',
        },
        {
          heading: 'Streamlined Onboarding',
          description:
            'Efficient KYC/KYB processes that balance thorough verification \nwith fast business onboarding and user experience.',
        },
      ],
      benefits: [
        'Global regulatory compliance',
        'Streamlined KYC/KYB processes',
        'Enterprise-grade security',
      ],
    },
  ];

  const activeService =
    services.find((service) => service.id === activeTab) || services[0];

  return (
    <section className="w-[1440px] max-w-full overflow-hidden mt-[133px] px-5 max-md:mt-10">
      <h2 className="text-primary text-5xl font-medium leading-none tracking-[-2px] max-md:text-[40px] mb-12">
        Services That Fuel Growth
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
