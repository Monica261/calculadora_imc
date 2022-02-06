import react from 'react';
import './App.css'; //importar arquivo de estilo
import { useState } from 'react'; //useState para var que terão seu valor alterado

export default function () {
  const [peso, setPeso] = useState(''); //uso para declarar const
  const [altura, setAltura] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [frase, setFrase] = useState('frase motivacional');

  function calculo() {
    const alt = altura / 100;
    const imc = peso / (alt * alt)
    const nome = prompt('seu nome? ');

    setMensagem(`${nome} seu imc é de ${Math.round(imc)}`);
  }

  function handleClickbtn() {
    fetch('https://api.adviceslip.com/advice')//api conselhos
      .then(response => response.json())
      .then(conselho => {
        setFrase(`${conselho.slip.advice}`);
      })
  }
  handleClickbtn()


  return (
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu IMC</span>
      <br />
      <h3>{frase}</h3>
      <br />

      <div className="area-input">
        <input type="text"
          placeholder="peso em kg"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />

        <input type="text"
          placeholder="altura em cm"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />

        <button onClick={calculo}>Calcular</button>
      </div>

      <h2>{mensagem}</h2>
    </div>
  )
}