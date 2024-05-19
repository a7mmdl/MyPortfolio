import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] mt-[150px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            &copy; Ahmed Rafi 2024 Inc. All rights reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
