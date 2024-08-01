// Espera a que el contenido del DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  // Selecciona el botón y el elemento del párrafo por su ID
  const button = document.getElementById("changeTextButton");
  const greeting = document.getElementById("greeting");

  // Añade un event listener al botón para cambiar el texto del párrafo
  button.addEventListener("click", () => {
    greeting.textContent = "¡Texto cambiado con JavaScript!";
  });
});
