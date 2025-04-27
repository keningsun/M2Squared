import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-icon-bg self-stretch w-full text-muted-foreground font-normal max-md:max-w-full">
      <div className="flex w-full flex-col items-center pt-10 pb-8 px-5 md:px-10">
        <div className="w-[1200px] max-w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
            {/* Company and team */}
            <div>
              <h3 className="text-primary text-sm font-medium mb-4">
                Company and team
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-xs hover:text-primary">
                    Company and team
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs hover:text-primary">
                    Security
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs hover:text-primary">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs hover:text-primary">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs hover:text-primary">
                    Service status
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs hover:text-primary">
                    Investor relations
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs hover:text-primary">
                    Affiliates and partnerships
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs hover:text-primary">
                    Help centre
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs hover:text-primary">
                    Accessibility
                  </a>
                </li>
              </ul>
            </div>

            {/* M2Square Products */}
            <div>
              <h3 className="text-primary text-sm font-medium mb-4">
                M2² Products
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-xs hover:text-primary">
                    On-Chain Yield Pools
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs hover:text-primary">
                    Working Capital Solutions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs hover:text-primary">
                    Cross-Border Payments
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs hover:text-primary">
                    RWA Platform
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs hover:text-primary">
                    Business Dashboard
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs hover:text-primary">
                    API Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs hover:text-primary">
                    Mass payments
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-primary text-sm font-medium mb-4">
                Resources
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-xs hover:text-primary">
                    News and blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs hover:text-primary">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs hover:text-primary">
                    API Reference
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs hover:text-primary">
                    Compliance Hub
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs hover:text-primary">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs hover:text-primary">
                    SWIFT/BIC codes
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs hover:text-primary">
                    IBAN codes
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs hover:text-primary">
                    Rate alerts
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs hover:text-primary">
                    Business Calculators
                  </a>
                </li>
              </ul>
            </div>

            {/* Follow us */}
            <div>
              <h3 className="text-primary text-sm font-medium mb-4">
                Follow us
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-primary hover:text-primary/80"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="#"
                  className="text-primary hover:text-primary/80"
                  aria-label="Twitter"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href="#"
                  className="text-primary hover:text-primary/80"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-14 border-t border-gray-200 pt-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                <img
                  src="/m2square_logo.svg"
                  alt="M2Square Finance Logo"
                  className="h-[22px] object-contain"
                />

                <div className="flex flex-wrap gap-3 md:gap-5 justify-center md:justify-start mt-3 md:mt-0">
                  <a href="#" className="text-xs hover:text-primary">
                    Legal
                  </a>
                  <a href="#" className="text-xs hover:text-primary">
                    Privacy policy
                  </a>
                  <a href="#" className="text-xs hover:text-primary">
                    Country site map
                  </a>
                  <a href="#" className="text-xs hover:text-primary">
                    Cookies Policy
                  </a>
                  <a href="#" className="text-xs hover:text-primary">
                    Modern slavery statement
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <div className="text-xs text-muted-foreground">
              © M2Square Finance Limited 2025
            </div>
            <div className="mt-2 text-xs text-muted-foreground max-w-2xl mx-auto">
              M2Square Finance Limited is licensed in Singapore as a Money
              Service Operator by the Monetary Authority of Singapore, licence
              number: MSO-2023-00123.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
