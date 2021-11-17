import LoginPage from "./pages/loginPage";
import MapPage from "./pages/mapPage";
import CompanyPage from "./pages/companyPage";
import ProductListPage from "./pages/productListPage";
import ProductPage from "./pages/productPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/mapa" element={<MapPage />} />
        <Route path="/empresa" element={<CompanyPage />} />
        <Route path="/produtos" element={<ProductListPage />} />
        <Route path="/novoproduto" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
