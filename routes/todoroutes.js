// create a todo
import express from "express";
import {
  colorcode,
  createNewToDo,
  deletealltodo,
  deleteTodo,
  getAllToDo,
  markAsCompleted,
} from "../controllers/todocontrollers.js";

const router = express.Router();
router.post("/create-todo", createNewToDo);
router.get("/all-todo", getAllToDo);
router.delete("/delete/:todoId", deleteTodo);
router.delete("/delete-completed", deletealltodo);
router.put("/markAsCompleted/:todoId", markAsCompleted);
router.put("/changecolorcode", colorcode);

export default router;
