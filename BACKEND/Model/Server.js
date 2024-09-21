import express, { json } from "express";
import cors from "cors";
import dbConnection from "../Database/config.js";
import "../Database/config.js";
import listRoutes from "../Routes/routesList.js";

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.pathList = "/list";
    this.connectDB();
    this.middlewares();
    this.Routes();
  }

  async connectDB() {
    await dbConnection();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(json());
    this.app.use(express.static("FRONTEND"));
  }

  Routes() {
    this.app.use(this.pathList, listRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server is running in http://localhost:${this.port}`);
    });
  }
}

export default Server;
