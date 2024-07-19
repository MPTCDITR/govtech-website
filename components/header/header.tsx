import React from "react";
import Text from "../ui/text";
export const Header =() => {
    return (
      <main className="flex min-h-screen flex-col justify-between " >
        <div className="flex flex-col items-center justify-center bg-center bg-[url('/darkblue.png')] bg-[length:1750px_600px] h-96">
                <div>
                        <Text variant="heading" className="text-white text-[24px] font-[1100] mx-4">
                                GovTech Conference2024 
                        </Text>
                </div>
                <div>
                        <Text variant="subheading" className="text-white font-[1200] mx-4">
                                Empowering Digital Transformation in the Public Sector
                        </Text>
                </div>
                <div className="text-start">
                        <button className="text-black btn btn-light my-14" type="button">Register Now</button>
                </div>
        </div>
      </main>
    );
  }
  export default Header;
  