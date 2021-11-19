import { useNavigate } from "react-router";

const FastMenu = () => {
  const navigate = useNavigate();
  return (
    
      <div className="fast-menu">
          <h1>Menu rápido</h1>
      
        <button
          className="btn-menu"
          title="Empresa"
          onClick={() => navigate("/produtos")}>
          Ver lista de produtos
        </button>

        <button
          className="btn-menu"
          title="Produto"
          onClick={() => navigate("/novoproduto")}>
          Cadastrar novo produto
        </button>

        <button
          className="btn-menu"
          title="Produto"
          onClick={() => navigate("/empresa")}>
          Cadastrar nova empresa
        </button>
      </div>
  );
};
export default FastMenu;
