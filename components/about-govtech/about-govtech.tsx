import { Button } from "../ui/button";
import Text from "../ui/text";

export default function AboutGovtech() {
  return (
    <div className=" mx-auto mt-5 p-5 md:flex">
      <div className="max-w-md">
        <Text variant="subheading" className="text-[#0F45A8]">
          About Govtech
        </Text>
        <Text variant="body" className="mt-12 max-w-96">
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem
          Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </Text>
        <Text variant="body" className="mt-12">
          March 14, 2024
        </Text>
        <Text variant="body" className="mt-5 ">
          It is a long established fact that a reader will be distracted by the readable content
          of a page when looking at its layout
        </Text>
        <Button className="mt-8 ml-28 bg-primary text-white">View Agenda</Button>
      </div>
      <div className="mt-8 md:mt-0">
        <img className="h-96 h-auto w-full max-w-3xl" src="HRTechx 1.png" alt="" />
      </div>
    </div>
  );
}
