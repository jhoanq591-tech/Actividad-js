function turnosBanco(tipoNuevo, turnoNuevo) {
  const clientes = [
    { tipo: "preferencial", turno: 14 },
    { tipo: "regular", turno: 7 },
    { tipo: tipoNuevo, turno: turnoNuevo },
  ];

  clientes.sort((a, b) => {
    // Preferenciales antes que regulares
    if (a.tipo !== b.tipo) {
      return a.tipo === "preferencial" ? -1 : 1;
    }
    // Dentro del mismo grupo, menor turno primero
    return a.turno - b.turno;
  });

  console.log("Orden de atención:");
  for (let i = 0; i < clientes.length; i++) {
    console.log(
      `  ${i + 1}. ${clientes[i].tipo} — turno #${clientes[i].turno}`,
    );
  }
}