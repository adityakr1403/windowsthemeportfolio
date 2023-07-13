"use client";
import { useEffect, useState } from "react";

const DateTimeComponent = () => {
  const [time, setTime] = useState("");

  const [today, setToday] = useState("");

  const setdateTime = () => {
    let date = new Date();
    setTime(
      (date.getHours() < 10 ? "0" + date.getHours() : "" + date.getHours()) +
        ":" +
        (date.getMinutes() < 10
          ? "0" + date.getMinutes()
          : "" + date.getMinutes())
    );

    setToday(
      (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) +
        "-" +
        (date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth()) +
        "-" +
        date.getFullYear()
    );
    let t = setTimeout(() => {
      setdateTime();
    }, 10000);
  };
  useEffect(() => {
    setdateTime();
  }, []);

  return (
    <div className=" w-36 px-2 flex flex-col items-center justify-center">
      <div className="currentTime">{time}</div>
      <div className="currentDate whitespace-nowrap">{today}</div>
    </div>
  );
};

export default DateTimeComponent;
