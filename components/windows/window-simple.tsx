"use client";

import { gsap } from "gsap";
import { useLayoutEffect } from "react";

const WindowSimple = ({ children, title }) => {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".myIntro",
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1 }
      );
    });
    return () => ctx.revert();
  }, []);
  return (
    <div className="myIntro backdrop-blur-3xl rounded-xl border border-solid border-[rgba(255,255,255,0.3)] flex flex-col justify-between">
      <div className="title w-full backdrop-blur-3xl bg-[rgba(255,255,255,0.1)] flex justify-center py-2">
        <h1 className="text-gray-200">{title}</h1>
      </div>
      <div className=" p-10">{children}</div>
    </div>
  );
};

export default WindowSimple;
