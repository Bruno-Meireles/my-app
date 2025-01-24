import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/login");
  }
  return (
    <div>
      <p>Dashboard Page</p>
      <button onClick={handleClick}>Login</button>
    </div>
  );
};

export default Dashboard;
