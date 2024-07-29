import Text from "../ui/text";
import { AgendaTable } from "./agenda-table";

export default function Agenda() {
  return (
    <main className="flex flex-col items-center justify-between gap-4 p-4">
      <div className="w-full sm:w-3/4 md:w-2/3">
        <Text variant="subheading" className="text-center font-sans text-[#0F45A8]">
          Agenda
        </Text>
        <Text variant="body" className="mt-8 w-full text-center font-sans">
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem
          Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </Text>
        <Text variant="body" className=" mt-8 font-sans">
          March 14, 2024
        </Text>
        <div className="mt-8 flex justify-items-center">
          <AgendaTable />
        </div>
      </div>
    </main>
  );
}
