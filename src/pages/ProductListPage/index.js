import Header from "../../components/Header";
import ProductItem from "../../components/ProductItem";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router";
import { RiMapPin2Line } from "react-icons/ri";
import { BsShopWindow, BsFillPlusCircleFill } from "react-icons/bs";


const ProductListPage = () => {
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

      <div className="add-item">
        <button
          className="btn-add-item"
          onClick={() => navigate("/novoproduto")}
        >
          <BsFillPlusCircleFill /> Cadastrar produto
        </button>
      
      <ProductItem />
      </div>
      <Footer />
    </>
  );
};

export default ProductListPage;
