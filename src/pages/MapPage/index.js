import Header from "../../components/Header";
import FastMenu from "../../components/FastMenu";
import CompanyMap from "../../components/CompanyMap";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router";
import { BsShopWindow } from "react-icons/bs";
import { IoFastFoodOutline } from "react-icons/io5";

const MapPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header>
          <button
            className="header-item"
            title="Empresa"
            onClick={() => navigate("/empresa")}
          >
            <BsShopWindow size="25" />
          </button>

          <button
            className="header-item"
            title="Produto"
            onClick={() => navigate("/produtos")}
          >
            <IoFastFoodOutline size="25" />
          </button>

      </Header>

      <div className="home-container">
        <FastMenu />

        <CompanyMap />
      </div>

      <Footer />
    </>
  );
};

export default MapPage;
