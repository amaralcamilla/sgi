import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState, useEffect } from "react";

const CompanyMap = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    async function getCompany() {
      const companyResult = await fetch(
        "https://sgi-server.herokuapp.com/empresas"
      );
      const companyData = await companyResult.json();
      setCompanies(companyData);
      console.log(companyResult);
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
              <div className="info-map">
                <p>Razão Social: {item.corporate_name}</p>
                <p>Nome Fantasia: {item.trade_name}</p>
                <p>Setor: {item.sector}</p>
                <p>CNPJ: {item.cnpj}</p>
                <p>{item.city}/{item.uf}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default CompanyMap;
