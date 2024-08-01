import HistoryCheckInCard from "@/components/history-check-in/history-check-in-card";
import { Button } from "@/components/ui/button";

const mockData = [
  {
    place: "Coffee Shop",
    topic: "Morning Coffee",
    time: "08:00:00",
  },
  {
    place: "Library",
    topic: "Study Group",
    time: "14:30:00",
  },
  {
    place: "Gym",
    topic: "Workout Session",
    time: "18:45:00",
  },
  {
    place: "Coffee Shop",
    topic: "Morning Coffee",
    time: "08:00:00",
  },
  {
    place: "Library",
    topic: "Study Group",
    time: "14:30:00",
  },
  {
    place: "Gym",
    topic: "Workout Session",
    time: "18:45:00",
  },
];

export default function CheckIn() {
  return (
    <main className="container mx-auto px-4 py-10 lg:px-auto">
      <div className="flex flex-col gap-6 lg:px-20">
        <div className="flex flex-col items-center gap-4">
          <Button className="w-3/4 text-white">Check In</Button>
        </div>
        <ul className="flex flex-col gap-4">
          {mockData.map((checkIn, index) => (
            <HistoryCheckInCard key={index} checkIn={checkIn} />
          ))}
        </ul>
      </div>
    </main>
  );
}
