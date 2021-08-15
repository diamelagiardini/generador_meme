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

seleccionarColorFondoImagen.onclick =()=>{
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
