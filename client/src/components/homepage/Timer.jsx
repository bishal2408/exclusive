import React, {useState, useEffect} from "react";

const Timer = ({timeInDays}) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  // setting deadline to 30 days from the current date
  const currentDate = new Date();
  const deadlineDate = new Date(
    currentDate.getTime() + timeInDays * 24 * 60 * 60 * 1000
  );
  const deadline = deadlineDate.toISOString().slice(0, 10);

  // or you cab do the following
  // const deadline = "July, 21, 2025"

  // deadline to date object and calculating remmaining time
  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  // useEffect for setting and clearing time interval every second
  useEffect(() => {
    const interval = setInterval(() => getTime(deadline, 1000));

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-x-5">
      <div className="flex items-center gap-x-5">
        <div>
          <span className="text-sm font-semibold">Days</span>
          <p className="text-2xl font-semibold">{days}</p>
        </div>
        <div className="text-3xl font-semibold text-red-500">:</div>
      </div>
      <div className="flex items-center gap-x-5">
        <div>
          <span className="text-sm font-semibold">Hours</span>
          <p className="text-2xl font-semibold">{hours}</p>
        </div>
        <div className="text-3xl font-semibold text-red-500">:</div> 
      </div>
      <div className="flex items-center gap-x-5">
        <div>
          <span className="text-sm font-semibold">Minutes</span>
          <p className="text-2xl font-semibold ">{minutes}</p>
        </div>
        <div className="text-3xl font-semibold text-red-500">:</div>
      </div>
      <div className="flex items-center gap-x-5">
        <div>
          <span className="text-sm font-semibold">Seconds</span>
          <p className="text-2xl font-semibold ">{seconds}</p>
        </div>
      </div>
    </div>
  );
};

export default Timer;
