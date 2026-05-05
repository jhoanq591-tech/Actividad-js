function descuentoEscalonado(monto, cupon) {
  let porcentaje = 0;

  if (monto >= 200) {
    porcentaje = 30;
  } else if (monto >= 100) {
    porcentaje = 20;
  } else if (monto >= 50) {
    porcentaje = 10;
  }

  let precioFinal = monto * (1 - porcentaje / 100);
  let usoCupon = false;

  if (cupon === "EXTRA10") {
    precioFinal = precioFinal * 0.9;
    usoCupon = true;
  }

  console.log(`Precio original:  $${monto.toFixed(2)}`);
  console.log(`Descuento base:   ${porcentaje}%`);
  console.log(
    `Cupón usado:      ${usoCupon ? "EXTRA10 (−10% adicional)" : "Ninguno"}`,
  );
  console.log(`Precio final:     $${precioFinal.toFixed(2)}`);
}
