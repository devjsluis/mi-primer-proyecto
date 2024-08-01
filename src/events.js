// src/events.js

export function setupEventListeners() {
  document.addEventListener("DOMContentLoaded", () => {
    const changeTextButton = document.getElementById("changeTextButton");
    const changeBackgroundColorButton = document.getElementById(
      "changeBackgroundColorButton"
    );
    const showTimeButton = document.getElementById("showTimeButton");
    const greeting = document.getElementById("greeting");

    // Cambiar el texto
    changeTextButton.addEventListener("click", () => {
      greeting.textContent = "¡Texto cambiado con JavaScript!";
    });

    // Cambiar el color de fondo
    changeBackgroundColorButton.addEventListener("click", () => {
      document.body.style.backgroundColor = `rgb(${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )})`;
    });

    // Mostrar la hora actual
    showTimeButton.addEventListener("click", () => {
      alert(`La hora actual es: ${new Date().toLocaleTimeString()}`);
    });

    // Mostrar un mensaje al hacer clic en un elemento de la lista
    const listItems = document.querySelectorAll("ul li");
    listItems.forEach((item) => {
      item.addEventListener("click", () => {
        alert(`¡Has clickeado en: ${item.textContent}!`);
      });
    });
  });
}
