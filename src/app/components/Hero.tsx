import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="w-[1920px] h-[829px] Top-[92px] Left-[1px] py-[140px] px-[220px] bg-[#043873] flex">
        {/* This is main or parent div for whole Hero section */}

        <div className="w-1/2">
          {/* This is the main div for left section */}

          <div className="w-[656px] h-[361px] gap-[60px]">
            {/* This div is for all content of left section */}

            <div className="w-[656px] h-[238px] gap-[24px]">
              {/* Content of left section */}

              <h2 className="font-sans font-bold text-[64px] leadiing-[77.45px] text-[#FFFFFF]">
                {/* Heading of left section */}
                Get More Done with Whitepace
              </h2>
              <p className="font-sans font-normal text-[18px] leading-[30px] text-[#FFFFFF]">
                Project management software that enables your teams to
                collaborate, plan, analyze and manage everyday tasks
              </p>
            </div>
            <div className="mt-16">
              <button className="w-[219px] h-[63px] rounded-lg p-5 gap-[10px] bg-[#4F9CF9] text-[#FFFFFF]">
                Try Whitepace free
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          {/* This is the main div for right section */}

          <div className="w-[824px] h-[549px] gap-1 bg-[#C4DEFD] flex">
            {/* Content of right section */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
