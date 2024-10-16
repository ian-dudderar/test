import { useEffect, useState } from "react";

const WebSocketComponent = () => {
  const [message, setMessage] = useState();
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    // Establish WebSocket connection
    const ws = new WebSocket("ws://localhost:8080"); // Your WebSocket server URL
    setSocket(ws);

    ws.onopen = () => {
      console.log("WebSocket connection established");
    };

    ws.onmessage = (event) => {
      console.log("Message from server:", event.data);
      setMessage(event.data);
    };

    ws.onclose = () => {
      console.log("WebSocket connection closed");
    };

    // Cleanup the WebSocket connection on component unmount
    return () => {
      ws.close();
    };
  }, []);

  // Send a message to the server
  const sendMessage = () => {
    if (socket) {
      socket.send("Hello from client");
    }
  };

  return (
    <div>
      <p>Message from server: {message}</p>
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
};

export default WebSocketComponent;
