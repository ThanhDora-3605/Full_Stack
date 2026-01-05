import { Server } from "socket.io";

const io = new Server({
  cors: "*",
});

io.on("connection", (socket) => {
  console.log("Kết nối", socket.id);
  socket.on("send-message", (message) => {
    console.log("Nhận message", message);
    io.to("DoraTeam").emit(
      "receive-message",
      "Hello from server" + new Date().toISOString()
    );
  });

  socket.on("join-room", (room) => {
    socket.join(room);
    socket.emit("joined-room", room);
  });
  socket.on("leave-room", (room) => {
    socket.leave(room);
    socket.emit("left-room", room);
  });
  socket.on("disconnect", () => {
    console.log("Ngắt kết nối", socket.id);
  });
});

io.listen(3000);
