import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MenuBar from "../../Components/MenuBar";
import { getAllLetters } from "../../redux/thunk/lettersThunk";
import RestructuringDataFormat from "../../Functions/RestructuringDataFormat";

function Alphabetics() {
  const dispatch = useDispatch();
  const allLetters = useSelector((state) => state.letters.data) || [];
  const [randomLetters, setRandomLetters] = useState([]);
  const [selectedLetters, setSelectedLetters] = useState(null);

  // Function to shuffle array randomly
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

  useEffect(() => {
    dispatch(getAllLetters());
  }, [dispatch]);

  useEffect(() => {
    if (allLetters.length > 0) {
      getRandomLetters();
    }
  }, [allLetters]);

  const { arabic, hebrew } = RestructuringDataFormat(randomLetters);
  const lettersFormat = shuffleArray([...arabic, ...hebrew]);

  const getRandomPosition = () => {
    const min = 0;
    const max = 89;
    console.log(`${Math.floor(Math.random() * (max - min + 1)) + min}%`);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return (
    <div className="w-full h-screen flex flex-col items-center">
      <div className="w-container h-full flex  flex-col items-center justify-center">
        <MenuBar />
        <h1 className="text-3xl font-bold text-center my-7">Alphabetics</h1>
        <div className="flex flex-wrap justify-center relative w-full h-full">
          {lettersFormat.map((letter, index) => (
            <div
              key={index}
              className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold cursor-pointer border-2 shadow-md hover:shadow-lg m-2 absolute bg-white"
              style={{
                bottom: `${getRandomPosition()}%`,
                right: `${getRandomPosition()}%`,
              }}
            >
              <div>{letter.He}</div>
              <div>{letter.Ar}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Alphabetics;
