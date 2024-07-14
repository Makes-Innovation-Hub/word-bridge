import { backgroundVideo } from "../../utilities/variables";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MenuBar from "../../Components/MenuBar";
import { getAllLetters } from "../../redux/thunk/lettersThunk";
import RestructuringDataFormat from "../../Functions/RestructuringDataFormat";

function Alphabetics() {
  const dispatch = useDispatch();
  const allLetters = useSelector((state) => state.letters.data) || [];
  const [randomLetters, setRandomLetters] = useState([]);
  const [clickedLetterIndex, setClickedLetterIndex] = useState(null);
  const [lettersFormat, setLettersFormat] = useState([]);
  const [letterPositions, setLetterPositions] = useState([]);
  const [clickedLetter, setClickedLetter] = useState([]);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const getRandomLetters = () => {
    const randomIndexes = [];
    while (randomIndexes.length < 6) {
      const randomIndex = Math.floor(Math.random() * allLetters.length);
      if (!randomIndexes.includes(randomIndex)) {
        randomIndexes.push(randomIndex);
      }
    }
    const randomLettersArray = randomIndexes.map((index) => allLetters[index]);
    setRandomLetters(randomLettersArray);
  };

  const generateRandomPositions = (length) => {
    const positions = [];
    for (let i = 0; i < length; i++) {
      positions.push({
        bottom: `${getRandomPosition()}%`,
        right: `${getRandomPosition()}%`,
      });
    }
    return positions;
  };

  const getRandomPosition = () => {
    const min = 0;
    const max = 80;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleLetterClick = (letter, index) => {
    setClickedLetterIndex(index);
    clickedLetter.push(letter);
    if (clickedLetter.length >= 2) {
      if (clickedLetter[0].id === clickedLetter[1].id) {
        clickedLetter[0].match = true;
        clickedLetter[1].match = true;
        setClickedLetterIndex(null);
        setClickedLetter([]);
      } else setClickedLetter([]);
    }
  };

  useEffect(() => {
    dispatch(getAllLetters());
  }, [dispatch]);

  useEffect(() => {
    if (randomLetters.length > 0) {
      const { arabic, hebrew } = RestructuringDataFormat(randomLetters);
      const formattedLetters = shuffleArray([...arabic, ...hebrew]);
      setLettersFormat(formattedLetters);
      setLetterPositions(generateRandomPositions(formattedLetters.length));
    }
  }, [randomLetters]);

  if (allLetters.length > 0 && randomLetters.length === 0) {
    getRandomLetters();
  }

  return (
    <div className="w-full h-screen flex flex-col items-center">
      <video autoPlay muted loop className="games-video">
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      <div className="alphabetic-overlay"></div>

      <div className="w-container h-full flex flex-col items-center justify-center">
        <MenuBar />
        <div className="flex flex-wrap justify-center relative w-full h-full">
          {lettersFormat.map((letter, index) =>
            !letter.match ? (
              <div
                key={index}
                onClick={() => handleLetterClick(letter, index)}
                className={`w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold cursor-pointer border-2 shadow-md hover:shadow-lg m-2 absolute bg-white ${
                  clickedLetterIndex === index ? "letter-animation" : ""
                }`}
                style={letterPositions[index]}
              >
                <div className="text-black">{letter.He}</div>
                <div className="text-black">{letter.Ar}</div>
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
}

export default Alphabetics;
