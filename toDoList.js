const body = document.body;
body.addEventListener('click', (e) => {
  e.preventDefault()
  let eveName = e.target;
  
  let span1 = document.getElementsByTagName("span")
  
  // If an li element is clicked, toggle the class "done" on the <li>
  if(eveName.nodeName === "SPAN") {
    if(eveName.parentElement.className === "done") {
      eveName.parentElement.className = "";
    } else {
      eveName.parentElement.className = "done"
    }
  // If a delete link is clicked, delete the li element / remove from the DOM
  } else if (eveName.className === "delete") {
    eveName.parentElement.remove();
  } else if (eveName.className === "add-item") {
    addListItem(e);
    // const text = "hello"

    // const newLi = document.createElement("li")
     
    // const newSpan = document.createElement("span")
    // newSpan.innerHTML = text;
    
    // const newAtt = document.createElement("a")
    // newAtt.className = "delete";
    // newAtt.innerHTML = "Delete";
    // newLi.appendChild(newSpan)
    // newLi.appendChild(newAtt)

    // const ul = document.getElementsByTagName("ul")[0]
    // ul.appendChild(newLi)
    //console.log(span1)
  }
  e.stopPropagation()
})









// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)


const addListItem = function(e) {
  e.preventDefault(); 
  const input = document.getElementsByTagName('input')[0];
  const text = input.value; // use this text to create a new <li>

    const newLi = document.createElement("li")
     
    const newSpan = document.createElement("span")
    newSpan.innerHTML = text;
    
    const newAtt = document.createElement("a")
    newAtt.className = "delete";
    newAtt.innerHTML = "Delete";
    newLi.appendChild(newSpan)
    newLi.appendChild(newAtt)

    const ul = document.getElementsByTagName("ul")[0]
    ul.appendChild(newLi)
    
  // Finish function here
};
