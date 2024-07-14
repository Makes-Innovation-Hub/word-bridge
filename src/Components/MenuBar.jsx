import ButtonText_Small_Orange_Square from "../assets/ButtonText_Small_Orange_Square";
import Timer from "./Timer";
import Scores from "./Scores";

function MenuBar({ constTime, timeLeft, setTimeLeft }) {
  return (
    <div className="h-auto flex justify-center mt-12 lg:mt-0 w-container">
      <ButtonText_Small_Orange_Square>
        <div className="flex flex-col w-full h-full gap-1  items-center justify-between">
          <div className="mt-16 w-full">
            <Scores />
          </div>
          <div className="w-9/12 mb-16 ">
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
