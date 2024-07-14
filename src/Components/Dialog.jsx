import { useNavigate } from "react-router-dom";

const Dialog = ({ score }) => {
  const navigate = useNavigate();

  const handleRestart = () => {
    window.location.reload();
  };

  return (
    <div>
      <div
        className="bg-cover bg-center bg-no-repeat z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-dialog flex justify-center"
        style={{ backgroundImage: `url('./img/Box_Orange_Rounded.png')` }}
      >
        <div className="flex flex-col items-center justify-center p-4">
          <div className="flex items-center mb-4">
            <img className="w-10 h-10" src="./img/star.png" alt="star" />
            <h2 className="text-4xl font-bold text-white ml-3">{score}</h2>
          </div>
          <div className="flex gap-4">
            <div
              onClick={() => navigate("/")}
              className="cursor-pointer transform transition-transform hover:scale-110"
            >
              <img className="w-10" src="./img/Home.png" alt="Home" />
            </div>
            <div
              onClick={handleRestart}
              className="cursor-pointer transform transition-transform hover:scale-110"
            >
              <img className="w-10" src="./img/Restart.png" alt="Restart" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dialog;
