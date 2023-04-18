import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Dinoservice from "./dino-service.js";


function getDino() {
  Dinoservice.getDino()
    .then(function (response) {
      if (typeof response === "string") {
        printElements(response);
        searchDino(response);
      } else {
        printError(response);
      }
    });
}

//UI Logic
function printElements(returnDino) {
  document.querySelector("#paragraph").innerHTML = returnDino;
}
function printError(rejectMessage) {
  document.querySelector("#rejParagraph").innerHTML = `oops no dinos ${rejectMessage}`;

}
function searchDino(returnDino) {
  document.querySelector("#gsc-i-id1").value = returnDino;
}

function handleFormSubmission(event) {
  event.preventDefault();
  getDino();
}

window.addEventListener("load", function () {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});