import { Certificate, Completed, Pending } from "@/components/taskbar-icons/items";
import WindowSimple from "@/components/windows/window-simple";
import Link from "next/link";

const JavaScriptPage = () => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center">
      <WindowSimple title={"JavaScript"}>
        <div className="allprojectscontainer flex flex-col gap-3 justify-start items-center min-w-[300px] h-[300px] overflow-auto">
          <div className=" project-item bg-[rgba(255,255,255,0.3)] backdrop-blur-sm rounded-lg p-3 w-full flex justify-start items-center gap-3">
            <Completed />
            <div className="flex flex-col gap-2">
              <h1 className=" text-gray-100 font-semibold text-lg">
                COVID-19 Tracker
              </h1>
              <ul className=" allprojectslist ">
                <li>
                  <code>RapidAPI</code>
                </li>
              </ul>
            </div>
          </div>
          <div className=" project-item bg-[rgba(255,255,255,0.3)] backdrop-blur-sm rounded-lg p-3 w-full flex justify-start items-center gap-3">
            <Pending />
            <div className="flex flex-col gap-2">
              <h1 className=" text-gray-100 font-semibold text-lg">
                Animation Using Gsap
              </h1>
              <ul className=" allprojectslist ">
                <li>
                  <code>Animation</code>
                </li>
                <li>
                  <code>Gsap</code>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </WindowSimple>
    </section>
  );
};

export default JavaScriptPage;
