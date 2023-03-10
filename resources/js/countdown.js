var dateNow = new Date(); 
var christmas = new Date("Dec 24, 2021 00:00:00").getTime();
var now = new Date().getTime();
var daysBetween = christmas - now;
  
var days = Math.ceil(daysBetween / (1000 * 60 * 60 * 24));

document.getElementById("daysToChristmas").innerHTML = days + " dager igjen til jul";
  
if (days == 0) {
    document.getElementById("daysToChristmas").innerHTML = "Gledelig jul!";
}   

if (days < 0) {
    document.getElementById("daysToChristmas").innerHTML = "";
}