import Header from "../../components/Header";
import CompanyForm from "../../components/CompanyForm";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router";
import { RiMapPin2Line } from "react-icons/ri";
import { IoFastFoodOutline } from "react-icons/io5";


const CompanyPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header>
          <button
            className="header-item"
            title="Mapa"
            onClick={() => navigate("/mapa")}
          ><RiMapPin2Line size="25" />
          </button>

          <button
            className="header-item"
            title="Produto"
            onClick={() => navigate("/produtos")}
          ><IoFastFoodOutline size="25" />
          </button>
      </Header>
      <CompanyForm />
      <Footer />
    </>
  );
};

export default CompanyPage;
