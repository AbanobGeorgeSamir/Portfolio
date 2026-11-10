import { useEffect, useState } from "react";

export default function useLocalTime(timeZone = "Africa/Cairo") {
  const [time, setTime] = useState("");

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone,
    });

    const tick = () => setTime(formatter.format(new Date()));
    tick();

    const interval = setInterval(tick, 30_000);
    return () => clearInterval(interval);
  }, [timeZone]);

  return time;
}
