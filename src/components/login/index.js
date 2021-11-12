import { useState } from "react";
import { useNavigate } from "react-router";
import Logo from "../../assets/logo192.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      if (!email) {
        alert("E-mail é obrigatório.");
        return;
      } else if (
        !email.match(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        )
      ) {
        alert("Email é inválido.");
        return;
      } else if (!password) {
        alert("Preencha sua senha.");
        return;
      }else if(password.length < 6) {
        alert("A senha deve ter no mínimo 6 caracteres.");
        return;
      }
      event.target.checkValidity();
      navigate("/mapa");
    } catch (error) {
      alert("Desculpe o transtorno. Estamos resolvendo o problema.");
    }
  };

  return (
    <form className="login-container" onSubmit={handleSubmit}>
      <img className="logo" src={Logo} alt="logo" width="150" height="100" />
      <h3>Sistema de Gestão Integrada</h3>
      <label>
        E-mail
        <input
          className="user-login"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
      <p className="info-account">
        Ainda não tem conta? <strong> Criar conta</strong>
      </p>

      {/*Alterar onClick para onSubmit*/}
      <button className="btn-login" type="submit">
        Entrar
      </button>
    </form>
  );
};

export default Login;
