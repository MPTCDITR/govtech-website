import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function SpeakerCard() {
  return (
    <Card>
      <CardHeader className="w-96 h-[400px] p-4">
        <img className="rounded-lg h-full" src="/people.jpg" alt="" />
        <CardTitle className="mt-2 mb-4 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          Name
        </CardTitle>
        <CardDescription className="font-normal text-gray-700 dark:text-gray-400">
          The generated Lorem Ipsum is therefore always free from repetition, injected humour.
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
