// ASIDE 

const abrirPanelDeTexto = document.getElementById("botonTexto")

const abrirPanelDeImagen = document.getElementById("botonImagen")

const panelDeImagen = document.getElementById("asideImagen")

const panelDeTexto = document.getElementById("asideTexto")

const cambiarTemaOscuro = document.getElementById("botonModoOscuro")

const elementoBody = document.getElementById("body")

const elementoHeader = document.getElementById("header")





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
