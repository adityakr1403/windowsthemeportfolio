import { Certificate, Completed } from "@/components/taskbar-icons/items";
import WindowSimple from "@/components/windows/window-simple";
import Link from "next/link";

const DockerPage = () => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center">
      <WindowSimple title={"Docker"}>
        <div className="allprojectscontainer flex flex-col gap-3 justify-start items-center min-w-[300px] h-[300px] overflow-auto">
          <div className=" project-item bg-[rgba(255,255,255,0.3)] backdrop-blur-sm rounded-lg p-3 w-full flex justify-start items-center gap-3">
            <Certificate />
            <div className="flex flex-col gap-2">
              <h1 className=" text-gray-100 font-semibold text-lg">
                Docker Training Course for the Absolute Beginner Course
              </h1>
              <ul className=" allprojectslist ">
                <li>
                  <code>KodeKloud</code>
                </li>
                <li>
                  <code>7A692C0FED-7A632788F1-7A5D9BB4C5</code>
                </li>
              </ul>
            </div>
          </div>
          <div className=" project-item bg-[rgba(255,255,255,0.3)] backdrop-blur-sm rounded-lg p-3 w-full flex justify-start items-center gap-3">
            <Certificate />
            <div className="flex flex-col gap-2">
              <h1 className=" text-gray-100 font-semibold text-lg">
                The Bits and Bytes of Computer Networking
              </h1>
              <ul className=" allprojectslist ">
                <li>
                  <code>Coursera</code>
                </li>
                <li>
                  <code>S7GWSFDQ5EKZ</code>
                </li>
              </ul>
            </div>
          </div>
          <div className=" project-item bg-[rgba(255,255,255,0.3)] backdrop-blur-sm rounded-lg p-3 w-full flex justify-start items-center gap-3">
            <Certificate />
            <div className="flex flex-col gap-2">
              <h1 className=" text-gray-100 font-semibold text-lg">
                Technical Support Fundamentals
              </h1>
              <ul className=" allprojectslist ">
                <li>
                  <code>Coursera</code>
                </li>
                <li>
                  <code>E89VSTKEJDC8</code>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </WindowSimple>
    </section>
  );
};

export default DockerPage;
