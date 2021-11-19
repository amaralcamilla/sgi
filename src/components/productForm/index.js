import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const ProductForm = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [measure, setMeasure] = useState("");
  const [suppliers, setSuppliers] = useState("");
  const [fornecedores, setFornecedores] = useState([]);
  const [categories, setCategories] = useState("");
  const [categorias, setCategorias] = useState([]);
  const [productDescription, setProductDescription] = useState("");

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      if (!productName) {
        alert("Nome do produto é um campo obrigatório.");
        return;
      } else if (!price) {
        alert("Preço é um campo obrigatório.");
        return;
      } else if (!suppliers) {
        alert("Selecione um fornecedor.");
        return;
      } else if (!categories) {
        alert("Selecione um grupo/categoria.");
        return;
      }
      event.target.checkValidity();
      const Swal = require("sweetalert2");
      Swal.fire({
        text: "Produto cadastrado com sucesso.",
        icon: "success",
        width: "24rem",
        confirmButtonColor: "#0066A0",
      });
      navigate("/produtos");
    } catch (error) {
      alert("Desculpe o transtorno. Estamos resolvendo o problema.");
    }

    const response = await fetch("https://sgi-server.herokuapp.com/produtos", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        image_url: imageUrl,
        product_name: productName,
        price: price,
        measure: measure,
        suppliers: suppliers,
        categories: categories,
        product_description: productDescription,
      }),
    });
    console.log(response);
  };
  useEffect(() => {
    async function getSuppliers() {
      const suppliersResult = await fetch(
        "https://sgi-server.herokuapp.com/fornecedores"
      );
      const suppliersData = await suppliersResult.json();
      setFornecedores(suppliersData);
    }
    async function getCategories() {
      const categoriesResult = await fetch(
        "https://sgi-server.herokuapp.com/categorias"
      );
      const categoriesData = await categoriesResult.json();
      setCategorias(categoriesData);
    }

    getSuppliers();
    getCategories();
  }, []);

  const navigate = useNavigate();
  return (
    <form className="main-container" onSubmit={handleSubmit}>
      <h1 className="page-title">Cadastro de produto</h1>
      <hr />
      <div className="image-container">
        {imageUrl && (
          <img className="product-image" src={imageUrl} alt="product" />
        )}
      </div>
      <div className="item-99">
        <label>
          URL da imagem
          <input
            type="url"
            name="imageURL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="http://"
          />
        </label>
      </div>

      <div className="form-row">
        <div className="item-59">
          <label>
            Nome do produto*
            <input
              type="text"
              name="productName"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder="Melancia"
              required
            />
          </label>
        </div>

        <div className="item-19">
          <label>
            Preço*
            <input
              type="number"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="R$ 3,79"
              required
            />
          </label>
        </div>

        <div className="item-19">
          <label>
            <input
              type="radio"
              name="measure"
              value="un"
              onChange={(e) => setMeasure(e.target.value)}
            />
            un.
          </label>
          <label>
            <input
              type="radio"
              name="measure"
              value="kg"
              onChange={(e) => setMeasure(e.target.value)}
            />
            kg
          </label>
        </div>
      </div>

      <div className="form-row">
        <div className="item-49">
          <label>
            Fornecedor*
            <select
              name="suppliers"
              value={suppliers}
              onChange={(e) => setSuppliers(e.target.value)}
              required
            >
              <option value="" selected disabled>
                Selecione
              </option>
              {fornecedores.map((suppliers) => (
                <option value={suppliers}>{suppliers}</option>
              ))}
            </select>
          </label>
        </div>
        <div className="item-49">
          <label>
            Grupo/Categoria*
            <select
              name="categories"
              value={categories}
              onChange={(e) => setCategories(e.target.value)}
              required
            >
              <option value="" selected disabled>
                Selecione
              </option>
              {categorias.map((categories) => (
                <option value={categories}>{categories}</option>
              ))}
            </select>
          </label>
        </div>
      </div>
      <div className="item-100">
        <label>
          Descrição do produto
          <textarea
            type="text"
            name="productDescription"
            rows="3"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            placeholder="Rico em vitaminas e minerais."
          />
        </label>
      </div>
      <div className="btn-group">
        <button className="btn-save" onSubmit={handleSubmit}>
          Salvar
        </button>

        <button
          className="btn-cancel"
          onClick={() => {
            Swal.fire({
              title: "Tem certeza que deseja cancelar?",
              text: "As informações já preenchidas serão perdidas.",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
            }).then((result) => {
              if (result.isConfirmed) {
                Swal.fire({
                  title: "Cadastro cancelado.",
                  icon: "success",
                  width: "24rem",
                  confirmButtonColor: "#0066A0",
                });
                navigate("/produtos");
              } else {
                navigate("/novoproduto");
              }
            });
          }}
        >
          Cancelar
        </button>

        {/* <button className="btn-cancel" onClick={() => navigate("/produtos")}>
          Cancelar
        </button>  */}
      </div>
    </form>
  );
};
export default ProductForm;
