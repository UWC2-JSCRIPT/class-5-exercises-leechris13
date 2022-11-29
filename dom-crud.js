// Create a new <a> element containing the text "Buy Now!" 
// with an id of "cta" after the last <p>

const attri = document.createElement("a");
const node = document.createTextNode("Buy Now!");
attri.appendChild(node)

attri.id = 'cta';

const mainEl = document.getElementsByTagName('main')[0]
mainEl.appendChild(attri)

// Access (read) the data-color attribute of the <img>,
// log to the console

const carImag = document.getElementsByTagName('img')[0];
const color = carImag.getAttribute("data-color");
console.log(color)

// Update the third <li> item ("Turbocharged"), 
// set the class name to "highlight"
const list = document.getElementsByTagName("li")
list[2].className = "highlight"

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")

const para = document.getElementsByTagName("p")
let removedEl = mainEl.removeChild(para[0])
