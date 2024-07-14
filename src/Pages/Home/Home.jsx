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
        <div className="home-container h-full">
          <header className="App-header">
            <h1 className="title" style={{ position: "absolute" }}>
              Alphabets Game
            </h1>
            <img className="img-logo" src={orange} alt="Logo" />
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
    </div>
  );
}
