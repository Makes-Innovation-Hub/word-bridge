import ButtonText_Small_Orange_Square from "../assets/ButtonText_Small_Orange_Square";
import Timer from "./Timer";
import Scores from "./Scores";

import "./MenuBar.css";

function MenuBar({ constTime, timeLeft, setTimeLeft }) {
  return (
    <div className="h-auto w-container">
      <ButtonText_Small_Orange_Square>
      <div className="menuBar-logo mt-6">word bridge</div>
        <div className="flex flex-col w-full h-full gap-1 items-center justify-between">
          <div className="menuBar-score-container w-full">
            <Scores />
          </div>
          <div className="menuBar-timer w-9/12 mb-12 ">
            <Timer
              constTime={constTime}
              setTimeLeft={setTimeLeft}
              timeLeft={timeLeft}
            />
          </div>
        </div>
      </ButtonText_Small_Orange_Square>
    </div>
  );
}

export default MenuBar;
