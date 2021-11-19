import Header from "../../components/Header";
import ProductForm from "../../components/ProductForm";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router";
import { RiMapPin2Line } from "react-icons/ri";
import { BsShopWindow } from "react-icons/bs";
import { IoLogOutOutline } from "react-icons/io5";

const ProductPage = () => {
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
            <RiMapPin2Line size="25" />
          </button>

          <button
            className="header-item"
            title="Empresa"
            onClick={() => navigate("/empresa")}
          >
            <BsShopWindow size="25" />
          </button>

          <button
            className="btn-logout"
            title="Sair"
            onClick={() => navigate("/")}
          >
            <IoLogOutOutline size="25" />
          </button>
        </div>
      </Header>
      <ProductForm />
      <Footer />
    </>
  );
};

export default ProductPage;
