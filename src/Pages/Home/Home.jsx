import { useNavigate } from "react-router-dom";
import "./Home.css";
import orange from "./orange.png";
import backgroundVideo from "./background.mp4"; // Make sure this path is correct

export default function Home() {
  const navigate = useNavigate();
  return (
    <div id="root">
      <video autoPlay muted loop id="background-video">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="App">
        <div className="home-container">
          <header className="App-header">
            <svg className="title" viewBox="0 0 500 500">
              <path
                id="curve"
                d="M55.2,140.6c4-6.1,40-46.8,210.6-50.6c150.3,1.2,150.8,60,350.1,100"
              />
              <text>
                <textPath xlinkHref="#curve">The Alphabet Game</textPath>
              </text>
            </svg>
            <img className="img-logo" src={orange} alt="Logo" />
          </header>
          <div className="button-container">
            <button
              className="main-page-btn letters-btn"
              onClick={() => navigate("/Alphabatics")}
            >
              Letters
            </button>
            <button
              className="main-page-btn words-btn"
              onClick={() => navigate("/words")}
            >
              Words
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
