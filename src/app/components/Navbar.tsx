import React from 'react';
import Image from 'next/image';
import logo from '../../../public/Logo.png';

const Navbar = () => {
  return (
    <div>
      <div className="w-full h-[92px] pt-4 pb-4 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-[220px] flex justify-between items-center bg-[#043873]">
        {/* Parent div for all navbar */}

        <div>
          <Image
            className="flex justify-between"
            src={logo}
            alt="Logo"
            width={191}
            height={34}
          />
        </div>
        {/* This div is for left or logo section */}

        <div className="flex w-auto h-[60px] gap-4 sm:gap-8 md:gap-12 lg:gap-[40px] xl:gap-[60px] items-center">
          {/* This div is for right section */}

          <div className="w-auto h-[23px]">
            {/* This div is for navigation links on right section */}

            <ul className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-[24px] xl:gap-[32px]">
              <li className="font-sans font-medium text-sm sm:text-base md:text-lg xl:text-[18px] leading-[23px] text-[#FFFFFF]">
                Products
              </li>
              <li className="font-sans font-medium text-sm sm:text-base md:text-lg xl:text-[18px] leading-[23px] text-[#FFFFFF]">
                Solutions
              </li>
              <li className="font-sans font-medium text-sm sm:text-base md:text-lg xl:text-[18px] leading-[23px] text-[#FFFFFF]">
                Resources
              </li>
              <li className="font-sans font-medium text-sm sm:text-base md:text-lg xl:text-[18px] leading-[23px] text-[#FFFFFF]">
                Pricing
              </li>
            </ul>
            {/* These are navigation links */}
          </div>

          <div>
            <button className="w-auto h-auto px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 md:py-4 rounded-lg bg-[#FFE492] text-sm sm:text-base md:text-lg xl:text-[18px]">
              Login
            </button>
          </div>
          {/* This div is for login button on right section */}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
