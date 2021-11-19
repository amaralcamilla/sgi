import MapPage from "./pages/MapPage";
import LoginPage from "./pages/LoginPage";
import CompanyPage from "./pages/CompanyPage";
import ProductListPage from "./pages/ProductListPage";
import ProductPage from "./pages/ProductPage";
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
