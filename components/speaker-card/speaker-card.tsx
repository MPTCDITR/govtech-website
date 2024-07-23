import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function SpeakerCard() {
  return (
    <Card>
      <CardHeader className="h-[400px]·w-96·p-4">
        <img className=" h-full rounded-lg" src="/people.jpg" alt="" />
        <CardTitle className="mt-2·mb-4·font-bold·text-gray-900·text-xl·tracking-tight·dark:text-white">
          Name
        </CardTitle>
        <CardDescription className="font-normal text-gray-700 dark:text-gray-400">
          The generated Lorem Ipsum is therefore always free from repetition, injected humour.
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
