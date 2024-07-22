import React from "react";
import Text from "../ui/text";
import { Button } from "../ui/button";

export const SectionHeader =() => {
    return (
        <div className="flex flex-col items-center justify-center bg-center bg-[url('/darkblue.png')] bg-[length:1750px_600px] h-96">
                <Text variant="heading" className="text-white text-[24px] font-[1100] p-6">
                        GovTech Conference2024 
                </Text>
                <Text variant="subheading" className="text-white font-[1200] p-6">
                        Empowering Digital Transformation in the Public Sector
                </Text>
                <Button className="bg-white hover:bg-slate-200">Register Now</Button>
        </div>
    );
  }
  export default SectionHeader;
  