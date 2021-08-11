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


const cambiarAPanelTexto = () => {
    panelDeImagen.style.display = "none"
    panelDeTexto.style.display = "block"
}

abrirPanelDeTexto.onclick = cambiarAPanelTexto

const cambiarAPanelImagen = () => {
    panelDeImagen.style.display = "block"
    panelDeTexto.style.display = "none"
}

abrirPanelDeImagen.onclick = cambiarAPanelImagen

const cambiarAModoOscuro = () => {
    elementoBody.classList.toggle("grisBody")
    elementoHeader.classList.toggle("grisHeader")
    panelDeImagen.classList.toggle("grisPaneles")
    panelDeTexto.classList.toggle("grisPaneles")

}

cambiarTemaOscuro.onclick = cambiarAModoOscuro


const restablecerValoresDeFiltros = () => {
    rangeBrillo.value="1"
    rangeOpacidad.value="1"
    rangeConstraste.value="100"
    rangeDesenfoque.value="0"
    rangeEscalaDeGrises.value="0"
    rangeSepia.value="0"
    rangeHue.value="0"
    rangeSaturado.value="100"
    rangeNegativo.value="0"
}

botonDeReestablecerFiltros.onclick = restablecerValoresDeFiltros
