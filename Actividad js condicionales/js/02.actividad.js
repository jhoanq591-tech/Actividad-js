function validarContrasena(pass) {
  // Regla 1: exactamente 8 caracteres
  if (pass.length !== 8)
    console.log("Error: debe tener exactamente 8 caracteres.");

  // Regla 2: empieza con mayúscula
  if (pass.charAt(0) < "A" || pass.charAt(0) > "Z")
    console.log("Error: debe comenzar con una letra mayúscula.");

  // Regla 3: termina con número
  const ultimo = pass.charAt(pass.length - 1);
  if (ultimo < "0" || ultimo > "9")
    console.log("Error: debe terminar con un número.");

  // Regla 4: sin espacios
  if (pass.includes(" ")) console.log("Error: no puede contener espacios.");

  if (
    pass.length === 8 &&
    pass.charAt(0) >= "A" &&
    pass.charAt(0) <= "Z" &&
    ultimo >= "0" &&
    ultimo <= "9" &&
    !pass.includes(" ")
  )
    console.log("¡Contraseña válida!");
}
