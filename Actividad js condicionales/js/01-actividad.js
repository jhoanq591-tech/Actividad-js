const denominaciones = [50, 20, 10, 5, 1];

function calcularBilletes(monto) {
  // Validación del rango
  if (monto < 1 || monto > 999 || !Number.isInteger(monto)) {
    alert("Error: el monto debe ser un número entero entre 1 y 999.");
    return;
  }

  let restante = monto;
  let resultado = [];

  for (const denom of denominaciones) {
    const cantidad = Math.floor(restante / denom);
    if (cantidad > 0) {
      resultado.push(
        `${cantidad} billete${cantidad > 1 ? "s" : ""} de $${denom}`,
      );
      restante -= cantidad * denom;
    }
  }

  console.log(resultado.join(", "));
}