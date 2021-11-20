import Header from "../../components/Header";
import ProductForm from "../../components/ProductForm";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router";
import { RiMapPin2Line } from "react-icons/ri";
import { BsShopWindow } from "react-icons/bs";

const ProductPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header>
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
      </Header>

      <ProductForm />

      <Footer />
    </>
  );
};

export default ProductPage;
