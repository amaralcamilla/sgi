import Header from "../../components/header";
import CompanyMap from "../../components/companyMap";
import { useNavigate } from "react-router";
import { BsShopWindow, BsFillPlusCircleFill } from "react-icons/bs";
import { IoFastFoodOutline, IoLogOutOutline } from "react-icons/io5";

const MapPage = () => {
  const Navigate = useNavigate();
  return (
    <>
      <Header>
        <div className="menu">
          <button
            className="menu-item"
            title="Empresa"
            onClick={() => Navigate("/empresa")}
          >
            <BsShopWindow size="25" />{" "}
          </button>

          <button
            className="menu-item"
            title="Produto"
            onClick={() => Navigate("/produto")}
          >
            <IoFastFoodOutline size="25" />{" "}
          </button>

          <button
            className="btn-logout"
            title="Sair"
            onClick={() => Navigate("/")}
          >
            <IoLogOutOutline size="25" />{" "}
          </button>
        </div>
      </Header>
      <CompanyMap />
      <div className="add-company">
        <button
          className="btn-add-company"
          onClick={() => Navigate("/empresa")}
        >
          <BsFillPlusCircleFill /> Cadastrar empresa
        </button>
      </div>
    </>
  );
};

export default MapPage;
