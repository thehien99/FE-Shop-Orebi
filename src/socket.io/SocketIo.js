let ws;

export const connectWebSocket = (url, onMessage) => {
  ws = new WebSocket(url);

  ws.onopen = () => {
    console.log("WebSocket connected");
  };

  ws.onmessage = (event) => {
    const message = JSON.parse(event.data);
    onMessage(message);
  };

  ws.onclose = () => {
    console.log("WebSocket disconnected, retrying...");
  };

  return ws;
};

export const closeWebSocket = () => {
  if (ws) ws.close();
};
