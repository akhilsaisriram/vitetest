
// import { io } from 'socket.io-client';

// const socket = {
//   socket: null,

//   connect: (roomName) => {
//     socket.socket = io(`ws://localhost:8000/ws/chat/${roomName}/`);
//   },

//   disconnect: () => {
//     if (socket.socket) {
//       socket.socket.disconnect();
//     }
//   },

//   onMessage: (callback) => {
//     if (socket.socket) {
//       socket.socket.on('chat_message', (data) => {
//         callback(data.message);
//       });
//     }
//   },

//   sendMessage: (message) => {
//     if (socket.socket) {
//       socket.socket.emit('send_message', { message });
//     }
//   },
// };

// export default socket;


import React, { useState, useEffect } from 'react';
import './App.css';
const App = () => {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  useEffect(() => {
    const newSocket = new WebSocket('ws://localhost:8000/ws/test/');
    
    newSocket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, message]);
    };
    setSocket(newSocket);
    return () => {
      newSocket.close();
    };
  }, []);
  const addMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };
  const sendMessage = () => {
    if (inputMessage.trim() === '') return;
    const message = {
      message: inputMessage,
      username:"akhil",
      room:"ak",
    };
    addMessage(message);
    setInputMessage('');
    if (socket) {
      socket.send(JSON.stringify(message));
    }
  };
  return (
    <div className="chat-container">
      <div className="chat">
        {messages.map((message, index) => (
          <div key={index} className="message">
            {/* <span className="timestamp">{message.timestamp}</span> */}
            {message.message}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Type your message..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};
export default App;
