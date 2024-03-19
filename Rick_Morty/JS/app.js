const url = "https://rickandmortyapi.com/api/character"
const cardTemplate = document.getElementById("scTemplate").innerHTML

function api_rick_morty() {
    fetch(url).then(res => res.json())
        .then(data => {
            //console.log(data)
            personajes(data)
        })
}

function personajes(json) {
    const personajes = json.results
    document.getElementById("content").innerHTML = ""

    personajes.forEach(personaje => {
        const origin = personaje.origin

        document.getElementById("content").innerHTML += cardTemplate
        .replace("_NAME_PJ_", personaje.name)
        .replace("_URL_IMAGE_", personaje.image)
        .replace("_NAME_SPECIE_", personaje.species)
        .replace("_STATUS_", personaje.status)
        .replace("_ORIGIN_", origin.name)
    });
}

api_rick_morty()
