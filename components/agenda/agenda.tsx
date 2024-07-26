import Text from "../ui/text";

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
          <table className="border-collapse border border-slate-500">
            <thead>
              <tr className="h-14">
                <th className="w-28 border border-slate-600 ">Time</th>
                <th className="border border-slate-600">Session</th>
              </tr>
            </thead>
            <tbody>
              <tr className="h-14 text-center">
                <td className="border border-slate-700 ">07:30-08:30</td>
                <td className="border border-slate-700 ">Arrival and Registration</td>
              </tr>
              <tr className="h-14 text-center">
                <td className="border border-slate-700 ">08:30-09:30</td>
                <td className="border border-slate-700 ">Opening Ceremony</td>
              </tr>
              <tr>
                <td className="border-slate-700 border-r-[1px]"/>
                <td className="border border-slate-700 p-2">
                  <h1 className="font-bold">Main Stage </h1>
                  Presentation WoG
                </td>
              </tr>
              <tr>
              <td className="border-slate-700 border-r-[1px]"/>
                <td className="border border-slate-700 p-2">
                  <h1 className="font-bold">Main Stage </h1>
                  Presentation WoG
                </td>
              </tr>
              <tr>
                <td className="border-slate-700 border-r-[1px] text-center">09:30-11:00</td>
                <td className="border border-slate-700 p-2">
                  <h1 className=" font-bold">Room1</h1>
                  There are many variations of passages of Lorem Ipsum available, but the
                  majority have suffered alteration in some form, by injected humour, or
                  randomised words which don't look even slightly believable.
                </td>
              </tr>
              <tr>
              <td className="border-slate-700 border-r-[1px]"/>
                <td className="border border-slate-700 p-2">
                  <h1 className=" font-bold">Room2</h1>
                  There are many variations of passages of Lorem Ipsum available, but the
                  majority have suffered alteration in some form, by injected humour, or
                  randomised words which don't look even slightly believable.
                </td>
              </tr>
              <tr>
              <td className="border-slate-700 border-r-[1px]"/>
                <td className="border border-slate-700 p-2">
                  <h1 className=" font-bold">Room3</h1>
                  There are many variations of passages of Lorem Ipsum available, but the
                  majority have suffered alteration in some form, by injected humour, or
                  randomised words which don't look even slightly believable.
                </td>
              </tr>
              <tr className="h-14">
                <td className="border border-slate-700 text-center">08:30-09:30</td>
                <td className="border border-slate-700 text-center">Lunch Break</td>
              </tr>
              <tr>
                <td className="border-slate-700 border-r-[1px]"/>
                <td className="border border-slate-700 p-2">
                  <h1 className="font-bold">Main Stage </h1>
                  Presentation WoG
                </td>
              </tr>
              <tr>
              <td className="border-slate-700 border-r-[1px]"/>
                <td className="border border-slate-700 p-2">
                  <h1 className="font-bold">Main Stage </h1>
                  Presentation WoG
                </td>
              </tr>
              <tr>
              <td className="border-slate-700 border-r-[1px] text-center">14:30-15:00</td>
                <td className="border border-slate-700 p-2">
                  <h1 className=" font-bold">Room2</h1>
                  There are many variations of passages of Lorem Ipsum available, but the
                  majority have suffered alteration in some form, by injected humour, or
                  randomised words which don't look even slightly believable.
                </td>
              </tr>
              <tr>
              <td className="border-slate-700 border-r-[1px]"/>
                <td className="border border-slate-700 p-2">
                  <h1 className=" font-bold">Room3</h1>
                  There are many variations of passages of Lorem Ipsum available, but the
                  majority have suffered alteration in some form, by injected humour, or
                  randomised words which don't look even slightly believable.
                </td>
              </tr>
              <tr>
                <td className="border-slate-700 border-t-[1px]"/>
                <td className="border border-slate-700 p-2">
                  <h1 className="font-bold">Main Stage </h1>
                  Presentation WoG
                </td>
              </tr>
              <tr>
              <td className="border-slate-700 border-r-[1px]"/>
                <td className="border border-slate-700 p-2">
                  <h1 className="font-bold">Main Stage </h1>
                  Presentation WoG
                </td>
              </tr>
              <tr>
              <td className="border-slate-700 border-r-[1px] text-center">15:30-17:00</td>
                <td className="border border-slate-700 p-2">
                  <h1 className=" font-bold">Room2</h1>
                  There are many variations of passages of Lorem Ipsum available, but the
                  majority have suffered alteration in some form, by injected humour, or
                  randomised words which don't look even slightly believable.
                </td>
              </tr>
              <tr>
              <td className="border-slate-700 border-r-[1px]"/>
                <td className="border border-slate-700 p-2">
                  <h1 className=" font-bold">Room3</h1>
                  There are many variations of passages of Lorem Ipsum available, but the
                  majority have suffered alteration in some form, by injected humour, or
                  randomised words which don't look even slightly believable.
                </td>
              </tr>
              <tr className="h-14 text-center">
                <td className="border border-slate-700">08:30-09:30</td>
                <td className="border border-slate-700">Closing Ceremony</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
