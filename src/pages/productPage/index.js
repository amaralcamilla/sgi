import Header from "../../components/header";
import ProductForm from "../../components/productForm";
import { useNavigate } from "react-router";

const ProductPage = () => {
  const Navigate = useNavigate();
  return (
    <>
    <Header>
    <div className="menu">
     <button className="menu-item" onClick={() => Navigate("/mapa")}> Home </button>
       
      <button className="menu-item" onClick={() => Navigate("/empresa")}> Empresa </button>     

      <button className="btn-logout" onClick={() => Navigate("/login")}> Sair </button>
    </div>
      </Header>
      <ProductForm />
    </>
  );
};

export default ProductPage;
