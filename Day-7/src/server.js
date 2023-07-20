import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
const app = express();
const server = createServer(app);
const io = new Server(server);
const PORT = 3000;
// Store active users and their corresponding sockets
const activeUsers = {};
// Handle incoming socket connections

app.get("/", (req, res) => {
  res.sendFile("/Users/Kalkeshc/Desktop/Node JS/Day-7/src" + "/index.html");
});
io.on("connection", (socket) => {
  console.log("A user connected");
  // Handle user login and add them to activeUsers
  socket.on("login", (username) => {
    activeUsers[socket.id] = username;
    io.emit("active-users", Object.values(activeUsers));
  });
  // Handle incoming private messages
  socket.on("private-message", (data) => {
    const recipientSocketId = Object.keys(activeUsers).find(
      (socketId) => activeUsers[socketId] === data.recipient
    );
    if (recipientSocketId) {
      // Send the private message to the recipient
      io.to(recipientSocketId).emit("private-message", {
        sender: activeUsers[socket.id],
        message: data.message,
      });
    }
  });
  // Handle disconnection and remove the user from activeUsers
  socket.on("disconnect", () => {
    if (activeUsers[socket.id]) {
      delete activeUsers[socket.id];
      io.emit("active-users", Object.values(activeUsers));
      console.log("A user disconnected");
    }
  });
});
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
