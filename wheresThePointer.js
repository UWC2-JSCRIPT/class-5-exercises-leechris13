// Attach one listener that will detect clicks on any of the <td>
// elements.  Should update that element's innerHTML to be the
// x, y coordinates of the mouse at the time of the click

const body = document.body;

const table = document.getElementsByTagName("td")

body.addEventListener('click', (e) => {
    if(e.clientX <= 89 && e.clientY <= 89) {
        table[0].innerHTML = e.clientX + ", " + e.clientY
    } else if (e.clientX <= 168 && e.clientY <= 89) {
        table[1].innerHTML = e.clientX + ", " + e.clientY
    } else if (e.clientX <= 247 && e.clientY <= 89) {
        table[2].innerHTML = e.clientX + ", " + e.clientY
    } else if (e.clientX <= 89 && e.clientY <= 168) {
        table[3].innerHTML = e.clientX + ", " + e.clientY
    } else if (e.clientX <= 168 && e.clientY <= 168) {
        table[4].innerHTML = e.clientX + ", " + e.clientY
    } else if (e.clientX <= 247 && e.clientY <= 168) {
        table[5].innerHTML = e.clientX + ", " + e.clientY
    } else if (e.clientX <= 89 && e.clientY <= 247) {
        table[6].innerHTML = e.clientX + ", " + e.clientY
    } else if (e.clientX <= 168 && e.clientY <= 247) {
        table[7].innerHTML = e.clientX + ", " + e.clientY
    } else if (e.clientX <= 247 && e.clientY <= 247) {
        table[8].innerHTML = e.clientX + ", " + e.clientY
    } else {
        alert("You are clicking wrong area!")
    }
})