import { useNavigate, Outlet } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const Menu = () => {
  const navigate = useNavigate();
  const [music, setMusic] = useState(false);
  const audioRef = useRef(new Audio("./music/Music.mp3"));

  useEffect(() => {
    const audio = audioRef.current;
    if (music) {
      audio
        .play()
        .catch((error) => console.error("Failed to play audio:", error));
    } else {
      audio.pause();
    }
  }, [music]);

  return (
    <>
      <div className="absolute flex m-3 gap-3 text-black z-50">
        <div onClick={() => navigate("/")}>
          <img className="w-10" src="./img/Home.png" alt="Home" />
        </div>
        {music ? (
          <button onClick={() => setMusic(false)}>
            <img className="w-10" src="./img/MusicOn.png" alt="MusicOn" />
          </button>
        ) : (
          <button onClick={() => setMusic(true)}>
            <img className="w-10" src="./img/MusicOff.png" alt="MusicOff" />
          </button>
        )}
      </div>
      <Outlet />
    </>
  );
};

export default Menu;
