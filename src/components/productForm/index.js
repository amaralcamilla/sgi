import "./style.css";

const ProductForm = () => {
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
              placeholder="http://"
            />
          </label>
          <label>
            Nome do produto:
            <input
              type="text"
              name="productName"
              placeholder="Melancia"
            />
          </label>
          <label>
            Preço unitário:
            <input
              type="number"
              name="price"
              placeholder="21,99"
            />
          </label>
          <label>
            Descrição do produto:
            <input
              type="textarea"
              name="productDescription"
              placeholder="Rico em vitaminas e minerais."
            />
          </label>

          <hr></hr>

          <label>
            Fornecedor do produto:
            <select
              name="suppliers"
            >
              <option value="" selected disabled>Selecione</option>
            </select>
          </label>

          <label>
            Grupo/Categoria:
            <select
              name="categories"
            >
              <option value="" selected disabled>Selecione</option>
            </select>
          </label>

          <button className="btn-save">Salvar</button>
          <button className="btn-cancel">Cancelar</button>
        </form>
      </>
    );
  
};
export default ProductForm;
