import React from "react";
import Image from "next/image";
import logo from "../../../public/Logo.png";

const Navbar = () => {
  return (
    <div>
      <div className="w-[1920px] h-[92px] pt-[16px] pb-[16px] pr-[220px] pl-[220px] flex justify-between items-center bg-[#043873]">
        {/* parent div for all navbar */}

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

        <div className="flex w-[737.5px] h-[60px] gap-[60px] items-center">
          {/* This div is for right section */}

          <div className="w-[549px] h-[23px] gap-[32px]">
            {/* This div is for navigation links on right section */}

            <ul className="flex w-[78px] h-[23px] gap-[10px]">
              <li className="font-sans font-medium text-[18px] leading-[23px] text-[#FFFFFF]">
                Products
              </li>
              <li className="font-sans font-medium text-[18px] leading-[23px] text-[#FFFFFF]">
                Solutions
              </li>
              <li className="font-sans font-medium text-[18px] leading-[23px] text-[#FFFFFF]">
                Resources
              </li>
              <li className="font-sans font-medium text-[18px] leading-[23px] text-[#FFFFFF]">
                Pricing
              </li>
            </ul>
            {/* These are navigation links */}
          </div>
          <div className="w-[126px] h-[60px] gap-[24px]">
            <button className="w-[126px] h-60px] rounded-lg px-10 py-4 gap-[10px] bg-[#FFE492]">
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
