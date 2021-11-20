import Logo from "../../assets/logo192_negative.png";
import { useNavigate } from "react-router";
import {IoLogOutOutline} from "react-icons/io5"
import Swal from "sweetalert2";

const Header = ({ children }) => {
  const navigate = useNavigate();

  const handleConfirm = () => {
    Swal.fire({
      title: "Tem certeza que deseja sair?",
      icon: "warning",
      width: "24rem",
      showCancelButton: true,
      confirmButtonColor: "#0066A0",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/");
      }
    });
  };

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
        <div className="header">{children}
        <button
            className="btn-logout"
            title="Sair"
            onClick={handleConfirm}
          >
            <IoLogOutOutline size="25" />
          </button>
          </div>
      </nav>
    </header>
  );
};

export default Header;
