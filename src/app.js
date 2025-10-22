
// Definimos los palos con su símbolo y color correspondiente
const palos = [
  { simbolo: "♥", color: "red" },
  { simbolo: "♦", color: "red" },
  { simbolo: "♠", color: "black" },
  { simbolo: "♣", color: "black" }
];
// Lista de valores posibles de cartas
const valores = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
// Función para generar una carta aleatoria
function generarCartaAleatoria() {
  // Elegimos un palo y un valor aleatorio
  const palo = palos[Math.floor(Math.random() * palos.length)];
  const valor = valores[Math.floor(Math.random() * valores.length)];
  // Seleccionamos los elementos del DOM
  const topLeft = document.getElementById("top-left");
  const center = document.getElementById("number");
  const bottomRight = document.getElementById("bottom-right");
  // Insertamos el contenido dinámico
  topLeft.textContent = valor + palo.simbolo;
  center.textContent = valor;
  bottomRight.textContent = valor + palo.simbolo;
  // Aplicamos el color correspondiente (rojo o negro)
  topLeft.className = `corner top-left ${palo.color}`;
  bottomRight.className = `corner bottom-right ${palo.color}`;
  center.className = `center ${palo.color}`;
}
// Evento: cada clic en cualquier parte del documento genera una nueva carta
document.addEventListener("click", generarCartaAleatoria);
// Generar una carta automáticamente al cargar la página
window.onload = generarCartaAleatoria;
