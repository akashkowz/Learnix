import { NextResponse } from "next/server"
import Course from "@/models/course-model"
import { connect } from "@/dbConnect/dbConnect"   

export async function GET() {
  try {
    await connect()

    const courses = await Course.find({}, { _id: 0, __v: 0 })

    return NextResponse.json(courses)
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to fetch courses" },
      { status: 500 }
    )
  }
}