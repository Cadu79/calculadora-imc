import React, { useState } from 'react';
import FormIMC from './components/FormIMC';
import ResultadoIMC from './components/ResultadoIMC';
import './App.css';

const App = () => {
  const [imc, setIMC] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = (altura, peso) => {
    const alturaMetros = parseFloat(altura);
    const pesoKg = parseFloat(peso);
    const imcCalculado = (pesoKg / (alturaMetros * alturaMetros)).toFixed(2);

    setIMC(imcCalculado);
    setClassificacao(getClassificacao(imcCalculado));
  };

  const getClassificacao = (imc) => {
    if (imc < 18.5) {
      return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
      return 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
      return 'Sobrepeso';
    } else if (imc >= 30 && imc < 34.9) {
      return 'Obesidade grau I';
    } else if (imc >= 35 && imc < 39.9) {
      return 'Obesidade grau II';
    } else {
      return 'Obesidade grau III';
    }
  };

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <FormIMC calcularIMC={calcularIMC} />
      {imc && (
        <ResultadoIMC imc={imc} classificacao={classificacao} />
      )}
    </div>
  );
};

export default App;

