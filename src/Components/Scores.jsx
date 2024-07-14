import React from "react";
import { useSelector } from "react-redux";

function Scores() {
  const score = useSelector((state) => state.score.value);

  return (
    <div className="flex flex-row w-full items-center justify-around">
      <div className="h-full flex flex-row bg-orange-300 px-4 justify-between rounded-lg border-4 border-orange-900 relative">
        <img
          src="../../img/star.png"
          className="absolute transform  left-1/2  -translate-x-1/2 -top-6 h-8"
          alt=""
        />
        <div className="text-lg h-10 flex items-center justify-center text-center flex-grow">
          <p>{score}</p>
        </div>
      </div>
      <div className="h-full flex flex-row bg-orange-300 px-4 justify-between rounded-lg border-4 border-orange-900 relative">
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
          <div className="relative w-16 h-10 flex-shrink-0">
            <img
              src="../../img/star.png"
              className="absolute -top-3 h-6 right-0  "
              alt="Star 1"
            />
            <img
              src="../../img/star.png"
              className="absolute -top-5 left-0.5 translate-x-1/2  h-6 "
              alt="Star 2"
            />
            <img
              src="../../img/star.png"
              className="absolute -top-3  -translate-x-1/2 h-6 "
              alt="Star 3"
            />
          </div>
        </div>
        <div className="text-lg h-10 flex items-center justify-center text-center flex-grow">
          <p>
            {localStorage.getItem("maxScore")
              ? localStorage.getItem("maxScore")
              : 0}
          </p>
          {/* //maxScore  */}
        </div>
      </div>
    </div>
  );
}

export default Scores;
