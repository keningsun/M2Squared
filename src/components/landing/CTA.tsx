import React from "react";

const CTA: React.FC = () => {
  return (
    <section className="flex flex-col self-stretch relative min-h-[428px] w-full overflow-hidden items-center text-xl text-[rgba(36,29,201,1)] justify-center mt-[117px] px-20 py-[76px] max-md:max-w-full max-md:mt-10 max-md:px-5">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/ca7652c2d00348659dd4a4ce2925ad0b/7c237d405f1a101283360cd04ab53791c8caa455?placeholderIfAbsent=true"
        alt="Background pattern"
        className="absolute h-full w-full object-cover inset-0"
      />
      <div className="relative bg-white flex w-full max-w-[1346px] flex-col overflow-hidden items-center justify-center px-20 py-[51px] rounded-[32px] max-md:max-w-full max-md:px-5">
        <div className="flex w-[894px] max-w-full flex-col items-center">
          <h2 className="text-4xl font-bold leading-none tracking-[-0.72px] text-center uppercase self-stretch max-md:max-w-full">
            Ready to Scale Your Cross-Border Payments?
          </h2>
          <p className="text-[rgba(98,100,128,1)] font-normal leading-[1.4] tracking-[0.16px] text-center mt-[23px] max-md:max-w-full">
            Join Tomorrow today and transform how you handle global
            transactions.
          </p>
          <a
            href="#"
            className="w-48 max-w-full font-medium tracking-[-0.4px] leading-[1.1] mt-12 px-11 py-[22px] rounded-[50px] border-[rgba(36,29,201,1)] border-solid border-2 max-md:mt-10 max-md:px-5 hover:bg-[rgba(36,29,201,0.05)] transition-colors text-center"
            aria-label="Learn More"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
