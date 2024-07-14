import { SingleWord } from "../../Components/SingleWord/SingleWord";
// import { getAllWords } from "../../actions/wordsActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import "./Words.css";

function Words() {
  // const wordsAPI = useSelector((state) => state.words.words);
  const [secondCard, setSecondCard] = useState(null);
  const [firstCard, setFirstCard] = useState(null);
  const [words, setWords] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllWords());
    setWords(wordsAPI);
  }, [dispatch]);

  // Choosing a word card
  const handleChoosingCard = (card) => {
    firstCard ? setSecondCard(card) : setFirstCard(card);
  };

  // Handle card flipping
  const handleFlippedCards = (card) => {
    if (card.match || card === firstCard || card === secondCard) {
      return true;
    }
  };

  // resetting the words
  const handleResetChoosing = () => {
    setSecondCard(null);
    setFirstCard(null);
  };

  //  Cards logic
  useEffect(() => {
    if (firstCard.id === secondCard.id) {
      setWords((prev) => {
        return prev.map((card) => {
          if (card.id === firstCard.id) {
            return { ...card, match: true };
          } else {
            return card;
          }
        });
      });
      setTimeout(() => handleResetChoosing(), 1000);
    }
  }, [firstCard, secondCard]);

  return (
    <>
      <div className="words-container">
        <div className="cards-grid">
          <SingleWord
            handleChoosingCard={handleChoosingCard}
            handleFlippedCards={handleFlippedCards}
          />
        </div>
      </div>
    </>
  );
}

export default Words;
