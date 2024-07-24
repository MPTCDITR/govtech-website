<<<<<<< HEAD
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GoGoal } from "react-icons/go";

export default function GoalSection() {
  return (
<Card className="h-auto w-9 p-3">
      <CardHeader className="h-auto w-36 p-4">
        <GoGoal className="h-8 w-8" />
        <CardTitle className="mt-2 mb-3 font-bold text-gray-900 text-lg tracking-tight dark:text-white">
          Goal Card
        </CardTitle>
        <CardDescription className="font-normal text-gray-700 dark:text-gray-400">
=======
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
>>>>>>> main
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </CardDescription>
      </CardHeader>
    </Card>
  );
<<<<<<< HEAD
}
=======
};
>>>>>>> main
