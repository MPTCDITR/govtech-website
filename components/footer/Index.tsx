import { Contact } from "./Contact";
import { QuickLink } from "./QuickLink";

export default function Foote() {
    return (
        <footer className=" bg-blue-600 px-10 pt-5 pb-5 text-white">
            <div className="flex flex-col gap-8 md:justify-between lg:flex-row lg:justify-around lg:gap-10"  >
                <div className="flex flex-col gap-4">
                    <h1 className="text-3xl font-bold">GovTech</h1>
                </div>
                <div>
                    <Contact />
                </div>
                <div>
                    <QuickLink />
                </div>
            </div>

        </footer>
    );
}

