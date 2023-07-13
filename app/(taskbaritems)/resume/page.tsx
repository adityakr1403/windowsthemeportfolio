import { Resume } from "@/components/taskbar-icons/items";
import WindowSimple from "@/components/windows/window-simple";
import Link from "next/link";

const ResumePage = () => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center">
      <WindowSimple title={"Resume"}>
        <div className=" flex flex-wrap justify-start min-w-[300px] h-[300px]">
          <Link
            className="flex flex-col justify-start items-center text-white"
            href="/resume.pdf"
            download={true}
            target="_blank"
          >
            <Resume />
            <h1>Resume.pdf</h1>
          </Link>
        </div>
      </WindowSimple>
    </section>
  );
};

export default ResumePage;
