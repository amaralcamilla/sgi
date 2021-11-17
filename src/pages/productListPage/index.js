import Header from "../../components/header";
import ProductItem from "../../components/productItem";
import { useNavigate } from "react-router";
import { RiMapPin2Line } from "react-icons/ri";
import { BsShopWindow, BsFillPlusCircleFill } from "react-icons/bs";
import { IoLogOutOutline } from "react-icons/io5";

const ProductListPage = () => {
  const Navigate = useNavigate();
  return (
    <>
      <Header>
        <div className="menu">
          <button
            className="menu-item"
            title="Mapa"
            onClick={() => Navigate("/mapa")}
          >
            <RiMapPin2Line size="25" />{" "}
          </button>

          <button
            className="menu-item"
            title="Empresa"
            onClick={() => Navigate("/empresa")}
          >
            <BsShopWindow size="25" />{" "}
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

      <div className="add-item">
        <button
          className="btn-add-item"
          onClick={() => Navigate("/novoproduto")}
        >
          <BsFillPlusCircleFill /> Cadastrar produto
        </button>
      </div>

      <ProductItem />
    </>
  );
};

export default ProductListPage;
