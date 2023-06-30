/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // Obtener referencias a los elementos de entrada de texto
  let widthInput = document.getElementById("widthInput");
  let heightInput = document.getElementById("heightInput");

  // Escuchar el evento "input" en los elementos de entrada de texto
  widthInput.addEventListener("input", updateCardSize);
  heightInput.addEventListener("input", updateCardSize);
  cardsGenerator(palo, numero);
};
//write your code here
//Definicion de la funcion a ejecutar
let cardsGenerator = (suit, number) => {
  let suitIndex = Math.floor(Math.random() * suit.length);
  let numberIndex = Math.floor(Math.random() * number.length);

  let cardsuit = suit[suitIndex];
  let cardnumber = number[numberIndex];

  let cardHeader = document.getElementById("cardheader");
  cardHeader.innerHTML = cardsuit;
  let cardBody = document.getElementById("cardbody");
  cardBody.innerHTML = cardnumber;
  let cardFooter = document.getElementById("cardfooter");
  cardFooter.innerHTML = cardsuit;

  //Cambio del color segun el suit
  if (cardsuit === "♦" || cardsuit === "♥") {
    cardHeader.classList.add("text-danger");
    cardFooter.classList.add("text-danger");
    cardBody.classList.add("text-danger");
  } else {
    cardHeader.classList.remove("text-danger");
    cardFooter.classList.remove("text-danger");
    cardBody.classList.remove("text-danger");
  }

  // Temporizador
  setTimeout(() => {
    document.querySelector("#btn").disabled = false;
    cardsGenerator(suit, number);
  }, 5000);

  //llamado del boton
  document.querySelector("#btn").addEventListener("click", () => {
    cardsGenerator(palo, numero);
  });
};
function updateCardSize() {
  // Obtener los valores de ancho y alto ingresados por el usuario
  let width = parseInt(document.getElementById("widthInput").value);
  let height = parseInt(document.getElementById("heightInput").value);

  // Actualizar el tamaño de la carta
  let card = document.getElementById("card");
  card.style.width = width + "px";
  card.style.height = height + "px";
}

let palo = ["♣", "♦", "♥", "♠"];
let numero = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
