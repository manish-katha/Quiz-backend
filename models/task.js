import mongoose from "mongoose";

const apischema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  questions: [
    {
      question: {
        type: String,
        required: true,
      },
      options: {
        type: [String],
        required: true,
      },
      correctOptionIndex: {
        type: Number,
        required: true,
      },
    },
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UsersApi",
    required: true,
  },
  createDate: {
    type: Date,
    default: Date.now,
  },
});

export const Task = mongoose.model("Task", apischema);
