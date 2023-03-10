let listArray = []; 
let liste = document.getElementById("handleliste"); 

function leggTil() {
    let vare = document.getElementById("vare").value; 

    if (vare == "") {
        alert("Feltet kan ikkje vere tomt");
    }
    else {
        listArray[listArray.length] = vare;
        console.log(listArray);
        var entry = document.createElement('li');
        entry.appendChild(document.createTextNode(vare));
        liste.appendChild(entry);
        document.getElementById("vare").value = "";
    }
}

function removeItems() {
    liste.innerHTML = "";
    listArray.splice(0,listArray.length);
}

function sort(retning) {
    if (retning == "dsc") {
        listArray.sort();
        listArray.reverse();
        liste.innerHTML = "";
        for(let i=0; i<listArray.length; i++) {
            var entry = document.createElement('li');
            entry.appendChild(document.createTextNode(listArray[i]));
            liste.appendChild(entry);
        }
    }
    if (retning == "asc") {
        listArray.sort();
        liste.innerHTML = "";
        for(let i=0; i<listArray.length; i++) {
            var entry = document.createElement('li');
            entry.appendChild(document.createTextNode(listArray[i]));
            liste.appendChild(entry);
        }
    }
}