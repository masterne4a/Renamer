import './style.css'
import './globals.css'
import './normalize.css'
import { rename } from './renamer.js'

document.querySelector('#app').innerHTML = `
<form class="mainForm">  
    <label for="address">Введи адрес папки:</label>
    <input class="address" name="address"></input>
    <output role="status" class="avitoAddress" name="avitoAddress" id="avitoAddress" for="address"></output>
</form>
`

const form = document.querySelector('.mainForm');
const addressInput = document.querySelector('.address');
const addressOutput = document.querySelector('.avitoAddress');

addressInput.addEventListener('input', function(){
const value = this.value
addressOutput.textContent = rename(value)
})




console.log(rename('28.датчик-A6-C7-A8-D4Macan-Rear-DCM/1-1.jpg'))