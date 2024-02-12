// Server.ts
import * as dotenv from "dotenv";
import express, { type Application } from "express";
import http from "http";
class App {
  private readonly app: Application;
  private readonly server: http.Server;
  constructor() {
    dotenv.config();
    this.app = express();
    this.server = http.createServer(this.app);
    this.initializeMiddleware();
    this.startServer();
  }
  private initializeMiddleware(): void {
    this.app.use(express.json());
  }
  private startServer(): void {
    const port = Number(process.env.PORT) || 8000;
    this.server.listen(port, () => {
      console.log(`Server Runnung on: http://localhost:${port}/ `);
    });
  }
}
const server = new App();
