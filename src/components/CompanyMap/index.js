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
      <h1 className="page-title">Empresas cadastradas</h1>
     <hr />
      <MapContainer 
      
        center={[-12.747492, -57.470339]}
        zoom={4}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {companies.map((item) => (
          <Marker position={item.coordinates}>
            <Popup >
              <div className="info-map">
                <img className="company-thumb-image" alt="company-logo" src={item.logo_url}/>
                <p style={{margin:2}}>Razão Social: {item.corporate_name}</p>
                <p style={{margin:2}}>Nome Fantasia: {item.trade_name}</p>
                <p style={{margin:2}}>Setor: {item.sector}</p>
                <p style={{margin:2}}>CNPJ: {item.cnpj}</p>
                <p style={{margin:2}}> <strong>{item.city}/{item.uf}</strong></p>
                
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default CompanyMap;
