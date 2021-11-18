import Header from "../../components/header";
import CompanyForm from "../../components/companyForm";
import { useNavigate } from "react-router";
import { RiMapPin2Line } from "react-icons/ri";
import { IoFastFoodOutline, IoLogOutOutline } from "react-icons/io5";

const CompanyPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header>
        <div className="header">
          <button
            className="header-item"
            title="Mapa"
            onClick={() => navigate("/mapa")}
          >
            {" "}
            <RiMapPin2Line size="25" />{" "}
          </button>

          <button
            className="header-item"
            title="Produto"
            onClick={() => navigate("/produtos")}
          >
            {" "}
            <IoFastFoodOutline size="25" />{" "}
          </button>

          <button
            className="btn-logout"
            title="Sair"
            onClick={() => navigate("/")}
          >
            {" "}
            <IoLogOutOutline size="25" />{" "}
          </button>
        </div>
      </Header>
      <CompanyForm />
    </>
  );
};

export default CompanyPage;
