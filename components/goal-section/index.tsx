import { Card, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";

export const GoalSection = () => {
  return (
    <Card className="m-auto h-auto w-96 border-red-600 p-3 max-sm:max-w-96 ">
      <CardHeader className="p-4">
        <CardTitle className="mt-2 mb-3 font-bold text-gray-900 text-lg tracking-tight dark:text-white">
          Goal Card
        </CardTitle>
        <CardDescription className="line-clamp-5 font-normal text-gray-700 dark:text-gray-400">
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem
          Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </CardDescription>
      </CardHeader>
    </Card>
  );
};
