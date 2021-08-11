// ASIDE 

const abrirPanelDeTexto = document.getElementById("botonTexto")

const abrirPanelDeImagen = document.getElementById("botonImagen")

const panelDeImagen = document.getElementById("asideImagen")

const panelDeTexto = document.getElementById("asideTexto")


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
