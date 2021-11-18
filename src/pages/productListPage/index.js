import Header from "../../components/header";
import ProductItem from "../../components/productItem";
import { useNavigate } from "react-router";
import { RiMapPin2Line } from "react-icons/ri";
import { BsShopWindow, BsFillPlusCircleFill } from "react-icons/bs";
import { IoLogOutOutline } from "react-icons/io5";

const ProductListPage = () => {
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
            <RiMapPin2Line size="25" />{" "}
          </button>

          <button
            className="header-item"
            title="Empresa"
            onClick={() => navigate("/empresa")}
          >
            <BsShopWindow size="25" />{" "}
          </button>

          <button
            className="btn-logout"
            title="Sair"
            onClick={() => navigate("/")}
          >
            <IoLogOutOutline size="25" />{" "}
          </button>
        </div>
      </Header>

      <div className="add-item">
        <button
          className="btn-add-item"
          onClick={() => navigate("/novoproduto")}
        >
          <BsFillPlusCircleFill /> Cadastrar produto
        </button>
      </div>

      <ProductItem />
    </>
  );
};

export default ProductListPage;
