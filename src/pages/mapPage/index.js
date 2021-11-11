import Header from "../../components/header";
import CompanyMap from "../../components/companyMap";
import { useNavigate } from "react-router";

const MapPage = () => {
    const Navigate = useNavigate();
    return (
      <>
      <Header>
      <div className="menu">
        <button className="menu-item" onClick={() => Navigate("/empresa")}> Empresa </button>
       
        <button className="menu-item" onClick={() => Navigate("/produto")}> Produto </button>

        <button className="btn-logout" onClick={() => Navigate("/login")}> Sair </button>
      </div>
      </Header>
        <CompanyMap />
      </>
    );
  };

export default MapPage;
