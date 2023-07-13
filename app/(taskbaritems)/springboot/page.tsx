import { Certificate, Completed } from "@/components/taskbar-icons/items";
import WindowSimple from "@/components/windows/window-simple";
import Link from "next/link";

const SpringbootPage = () => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center">
      <WindowSimple title={"Springboot"}>
        <div className="allprojectscontainer flex flex-col gap-3 justify-start items-center min-w-[300px] h-[300px] overflow-auto">
          <div className=" project-item bg-[rgba(255,255,255,0.3)] backdrop-blur-sm rounded-lg p-3 w-full flex justify-start items-center gap-3">
            <Certificate />
            <div className="flex flex-col gap-2">
              <h1 className=" text-gray-100 font-semibold text-lg">
                Securing Your Spring Boot 3.0 Applications with JSON Web Tokens
                (JWT)
              </h1>
              <ul className=" allprojectslist ">
                <li>
                  <code>AliBou Coding</code>
                </li>
                <li>
                  <code>cert_9gm3wdk8</code>
                </li>
              </ul>
            </div>
          </div>
          <div className=" project-item bg-[rgba(255,255,255,0.3)] backdrop-blur-sm rounded-lg p-3 w-full flex justify-start items-center gap-3">
            <Completed />
            <div className="flex flex-col gap-2">
              <h1 className=" text-gray-100 font-semibold text-lg">
                LetsWatch Movie Database Backend API
              </h1>
              <ul className=" allprojectslist ">
                <li>
                  <code>Spring boot</code>
                </li>
                <li>
                  <code>MySQL</code>
                </li>
                <li>
                  <code>CRUD</code>
                </li>
              </ul>
            </div>
          </div>
          <div className=" project-item bg-[rgba(255,255,255,0.3)] backdrop-blur-sm rounded-lg p-3 w-full flex justify-start items-center gap-3">
            <Completed />
            <div className="flex flex-col gap-2">
              <h1 className=" text-gray-100 font-semibold text-lg">
                Employee Management System Backend API
              </h1>
              <ul className=" allprojectslist ">
                <li>
                  <code>Spring boot</code>
                </li>
                <li>
                  <code>MySQL</code>
                </li>
                <li>
                  <code>CRUD</code>
                </li>
              </ul>
            </div>
          </div>
          <div className=" project-item bg-[rgba(255,255,255,0.3)] backdrop-blur-sm rounded-lg p-3 w-full flex justify-start items-center gap-3">
            <Completed />
            <div className="flex flex-col gap-2">
              <h1 className=" text-gray-100 font-semibold text-lg">
                Email Verification System
              </h1>
              <ul className=" allprojectslist ">
                <li>
                  <code>Spring boot</code>
                </li>
                <li>
                  <code>PostgreSQL</code>
                </li>
                <li>
                  <code>SMTP</code>
                </li>
              </ul>
            </div>
          </div>
          <div className=" project-item bg-[rgba(255,255,255,0.3)] backdrop-blur-sm rounded-lg p-3 w-full flex justify-start items-center gap-3">
            <Completed />
            <div className="flex flex-col gap-2">
              <h1 className=" text-gray-100 font-semibold text-lg">
                E-Library With Authentication and Authorization
              </h1>
              <ul className=" allprojectslist ">
                <li>
                  <code>Spring boot</code>
                </li>
                <li>
                  <code>MySQL</code>
                </li>
                <li>
                  <code>Authentication</code>
                </li>
                <li>
                  <code>Authorization</code>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </WindowSimple>
    </section>
  );
};

export default SpringbootPage;
