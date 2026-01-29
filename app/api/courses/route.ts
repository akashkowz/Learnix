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
export async function POST(req: Request) {
  try {
    await connect()

    const body = await req.json()
    const { cid, name, faculty } = body

    if (!cid || !name || !faculty) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      )
    }

    const existing = await Course.findOne({ cid })
    if (existing) {
      return NextResponse.json(
        { error: "Course already exists" },
        { status: 409 }
      )
    }

    const course = await Course.create({
      cid,
      name,
      faculty,
    })

    return NextResponse.json(
      { message: "Course added successfully", course },
      { status: 201 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to add course" },
      { status: 500 }
    )
  }
}