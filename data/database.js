import mongoose from "mongoose";

export const connectDB = () => {
  mongoose.connect(process.env.MONGO_URl, {
      dbName: "quiz",
    })
    .then(() => console.log("backend connect"))
    .catch((e) => console.log("error connecting db"));
};
