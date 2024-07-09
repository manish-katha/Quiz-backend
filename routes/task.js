import express from "express";
import {
  deleteTask,
  getmyQues,
  getmyTask,
  newTask,
} from "../controllers/task.js";
import { isAuthenticate } from "../middleware/auth.js";

const router = express.Router();

router.post("/new", isAuthenticate, newTask);
router.get("/gettask", isAuthenticate, getmyTask);
router.get("/gettask/:title", isAuthenticate, getmyQues);
router.delete("/gettask/:title", isAuthenticate, deleteTask);

export default router;
