import { useState } from "react";

import "./SingleWord.css";

export const SingleWord = ({ handleChoosingWord, flip, word, disabled }) => {
  const [select, setSelect] = useState(false);


  const handleSelect = () => {
    setSelect(true);
    if (!disabled && !select) {
      handleChoosingWord(word);
    }
    setTimeout(() => setSelect(false), 500);
  };

  return (
    <div className="word-container">
      <div className={flip ? "flipped" : ""}>
        <div className="word-front">{word?.He || word?.Ar}</div>
        <div className="word-back" onClick={handleSelect}></div>
      </div>
    </div>
  );
};
