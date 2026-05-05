function diagnosticoPaciente(edad, presionSistolica, imc, esFumador) {
  let puntos = 0;
  const factores = [];

  if (edad > 50) {
    puntos += 2;
    factores.push("Edad mayor a 50 (+2)");
  }
  if (presionSistolica > 140) {
    puntos += 2;
    factores.push("Presión sistólica mayor a 140 (+2)");
  }
  if (imc > 30) {
    puntos += 1;
    factores.push("IMC mayor a 30 (+1)");
  }
  if (esFumador) {
    puntos += 2;
    factores.push("Fumador (+2)");
  }

  let nivelRiesgo;
  if (puntos <= 1) {
    nivelRiesgo = "Bajo";
  } else if (puntos <= 3) {
    nivelRiesgo = "Moderado";
  } else {
    nivelRiesgo = "Alto";
  }

  console.log(`Puntaje total: ${puntos}`);
  if (factores.length > 0) {
    console.log("Factores de riesgo:");
    factores.forEach((f) => console.log(`  - ${f}`));
  } else {
    console.log("Sin factores de riesgo.");
  }
  console.log(`Nivel de riesgo cardiovascular: ${nivelRiesgo}`);
}
