const today = new Date();
const year = today.getFullYear();
console.log(year); 
document.getElementById("year").innerText = year; 

function myFunction() {
var x = document.getElementById("myTopnav");
if (x.className === "links") {
x.className += " responsive";
} else {
x.className = "links";
}
}
