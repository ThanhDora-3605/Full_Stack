import React, { useEffect, useState } from "react";
import io from "socket.io-client";
const socket = io("ws://localhost:3000");

export default function App() {
  const [message, setMessage] = useState("");
  const [joinedRoom, setJoinedRoom] = useState(false);
  useEffect(() => {
    socket.on("connect", () => {
      console.log("Kết nối thành công");
    });
    socket.on("disconnect", () => {
      console.log("Ngắt kết nối");
    });
    socket.on("receive-message", (message) => {
      setMessage(message);
    });
    socket.on("joined-room", () => {
      setJoinedRoom(true);
    });
    socket.on("left-room", () => {
      setJoinedRoom(false);
    });
  }, []);

  const handleSendMessage = () => {
    socket.emit("send-message", message);
  };
  const handleJoinRoom = () => {
    if (joinedRoom) {
      socket.emit("leave-room", "DoraTeam");
    } else {
      socket.emit("join-room", "DoraTeam");
    }
  };
  return (
    <div>
      <h1>{joinedRoom ? "Joined Room" : "Not Joined Room"}</h1>
      <button onClick={handleJoinRoom}>
        {joinedRoom ? "Leave Room" : "Join Room"}
      </button>
      <div>
        <h2>{message}</h2>
        <button onClick={handleSendMessage}>Send Message</button>
      </div>
    </div>
  );
}

//HTTP Polling --> HTTP Long Polling --> WebSocket
//Join Room: Khi user join vào một room, thì server sẽ gửi message đến user đó
