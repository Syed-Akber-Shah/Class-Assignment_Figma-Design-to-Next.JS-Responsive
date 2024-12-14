import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="w-[1920px] h-[461px] top-[3626] pt-[140px] px-[220px] pb-[32px] gap-[200px] bg-[#043873]">
        {/* main/parent div for footer */}

        <div className="w-[1480px] h-[289px] gap-[100px] flex">
          {/* div for container of all content */}

          {/* <div className='w-1/2 flex'> */}
          <div className="w-[1480px] h-[169px] gap-[100px] flex justify-evenly">
            {/* div for content container */}

            <div className="w-[240px] h-[120px] font-normal text-[18px] leading-[30px] text-[#F7F7EE]">
              <div className="w-[295px] h-[169px] gap-[15px]">
                {" "}
                <img src={"/footerlogo.png"} alt={"logo"} />
                {/* logo */}
                <p className="pt-4">
                  whitepace was created for the new ways we live and work. We
                  make a better workspace around the world
                </p>
              </div>
            </div>
            {/* div for 1st column */}

            <div className="w-[295px] h-[127px] gap-[15px] ml-24 mb-3">
              <h2 className="font-bold text-[18px] leading-[21.78px] text-[#FFFFFF]">
                Product
              </h2>
              <p className="font-normal text-xs leading-5 text-[#FFE492] pt-4">
                Overview
              </p>
              <p className="font-normal text-xs leading-5 text-[#FFFFFF] pt-4">
                Pricing
              </p>
              <p className="font-normal text-xs leading-5 text-[#FFFFFF] pt-4">
                Customer stories
              </p>
            </div>
          </div>
          {/* div for 2nd column */}

          {/* <div className='w-1/2 flex'> */}
          <div className="w-[295px] h-[130px] gap-4 -ml-8">
            <h2 className="font-bold text-[18px] leading-[21.78px] text-[#FFFFFF]">
              Resources
            </h2>
            <p className="font-normal text-base leading-5 text-[#FFFFFF] pt-4">
              Blog
            </p>
            <p className="font-normal text-base leading-5 text-[#FFFFFF] pt-4">
              Guides & tutorials
            </p>
            <p className="font-normal text-base leading-5 text-[#FFFFFF] pt-4">
              Help center
            </p>
          </div>
          {/* div for 3rd column */}

          <div className="w-[295px] h-[130px] gap-4">
            <h2 className="font-bold text-[18px] leading-[21.78px] text-[#FFFFFF]">
              Company
            </h2>
            <p className="font-normal text-base leading-5 text-[#FFFFFF] pt-4">
              About us
            </p>
            <p className="font-normal text-base leading-5 text-[#FFFFFF] pt-4">
              Careers
            </p>
            <p className="font-normal text-base leading-5 text-[#FFFFFF] pt-4">
              Media kit
            </p>
          </div>
          {/* div for 4th column */}
        </div>

        <div className="w-[1480px] h-[20px] justify-between flex ml-[760px] items-center -mt-5">
          <div className="w-[169px] h-[20px] gap-[60px] flex">
            <p className="w-[169px] h-[20px] font-normal text-base leading-5 text-[#FFFFFF]">
              2021 Whitepace LLC.
            </p>
          </div>
        </div>
      </div>
    </div>
    // </div>
    // </div>
  );
};

export default Footer;
