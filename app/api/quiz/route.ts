import { NextResponse } from "next/server"
import { connect } from "@/dbConnect/dbConnect"
import Quiz from "@/models/quiz-model"
import mongoose from "mongoose"

export async function POST(req: Request) {
  try {
    await connect()

    const { title, maxMarks, pdfUrl, user, course } = await req.json()

    if (!title || !maxMarks || !pdfUrl || !user || !course) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    if (
      !mongoose.Types.ObjectId.isValid(user) ||
      !mongoose.Types.ObjectId.isValid(course)
    ) {
      return NextResponse.json(
        { error: "Invalid user or course ID" },
        { status: 400 }
      )
    }

    const quiz = await Quiz.create({
      title,
      maxMarks,
      pdfUrl,
      user,
      course,
    })

    return NextResponse.json(
      { message: "Quiz uploaded", quiz },
      { status: 201 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to upload quiz" },
      { status: 500 }
    )
  }
}
export async function GET(req: Request) {
  try {
    await connect()

    const { searchParams } = new URL(req.url)
    const courseId = searchParams.get("courseId")?.trim()

    if (!courseId || !mongoose.Types.ObjectId.isValid(courseId)) {
      return NextResponse.json(
        { error: "Valid courseId required" },
        { status: 400 }
      )
    }

    const quizzes = await Quiz.find({ course: courseId })
    return NextResponse.json(quizzes)
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch quizzes" },
      { status: 500 }
    )
  }
}

export async function PATCH(req: Request) {
  try {
    await connect()

    const { quizId, action } = await req.json()

    if (!quizId || !action) {
      return NextResponse.json(
        { error: "quizId and action required" },
        { status: 400 }
      )
    }

    const update =
      action === "LIVE_QUIZ"
        ? { isLive: true }
        : action === "LIVE_MARKS"
        ? { isMarksLive: true }
        : null

    if (!update) {
      return NextResponse.json(
        { error: "Invalid action" },
        { status: 400 }
      )
    }

    await Quiz.findByIdAndUpdate(quizId, update)
    return NextResponse.json({ message: "Quiz updated" })
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update quiz" },
      { status: 500 }
    )
  }
}

