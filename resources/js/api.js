//////////////////////////////////////////////////////////////////////////////////////////////
///     GET CHUCK NORRIS JOKE                                                              ///
//////////////////////////////////////////////////////////////////////////////////////////////

async function getWeather() {
    let joke;
    let icon;
    const data = await fetch("https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=59.77700630717828&lon=5.487030691207431");
    const json = await data.json();
    joke = json.properties.timeseries[0].data.instant.details.air_temperature;

    if (joke) {
        document.getElementById("joke").innerText = joke;
    }

}

async function getStationInfo() {
    let stationId;
    const data = await fetch("https://gbfs.urbansharing.com/oslobysykkel.no/station_information.json");
    const json = await data.json();

    const data2 = await fetch("https://gbfs.urbansharing.com/oslobysykkel.no/station_status.json");
    const json2 = await data2.json();
    const arrayStations = [];

    for (let i = 0; i < 8; i++) {
        arrayStations[i] = { id: json.data.stations[i].station_id, name: json.data.stations[i].name, bikes_available: json2.data.stations[i].num_bikes_available, places_available: json2.data.stations[i].num_docks_available };
    }

    let lengthArr = json2.data.stations.length;

    for (let i = 0; i < 8; i++) {
        stationId = json2.data.stations[i].station_id;
        for (let j = 0; j < arrayStations.length; j++) {
            if (stationId == arrayStations[j].id) {
                document.getElementById("name" + (j + 1)).innerHTML = arrayStations[j].name;
                document.getElementById("available" + (j + 1)).innerHTML = "Sykler ledig: " + arrayStations[j].bikes_available;
                document.getElementById("docks" + (j + 1)).innerHTML = "Sykler ledig: " + arrayStations[j].places_available;
            }
        }
    }
}



//////////////////////////////////////////////////////////////////////////////////////////////
///     GET RANDOM DOG IMAGE                                                               ///
//////////////////////////////////////////////////////////////////////////////////////////////

async function getJoke() {
    let joke;
    let icon;
    const data = await fetch("https://api.chucknorris.io/jokes/random");
    const json = await data.json();
    joke = json.value;
    icon = json.icon_url;

    if (joke) {
        document.getElementById("joke").innerText = joke;
    }

    if (icon) {
        document.getElementById("icon").src = icon;
    }
}


async function getWeather() {
    let joke;
    let icon;
    const data = await fetch("https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=59.77700630717828&lon=5.487030691207431");
    const json = await data.json();
    joke = json.properties.timeseries[0].data.instant.details.air_temperature;

    if (joke) {
        document.getElementById("joke").innerText = joke;
    }

}

async function getRandomUser() {
    let images = [];
    const data = await fetch("https://randomuser.me/api/");
    const json = await data.json();
    images = json.results;

    if (images) {
        document.getElementById("email").innerHTML = images[0].email;
    }
}

/*
async function heisann() {
    let images = []; 
    const data = await fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/latest_photos?api_key=DEMO_KEY"); 
    const json = await data.json(); 
    images = json.latest_photos; 
    
    if (images) {
        document.getElementById("image").src = images[2].img_src;
    }
}

heisann();
*/
/* 
$.ajax({
    url: 'https://beta2.api.climatiq.io/emission-factors?source=BEIS&year=2021',
    type: 'GET',
    contentType: 'application/json',
    headers: {
       'Authorization': 'Bearer TX13EZXPFBME7MGJKAGFBRY6V8CW'
    },
    data: '{"emission_factor": "electricity-energy_source_grid_mix","parameters":{"energy": 4200,"energy_unit": "kWh"}}',
    success: function (result) {
       console.log(result);
    },
    error: function (error) {
 
    }
 });*/

 async function getAlbums() {
    const data = await fetch("../ts.json");
    const json = await data.json();
    // Vil berre skrive ut det første objektet: 
    console.log(json[0].track_name);
}



// Get Breaking Bad quote
async function getQuote() {
    let joke;
    let author;
    const data = await fetch("https://api.breakingbadquotes.xyz/v1/quotes");
    const json = await data.json();
    joke = json[0].quote;
    author = json[0].author;

    if (joke) {
        document.getElementById("joke").innerText = "''" + joke + "''";
    }

    if (icon) {
        document.getElementById("author").innerText = author;
    }


    if (author == "Hank Schrader") {
        document.getElementById("icon").src = "resources/images/breakingbad/Hank_Schrader_S5B.png";
    }
    if (author == "Gustavo Fring") {
        document.getElementById("icon").src = "resources/images/breakingbad/gustavo.jfif";
    }
    if (author == "Jesse Pinkman") {
        document.getElementById("icon").src = "resources/images/breakingbad/jesse.jfif";
    }
    if (author == "Walter White") {
        document.getElementById("icon").src = "resources/images/breakingbad/walter.png";
    }
    if (author == "Saul Goodman") {
        document.getElementById("icon").src = "resources/images/breakingbad/saul.jfif";
    }
    if (author == "Skyler White") {
        document.getElementById("icon").src = "resources/images/breakingbad/skyler.jfif";
    }
    if (author == "Mike Ehrmantraut") {
        document.getElementById("icon").src = "resources/images/breakingbad/mike.jfif";
    }
    if (author == "The fly") {
        document.getElementById("icon").src = "resources/images/breakingbad/saul.jfif";
    }
    if (author == "Walter White Jr") {
        document.getElementById("icon").src = "resources/images/breakingbad/walterjr.jfif";
    }
}

getQuote();

