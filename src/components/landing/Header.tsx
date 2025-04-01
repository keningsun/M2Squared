import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex w-full flex-col overflow-hidden items-center pt-4 max-md:max-w-full">
      <div className="flex w-[1187px] max-w-full gap-5 text-base text-white font-medium tracking-[-0.32px] flex-wrap justify-between">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/ca7652c2d00348659dd4a4ce2925ad0b/bf7f41ee9e080cb344d1406dfaa93acf89e41b57?placeholderIfAbsent=true"
          alt="Tomorrow Finance Logo"
          className="aspect-[7.87] object-contain w-[314px]"
        />
        <a
          href="https://tmr-frontend.vercel.app/"
          className="self-stretch bg-[rgba(36,29,201,1)] min-h-10 gap-2.5 overflow-hidden px-[27px] py-2 rounded-[50px] max-md:px-5 hover:bg-opacity-90 transition-colors"
          aria-label="Launch App"
        >
          Launch App
        </a>
      </div>
      <div
        className="bg-[rgba(255,255,255,0.08)] self-stretch flex min-h-px w-full mt-4 max-md:max-w-full"
        aria-hidden="true"
      />
    </header>
  );
};

export default Header;
