import { useState } from "react";
import { useNavigate } from "react-router";
import Logo from "../../assets/logo192.png";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();

  return (
    <div className="login-container">
      <img className="logo" src={Logo} alt="logo" width="150" height="100" />
      <h3>Sistema de Gestão Integrada</h3>
      <label>
        E-mail
        <input
          className="user-login"
          type="email"
          name="login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          required
        />
      </label>
      <label>
        Senha
        <input
          className="user-login"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <p className="info-account">Esqueci minha senha</p>
      <p className="info-account">Ainda não tem conta? <strong> Criar conta</strong></p>
      {/*Alterar onClick para onSubmit*/}
      <button className="btn-login" onClick={() => Navigate("/mapa")}>
        {" "}
        Entrar{" "}
      </button>
    </div>
  );
};

export default Login;
