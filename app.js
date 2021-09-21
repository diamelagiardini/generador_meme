// ASIDE 

const abrirPanelDeTexto = document.getElementById("botonTexto")
const abrirPanelDeImagen = document.getElementById("botonImagen")
const panelDeImagen = document.getElementById("asideImagen")
const panelDeTexto = document.getElementById("asideTexto")
const cambiarTemaOscuro = document.getElementById("botonModoOscuro")
const elementoBody = document.getElementById("body")
const elementoHeader = document.getElementById("header")
const botonDeReestablecerFiltros = document.getElementById("botonReestablecer")

//FILTROS

const rangeBrillo = document.getElementById("brightness")
const rangeOpacidad = document.getElementById("opacity")
const rangeConstraste = document.getElementById("contrast")
const rangeDesenfoque = document.getElementById("blur")
const rangeEscalaDeGrises = document.getElementById("grayscale")
const rangeSepia = document.getElementById("sepia")
const rangeHue = document.getElementById("hue-rotation")
const rangeSaturado = document.getElementById("saturation")
const rangeNegativo = document.getElementById("invert")


//URL IMAGEN 

const urlImagen = document.getElementById("textareaImagen")
const imagenDelMeme = document.querySelector(".CajaImagenSinTexto")

//FONDO IMAGEN

const seleccionarColorFondoImagen = document.getElementById("selectorDeColor")
const divFiltroColor = document.getElementById("filtroColor")
// Selector de filtros

const selectorNinguno = document.getElementById("ningunFiltro")
const selectorAclarar = document.getElementById("aclararFiltro")
const selectorOscurecer = document.getElementById("oscurecerFiltro")
const selectorDiferencia = document.getElementById("diferenciaFiltro")
const selectorLuminosidad = document.getElementById("luminosidadFiltro")
const selectorMultiplicar = document.getElementById("multiplicarFiltro")
const selectorTodosLosFiltros = document.getElementById("selectorFiltros")

//TEXTO

const textoSuperiorMeme = document.getElementById("textoSuperior")
const contenidoTextoSuperior = document.getElementById("textareaTextoSuperior")
const textoInferiorMeme = document.getElementById("textoInferior")
const contenidoTextoInferior = document.getElementById("textareaTextoInferior")

const sacarTextoSuperior = document.getElementById("sinTextoSuperior")
const sacarTextoInferior = document.getElementById("sinTextoInferior")

//FUENTES 

const arial = document.getElementById("arial")
const arialBlack = document.getElementById("rialBlack")
const american = document.getElementById("americanTypewriter")
const andale = document.getElementById("andaleMono")
const comic = document.getElementById("comicSansMS")
const helvetica = document.getElementById("helvetica")
const impact = document.getElementById("impact")
const verdana = document.getElementById("verdana")
const times = document.getElementById("timesNewRoman")

//-----------------------------------------------------------------------

//Cambia a panel de texto
const cambiarAPanelTexto = () => {
    panelDeImagen.style.display = "none"
    panelDeTexto.style.display = "block"
}

abrirPanelDeTexto.onclick = cambiarAPanelTexto

//Cambia a panel de imagen
const cambiarAPanelImagen = () => {
    panelDeImagen.style.display = "block"
    panelDeTexto.style.display = "none"
}

abrirPanelDeImagen.onclick = cambiarAPanelImagen

//Cuando tocas boton modo oscuro se cambia de color a colores oscuros
const cambiarAModoOscuro = () => {
    elementoBody.classList.toggle("grisBody")
    elementoHeader.classList.toggle("grisHeader")
    panelDeImagen.classList.toggle("grisPaneles")
    panelDeTexto.classList.toggle("grisPaneles")

}

cambiarTemaOscuro.onclick = cambiarAModoOscuro


// filtro de color de fondo 
// ojo con la sintaxis, separa siempre con espacio:
//  = () => {
seleccionarColorFondoImagen.onclick =()=>{
    // no es necesaria la interpolacion aca, era igual si ponias
    // divFiltroColor.style.backgroundColor = seleccionarColorFondoImagen.value
    divFiltroColor.style.backgroundColor = `${seleccionarColorFondoImagen.value}`
}


//Al tocar boton de reestablecer los valores todos quedan como al principio
const restablecerValoresDeFiltros = () => {
    imagenDelMeme.style.filter="none"
    rangeBrillo.value="1"
    rangeOpacidad.value="1"
    rangeConstraste.value="100"
    rangeDesenfoque.value="0"
    rangeEscalaDeGrises.value="0"
    rangeSepia.value="0"
    rangeHue.value="0"
    rangeSaturado.value="100"
    rangeNegativo.value="0" 
    divFiltroColor.style.backgroundColor = "transparent"
    seleccionarColorFondoImagen.value="0"
}

botonDeReestablecerFiltros.onclick = restablecerValoresDeFiltros

//Link de imagen se pone en el div generador del meme
urlImagen.onchange = () => {
    imagenDelMeme.style.backgroundImage = `url("${urlImagen.value}")`
}


