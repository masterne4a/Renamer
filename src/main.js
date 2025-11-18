import "./style.css";
import "./globals.css";
import "./normalize.css";
import { rename, events } from "./renamer.js";

document.querySelector("#app").innerHTML = `
<form id="checboxForm">
    <label>
        <span class="label-span">Товары</span>
        <input type="radio" name="checPlase" class="product-radio" checked>
    </label>
    <label>
        <span class="label-span">Услуги</span>
        <input type="radio" name="checPlase" class="service-radio">
    </label>
</form>
<form class="mainForm" id="mainForm">  
    <label for="address" class="input-label">
        <span class="input-title">Имя папки:</span>
        <input class="address" name="address" type="text" placeholder="введите адрес папки">
    </label>
    <output for="address" form="mainForm" name="avitoAddress" role="status" type="text" class="avitoAddress" id="avitoAddress" placeholder="результат"></output>
</form>
`;
document.addEventListener("DOMContentLoaded", function () {
  events();
});

const form = document.querySelector(".mainForm");
const addressInput = document.querySelector(".address");
const addressOutput = document.querySelector(".avitoAddress");

addressInput.addEventListener("input", function () {
  const value = this.value;
  addressOutput.textContent = rename(value);
  if (!value){
    addressOutput.textContent = "";
  }
});

console.log(rename("28.датчик-A6-C7-A8-D4Macan-Rear-DCM/1-1.jpg"));
