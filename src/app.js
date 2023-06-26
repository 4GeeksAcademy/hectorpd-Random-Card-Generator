/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  cardsGenerator(palo, numero);
}; //write your code here
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
  //cardHeader.classList.add("red");
};

let palo = ["♣", "♦", "♥", "♠"];
let numero = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
