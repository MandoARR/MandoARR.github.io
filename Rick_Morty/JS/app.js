const url = "https://rickandmortyapi.com/api/character"

function api_rick_morty() {
    fetch(url).then(res => res.json())
        .then(data => {
            //console.log(data)
            personajes(data)
        })
}

function personajes(json) {
    const personajes = json.results

    personajes.forEach(personaje => {
        const row = document.createElement("tr")
        //const origin = personaje.origin
        row.innerHTML = `<td>${personaje.name}</td>
                        <td>${personaje.status}</td>
                        <td>${personaje.species}</td>
                        <td><img src="${personaje.image}"></img></td>
                        <td>${personaje.origin.name}</td>
                        `
        document.getElementById("listRick_Morty").appendChild(row)
    });
}

api_rick_morty()
