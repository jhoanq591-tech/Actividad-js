function marcadorFutbol(golesLocal, golesVisitante) {
  let resultado, puntosLocal, puntosVisitante;

  if (golesLocal > golesVisitante) {
    resultado = "Ganó el equipo local";
    puntosLocal = 3;
    puntosVisitante = 0;
  } else if (golesLocal < golesVisitante) {
    resultado = "Ganó el equipo visitante";
    puntosLocal = 0;
    puntosVisitante = 3;
  } else {
    resultado = "Empate";
    puntosLocal = 1;
    puntosVisitante = 1;
  }

  const diferencia = Math.abs(golesLocal - golesVisitante);

  console.log(`Resultado: ${resultado} (${golesLocal} - ${golesVisitante})`);
  console.log(
    `Puntos local: ${puntosLocal} | Puntos visitante: ${puntosVisitante}`,
  );
  console.log(`Diferencia de goles: ${diferencia}`);
}