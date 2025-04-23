import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white self-stretch w-full text-muted-foreground font-normal tracking-[0.16px] max-md:max-w-full">
      <div className="border-gray-100 flex w-full flex-col items-center pt-[83px] pb-[22px] px-20 border-t max-md:max-w-full max-md:px-5">
        <div className="w-[1440px] max-w-full flex flex-col">
          <div className="flex w-full max-w-full gap-10 justify-between flex-wrap">
            <div className="flex flex-col max-w-[350px]">
              <div className="self-start">
                <img
                  src="/m2square_logo.svg"
                  alt="M2Square Finance Logo"
                  className="h-[45px] object-contain"
                />
              </div>
              <p className="mt-[15px] text-base leading-[28px] tracking-[0.2px]">
                Bridging On-Chain Liquidity with Real-World Cross-Border
                Payments
              </p>
              <div className="flex items-center gap-3 mt-6">
                <div className="bg-icon-bg w-[40px] h-[40px] rounded-full flex justify-center items-center text-primary">
                  <MapPin size={18} strokeWidth={1.5} />
                </div>
                <span>123 Finance Street, Singapore</span>
              </div>
              <div className="flex items-center gap-3 mt-4">
                <div className="bg-icon-bg w-[40px] h-[40px] rounded-full flex justify-center items-center text-primary">
                  <Mail size={18} strokeWidth={1.5} />
                </div>
                <span>contact@m2square.finance</span>
              </div>
              <div className="flex items-center gap-3 mt-4">
                <div className="bg-icon-bg w-[40px] h-[40px] rounded-full flex justify-center items-center text-primary">
                  <Phone size={18} strokeWidth={1.5} />
                </div>
                <span>+65 1234 5678</span>
              </div>
            </div>

            <div className="flex gap-16 flex-wrap">
              <nav className="flex flex-col">
                <h3 className="text-primary text-[22px] font-semibold leading-loose tracking-[-0.5px] font-ubuntu">
                  Company
                </h3>
                <a
                  href="#"
                  className="mt-5 hover:text-primary transition-colors"
                >
                  About
                </a>
                <a
                  href="#"
                  className="mt-4 hover:text-primary transition-colors"
                >
                  Careers
                </a>
                <a
                  href="#"
                  className="mt-4 hover:text-primary transition-colors"
                >
                  Contact
                </a>
                <a
                  href="#"
                  className="mt-4 hover:text-primary transition-colors"
                >
                  Blog
                </a>
              </nav>
              <nav className="flex flex-col">
                <h3 className="text-primary text-[22px] font-semibold leading-loose tracking-[-0.5px] font-ubuntu">
                  Legal
                </h3>
                <a
                  href="#"
                  className="mt-5 hover:text-primary transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="mt-4 hover:text-primary transition-colors"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="mt-4 hover:text-primary transition-colors"
                >
                  Compliance
                </a>
                <a
                  href="#"
                  className="mt-4 hover:text-primary transition-colors"
                >
                  Security
                </a>
              </nav>
              <nav className="flex flex-col">
                <h3 className="text-primary text-[22px] font-semibold leading-loose tracking-[-0.5px] font-ubuntu">
                  Resources
                </h3>
                <a
                  href="#"
                  className="mt-5 hover:text-primary transition-colors"
                >
                  Documentation
                </a>
                <a
                  href="#"
                  className="mt-4 hover:text-primary transition-colors"
                >
                  API Reference
                </a>
                <a
                  href="#"
                  className="mt-4 hover:text-primary transition-colors"
                >
                  Developers
                </a>
                <a
                  href="#"
                  className="mt-4 hover:text-primary transition-colors"
                >
                  FAQ
                </a>
              </nav>
            </div>
          </div>

          <div className="border-t border-gray-100 w-full text-sm leading-6 mt-12 pt-6 pb-2 text-center">
            © 2025 M2Square Finance. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
