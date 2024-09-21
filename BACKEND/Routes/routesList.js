import { Router } from "express";
import {
  deleteList,
  getAll,
  postList,
  putList,
} from "../Controllers/controllerList.js";

const listRouter = Router();

listRouter.get("/", getAll);
listRouter.post("/", postList);
listRouter.put("/:id", putList);
listRouter.delete("/:id", deleteList);

export default listRouter;
