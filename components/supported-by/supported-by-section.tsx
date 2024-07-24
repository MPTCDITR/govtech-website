import Text from "../ui/text";

export const SupportedBySection = () => {
  return (
    <div className="columns-1 flex-col bg-[#DEDEDE]">
      <div className="mt-5">
        <Text variant="heading" className="text-center text-[#0F45A8]">
          SUPPORTED BY
        </Text>
      </div>
      <div className="mx-4 my-20 grid grid-cols-2 justify-items-center md:grid-cols-6">
        <img
          src="photo_2024-07-04_11-35-40-removebg-preview 1.png"
          alt=""
          className="h-full max-h-36"
        />
        <img src="dgc 1.png" alt="" className="h-full max-h-36 " />
        <img
          src="photo_2024-07-04_11-35-40-removebg-preview 1.png"
          alt=""
          className="h-full max-h-36"
        />
        <img src="dgc 1.png" alt="" className="h-full max-h-36 " />
        <img
          src="photo_2024-07-04_11-35-40-removebg-preview 1.png"
          alt=""
          className="h-full max-h-36"
        />
        <img src="dgc 1.png" alt="" className="h-full max-h-36" />
      </div>
    </div>
  );
};
