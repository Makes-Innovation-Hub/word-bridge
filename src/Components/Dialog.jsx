import { useNavigate } from "react-router-dom";

const Dialog = ({ score }) => {
  const navigate = useNavigate();

  return (
    <div
      className="z-50 bg-cover  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-dialog flex justify-center"
      style={{ backgroundImage: `url('./img/Box_Orange_Rounded.png')` }}
    >
      <div className="flex flex-col items-center justify-center">
        <div className="flex">
          <img className="w-10 h-10" src="./img/star.png" alt="star" />
          <h2 className="text-4xl font-bold text-white mb-4 ml-3"> {score}</h2>
        </div>
        <div className="flex gap-4">
          <div onClick={() => navigate("/")} className="cursor-pointer">
            <img className="w-10" src="./img/Home.png" alt="Home" />
          </div>
          <div
            onClick={() => window.location.reload()}
            className="cursor-pointer"
          >
            <img className="w-10" src="./img/Restart.png" alt="Restart" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
