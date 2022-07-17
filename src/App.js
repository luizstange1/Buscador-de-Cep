import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import "./styles.css";
import api from './services/api';

function App() {
  const [input, setInput] = useState("");

  const [infoCep, setInfoCep] = useState('');


   async function handleSearch() {
    try {
      const response = await api.get(`${input}/json`)
      setInfoCep(response.data);
      setInput('')
    } 
    catch (error) {
      alert('CEP inexistente ou campo de pesquisa não preenchido!')
      setInput('')
    }
  }

  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>

      <div className="containerInput">
        <input
          type="text"
          placeholder="Digite seu CEP..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#FFF" />
        </button>
      </div>

      {Object.keys(infoCep).length > 0 && (
        <main className="main">
        <h2>CEP: {infoCep.cep}</h2>

        <span>Logradouro: {infoCep.logradouro}</span>
        <span>Complemento: {infoCep.complemento}</span>
        <span>Bairro: {infoCep.bairro}</span>
        <span>Cidade: {infoCep.localidade}</span>
      </main>
      )}
      
    </div>
  );
}

export default App;
