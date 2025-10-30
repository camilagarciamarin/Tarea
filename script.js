// Animar el contador del desafío fitness
let progreso = 0;
const contador = document.querySelector("#desafio-fitness p strong");

function aumentarProgreso() {
  if (progreso < 72) {
    progreso++;
    contador.textContent = progreso;
    setTimeout(aumentarProgreso, 40);
  }
}
aumentarProgreso();
