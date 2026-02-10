

import { NextResponse } from "next/server"
import Course from "@/models/course-model"
import { connect } from "@/dbConnect/dbConnect"
import mongoose from "mongoose"

export async function GET(req: Request) {
  try {
    await connect()

    const { searchParams } = new URL(req.url)
    const userId = searchParams.get("userId")?.trim()

    if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
      return NextResponse.json(
        { error: "Valid userId is required" },
        { status: 400 }
      )
    }

    const courses = await Course.find({ user: userId })
    return NextResponse.json(courses)
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch courses" },
      { status: 500 }
    )
  }
}


export async function POST(req: Request) {
  try {
    await connect()

    const { cid, name, faculty, user } = await req.json()

    if (!cid || !name || !user) {
      return NextResponse.json(
        { error: "cid, name and user are required" },
        { status: 400 }
      )
    }

    if (!mongoose.Types.ObjectId.isValid(user)) {
      return NextResponse.json(
        { error: "Invalid userId" },
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
      user,
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
