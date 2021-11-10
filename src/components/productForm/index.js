import "./style.css";
import { useEffect, useState } from "react";

const ProductForm = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [suppliers, setSuppliers] = useState("");
  const [fornecedores, setFornecedores] = useState([]);
  const [categories, setCategories] = useState("");
  const [categorias, setCategorias] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    event.target.checkValidity();

    const response = await fetch("http://localhost:3333/produtos", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        image_url: imageUrl,
        product_name: productName,
        price: price,
        product_description: productDescription,
        suppliers: suppliers,
        categories: categories,
      }),
    });
  };
  useEffect(() => {
    async function getSuppliers() {
      const suppliersResult = await fetch("http://localhost:3333/fornecedores");
      const suppliersData = await suppliersResult.json();
      setFornecedores(suppliersData);
    }
      async function getCategories() {
      const categoriesResult = await fetch("http://localhost:3333/categorias");
      const categoriesData = await categoriesResult.json();
      setCategorias(categoriesData);
    }

    getSuppliers();
    getCategories();
  }, []);

  //alert("Produto cadastrado com sucesso.")

  return (
    <>
      <header>
        <h1 className="title-page">Cadastro de produto</h1>
      </header>

      <form className="container-form" onSubmit={handleSubmit}>
        <label>
          URL da imagem:
          <input
            type="text"
            name="imageURL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="http://"
          />
        </label>
        <label>
          Nome do produto:
          <input
            type="text"
            name="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Melancia"
          />
        </label>
        <label>
          Preço unitário:
          <input
            type="number"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="21,99"
          />
        </label>
        <label>
          Descrição do produto:
          <input
            type="textarea"
            name="productDescription"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            placeholder="Rico em vitaminas e minerais."
          />
        </label>

        <hr></hr>

        <label>
          Fornecedor do produto:
          <select
            name="suppliers"
            value={suppliers}
            onChange={(e) => setSuppliers(e.target.value)}
          >
            <option value="" selected disabled>
              Selecione
            </option>
            {fornecedores.map((suppliers) => (
              <option value={suppliers}>{suppliers}</option>
            ))}
          </select>
        </label>

        <label>
          Grupo/Categoria:
          <select
            name="categories"
            value={categories}
            onChange={(e) => setCategories(e.target.value)}
          >
            <option value="" selected disabled>
              Selecione
            </option>
            {categorias.map((categories) => (
              <option value={categories}>{categories}</option>
            ))}
          </select>
        </label>

        <button className="btn-save">Salvar</button>
        <button className="btn-cancel">Cancelar</button>
      </form>
    </>
  );
};
export default ProductForm;
