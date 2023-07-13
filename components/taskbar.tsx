import Link from "next/link";
import {
  Blender,
  Django,
  Docker,
  Java,
  Javascript,
  Linux,
  Mysql,
  Nextjs,
  Python,
  Reactjs,
  Resume,
  Springboot,
  Tailwind,
  Vscode,
  Windows,
} from "./taskbar-icons/items";
import DateTimeComponent from "./dateTime";

const Taskbar = () => {
  return (
    <div className="taskbar-container fixed bottom-0 bg-[rgba(255,255,255,.3)] w-full flex justify-between gap-2 py-2 flex-nowrap backdrop-blur-sm ">
      <div className=" w-36 bottom-0"></div>
      <div className=" flex gap-2 bottom-0">
        <Link href="/" data-title="Home">
          <Windows />
        </Link>
        <Link href="/resume" data-title="Resume">
          <Resume />
        </Link>
        <Link href="/vscode" data-title="Some Projects">
          <Vscode />
        </Link>
        <Link href="/java" data-title="Java ">
          <Java />
        </Link>
        <Link href="/springboot" data-title="Springboot ">
          <Springboot />
        </Link>
        <Link href="/reactjs" data-title="React Js ">
          <Reactjs />
        </Link>
        <Link href="/nextjs" data-title="Next.js">
          <Nextjs />
        </Link>
        <Link href="/javascript" data-title="JavaScript ">
          <Javascript />
        </Link>
        <Link href="/tailwind" data-title="Tailwind CSS">
          <Tailwind />
        </Link>
        <Link href="/mysql" data-title="Mysql">
          <Mysql />
        </Link>
        <Link href="/python" data-title="Python">
          <Python />
        </Link>
        <Link href="/django" data-title="Django">
          <Django />
        </Link>
        <Link href="/docker" data-title="Docker">
          <Docker />
        </Link>
        <Link href="/linux" data-title="Linux">
          <Linux />
        </Link>
        <Link href="/blender" data-title="3D/Design">
          <Blender />
        </Link>
      </div>
      <DateTimeComponent />
    </div>
  );
};

export default Taskbar;
