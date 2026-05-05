function analizarPlaca(placa) {
  if (placa.length !== 6) {
    console.log("Placa inválida — debe tener exactamente 6 caracteres");
    return;
  }

  for (let i = 0; i < 6; i++) {
    const codigo = placa.charCodeAt(i);

    if (i < 3) {
      // Posiciones 1-3: letras mayúsculas (ASCII 65-90)
      if (codigo < 65 || codigo > 90) {
        console.log(
          `Placa inválida — posición ${i + 1} debe ser una letra mayúscula`,
        );
        return;
      }
    } else {
      // Posiciones 4-6: dígitos (ASCII 48-57)
      if (codigo < 48 || codigo > 57) {
        console.log(
          `Placa inválida — posición ${i + 1} debe ser un dígito del 0 al 9`,
        );
        return;
      }
    }
  }

  console.log("Placa válida");
}