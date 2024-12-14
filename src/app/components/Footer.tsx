import React from 'react';

const Footer = () => {
  return (
    <div>
      <div className="w-full h-auto pt-10 sm:pt-[100px] px-4 sm:px-8 md:px-16 lg:px-32 xl:px-[220px] pb-8 bg-[#043873]">
        {/* main/parent div for footer */}

        <div className="w-full max-w-[1480px] mx-auto h-auto gap-10 sm:gap-[60px] md:gap-[100px] flex flex-wrap">
          {/* div for container of all content */}

          <div className="w-full sm:w-[240px] h-auto font-normal text-sm sm:text-base leading-6 text-[#F7F7EE]">
            {/* div for 1st column */}
            <div className="w-auto h-auto gap-4">
              <img src={'/footerlogo.png'} alt={'logo'} />
              <p className="pt-4">
                Whitepace was created for the new ways we live and work. We make a better workspace around the world.
              </p>
            </div>
          </div>

          <div className="w-full sm:w-[295px] h-auto gap-4">
            {/* div for 2nd column */}
            <h2 className="font-bold text-base sm:text-lg leading-6 text-[#FFFFFF]">Product</h2>
            <p className="font-normal text-xs sm:text-sm leading-5 text-[#FFE492] pt-2 sm:pt-4">Overview</p>
            <p className="font-normal text-xs sm:text-sm leading-5 text-[#FFFFFF] pt-2 sm:pt-4">Pricing</p>
            <p className="font-normal text-xs sm:text-sm leading-5 text-[#FFFFFF] pt-2 sm:pt-4">Customer stories</p>
          </div>

          <div className="w-full sm:w-[295px] h-auto gap-4">
            {/* div for 3rd column */}
            <h2 className="font-bold text-base sm:text-lg leading-6 text-[#FFFFFF]">Resources</h2>
            <p className="font-normal text-xs sm:text-sm leading-5 text-[#FFFFFF] pt-2 sm:pt-4">Blog</p>
            <p className="font-normal text-xs sm:text-sm leading-5 text-[#FFFFFF] pt-2 sm:pt-4">Guides & tutorials</p>
            <p className="font-normal text-xs sm:text-sm leading-5 text-[#FFFFFF] pt-2 sm:pt-4">Help center</p>
          </div>

          <div className="w-full sm:w-[295px] h-auto gap-4">
            {/* div for 4th column */}
            <h2 className="font-bold text-base sm:text-lg leading-6 text-[#FFFFFF]">Company</h2>
            <p className="font-normal text-xs sm:text-sm leading-5 text-[#FFFFFF] pt-2 sm:pt-4">About us</p>
            <p className="font-normal text-xs sm:text-sm leading-5 text-[#FFFFFF] pt-2 sm:pt-4">Careers</p>
            <p className="font-normal text-xs sm:text-sm leading-5 text-[#FFFFFF] pt-2 sm:pt-4">Media kit</p>
          </div>
        </div>

        <div className="w-full max-w-[1480px] mx-auto flex flex-wrap justify-center md:justify-between items-center mt-8">
          <p className="text-sm sm:text-base leading-5 text-[#FFFFFF]">2021 Whitepace LLC.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
