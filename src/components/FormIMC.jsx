    import React, { useState } from "react";

    const FormIMC = ({ calcularIMC }) => {
    const [altura, setAltura] = useState("");
    const [peso, setPeso] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        calcularIMC(altura, peso);
    };

    return (
        <form onSubmit={handleSubmit}>
        <div>
            <label>Altura (m): </label>
            <input
            type="number"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            step="0.01"
            required
            />
        </div>
        <div>
            <label>Peso (kg): </label>
            <input
            type="number"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            step="0.1"
            required
            />
        </div>
        <button type="submit">Calcular IMC</button>
        </form>
    );
    };

    export default FormIMC;
