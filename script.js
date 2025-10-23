console.log("Bienbenido a bordiosscript, lugar de magia y patcheras");

window.addEventListener("scroll", function() {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.style.backgroundColor = "#333";
    header.style.transition = "background-color 0.3s";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

const boton = document.getElementById("botonMagico");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", () => {
  mensaje.textContent = "¡Nació homosexual! 🎉❤️‍🩹";
});

let contador = 0;
const contadorElemento = document.getElementById("contador");
const botonSumar = document.getElementById("sumar");

botonSumar.addEventListener("click", () => {
  contador++;
  contadorElemento.textContent = contador;
});