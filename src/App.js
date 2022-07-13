import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import "./styles.css";

function App() {
  const [input, setInput] = useState("");

  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>

      <div className="containerInput">
        <input
          type="text"
          placeholder="Digite seu CEP..."
          value={input}
        ></input>

        <button className="buttonSearch">
          <FiSearch size={25} color="#FFF" />
        </button>
      </div>

      <main className="main">
        <h2>CEP: 88701-519</h2>

        <span>Rua Teste</span>
        <span>Complemento</span>
        <span>Santo Antonio de Pádua</span>
        <span>Tubarão - SC</span>
      </main>
    </div>
  );
}

export default App;
