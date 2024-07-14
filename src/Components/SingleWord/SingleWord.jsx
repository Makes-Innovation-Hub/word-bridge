import "./SingleWord.css";

export const SingleWord = ({ handleChoosingCard, handleFlippedCards }) => {
  return (
    <div className="word-container">
      <div className={handleFlippedCards ? "flipped" : ""}>
        <div className="word-front">word</div>
        <div className="word-back" onClick={handleChoosingCard}></div>
      </div>
    </div>
  );
};
