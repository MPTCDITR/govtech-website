import Text from "../ui/text";
interface HistoryCheckInCardProps {
  checkIn: {
    place: string;
    topic: string;
    time: string;
  };
}

export default function HistoryCheckInCard({
  checkIn,
}: HistoryCheckInCardProps) {
  const { place, topic, time } = checkIn;
  const currentDate = new Date().toISOString().split("T")[0];
  const dateTimeString = `${currentDate}T${time}`;
  const formattedTime = new Date(dateTimeString).toLocaleTimeString();

  return (
    <>
      <li className="flex flex-col justify-between gap-4 rounded-lg border-4 border-black-300 px-3 py-5 md:px-5 lg:px-10">
        <div>
          <Text variant="title">{place}</Text>
        </div>
        <div className="flex flex-row justify-between gap-2">
          <div>
            <Text variant="title">{topic}</Text>
          </div>
          <div>
            <Text variant="title">{formattedTime}</Text>
          </div>
        </div>
      </li>
    </>
  );
}

