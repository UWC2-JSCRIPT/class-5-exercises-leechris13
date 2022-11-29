// Given the <body> element as variable body,
// access the <main> node and log to the console.
const body = document.querySelector('body');
const main = body.firstElementChild;
console.log(main);

// Given the <ul> element as variable ul,
// access <body>  and log to the console.
const ul = document.querySelector('ul');
const mainUp = ul.parentElement;
const bodyUp = mainUp.parentElement;
console.log(bodyUp)

// Given the <p> element as var p,
// access the 3rd <li>  and log to the console.
const p = document.querySelector('p');
const ul2 = p.previousElementSibling;
const li = ul2.lastElementChild;
console.log(li)
