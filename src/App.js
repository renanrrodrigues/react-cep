import { useState } from 'react';
import {FiSearch} from 'react-icons/fi';
import './style.css'
import api from "./services/api";

function App() {

    const [input, setInput] = useState('') // useState('') -> valor inicial do input
    const [cep, setCep] = useState({

    }) // useState({}) -> valor inicial do cep é um objeto vazio

    async function handleSearch() { // essa função é assíncrona, pois ela vai fazer uma requisição para uma API
        //alert('Buscando CEP: ' + input)
        if (input === '') {
            alert('Digite um CEP válido')
            return
        }
        try {
            const response = await api.get(`${input}/json`) // response é a resposta da requisição /json é o formato da resposta
            setCep(response.data) // response.data é o objeto que contém os dados do CEP usamos setCep para atualizar o valor do cep
            console.log(response.data)
            setInput('') // limpar o input
        }catch (e) {
            alert('CEP não encontrado')
            setInput('') // limpando o input
        }
    }

  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

        <div className="containerInput">
            <input
                type="text"
                placeholder="Digite seu CEP"
                value={input} // o valor do input é o valor do estado input
                onChange={(e) => setInput(e.target.value)} // quando o valor do input mudar, o valor do estado input também muda
            />
          <button className="buttonSearch" onClick={handleSearch}>
              <FiSearch size={25} color="#FFF" />
          </button>
        </div>

        {Object.keys(cep).length > 0 &&(
            <main className="main">
                <h2>CEP: {cep.cep}</h2> {/*cep.cep -- cep é o objeto que contém os dados do CEP e cep é a chave que contém o valor do CEP*/}

                <span>Rua: {cep.logradouro}</span>
                <span>Bairro: {cep.bairro}</span>
                <span>Cidade: {cep.localidade}</span>
                <span>Estado: {cep.uf}</span>
            </main>
        )}
    </div>
  );
}

export default App;
