import express from "express";
import {
  deleteTask,
  getmyTask,
  newTask,
} from "../controllers/task.js";
import { isAuthenticate } from "../middleware/auth.js";

const router = express.Router();

router.post("/new", isAuthenticate, newTask);
router.get("/gettask", isAuthenticate, getmyTask);
router.route("/:id").delete(isAuthenticate, deleteTask);

export default router;
