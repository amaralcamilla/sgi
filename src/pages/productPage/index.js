import Header from "../../components/header";
import ProductForm from "../../components/productForm";
import { useNavigate } from "react-router";
import { RiMapPin2Line } from "react-icons/ri";
import { BsShopWindow } from "react-icons/bs";
import { IoLogOutOutline } from "react-icons/io5";

const ProductPage = () => {
  const Navigate = useNavigate();
  return (
    <>
      <Header>
        <div className="menu">
          <button className="menu-item" title="Mapa" onClick={() => Navigate("/mapa")}>
            {" "}
            <RiMapPin2Line size="25" />{" "}
          </button>

          <button
            className="menu-item"
            title="Empresa"
            onClick={() => Navigate("/empresa")}
          >
            {" "}
            <BsShopWindow size="25" />{" "}
          </button>

          <button
            className="btn-logout"
            title="Sair"
            onClick={() => Navigate("/login")}
          >
            {" "}
            <IoLogOutOutline size="25" />{" "}
          </button>
        </div>
      </Header>
      <ProductForm />
    </>
  );
};

export default ProductPage;
