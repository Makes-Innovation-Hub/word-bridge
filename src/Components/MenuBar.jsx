import ButtonText_Small_Orange_Square from "../assets/ButtonText_Small_Orange_Square";
import Timer from "./Timer";
import Scores from "./Scores";

function MenuBar({ constTime, timeLeft, setTimeLeft }) {
  return (
    <div className="h-auto w-container">
      <ButtonText_Small_Orange_Square>
        <div className="flex flex-col w-full h-full gap-1 items-center justify-between">
          <div className="mt-6">logos</div>
          <div className="w-full">
            <Scores />
          </div>
          <div className="w-9/12 mb-12 ">
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
