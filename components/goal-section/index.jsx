import { GoGoal } from "react-icons/go";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/goal-card.tsx";

export const CourseSelection = () => {
  return (
    <Card className="p-3">
      <CardHeader className="w-96 h-auto p-4">
        <GoGoal className="w-8 h-8" />
        <CardTitle className="mt-2 mb-3 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
          Goal Card
        </CardTitle>
        <CardDescription className="font-normal line-clamp-5 text-gray-700 dark:text-gray-400">
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </CardDescription>
      </CardHeader>
    </Card>
  );
};
