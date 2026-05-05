function generarEAN8(codigo) {
  if (codigo.length !== 7) {
    console.log("Error: el código debe tener exactamente 7 caracteres.");
    return;
  }

  for (let i = 0; i < 7; i++) {
    const c = codigo.charCodeAt(i);
    if (c < 48 || c > 57) {
      console.log(`Error: posición ${i + 1} no es un dígito válido.`);
      return;
    }
  }

  let suma = 0;
  for (let i = 0; i < 7; i++) {
    const digito = parseInt(codigo.charAt(i));
    // i es 0-indexado: posición impar del enunciado = índice par (0,2,4,6)
    if (i % 2 === 0) {
      suma += digito * 3; // posiciones 1, 3, 5, 7
    } else {
      suma += digito * 1; // posiciones 2, 4, 6
    }
  }

  const digitoVerificador = (10 - (suma % 10)) % 10;
  const ean8 = codigo + digitoVerificador;

  console.log(`Suma ponderada:      ${suma}`);
  console.log(`Dígito verificador:  ${digitoVerificador}`);
  console.log(`Código EAN-8 completo: ${ean8}`);
}
