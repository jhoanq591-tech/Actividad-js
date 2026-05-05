function convertirTemperatura(valor, escala) {
  let celsius;

  if (escala === "C") {
    celsius = valor;
  } else if (escala === "F") {
    celsius = ((valor - 32) * 5) / 9;
  } else if (escala === "K") {
    celsius = valor - 273.15;
  } else {
    console.log("Escala no válida. Usa C, F o K.");
    return;
  }

  const fahrenheit = (celsius * 9) / 5 + 32;
  const kelvin = celsius + 273.15;

  if (kelvin < 0) {
    console.log(
      "Error: temperatura por debajo del cero absoluto. Kelvin no puede ser negativo.",
    );
    return;
  }

  console.log(`°C = ${celsius.toFixed(2)}`);
  console.log(`°F = ${fahrenheit.toFixed(2)}`);
  console.log(`K  = ${kelvin.toFixed(2)}`);
}
