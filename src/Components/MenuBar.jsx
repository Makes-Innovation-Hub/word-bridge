import React from "react";
import ButtonText_Small_Orange_Square from "../assets/ButtonText_Small_Orange_Square";
import Timer from "./Timer";
// import { ThemeProvider } from "@material-tailwind/react";

function MenuBar() {
  return (
    <div className="h-auto w-container">
      <ButtonText_Small_Orange_Square>
        <div className="flex flex-col w-full h-full gap-1 items-center justify-between">
          <div className="mt-6">logos</div>
          <div>score</div>
          <div className="mb-12">
            {/* <Timer /> */}
            timer
          </div>
        </div>
      </ButtonText_Small_Orange_Square>{" "}
    </div>
  );
}

export default MenuBar;
