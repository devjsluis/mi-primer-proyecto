// src/events.js
import { getWeather } from "./api";

export function setupEventListeners() {
  document.addEventListener("DOMContentLoaded", () => {
    const weatherButton = document.getElementById("showWeatherButton");
    const changeTextButton = document.getElementById("changeTextButton");
    const changeBackgroundColorButton = document.getElementById(
      "changeBackgroundColorButton"
    );
    const showTimeButton = document.getElementById("showTimeButton");
    const greeting = document.getElementById("greeting");
    const showMessageButton = document.getElementById("showMessageButton");

    showMessageButton.addEventListener("click", () => {
      alert("¡Este es un nuevo mensaje!");
    });

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

    // Mostrar datos de ejemplo (simulando el clima)
    weatherButton.addEventListener("click", async () => {
      try {
        const weatherData = await getWeather(30); // Usamos el id 1 para obtener un ejemplo
        alert(`El clima actual en Ciudad de México es: ${weatherData.id} °C`);
      } catch (error) {
        alert("No se pudo obtener los datos.");
      }
    });

    // Nueva funcionalidad para el formulario de contacto
    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      // Validación simple
      if (name && email && message) {
        // Simular el envío del formulario
        setTimeout(() => {
          formMessage.textContent = "¡Formulario enviado con éxito!";
          formMessage.style.color = "green";
        }, 500);
      } else {
        formMessage.textContent = "Por favor, completa todos los campos.";
        formMessage.style.color = "red";
      }
    });
  });
}
