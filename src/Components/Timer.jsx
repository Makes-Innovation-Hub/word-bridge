import { Progress } from "@material-tailwind/react";

const Timer = () => {
  return (
    <div className="timer-container">
      <Progress value={50} />;{/* timer */}
    </div>
  );
};

export default Timer;
