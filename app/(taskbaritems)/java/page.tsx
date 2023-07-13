import { Certificate, Completed } from "@/components/taskbar-icons/items";
import WindowSimple from "@/components/windows/window-simple";
import Link from "next/link";

const ResumePage = () => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center">
      <WindowSimple title={"Java"}>
        <div className="allprojectscontainer flex flex-col gap-3 justify-start items-center min-w-[300px] h-[300px] overflow-auto">
          <div className=" project-item bg-[rgba(255,255,255,0.3)] backdrop-blur-sm rounded-lg p-3 w-full flex justify-start items-center gap-3">
            <Certificate />
            <div className="flex flex-col gap-2">
              <h1 className=" text-gray-100 font-semibold text-lg">
                Complete Java Masterclass: From Beginner to Expert
              </h1>
              <ul className=" allprojectslist ">
                <li>
                  <code>Udemy</code>
                </li>
                <li>
                  <code>UC-564827a1-3a06-4281-b7fd-dd3f46c253c7</code>
                </li>
              </ul>
            </div>
          </div>
          <div className=" project-item bg-[rgba(255,255,255,0.3)] backdrop-blur-sm rounded-lg p-3 w-full flex justify-start items-center gap-3">
            <Certificate />
            <div className="flex flex-col gap-2">
              <h1 className=" text-gray-100 font-semibold text-lg">
                Introduction to Java - certificate of excellence
              </h1>
              <ul className=" allprojectslist ">
                <li>
                  <code>Coding Ninjas</code>
                </li>
                <li>
                  <code>78e9763697af6f89</code>
                </li>
              </ul>
            </div>
          </div>
          <div className=" project-item bg-[rgba(255,255,255,0.3)] backdrop-blur-sm rounded-lg p-3 w-full flex justify-start items-center gap-3">
            <Completed />
            <div className="flex flex-col gap-2">
              <h1 className=" text-gray-100 font-semibold text-lg">
                Library Management System
              </h1>
              <ul className=" allprojectslist ">
                <li>
                  <code>JavaFX</code>
                </li>
                <li>
                  <code>Hibernate</code>
                </li>
                <li>
                  <code>MySQL</code>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </WindowSimple>
    </section>
  );
};

export default ResumePage;
