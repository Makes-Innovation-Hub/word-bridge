import React from "react";
import ButtonText_Small_Orange_Square from "../assets/ButtonText_Small_Orange_Square";

function MenuBar() {
  return (
    <div className="h-auto w-container">
      <ButtonText_Small_Orange_Square>
        <div className="flex flex-col w-full h-full items-center" x="10" y="20">
          <p>Child Text</p>
        </div>
      </ButtonText_Small_Orange_Square>{" "}
    </div>
  );
}

export default MenuBar;
