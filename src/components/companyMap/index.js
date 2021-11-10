import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./style.css";
import { useState, useEffect } from "react";

const CompanyMap = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    async function getCompany() {
      const companyResult = await fetch("http://localhost:3333/empresas");
      const companyData = await companyResult.json();
      setCompanies(companyData);
    }
    getCompany();
  }, []);

  return (
    <div className="map-container">
      <MapContainer
        center={[-13.2917, -53.7234]}
        zoom={4}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {companies.map((item) => (
          <Marker position={item.coordinates}>
            <Popup>
              <p>Razão Social: {item.corporate_name}</p>
              <p>Nome Fantasia: {item.trade_name}</p>
              <p>CNPJ: {item.cnpj}</p>
              <p>E-mail: {item.email}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default CompanyMap;

// const [sector, setSector] = useState("");
// const [setores, setSetores] = useState([]);

// useEffect(() => {
//   async function getSector() {
//     const sectorResult = await fetch("http://localhost:3333/setores");
//     const sectorData = await sectorResult.json();
//     setSetores(sectorData);
//   }
//   getSector();
// }, []);

{
  /* <label>
          Setor:
          <select
            name="sector"
            value={sector}
            onChange={(e) => setSector(e.target.value)}>
            <option value="" selected disabled>
              Selecione
            </option>
            {setores.map((sector) => (
              <option value={sector}>{sector}</option>
            ))}
          </select> */
}
