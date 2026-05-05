function semaforo(segundos) {
  const pos = segundos % 60; // posición dentro del ciclo de 60s

  let color, restante;
  if (pos < 30) {
    color = "Verde";
    restante = 30 - pos;
  } else if (pos < 35) {
    color = "Amarillo";
    restante = 35 - pos;
  } else {
    color = "Rojo";
    restante = 60 - pos;
  }

  console.log(`${color} — faltan ${restante} segundos para cambiar`);
}