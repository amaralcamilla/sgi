import Logo from "../../assets/logo192_negative.png";
import { useNavigate } from "react-router";

const Header = ({ children }) => {
  const navigate = useNavigate();
  return (
    <header>
      <nav className="nav-bar">
        <img
          className="white-logo"
          src={Logo}
          alt="logo"
          width="60"
          height="60"
          onClick={() => navigate("/mapa")}
        />
        <div>{children}</div>
      </nav>
    </header>
  );
};

export default Header;
