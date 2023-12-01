const socketio = require("socket.io");

const express = require("express");
const app = express();
const http = require("http");

const server = http.createServer(app);
const PORT = process.env.PORT || 2021;

const io = socketio(server, {
    cors: {
        origin: "*",
        methods: ["GET","POST","OPTİONS"],
    },
})

server.listen(PORT, () => {
   io.on("connection", socket => {
    console.log("HOPPAAAA");
    console.log(socket);
   }) 
});