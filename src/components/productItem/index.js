import { useEffect, useState } from "react";

const ProductItem = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const productsResult = await fetch(
        "https://sgi-server.herokuapp.com/produtos"
      );
      const productsData = await productsResult.json();
      setProdutos(productsData);
    }
    getProducts();
  }, []);

  return (
    <div className="main-container">
      <h1 className="page-title">
        Lista de produtos
      </h1>

      <hr />
      <ul className="product-list">
        {produtos.map((item) => (
          <li className="product-thumb-container">
            <img
              className="product-thumb-image"
              src={item.image_url}
              alt="product"
            />

            <h4>{item.product_name}</h4>
            <p className="product-info" style={{fontSize:16}}>
              R$ {item.price}/{item.measure}
            </p>
            <p className="product-info">
              {item.categories} | <strong>{item.suppliers}</strong>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ProductItem;
