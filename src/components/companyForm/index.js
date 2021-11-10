import "./style.css";

const CompanyForm = () => {
  
  return (
    <>
      <header>
        <h1 className="title-page">Cadastro de empresa</h1>
      </header>

      <form className="container-form" onSubmit={handleSubmit}>
        <label>
          Razão Social:
          <input
            type="text"
            name="corporateName"
            placeholder="Super DEVinHouse LTDA."
            required
          />
        </label>
        <label>
          Nome fantasia:
          <input
            type="text"
            name="tradeName"
            placeholder="Supermercado DEVinMarket"
            required
          />
        </label>

        <label>
            Setor:
            <select
              name="sector"
            >
              <option value="" selected disabled>Selecione</option>
            </select>
          </label>

        <label>
          CNPJ:
          <input
            type="text"
            name="cnpj"
            placeholder="00.000.000/0000-00"
            required
          />
        </label>
        <label>
          E-mail:
          <input
            type="email"
            name="email"
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
            placeholder="00.000-000"
            required
          />
        </label>
        <label>
          Endereço:
          <input
            type="text"
            name="address"
            placeholder="Av. Brasil"
            required
          />
        </label>
        <label>
          Número:
          <input
            type="number"
            name="addressNumber"
            placeholder="000"
            required
          />
        </label>

        <br />

        <label>
          Bairro:
          <input
            type="text"
            name="neighborhood"
            placeholder="Centro"
            required
          />
        </label>
        <label>
          Cidade:
          <input
            type="text"
            name="city"
            placeholder="Florianópolis"
            required
          />
        </label>
        <label>
          UF:
          <input
            type="text"
            name="uf"
            placeholder="SC"
            required
          />
        </label>
        <label>
          <br />
          Complemento:
          <input
            type="text"
            name="addressComp"
            placeholder="Próximo à praça central."
          />
        </label>

        <br />

        <label>
          Latitude:
          <input
            type="number"
            name="latitude"
            placeholder="-0.0000"
            required
          />
        </label>
        <label>
          Longitude:
          <input
            type="number"
            name="longitude"
            placeholder="-00.0000"
            required
          />
        </label>

        <button className="btn-save">Salvar</button>
        <button className="btn-cancel">Cancelar</button>
      </form>
    </>
  );
};

export default CompanyForm;
