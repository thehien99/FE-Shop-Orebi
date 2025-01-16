import React, { useEffect, useState } from 'react'

const InputChat = ({ userId }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [ws, setWs] = useState(null);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080')

    socket.onopen = () => {
      console.log('User connected')
      socket.send(JSON.stringify({ type: 'register', role: 'user', userId }))
    }

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data)
      setMessages((prev) => [...prev, message]);
    }

    socket.onclose = () => {
      console.log('User dissconected')
    }
    setWs(socket);
    return () => socket.close()
  }, [userId])

  const sendMessage = () => {
    if (input.trim()) {
      ws.send(
        JSON.stringify({ type: 'chat', role: 'user', userId, content: input })
      );
      setMessages((prev) => [...prev, { from: 'me', content: input }])
      setInput('')
    }
  };

  return (
    <div>
      <div className='p-3'>
        {messages.map((msg, idx) => (
          <div key={idx}>
            <strong>{msg.from === "me" ? "You" : "Admin"}:</strong>
            {msg.content}
          </div>
        ))}
      </div>
      <div className='absolute bottom-0 w-full'>
        <input
          className='border-2 border-black p-1 w-[83%]'
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button className='border-2 border-black p-1' onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default InputChat