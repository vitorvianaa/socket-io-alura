import express from "express"
import url from "url"
import path from "path"
import http from "http"
import { Server } from "socket.io"

const app = express()
const porta = process.env.PORTA || 3000

const caminhoAtual = url.fileURLToPath(import.meta.url)
const caminhoPublic = path.join(caminhoAtual, "../..", "public")

app.use(express.static(caminhoPublic))

const servidorHttp = http.createServer(app)

servidorHttp.listen(porta, () => {
    console.log('servidor rodando na porta :', porta)
})

const io = new Server(servidorHttp)

io.on("connection", () => {
    console.log('Um cliente se conectou...')
})