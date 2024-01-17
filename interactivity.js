//This js file is made to interact with the DOM.
import {criticGenerator} from './generator.js'

const btn = document.getElementById('btn_generator');
const paragraph = document.getElementById('generated_text');

btn.onclick = function() {
    paragraph.innerHTML = criticGenerator.stringGenerator()
    paragraph.style.fontSize = '20px'   
}

document.getElementsByTagName('h2')[0].innerHTML = 'Your random review is:'


