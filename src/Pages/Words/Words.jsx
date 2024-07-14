import RestructuringDataFormat from "../../Functions/RestructuringDataFormat";
import { SingleWord } from "../../Components/SingleWord/SingleWord";
import { getAllWords } from "../../redux/thunk/wordsThunk";
import { useDispatch, useSelector } from "react-redux";
import MenuBar from "../../Components/MenuBar";
import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
gsap.registerPlugin(useGSAP);

import "./Words.css";

function Words() {
  const wordsAPI = useSelector((state) => state.words.data);
  const [secondWord, setSecondWord] = useState(null);
  const [firstWord, setFirstWord] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [words, setWords] = useState([]);
  const [animation, setAnimation] = useState(true);
  const dispatch = useDispatch();

  // Random 6 objects
  const getRandomWords = (allData) => {
    const randomIndexes = [];
    while (randomIndexes.length < 6) {
      const randomIndex = Math.floor(Math.random() * allData.length);
      if (!randomIndexes.includes(randomIndex)) {
        randomIndexes.push(randomIndex);
      }
    }
    return randomIndexes.map((index) => allData[index]);
  };

  // Shuffle words
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  }

  // Get words from Redux
  useEffect(() => {
    dispatch(getAllWords());
  }, [dispatch]);

  //Restructure data
  useEffect(() => {
    if (wordsAPI.length) {
      const randomWords = getRandomWords(wordsAPI);
      const restructuredWords = RestructuringDataFormat(randomWords);
      setWords(
        shuffleArray([...restructuredWords.arabic, ...restructuredWords.hebrew])
      );
    }
    setAnimation((prev) => !prev);
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



// Gsap Animation
  useEffect(() => {
    gsap.set(".word-container ", {
      scale: 0,
    });

    gsap.to(".word-container", {
      duration: 0.8,
      scale: 1,
      ease: "bounce.out",
      stagger: {
        from: "random",
        each: 0.2,
      },
    });
  }, [animation]);







  return (
    <section className="words-section">
      <MenuBar />
      <div className="words-container">
        <div className="cards-grid">
          {words?.map((word, index) => (
            <SingleWord
              flip={word === firstWord || word === secondWord || word.match}
              handleChoosingWord={handleChoosingWord}
              disabled={disabled}
              key={index}
              word={word}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Words;
