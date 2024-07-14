import { useState, useEffect } from "react";

const Timer = ({ timeLeft, setTimeLeft, constTime }) => {
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  return (
    <div className="relative w-full h-full">
      <div className="relative w-full">
        <div className="absolute left-0 flex items-center h-full">
          <img
            src="../../img/clock.png"
            alt=""
            className="ml-6 h-12 mb-2 z-20"
          />
        </div>
        <div className="bg-gray-200 rounded-full h-4 dark:bg-gray-700 ml-8 relative">
          <div
            className="bg-green-600 h-4 rounded-full transition-width duration-1000 ease-linear"
            style={{ width: `${(timeLeft / constTime) * 100}%` }}
          ></div>
          <div className="absolute inset-0 flex items-center justify-center text-white">
            {timeLeft}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
