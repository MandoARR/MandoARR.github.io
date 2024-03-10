const url = "https://catfact.ninja/facts"
const url_images = "https://api.thecatapi.com/v1/images/search"
const cardTemplate = document.getElementById("scTemplate").innerHTML //machote de las tarjetas que se encuentra oculto desde el archivo index.html

fetch(url).then(response => response.json())
    .then((response) => {
        document.getElementById("content").innerHTML = "" //Para concatenar pero debemos tener algo en el HTML, se crea este este HTML vacio para insertas despues las cartas de michis
        
        let i = 0
        response.data.forEach(fact => {
            fetch(url_images).then(rs => rs.json())
                .then((img) => {
                    i++                    
                    document.getElementById("content").innerHTML += cardTemplate
                        .replace("_FACT_TEXT_", fact.fact)
                        .replace("_FACT_NUM_", i)
                        .replace("_URL_IMAGE_",img[0].url)
                })
        });
    })









/*const url_images = "https://api.thecatapi.com/v1/images/search"
const cardTemplate = document.getElementById("scTemplate").innerHTML

async function cargarMichis() {

    let llamada_michis = await fetch(url)
    let response_michis = await llamada_michis.json()

    response_michis.data.forEach(async function (michi, idx) {

        let llamada_images_michis = await fetch(url_images)
        let response_images_michis = await llamada_images_michis.json()

        document.getElementById("content").innerHTML +=
            cardTemplate.replace("_FACT_TEXT_", michi.fact)
                .replace("_FACT_NUMBER_", (idx++))
                .replace("_URL_IMAGE_", response_images_michis[0].url)
    });


}*/