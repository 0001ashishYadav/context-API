import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function LoginPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ userName, password });
  };
  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="User Name"
        value={userName}
        required
        onChange={(e) => setUserName(e.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Password"
        value={password}
        required
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />
      <br />

      <button type="submit" onClick={handleSubmit}>
        submit
      </button>
      <br />
      <br />
    </div>
  );
}

export default LoginPage;
