import React from 'react';

const Hero = () => {
  return (
    <div>
      <div className="w-full h-auto py-10 sm:py-[100px] px-4 sm:px-8 lg:px-16 xl:px-[220px] bg-[#043873] flex flex-wrap lg:flex-nowrap">
        {/* This is main or parent div for whole Hero section */}

        <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
          {/* This is the main div for left section */}

          <div className="max-w-[656px] h-auto gap-6">
            {/* This div is for all content of left section */}

            <div className="h-auto gap-6">
              {/* Content of left section */}

              <h2 className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl xl:text-[64px] leading-tight text-[#FFFFFF]">
                {/* Heading of left section */}

                Get More Done with Whitepace
              </h2>
              <p className="font-sans font-normal text-sm sm:text-base md:text-lg xl:text-[18px] leading-6 text-[#FFFFFF] mt-4">
                Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks
              </p>
            </div>
            <div className="mt-8 sm:mt-10">
              <button className="w-full sm:w-[219px] h-[50px] sm:h-[63px] rounded-lg px-5 py-3 sm:py-5 bg-[#4F9CF9] text-[#FFFFFF] text-sm sm:text-base">
                Try Whitepace free
              </button>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          {/* This is the main div for right section */}

          <div className="w-full max-w-[824px] h-auto aspect-[824/549] bg-[#C4DEFD] flex">
            {/* Content of right section */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

