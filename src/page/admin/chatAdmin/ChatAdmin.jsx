import React, { useState, useEffect } from "react";

const AdminChat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [ws, setWs] = useState(null);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");

    socket.onopen = () => {
      console.log("Connected as admin");
      socket.send(JSON.stringify({ type: "register", role: "admin" }));
    };

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setMessages((prev) => [...prev, message]);
    };

    socket.onclose = () => {
      console.log("Disconnected from server");
    };

    setWs(socket);
    return () => socket.close();
  }, []);

  const sendMessage = () => {
    if (input.trim() && selectedUser) {
      ws.send(
        JSON.stringify({
          type: "chat",
          role: "admin",
          targetId: selectedUser,
          content: input,
        })
      );
      setMessages((prev) => [
        ...prev,
        { from: "me", content: input, to: selectedUser },
      ]);
      setInput("");
    }
  };

  console.log(messages)

  return (
    <div className="bg-white shadow-2xl w-[300px] h-[200px] rounded-t-xl">

      <div className="p-2">
        <label>
          Select User:
          <input
            type="text"
            placeholder="Enter user ID"
            onChange={(e) => setSelectedUser(e.target.value)}
            className="border-2 border-black ms-2"
          />
        </label>
      </div>
      <div className="p-2 overflow-y-scroll h-[120px]">
        {messages.map((msg, idx) => (
          <div key={idx}>
            <strong>{msg.from === "me" ? "You" : `User ${msg.from}`}:</strong>
            {" "}
            {msg.content}
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 w-full">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message"
          className="p-1 border-2 w-[83.4%]"
        />
        <button className="p-1 border-2" onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default AdminChat;
