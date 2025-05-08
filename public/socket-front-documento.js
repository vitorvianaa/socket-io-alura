import atualizaTextoEditor from "./documento.js"
const socket = io()

function emitirTextoEditor(texto){
    socket.emit("texto-editor", texto)
}

socket.on("texto-editor-clientes", (data) => {
   atualizaTextoEditor(data)
})

socket.on("disconnect", (motivo) => {
    console.log(`O servidor foi desconectado... Motivo: ${motivo}`)
})

export default emitirTextoEditor