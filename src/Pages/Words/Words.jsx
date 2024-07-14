import RestructuringDataFormat from "../../Functions/RestructuringDataFormat";
import { SingleWord } from "../../Components/SingleWord/SingleWord";
import { getAllWords } from "../../redux/thunk/wordsThunk";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import "./Words.css";

function Words() {
  const wordsAPI = useSelector((state) => state.words.data);
  const [secondWord, setSecondWord] = useState(null);
  const [firstWord, setFirstWord] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [words, setWords] = useState([]);
  const dispatch = useDispatch();

  // Get words from Redux
  useEffect(() => {
    dispatch(getAllWords());
  }, [dispatch]);

  //Restructure data
  useEffect(() => {
    if (wordsAPI.length) {
      const restructuredWords = RestructuringDataFormat(wordsAPI);
      setWords(restructuredWords);
    }
  }, [wordsAPI]);

  // Choosing a word Word
  const handleChoosingWord = (word) => {
    firstWord ? setSecondWord(word) : setFirstWord(word);
  };

  // resetting the words
  const handleResetChoosing = () => {
    setSecondWord(null);
    setFirstWord(null);
    setDisabled(false);
  };

  //  Words logic
  useEffect(() => {
    let timeout;

    if (firstWord && secondWord) {
      setDisabled(true);

      if (firstWord.id === secondWord.id) {
        setWords((prev) =>
          prev.map((word) =>
            word.id === firstWord.id ? { ...word, match: true } : word
          )
        );
      }
      timeout = setTimeout(() => handleResetChoosing(), 2000);
    }
    return () => clearTimeout(timeout);
  }, [firstWord, secondWord]);

  return (
    <>
      <div className="words-container">
        <div className="cards-grid">
          {words?.hebrew?.map((word) => (
            <SingleWord
              flip={word === firstWord || word === secondWord || word.matched}
              handleChoosingWord={handleChoosingWord}
              disabled={disabled}
              key={word.id}
              word={word}
            />
          ))}
          {words?.arabic?.map((word) => (
            <SingleWord
              flip={word === firstWord || word === secondWord || word.matched}
              handleChoosingWord={handleChoosingWord}
              disabled={disabled}
              key={word.id}
              word={word}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Words;
