import { Certificate, Completed } from "@/components/taskbar-icons/items";
import WindowSimple from "@/components/windows/window-simple";
import Link from "next/link";

const TailwindPage = () => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center">
      <WindowSimple title={"Tailwind CSS"}>
        <div className="allprojectscontainer flex flex-col gap-3 justify-start items-center min-w-[300px] h-[300px] overflow-auto">
          <div className=" project-item bg-[rgba(255,255,255,0.3)] backdrop-blur-sm rounded-lg p-3 w-full flex justify-start items-center gap-3">
            <Certificate />
            <div className="flex flex-col gap-2">
              <h1 className=" text-gray-100 font-semibold text-lg">
                Coming Soon...
              </h1>
              <ul className=" allprojectslist ">
                <li>
                  <code></code>
                </li>
                <li>
                  <code></code>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </WindowSimple>
    </section>
  );
};

export default TailwindPage;