//RANGE FILTROS 
// El problema de resolver la funcionalidad de esta manera es que los filtros se pisan entre si
// Al decir " imagenDelMeme.style.filter = " estoy diciendo "va a ser igual a esto, y reemplazar 
// cualquier valor que tuviera antes" 
// Por eso si establezco un brillo, y despues opacidad, el valor del brillo se pierde
// Una manera de resolverlo es asignar todas las variables a la vez:

// const cambiarFiltros = () => {
//     imagen.style.filter = `
//     brightness(${rangeBrillo.value}) opacity(${rangeOpacidad.value}) 
//     blur(${rangeDesenfoque.value}px) contrast(${rangeConstraste.value}%) 
//     grayscale(${rangeEscalaDeGrises.value}%) hue-rotate(${rangeHue.value}deg) 
//     sepia(${rangeSepia.value}%) saturate(${rangeSaturado.value}%) invert(${rangeNegativo.value})
//     `;
// }

// Y despues, cada funcion onchange llama a la misma: 

// rangeBrillo.onchange =  cambiarFiltros
// rangeOpacidad.onchange = cambiarFiltros
// rangeConstraste.onchange =  cambiarFiltros
// rangeDesenfoque.onchange =  cambiarFiltros
// rangeEscalaDeGrises.onchange = cambiarFiltros
// rangeSepia.onchange =  cambiarFiltros
// rangeHue.onchange = cambiarFiltros
// rangeSaturado.onchange = cambiarFiltros
// rangeNegativo.onchange = cambiarFiltros

rangeBrillo.onchange = () => {
    imagenDelMeme.style.filter = `brightness(${rangeBrillo.value})`
}

rangeOpacidad.onchange = () => {
    imagenDelMeme.style.filter = `opacity(${rangeOpacidad.value})`
}

rangeConstraste.onchange = () => {
    imagenDelMeme.style.filter = `contrast(${rangeConstraste.value}%)`
}

rangeDesenfoque.onchange = () => {
    imagenDelMeme.style.filter = `blur(${rangeDesenfoque.value}px)`
}

rangeEscalaDeGrises.onchange = () => {
    imagenDelMeme.style.filter = `grayscale(${rangeEscalaDeGrises.value}%)`
}

rangeSepia.onchange = () => {
    imagenDelMeme.style.filter = `sepia(${rangeSepia.value}%)`
}

rangeHue.onchange = () => {
    imagenDelMeme.style.filter = `hue-rotate(${rangeHue.value}deg)`
}

rangeSaturado.onchange = () => {
    imagenDelMeme.style.filter = `saturate(${rangeSaturado.value}%)`
}

rangeNegativo.onchange = () => {
    imagenDelMeme.style.filter = `invert(${rangeNegativo.value})`
}

// ASIDE TEXTO 

// Texto superior del meme 

contenidoTextoSuperior.oninput = () => {
    textoSuperiorMeme.textContent = contenidoTextoSuperior.value
}

//Texto inferior del meme
contenidoTextoInferior.oninput = () => {
    textoInferiorMeme.textContent = contenidoTextoInferior.value
}

//Ocultar texto superior 

sacarTextoSuperior.onclick = () => {
    // No necesitas comparar contra true
    // if (sacarTextoSuperior.checked) {
    if (sacarTextoSuperior.checked === true){
        textoSuperiorMeme.style.display="none"
    }
    else{
        textoSuperiorMeme.style.display="flex"
    }
}

// Ocultar texto inferior 
sacarTextoInferior.onclick = () => {
    // mismo que el comentario anterior
    if (sacarTextoInferior.checked === true){
        textoInferiorMeme.style.display="none"
    }
    else{
        textoInferiorMeme.style.display="flex"
    }
}



//Cambiar fuentes 

// NO FUNCIONA 
// Estas seleccionando cada uno de los option y dandoles un onclick. 
// No es asi como funciona el select
// Tenes que seleccionar el select 
// const selectFuentes = document.querySelector(".estiloModoClaroDePaneles")

// y usar la funcion onchange: 
// selectFuentes.onchange = () => {
//     aca tu codigo
// }
arial.onclick = () => {
    textoSuperiorMeme.classList.add("arial")
    textoInferiorMeme.classList.add("arial")
}

arialBlack.onclick = () => {
    textoSuperiorMeme.classList.add("arialBlack")
    textoInferiorMeme.classList.add("arialBlack")
}

american.onclick = () => {
    textoSuperiorMeme.classList.add("american")
    textoInferiorMeme.classList.add("american")
}

andale.onclick = () => {
    textoSuperiorMeme.classList.add("andale")
    textoInferiorMeme.classList.add("andale")
}

comic.onclick = () => {
    textoSuperiorMeme.classList.add("comicSans")
    textoInferiorMeme.classList.add("comicSans")
}

helvetica.onclick = () => {
    textoSuperiorMeme.classList.add("helvetica")
    textoInferiorMeme.classList.add("helvetica")
}

impact.onclick = () => {
    textoSuperiorMeme.classList.add("inpact")
    textoInferiorMeme.classList.add("inpact")
}

verdana.onclick = () => {
    textoSuperiorMeme.classList.add("verdana")
    textoInferiorMeme.classList.add("verdana")
}

times.onclick = () => {
    textoSuperiorMeme.classList.add("timesNew")
    textoInferiorMeme.classList.add("timesNew")
}