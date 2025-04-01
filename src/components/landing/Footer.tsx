import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white self-stretch w-full text-gray-500 font-normal tracking-[0.16px] max-md:max-w-full">
      <div className="border-gray-100 flex w-full flex-col items-center pt-[83px] pb-[22px] px-20 border-t max-md:max-w-full max-md:px-5">
        <div className="w-full max-w-[1352px] max-md:max-w-full">
          <div className="flex w-[1007px] max-w-full gap-5 text-base leading-[1.6] flex-wrap justify-between ml-24">
            <div className="text-sm leading-5">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/ca7652c2d00348659dd4a4ce2925ad0b/9cd0b126cce16a4e6e6ad855bfec5e137935cdc2?placeholderIfAbsent=true"
                alt="Tomorrow Finance Logo"
                className="aspect-[7.81] object-contain w-[172px] max-w-full"
              />
              <p className="mt-[15px]">
                Bridging On-Chain Liquidity with Real-World Cross-Border <br />
                Payments
              </p>
            </div>
            <nav className="flex flex-col whitespace-nowrap mt-2">
              <h3 className="text-[rgba(36,29,201,1)] text-lg font-semibold leading-loose tracking-[-0.36px] self-stretch">
                Company
              </h3>
              <a
                href="#"
                className="mt-5 hover:text-[rgba(36,29,201,1)] transition-colors"
              >
                About
              </a>
              <a
                href="#"
                className="mt-6 hover:text-[rgba(36,29,201,1)] transition-colors"
              >
                Careers
              </a>
              <a
                href="#"
                className="mt-6 hover:text-[rgba(36,29,201,1)] transition-colors"
              >
                Contact
              </a>
              <a
                href="#"
                className="mt-[23px] hover:text-[rgba(36,29,201,1)] transition-colors"
              >
                Blog
              </a>
            </nav>
            <nav className="flex flex-col mt-2">
              <h3 className="text-[rgba(36,29,201,1)] text-lg font-semibold leading-loose tracking-[-0.36px]">
                Legal
              </h3>
              <a
                href="#"
                className="mt-[19px] hover:text-[rgba(36,29,201,1)] transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="self-stretch mt-5 hover:text-[rgba(36,29,201,1)] transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="mt-[23px] hover:text-[rgba(36,29,201,1)] transition-colors"
              >
                Compliance
              </a>
              <a
                href="#"
                className="mt-5 hover:text-[rgba(36,29,201,1)] transition-colors"
              >
                Security
              </a>
            </nav>
          </div>
          <div className="border text-sm leading-none mt-3.5 pt-[37px] pb-0.5 border-t max-md:max-w-full max-md:pr-5">
            © 2025 Tomorrow. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
