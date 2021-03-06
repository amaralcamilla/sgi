import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { mask } from "remask";
import Swal from "sweetalert2";

const CompanyForm = () => {
  const [corporateName, setCorporateName] = useState("");
  const [tradeName, setTradeName] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [sector, setSector] = useState("");
  const [setores, setSetores] = useState([]);
  const [email, setEmail] = useState("");
  const [site, setSite] = useState("");
  const [logoUrl, setLogoUrl] = useState("");
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState("");
  const [addressNumber, setAddressNumber] = useState("");
  const [addressComp, setAddressComp] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      if (!corporateName) {
        alert("Razão social é um campo obrigatório.");
        return;
      } else if (!tradeName) {
        alert("Nome fantasia é um campo obrigatório.");
        return;
      } else if (!cnpj) {
        alert("CNPJ é um campo obrigatório.");
        return;
      } else if (!sector) {
        alert("Selecione um setor.");
        return;
      } else if (!email) {
        alert("E-mail é um campo obrigatório.");
        return;
      } else if (
        !email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
      ) {
        alert("Insira um e-mail válido.");
        return;
      } else if (!cep) {
        alert("CEP é um campo obrigatório.");
        return;
      } else if (!address) {
        alert("Endereço é um campo obrigatório.");
        return;
      } else if (!addressNumber) {
        alert("Número é um campo obrigatório.");
        return;
      } else if (!neighborhood) {
        alert("Bairro é um campo obrigatório.");
        return;
      } else if (!city) {
        alert("Cidade é um campo obrigatório.");
        return;
      } else if (!uf) {
        alert("Estado é um campo obrigatório.");
        return;
      } else if (!latitude) {
        alert("Latitude é um campo obrigatório.");
        return;
      } else if (!longitude) {
        alert("Longitude é um campo obrigatório.");
        return;
      }
      event.target.checkValidity();

      const Swal = require("sweetalert2");
      Swal.fire({
        title: "Empresa cadastrada com sucesso.",
        icon: "success",
        width: "24rem",
        confirmButtonColor: "#0066A0",
      });
      navigate("/mapa");

    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Desculpe o transtorno. Estamos resolvendo o problema.",
        width: "24rem",
      });
    }

    const response = await fetch("https://sgi-server.herokuapp.com/empresas", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        corporate_name: corporateName,
        trade_name: tradeName,
        cnpj: cnpj,
        sector: sector,
        email: email,
        site: site,
        logo_url: logoUrl,
        cep: cep,
        address: address,
        address_number: addressNumber,
        address_comp: addressComp,
        neighborhood: neighborhood,
        city: city,
        uf: uf,
        coordinates: [latitude, longitude],
      }),
    });
    console.log(response);
  };

  const handleCancel = () => {
    Swal.fire({
      title: "Tem certeza que deseja cancelar?",
      text: "As informações preenchidas serão perdidas.",
      icon: "warning",
      width: "24rem",
      showCancelButton: true,
      confirmButtonColor: "#0066A0",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Cadastro cancelado.",
          icon: "error",
          width: "24rem",
          confirmButtonColor: "#0066A0",
        });
        navigate("/mapa");
      }
    });
  };

  const handleGetAddress = async () => {
    try {
      const infoResponse = await fetch(
        `https://viacep.com.br/ws/${cep.replace(/[^0-9]/, "")}/json/`
      );
      const infoResult = await infoResponse.json();

      setAddress(infoResult.logradouro);
      setNeighborhood(infoResult.bairro);
      setCity(infoResult.localidade);
      setUf(infoResult.uf);

    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "CEP inválido.",
        width: "24rem",
      });
    }
  };

  useEffect(() => {
    async function getSector() {
      const sectorResult = await fetch(
        "https://sgi-server.herokuapp.com/setores"
      );
      const sectorData = await sectorResult.json();
      setSetores(sectorData);
    }
    getSector();
  }, []);

  return (
    <form className="main-container" onSubmit={handleSubmit}>
      <h1 className="page-title">Cadastro de empresa</h1>
      <hr />

      <div className="image-container">
        {logoUrl && (
          <img
            className="product-image"
            src={logoUrl}
            alt="company-logo"
            height="80"
          />
        )}
      </div>

      <div className="form-row">
        <div className="item-49">
          <label>
            Razão Social*
            <input
              type="text"
              name="corporateName"
              value={corporateName}
              onChange={(e) => setCorporateName(e.target.value)}
              placeholder="Super DEVinHouse LTDA."
              required
            />
          </label>
        </div>
        <div className="item-49">
          <label>
            Nome fantasia*
            <input
              type="text"
              name="tradeName"
              value={tradeName}
              onChange={(e) => setTradeName(e.target.value)}
              placeholder="Supermercado DEVinMarket"
              required
            />
          </label>
        </div>
      </div>
      <div className="form-row">
        <div className="item-49">
          <label>
            CNPJ*
            <input
              type="text"
              name="cnpj"
              value={cnpj}
              onChange={(e) =>
                setCnpj(mask(e.target.value, ["99.999.999/9999-99"]))
              }
              placeholder="00.000.000/0000-00"
              required
            />
          </label>
        </div>

        <div className="item-49">
          <label>
            Setor*
            <select
              name="sector"
              value={sector}
              onChange={(e) => setSector(e.target.value)}
            >
              <option value="" defaultValue disabled>
                Selecione
              </option>
              {setores.map((sector) => (
                <option value={sector}>{sector}</option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <div className="item-99">
        <label>
          E-mail*
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="company@mail.com"
            required
          />
        </label>
      </div>

      <div className="item-99">
        <label>
          Site da empresa
          <input
            type="url"
            name="site"
            value={site}
            onChange={(e) => setSite(e.target.value)}
            placeholder="http://"
          />
        </label>
      </div>

      <div className="item-99">
        <label>
          URL da logomarca da empresa
          <input
            type="url"
            name="logo"
            value={logoUrl}
            onChange={(e) => setLogoUrl(e.target.value)}
            placeholder="http://"
          />
        </label>
      </div>

      <hr />

      <div className="form-row">
        <div className="item-19">
          <label>
            CEP*
            <input
              type="text"
              name="cep"
              value={cep}
              onChange={(e) => setCep(mask(e.target.value, ["99.999-999"]))}
              onBlur={handleGetAddress}
              required
            />
          </label>
        </div>
        <div className="item-79">
          <label>
            Endereço*
            <input
              type="text"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </label>
        </div>
      </div>

      <div className="form-row">
        <div className="item-9">
          <label>
            Número*
            <input
              type="number"
              name="addressNumber"
              value={addressNumber}
              onChange={(e) => setAddressNumber(e.target.value)}
              required
            />
          </label>
        </div>

        <div className="item-59">
          <label>
            Complemento
            <input
              type="text"
              name="addressComp"
              value={addressComp}
              onChange={(e) => setAddressComp(e.target.value)}
              placeholder="Bloco 3, Sala 7."
            />
          </label>
        </div>

        <div className="item-29">
          <label>
            Bairro*
            <input
              type="text"
              name="neighborhood"
              value={neighborhood}
              onChange={(e) => setNeighborhood(e.target.value)}
              required
            />
          </label>
        </div>
      </div>

      <div className="form-row">
        <div className="item-49">
          <label>
            Cidade*
            <input
              type="text"
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="item-9">
          <label>
            UF*
            <input
              type="text"
              name="uf"
              value={uf}
              onChange={(e) => setUf(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="item-19">
          <label>
            Latitude*
            <input
              type="number"
              name="latitude"
              value={latitude}
              onChange={(e) => setLatitude(e.target.value)}
              placeholder="-0.0000"
              required
            />
          </label>
        </div>
        <div className="item-19">
          <label>
            Longitude*
            <input
              type="number"
              name="longitude"
              value={longitude}
              onChange={(e) => setLongitude(e.target.value)}
              placeholder="-00.0000"
              required
            />
          </label>
        </div>
      </div>
      <div className="btn-group">
        <button className="btn-save" onSubmit={handleSubmit}>
          Salvar
        </button>
        <button className="btn-cancel" type="button" onClick={handleCancel}>
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default CompanyForm;
