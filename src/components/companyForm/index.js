import { useState, useEffect } from "react";

const CompanyForm = () => {
  const [corporateName, setCorporateName] = useState("");
  const [tradeName, setTradeName] = useState("");
  const [sector, setSector] = useState("");
  const [setores, setSetores] = useState([]);
  const [cnpj, setCnpj] = useState("");
  const [email, setEmail] = useState("");
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState("");
  const [addressNumber, setAddressNumber] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");
  const [addressComp, setAddressComp] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:3333/empresas", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        corporate_name: corporateName,
        trade_name: tradeName,
        sector: sector,
        cnpj: cnpj,
        email: email,
        cep: cep,
        address: address,
        address_number: addressNumber,
        neighborhood: neighborhood,
        city: city,
        uf: uf,
        address_comp: addressComp,
        coordinates: [latitude, longitude],
      }),
    });
  };

  useEffect(() => {
    async function getSector() {
      const sectorResult = await fetch("http://localhost:3333/setores");
      const sectorData = await sectorResult.json();
      setSetores(sectorData);
    }
    getSector();
  }, []);

  //alert("Empresa cadastrada com sucesso.")

  return (
    <div className="content">
     
        <h1 className="page-title">Cadastro de empresa</h1>

      <form className="container-form" onSubmit={handleSubmit}>
        <label>
          Razão Social:
          <input
            type="text"
            name="corporateName"
            value={corporateName}
            onChange={(e) => setCorporateName(e.target.value)}
            placeholder="Super DEVinHouse LTDA."
            required
          />
        </label>
        <label>
          Nome fantasia:
          <input
            type="text"
            name="tradeName"
            value={tradeName}
            onChange={(e) => setTradeName(e.target.value)}
            placeholder="Supermercado DEVinMarket"
            required
          />
        </label>
        <label>
          Setor:
          <select
            name="sector"
            value={sector}
            onChange={(e) => setSector(e.target.value)}
          >
            <option value="" selected disabled>
              Selecione
            </option>
            {setores.map((sector) => (
              <option value={sector}>{sector}</option>
            ))}
          </select>
        </label>
        <label>
          CNPJ:
          <input
            type="text"
            name="cnpj"
            value={cnpj}
            onChange={(e) => setCnpj(e.target.value)}
            placeholder="00.000.000/0000-00"
            required
          />
        </label>
        <label>
          E-mail:
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="company@mail.com"
            required
          />
        </label>
        <hr></hr>
        <label>
          CEP:
          <input
            type="text"
            name="cep"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            placeholder="00.000-000"
            required
          />
        </label>
        <label>
          Endereço:
          <input
            type="text"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Av. Brasil"
            required
          />
        </label>
        <label>
          Número:
          <input
            type="number"
            name="addressNumber"
            value={addressNumber}
            onChange={(e) => setAddressNumber(e.target.value)}
            placeholder="000"
            required
          />
        </label>
        <label>
          Bairro:
          <input
            type="text"
            name="neighborhood"
            value={neighborhood}
            onChange={(e) => setNeighborhood(e.target.value)}
            placeholder="Centro"
            required
          />
        </label>
        <label>
          Cidade:
          <input
            type="text"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Florianópolis"
            required
          />
        </label>
        <label>
          UF:
          <input
            type="text"
            name="uf"
            value={uf}
            onChange={(e) => setUf(e.target.value)}
            placeholder="SC"
            required
          />
        </label>
        <label>
          Complemento:
          <input
            type="text"
            name="addressComp"
            value={addressComp}
            onChange={(e) => setAddressComp(e.target.value)}
            placeholder="Próximo à praça central."
          />
        </label>
        <label>
          Latitude:
          <input
            type="number"
            name="latitude"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
            placeholder="-0.0000"
            required
          />
        </label>
        <label>
          Longitude:
          <input
            type="number"
            name="longitude"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
            placeholder="-00.0000"
            required
          />
        </label>

        <button className="btn-save">Salvar</button>
        <button className="btn-cancel">Cancelar</button>
      </form>

    </div>
  );
};

export default CompanyForm;
