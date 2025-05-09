import io from "./servidor.js"

const documentos = [
    {
        nome: "JavaScript",
        texto: "texto de javascript..."
    },
    {
        nome: "Node",
        texto: "texto de node..."
    },
    {
        nome: "Socket.io",
        texto: "texto de socket.io..."
    }
]

io.on("connection", (socket) => {
    console.log('Um cliente se conectou... ID:', socket.id)

    socket.on("selecionar_documento", (nomeDocumento, devolverTexto) => {
        const documento = encontrarDocumento(nomeDocumento)
        
        if(documento){
            // recebo uma função callback do front mas ela só vai ser executada aqui no back.
            devolverTexto(documento.texto)
        }
        
        socket.join(nomeDocumento)
    })
    socket.on("texto-editor", (data) => {
        const documento = encontrarDocumento(data.nomeDocumento)
        // salvando o novo texto do documento em memória 
        if(documento){
            documento.texto = data.texto
        }
        
        socket.to(data.nomeDocumento).emit("texto-editor-clientes", data.texto)
    })
    socket.on("disconnect", (motivo) => {
        console.log(`Client ID ${socket.id} foi desconectado... Motivo: ${motivo}`)
    })
})


function encontrarDocumento(nome){
    const documento = documentos.find(item => item.nome === nome)
    return documento
}
