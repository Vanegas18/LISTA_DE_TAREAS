import Server from "./BACKEND/Model/Server.js";
import dotenv from "dotenv";
dotenv.config();

try {
  const server = new Server();
  server.listen();
} catch (error) {
  console.error("Error al iniciar el servidor:", error);
  process.exit(1);
}
