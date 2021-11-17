import Header from "../../components/header";
import CompanyForm from "../../components/companyForm";
import { useNavigate } from "react-router";
import { RiMapPin2Line } from "react-icons/ri";
import { IoFastFoodOutline, IoLogOutOutline } from "react-icons/io5";

const CompanyPage = () => {
  const Navigate = useNavigate();
  return (
    <>
      <Header>
        <div className="menu">
          <button className="menu-item" title="Mapa" onClick={() => Navigate("/mapa")}>
            {" "}
            <RiMapPin2Line size="25" />{" "}
          </button>

          <button
            className="menu-item"
            title="Produto"
            onClick={() => Navigate("/produtos")}
          >
            {" "}
            <IoFastFoodOutline size="25" />{" "}
          </button>

          <button
            className="btn-logout"
            title="Sair"
            onClick={() => Navigate("/")}
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
