// When a user clicks the + element, the count should increase by 1 on screen.
// When a user clicks the – element, the count should decrease by 1 on screen.

let plugButt = document.createElement("button");

plugButt.id = "plus";

plugButt.innerHTML = "+";

document.body.appendChild(plugButt);

let spanCount = document.createElement("span");

spanCount.id = "counter";

document.body.appendChild(spanCount);

let counter = 0;

spanCount.innerHTML = counter;

plugButt.addEventListener('click', () => {
    counter++;
    spanCount.innerHTML = counter;
}) 

let minusButt = document.createElement("button");

minusButt.id = "minus";

minusButt.innerHTML = "-";

document.body.appendChild(minusButt);

minusButt.addEventListener('click', () => { 
    counter--; 
    spanCount.innerHTML = counter;
})

