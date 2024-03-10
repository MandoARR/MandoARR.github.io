const url = "https://starwars-databank-server.vercel.app/api/v1/species/"
const single = "https://starwars-databank-server.vercel.app/api/v1/species/name/Wookiee"

function swApi() {
    fetch(url).then(response => response.json())
        .then(data => {
            swList(data)
            //console.log(data)
        })
}

function swList(json) {
    const species = json.data
    species.forEach(specie => {
        const row = document.createElement("tr")

        row.innerHTML = `<td>${specie.name}</td>
                         <td>${specie.description}</td>`;
        document.getElementById("listSW").appendChild(row)           
    });
}


swApi()


/*TIPS:
➔ Puedes crear elementos dinámicos así: document.createElement("tr");
➔ Esta atributo “injecta” algo dentro del elemento .innerHTML
➔ Puedes encontrar elementos por su Id así: document.getElementById("id")
➔ Esta función lo agrega como hijo de un elemento .appendChild(element)
➔ `<td>${element.name}</td><td>${url}${element.name}/</td>`*/