import { todomodel } from "../models/ToDoSchema.js";

export const createNewToDo = async (req, res) => {
  try {
    const todocontent = req.body.text;
    if (!todocontent) {
      return;
      res.status(400).json({
        success: false,
        message: "No content found to create todo",
      });
    }

    // creating todo in DB
    await todomodel.create({
      text: todocontent,
    });

    res.status(200).json({
      success: true,
      message: "Todo created successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Some error occured while creating todo",
    });
  }
};

export const getAllToDo = async (req, res) => {
  try {
    const alltodo = await todomodel.find().sort({
      createdAt : -1,
    });
    res.status(200).json({
      success: true,
      data: alltodo,
      message: "All todo data fetched successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "error occured",
    });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const todoId = req.params.todoId;
    if (!todoId) {
      return res.status(400).json({
        success: false,
        message: "Todo id is required",
      });
    }

    const deletedTodo = await todomodel.findByIdAndDelete(todoId);

    if (!deletedTodo) {
      return res.status(404).json({
        succes: false,
        message: "no Todo found with the given id",
      });
    }
    res.status(200).json({
      success: true,
      message: "Todo deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: "error occured",
    });
  }
};

export const deletealltodo = async (req, res) => {
  try {
    await todomodel.deleteMany({
      isCompleted: true,
    });
    res.status(200).json({
      success: true,
      message: "All completed todos deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.statu(500).json({
      success: false,
      message: "error occured",
    });
  }
};

export const markAsCompleted = async (req, res) => {
  try {
    const todoId = req.params.todoId;
    if (!todoId) {
      return res.status(400).json({
        success: false,
        message: "Todo id is required",
      });
    }
    await todomodel.findByIdAndUpdate(todoId, {
      isCompleted: true,
    });

    res.status(200).json({
      success: true,
      message: "Todo marked as completed",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "error occured",
    });
  }
};

export const colorcode = async (req, res) => {
  try {
    const todoId = req.body.todoId;
    const newColorCode = req.body.colorcode;

    if (!todoId || !newColorCode) {
      return res.status(404).json({
        success: false,
        message: "Required data not found",
      });
    }

    await todomodel.findByIdAndUpdate(todoId,{
      colorcode: newColorCode
    })

    res.status(200).json({
      success: true,
      message: "Todo marked as completed",
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "error occured",
    });
  }
};