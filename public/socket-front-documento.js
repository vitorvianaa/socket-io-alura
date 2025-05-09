import atualizaTextoEditor from "./documento.js"
const socket = io()

function selecionarDocumento(nome){
    socket.emit("selecionar_documento", nome, (texto) => {
        atualizaTextoEditor(texto)
    })
}
function emitirTextoEditor(data){
    socket.emit("texto-editor", data)
}

socket.on("texto-editor-clientes", (data) => {
   atualizaTextoEditor(data)
})

socket.on("disconnect", (motivo) => {
    console.log(`O servidor foi desconectado... Motivo: ${motivo}`)
})

export {emitirTextoEditor, selecionarDocumento}