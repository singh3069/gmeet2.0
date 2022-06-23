import { useEffect, useState } from "react";
import date from "date-and-time";

function TimeAndName() {
  const [now, setNow] = useState(new Date());
  const currentTime = date.format(now, "HH:mm");

  useEffect(() => {
    var timer = setInterval(() => setNow(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });
  return (
    <div className="flex justify-center items-center">
      <p className="text-white">{currentTime}</p>
      <span className="px-2">|</span>
      <p>ump-vcip-ojy</p>
    </div>
  );
}

export default TimeAndName;
