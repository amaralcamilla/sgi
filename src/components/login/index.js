import { useState } from "react";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <label>
        E-mail:
        <input
          type="email"
          name="login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          required
        />
      </label>
      <label>
        Senha:
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>

      <button>Entrar</button>
    </>
  );
};

export default Login;
