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
    <div className="content">
      <form className="container-form" onSubmit={handleSubmit}>
        <h1 className="page-title">Cadastro de produto</h1>
        <div className="form-group">
          <label>
            URL da imagem
            <input
              type="text"
              name="imageURL"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="http://"
            />
          </label>
        </div>

        <div className="form-row">
          <div className="form-group size2">
            <label>
              Nome do produto
              <input
                type="text"
                name="productName"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                placeholder="Melancia"
              />
            </label>
          </div>

          <div className="form-group size3">
            <label>
              Preço unitário
              <input
                type="number"
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="21,99"
              />
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>
            Descrição do produto
            <textarea
              type="text"
              name="productDescription"
              rows="6"
              cols="60"
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
              placeholder="Rico em vitaminas e minerais."
            />
          </label>
        </div>

        <div className="form-row">
          <div className="form-group size2">
            <label>
              Fornecedor do produto
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
          </div>
          <div className="form-group size2">
            <label>
              Grupo/Categoria
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
          </div>
        </div>
        <button className="btn-save">Salvar</button>
        <button className="btn-cancel">Cancelar</button>
      </form>
    </div>
  );
};
export default ProductForm;
