const WS_CONNECTION = "ws://localhost:3000";

export class SocketManager {
  public socket: WebSocket | null = null;
  private dataToSend: Record<string, any>;

  constructor(dataToSend: Record<string, any>) {
    this.dataToSend = dataToSend;
    this.socket = new WebSocket(WS_CONNECTION);
    this.socket.onmessage = this.onMessage;
  }

  private onMessage = (message: MessageEvent): void => {
    if (message.data === "sendCounterValue") {
      this.socket?.send(JSON.stringify(this.dataToSend));
    }
  };

  public updateData = (newData: Record<string, any>): void => {
    this.dataToSend = newData;
  };

  public close = () => {
    this.socket?.close();
  };
}
