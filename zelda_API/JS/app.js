const url = "https://botw-compendium.herokuapp.com/api/v3/compendium/category/monsters"
const cardTemplate = document.getElementById("scTemplate").innerHTML

function zeldaApi() {
    fetch(url).then(response => response.json())
        .then(data => {
            //console.log(data)
            zeldaMonsters(data)
        })
}

function zeldaMonsters(json) {
    const array = json.data
    document.getElementById("content").innerHTML = ""

    array.forEach(item => {
        document.getElementById("content").innerHTML += cardTemplate
        .replace("_NAME_MONSTER_", item.name)
        .replace("_URL_IMAGE_", item.image)
        .replace("_DESCRIPCION_", item.description)
    });


}

zeldaApi()

