import{ selecionarDocumento, emitirTextoEditor } from "./socket-front-documento.js"

const parametros = new URLSearchParams(window.location.search)
const nomeDocumento = parametros.get("nome")

const textoEditor = document.getElementById("editor-texto")
const tituloDocumento = document.getElementById("titulo-documento")

tituloDocumento.textContent = nomeDocumento || "Documento sem Título"

selecionarDocumento(nomeDocumento)

textoEditor.addEventListener("keyup", () => {
    emitirTextoEditor({"texto": textoEditor.value, "nomeDocumento": nomeDocumento})
})

function atualizaTextoEditor(texto){
    textoEditor.value = texto
}

export default atualizaTextoEditor