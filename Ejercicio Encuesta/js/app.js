const ID_CONTENEDOR_RESPUESTA = 'scResultados'


function guardarDatos(){

    limpiarRespuesta()

    let vNombre = validaNombre()
    let vCorreo = validaCorreo()
    let vGenero = validaGenero()

    if(vNombre && vCorreo && vGenero){
        reportaExito("Guardado!")
    }
}

function validaNombre(){
    let nombre = obtenerElemento('txtNombre')
    if(nombre.value == ""){
        reportaError("Escribe tu Nombre")
        return false
    }
    return true
}

function validaCorreo(){
    let correo = obtenerElemento('txtCorreo')
    if(correo.value == ""){
        reportaError("Escribe tu Correo")
        return false
    }

    if (!correo.value.includes("@")||!correo.value.includes(".com")) {
        reportaError("Escribe un Correo con el formato @ y .com")
        return false
    }

    return true
}

function validaGenero(){
    let genero = document.querySelector('input[name="rdoGenero"]:checked')

    if (genero == null) {
        reportaError("Selecciona un Genero")
        return false
    }
    return true
}

function limpiarRespuesta(){
    let resultados =obtenerElemento('scResultados')
    resultados.setAttribute("class","")
    resultados.innerText=""
}

function reportaError(mensaje) {
    let resultados = obtenerElemento('scResultados')
    resultados.setAttribute("class", "")
    resultados.classList.add("error")
    resultados.innerText+= mensaje + "\n"
}

function reportaExito(mensaje){
    let resultados = obtenerElemento('scResultados')
    resultados.setAttribute("class", "")
    resultados.classList.add("exito")
    resultados.innerText=mensaje
}

function obtenerElemento(input){
    return document.getElementById(input)
    
}

function actualizaSatisfaccion(){
    let elementoScSatisfaccion = document.getElementById('scSatisfaccion')
    let elementoNmSatisfaccion = obtenerElemento('nmSatisfaccion')
    elementoScSatisfaccion.innerText = elementoNmSatisfaccion.value
   
}
