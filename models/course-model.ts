import mongoose from "mongoose"

const CourseSchema = new mongoose.Schema({
  cid: {
    type: String,
    required: true,
    unique: true,
  },

  name: {
    type: String,
    required: true,
  },

  faculty: {
    type: String,
    required: true,
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
})

export default mongoose.models.Course ||
  mongoose.model("Course", CourseSchema)
