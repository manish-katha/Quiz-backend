import ErrorHandler from "../middleware/error.js";
import { Task } from "../models/task.js";

export const newTask = async (req, res, next) => {
  try {
    const { title, questions } = req.body;

    await Task.create({
      title,
      questions,
      user: req.user._id,
    });
    console.log("working");
    res.status(201).json({
      success: true,
      message: "Quiz created successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const getmyTask = async (req, res) => {
  try {
    const userid = req.user._id;

    const task = await Task.find({ user: userid });

    if (task)
      return res.status(200).json({
        success: true,
        task,
      });
  } catch (error) {
    next(error);
  }
};

export const deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) return next(new ErrorHandler("Task not found", 404));

    await task.deleteOne();

    res.status(200).json({
      success: true,
      messsage: "task deleted",
    });
  } catch (error) {
    next(error);
  }
};
