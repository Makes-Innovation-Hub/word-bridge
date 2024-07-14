import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <button className="mr-10" onClick={() => navigate("/alphabatics")}>
        alphabatics
      </button>
      <button onClick={() => navigate("/words")}>words</button>
    </div>
  );
}

export default Home;
