import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleClick() {
    console.log(email);
  }

  return (
    <div className="content-center bg-gray-400">
      <form>
        <h1 className="text-3xl my-4 ">Login</h1>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="current-password">
          Senha:
          <input
            type="current-password"
            value={password}
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button onClick={handleClick}>Entrar</button>
      </form>
      <button onClick={() => navigate("/dashboard")}>Dashboard</button>
    </div>
  );
};

export default Login;
