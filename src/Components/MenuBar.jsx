import ButtonText_Small_Orange_Square from "../assets/ButtonText_Small_Orange_Square";
import Timer from "./Timer";

function MenuBar() {
  return (
    <div className="h-auto w-container">
      <ButtonText_Small_Orange_Square>
        <div className="flex flex-col w-full h-full gap-1 items-center justify-between">
          <div className="mt-6">logos</div>
          <div>score</div>
          <div className="w-full mb-12 h-full">
            <Timer />
          </div>
        </div>
      </ButtonText_Small_Orange_Square>
    </div>
  );
}

export default MenuBar;
