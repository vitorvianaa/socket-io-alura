import io from "./servidor.js"

io.on("connection", (socket) => {
    console.log('Um cliente se conectou... ID:', socket.id)

    socket.on("texto-editor", (data) => {
        socket.broadcast.emit("texto-editor-clientes", data)
    })

    socket.on("disconnect", (motivo) => {
        console.log(`Client ID ${socket.id} foi desconectado... Motivo: ${motivo}`)
    })
})

