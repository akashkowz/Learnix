import { NextResponse } from "next/server"
import { connect } from "@/dbConnect/dbConnect"
import RecordedLecture from "@/models/lecture-model"
import mongoose from "mongoose"

export async function POST(req: Request) {
  try {
    await connect()

    const { title, description, videoUrl, user, course } = await req.json()

    if (!title || !videoUrl || !user || !course) {
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

    const lecture = await RecordedLecture.create({
      title,
      description,
      videoUrl,
      user,
      course,
    })

    return NextResponse.json(
      { message: "Recorded lecture added", lecture },
      { status: 201 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to add recorded lecture" },
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
        { error: "Valid courseId is required" },
        { status: 400 }
      )
    }

    const lectures = await RecordedLecture.find({ course: courseId })

    return NextResponse.json(lectures)
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch recorded lectures" },
      { status: 500 }
    )
  }
}
