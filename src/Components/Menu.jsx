import { FaHome } from "react-icons/fa";
import { MdMusicNote, MdMusicOff } from "react-icons/md";
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
      <div className="absolute text-3xl flex m-3 gap-3 text-black">
        <div onClick={() => navigate("/")}>
          <FaHome />
        </div>
        {music ? (
          <button onClick={() => setMusic(false)}>
            <MdMusicNote />
          </button>
        ) : (
          <button onClick={() => setMusic(true)}>
            <MdMusicOff />
          </button>
        )}
      </div>
      <Outlet />
    </>
  );
};

export default Menu;
