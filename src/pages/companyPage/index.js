import Header from "../../components/header";
import CompanyForm from "../../components/companyForm";
import { useNavigate } from "react-router";

const CompanyPage = () => {
  const Navigate = useNavigate();
  return (
    <>
      <Header>
        <div className="menu">
          <button className="menu-item" onClick={() => Navigate("/mapa")}> Home </button>

          <button className="menu-item" onClick={() => Navigate("/produto")}> Produto </button>

          <button className="btn-logout" onClick={() => Navigate("/login")}> Sair </button>
        </div>
      </Header>
      <CompanyForm />
    </>
  );
};

export default CompanyPage;
