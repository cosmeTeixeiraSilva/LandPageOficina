"use client";

import { useState, useRef } from "react";

const IMCCalculadora = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState(null);

  const weightInputRef = useRef(null);

  const calculateIMC = (e) => {
    e.preventDefault();

    if (!weight || !height || weight <= 0 || height <= 0) {
      alert("Por favor, insira valores válidos.");
      return;
    }

    const imc = (weight / (height * height)).toFixed(2);

    let classification = "";

    if (imc < 18.5) {
      classification = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
      classification = "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
      classification = "Sobrepeso";
    } else if (imc >= 30 && imc < 34.9) {
      classification = "Obesidade grau 1";
    } else if (imc >= 35 && imc < 39.9) {
      classification = "Obesidade grau 2";
    } else {
      classification = "Obesidade grau 3";
    }

    setResult({ imc, classification });
  };

  const limparDados = () => {
    setWeight("");
    setHeight("");
    setResult(null);

    // Focar no campo de peso ao limpar os dados
    weightInputRef.current?.focus();
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 shadow-lg rounded-2xl bg-[#121212]">
      <h1 className="text-2xl font-bold text-center mb-4 text-white">Cuide do Veículo e de sua Saúde!</h1>
      <form onSubmit={calculateIMC} className="flex flex-col gap-4 m-4">
        <div>
          <label htmlFor="weight" className="block text-sm font-medium text-white">
            Peso (kg):
          </label>
          <input
            type="number"
            id="weight"
            value={weight}
            ref={weightInputRef}
            onChange={(e) => setWeight(e.target.value)}
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 h-10 text-xl"
            placeholder="Ex: 70"
          />
        </div>
        <div>
          <label htmlFor="height" className="block text-sm font-medium text-white">
            Altura (m):
          </label>
          <input
            type="number"
            step="0.01"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 h-10 text-xl"
            placeholder="Ex: 1.75"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
        >
          Calcular
        </button>
        <button
          type="button"
          onClick={limparDados}
          className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition"
        >
          Limpar Dados
        </button>
      </form>

      {result && (
        <div className="mt-6 text-center text-white">
          <p className="text-xl">
            Seu IMC: <span className="font-bold">{result.imc}</span>
          </p>
          <p className="text-lg text-slate-200">{result.classification}</p>
        </div>
      )}
    </div>
  );
};

export default IMCCalculadora;
