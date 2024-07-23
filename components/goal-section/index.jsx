import Image from "next/image";
import Link from "next/link";

// import SectionHeader from "../../components/selection-header/selection-header";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/goal-card.tsx";

export const CourseSelection = () => {
  // const t = useTranslations("CourseSelectionHomePage");
  // const keys = ["primarySchool", "highSchool", "collingwoodEnglishCenter"];
  const keys = [
    { title: "title1", description: "lorem Econ1" },
    { title: "title2", description: "lorem Econ2" },
    { title: "title3", description: "lorem Econ3" },
  ];
  return (
    <section className="w-full bg-gray-50 py-2 md:py-4 lg:py-8 grid grid-cols-3">
      <div className="container grid items-stretch gap-4 px-8 text-center md:px-6 lg:gap-10">
        {/*   <SectionHeader
          title={t("curriculumTitle")}
          description={t("curriculumDescription")}
        /> */}
        <div className="mx-auto flex max-w-5xl gap-6 mx:grid-cols-3 sm:grid-cols-3 lg:gap-12">
          {keys.map((key) => (
            <Card
              key={key}
              className="flex h-full w-full flex-col overflow-hidden rounded-sm bg-white shadow-md transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
              <CardHeader className="relative h-36 w-full p-0">
                {/* <Image
                  src={key}
                  alt={key}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="h-36 w-full object-cover object-center"
                /> */}
              </CardHeader>
              <CardContent className="flex grow flex-col p-4 text-left">
                <CardTitle className="line-clamp-2 min-h-12 text-base">
                  {key.title}
                </CardTitle>
                <CardDescription className="line-clamp-5">
                  {key.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
