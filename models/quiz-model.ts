import mongoose from "mongoose"

const QuizSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    maxMarks: {
      type: Number,
      required: true,
    },

    pdfUrl: {
      type: String,
      required: true,
    },

    isLive: {
      type: Boolean,
      default: false,
    },

    isMarksLive: {
      type: Boolean,
      default: false,
    },

    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
  },
  { timestamps: true }
)

export default mongoose.models.Quiz ||
  mongoose.model("Quiz", QuizSchema)
