import "./App.css";
import CompanyPage from "./pages/companyPage";
import LoginPage from "./pages/loginPage";
import ProductPage from "./pages/productPage";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <LoginPage />
      <CompanyPage />
      <ProductPage />
    </div>
  );
}

export default App;
