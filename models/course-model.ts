import mongoose from "mongoose"

const CourseSchema = new mongoose.Schema({
    cid:{
    type: String,
    required: true,
    unique: true,
    },
    faculity: {
    type: String,
    required: true,
  },
    name: {
    type: String,
    required: true,
  },
})

export default mongoose.models.Course ||
  mongoose.model("Course", CourseSchema)