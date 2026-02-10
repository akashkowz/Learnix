import mongoose from "mongoose"

const NotesSchema = new mongoose.Schema(
  {
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

    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    link: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

export default mongoose.models.Notes ||
  mongoose.model("Notes", NotesSchema)
