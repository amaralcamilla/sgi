import Header from "./components/header";
import LoginPage from "./pages/loginPage";
import MapPage from "./pages/mapPage";
import CompanyPage from "./pages/companyPage";
import ProductPage from "./pages/productPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const Router = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/mapa" element={<MapPage />} />
        <Route path="/empresa" element={<CompanyPage />} />
        <Route path="/produto" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
