import React from "react";

function Scores() {
  return (
    <div className="flex flex-row w-full items-center justify-around">
      <div className="h-full flex flex-row items-center  justify-between">
        <img src="../../img/star.png" className="h-10" alt="" />
        <div className="text-lg h-10 flex items-center justify-center text-center">
          <p>10</p>
        </div>
      </div>
      <div className="h-full flex flex-row bg-orange-300 px-4 justify-between rounded-lg border-4 border-orange-900 relative">
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
          <div className="relative w-16 h-10 flex-shrink-0">
            <img
              src="../../img/star.png"
              className="absolute -top-4 h-6 left-0  "
              alt="Star 1"
            />
            <img
              src="../../img/star.png"
              className="absolute -top-4 right-0  h-6 "
              alt="Star 2"
            />
            <img
              src="../../img/star.png"
              className="absolute -top-4 right-5 h-6 "
              alt="Star 3"
            />
          </div>
        </div>
        <div className="text-lg h-10 flex items-center justify-center text-center flex-grow">
          <p>100</p>
        </div>
      </div>
    </div>
  );
}

export default Scores;
