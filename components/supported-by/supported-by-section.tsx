import ImageGrid from "@/components/supported-by/imagegrid";
import Text from "../ui/text";

export const SupportedBySection = () => {
  return (
    <div className="flex flex-col bg-gray-300">
      <div className="mt-5">
        <Text variant="subheading" className="text-center text-primary">
          SUPPORTED BY
        </Text>
      </div>
      <ImageGrid />
    </div>
  );
};
