import React from "react";
import Text from "../ui/text";
export const Header =() => {
    return (
        <div className="flex flex-col items-center justify-center bg-center bg-[url('/darkblue.png')] bg-[length:1750px_600px] h-96">
                <div>
                        <Text variant="heading" className="text-white text-[24px] font-[1100] p-6">
                                GovTech Conference2024 
                        </Text>
                </div>
                <div>
                        <Text variant="subheading" className="text-white font-[1200] p-6">
                                Empowering Digital Transformation in the Public Sector
                        </Text>
                </div>
                <div className="text-start my-4">
                        {/* <button className="text-white btn btn-primary my-14" type="button">Register Now</button> */}
                        <button type="button" className="bg-white border border-gray-300 focus:ring-4 focus:ring-gray-100 rounded-lg text-sm px-5 py-2.5 dark:text-white dark:focus:ring-gray-700">Register Now</button>
                </div>
        </div>
    );
  }
  export default Header;
  