import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <div className="home-container h-full">
        <header className="App-header">
          <h1> Welcome to Your Game</h1>
        </header>
        <div className="button-container">
          <button className="mr-10" onClick={() => navigate("/Alphabatics")}>
            Alphabets
          </button>
          <button className="mr-9" onClick={() => navigate("/words")}>
            words
          </button>
        </div>
      </div>
    </div>
  );
}
