import ErrorHandler from "../middleware/error.js";
import { Task } from "../models/task.js";

export const newTask = async (req, res, next) => {
  try {
    const { title, questions } = req.body;
    console.log("this is title", title);
    console.log("this is question", questions);
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

export const getmyTask = async (req, res, next) => {
  try {
    const userid = req.user._id;

    const task = await Task.find();

    const title = task.map((i) => {
      return i.title;
    });
    // const title = task[1].title;
    // console.log("this is title after change",title)
    console.log("this is title after change", title);
    if (task)
      return res.status(200).json({
        success: true,
        title,
      });
  } catch (error) {
    next(error);
  }
};

export const getmyQues = async (req, res, next) => {
  try {
    const { title } = req.params;
    const task = await Task.find({ title: title });

    const ques = task.map((i) => {
      return i.questions;
    });
    // const title = task[1].title;
    console.log("this is title after change", title);
    console.log("this is taskle after change", ques);
    if (task)
      return res.status(200).json({
        success: true,
        ques,
      });
  } catch (error) {
    next(error);
  }
};
export const deleteTask = async (req, res, next) => {
  try {
    const { title } = req.params;

    // Find the task by title
    const task = await Task.findOne({ title: title });

    if (!task) {
      return next(new ErrorHandler("Task not found", 404));
    }
    console.log("delete task", task);
    // Delete the task
    await task.deleteOne();

    // Respond with success message
    res.status(200).json({
      success: true,
      message: "Task deleted",
    });
  } catch (error) {
    // Handle any errors
    next(error);
  }
};
