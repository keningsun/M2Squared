import React from 'react';
import { Send } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-icon-bg self-stretch w-full text-muted-foreground font-normal max-md:max-w-full">
      <div className="flex w-full flex-col items-center pt-10 pb-8 px-5 md:px-10">
        <div className="w-[1200px] max-w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-10">
            {/* Logo column */}
            <div className="flex flex-col gap-4 items-start">
              <img
                src="/m2square_logo.svg"
                alt="M2Square Logo"
                className="h-[26px] w-auto object-contain"
              />
              <div className="flex items-center gap-3">
                <a
                  href="https://x.com/m2squarex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80"
                  aria-label="X (formerly Twitter)"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-[18px] h-[18px]"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-primary hover:text-primary/80"
                  aria-label="Telegram"
                >
                  <Send size={18} />
                </a>
              </div>
            </div>

            {/* Products */}
            <div>
              <h3 className="text-primary text-sm font-medium mb-4">
                Products
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-xs hover:text-primary">
                    Global Settlement Network
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs hover:text-primary">
                    Pay-in & Payouts
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs hover:text-primary">
                    Liquidity Solutions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs hover:text-primary">
                    Compliance & KYC APIs
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-primary text-sm font-medium mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-xs hover:text-primary">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs hover:text-primary">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs hover:text-primary">
                    Partners
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs hover:text-primary">
                    Contact
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
                    Blog & Insights
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs hover:text-primary">
                    Whitepaper
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs hover:text-primary">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs hover:text-primary">
                    Support
                  </a>
                </li>
              </ul>
            </div>

            {/* Compliance */}
            <div>
              <h3 className="text-primary text-sm font-medium mb-4">
                Compliance
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-xs hover:text-primary">
                    License
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs hover:text-primary">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs hover:text-primary">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t border-primary/20 pt-4" />
          <div className="text-center mt-2 text-xs text-muted-foreground">
            © 2025 M2Square. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
