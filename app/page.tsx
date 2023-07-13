import WindowSimple from "@/components/windows/window-simple";
import Link from "next/link";
import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

import { LiaHackerrank } from "react-icons/lia";

export default function Home() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center">
      <WindowSimple title={"Home"}>
        <div className="h-full w-full flex flex-col md:flex-row gap-5 justify-center items-center">
          <div className="avatar w-[200px] h-[200px] rounded-full backdrop-blur-3xl bg-blue-800"></div>
          <div className="details text-gray-100">
            <h1 className="text-3xl">Aditya Kumar</h1>
            <Link href={"mailto:adityakr1403@gmail.com"}>
              <code className="text-lg text-gray-300">adityakr1403@gmail.com</code>
            </Link>
            <div className=" grid grid-cols-2 gap-2 p-2 mt-3">
              <Link
                className="rounded-lg w-20 h-20 p-2 flex justify-center items-center hover:bg-[rgba(255,255,255,0.3)] backdrop-blur-3xl"
                href={"https://github.com/adityakr1403"}
                target="_blank"
              >
                <FaGithubAlt className=" text-[80px] text-black" />
              </Link>
              <Link
                className="rounded-lg w-20 h-20 p-2 flex justify-center items-center hover:bg-[rgba(255,255,255,0.3)] backdrop-blur-3xl"
                href={"https://www.linkedin.com/in/aditya-kumar-a77390283/"}
                target="_blank"
              >
                <FaLinkedinIn className=" text-[80px] text-blue-500" />
              </Link>
              <Link
                className="rounded-lg w-20 h-20 p-2 flex justify-center items-center hover:bg-[rgba(255,255,255,0.3)] backdrop-blur-3xl"
                href={"https://leetcode.com/adityakr1403/"}
                target="_blank"
              >
                <SiLeetcode className=" text-[80px] text-orange-600" />
              </Link>
              <Link
                className="rounded-lg w-20 h-20 p-2 flex justify-center items-center hover:bg-[rgba(255,255,255,0.3)] backdrop-blur-3xl"
                href={"https://www.hackerrank.com/adityakr1403?hr_r=1"}
                target="_blank"
              >
                <LiaHackerrank className=" text-[80px] text-green-500" />
              </Link>
            </div>
          </div>
        </div>
      </WindowSimple>
    </section>
  );
}
