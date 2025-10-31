import React, { useEffect, useState } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalid = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalid);
  }, []);

  const formatTime = () => {
    let hours = time.getHours();
    const minuts = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiam = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    return `${padZero(hours)}:${padZero(minuts)}:${padZero(
      seconds
    )} ${meridiam}`;
  };

  const padZero = (number) => {
    return (number < 10 ? "0" : "") + number;
  };

  return (
    <div className="container">
      <p className="time">{formatTime()}</p>
    </div>
  );
};

export default DigitalClock;
