import { useEffect, useState } from "react";

const header = () => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString();
      setTime(formattedTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);
  const [date, setDate] = useState<string>("");

  useEffect(() => {
    const now = new Date();
    const year = now.getFullYear();
    const day = now.getDate();

    const weekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const weekday = weekdays[now.getDay()];
    const month = months[now.getMonth()];
    setDate(`${year}-year , ${day}-${month} ${weekday}`);
  }, []);

  return (
    <>
      <div className="flex justify-between items-center  rounded-xl w-[1200px] h-[100px] bg-slate-100 p-[10px_20px] ">
        <div className="flex  items-center w-full w-350">
          <img src="/src/assets/icons/images.png" alt="" className="w-12 " />
          <h2 className="text-2xl font-bold">Weather App</h2>
        </div>
        <div className=" flex w-[300px] flex-col pl-20px gap-y-1 text-right">
          <h3 className="font-bold   text-lg">{time}</h3>
          <span className="opacity-45  ">{date}</span>
          <span className=" text-xs text-sky-500">📍 Fergana Uzbekistan</span>
        </div>
      </div>
    </>
  );
};

export default header;
