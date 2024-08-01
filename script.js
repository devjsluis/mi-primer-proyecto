// Espera a que el contenido del DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("changeTextButton");
  const greeting = document.getElementById("greeting");

  button.addEventListener("click", () => {
    greeting.textContent = "¡Texto cambiado con JavaScript!";
  });

  // Nueva funcionalidad: Mostrar un mensaje al hacer clic en un elemento de la lista
  const listItems = document.querySelectorAll("ul li");
  listItems.forEach((item) => {
    item.addEventListener("click", () => {
      alert(`¡Has clickeado en: ${item.textContent}!`);
    });
  });
});
