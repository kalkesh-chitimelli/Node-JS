import express from "express";
const app = express();
import { createServer } from "http";
const server = createServer(app);
import { Server } from "socket.io";
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("user name", (name) => {
    console.log("Name: " + name);
    socket.broadcast.emit("user name", msg);
  });
  socket.on("chat message", (msg) => {
    console.log("message: " + msg);
    socket.broadcast.emit("chat message", msg);
  });
});

app.get("/", (req, res) => {
  res.sendFile("/Users/Kalkeshc/Desktop/Node JS/Day-6/src" + "/index.html");
});

server.listen(8080, () => {
  console.log("listening on *:8080");
});
