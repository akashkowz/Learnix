import { NextResponse } from "next/server"
import { connect } from "@/dbConnect/dbConnect"
import Notes from "@/models/notes-model"

export async function POST(req: Request) {
  try {
    await connect()

    const {
      name,
      description,
      link,
      user,    // User _id
      course,  // Course _id
    } = await req.json()
    
    if (!name || !description || !link || !user || !course) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    const note = await Notes.create({
      name,
      description,
      link,
      user,
      course,
    })

    return NextResponse.json(
      { message: "Notes stored successfully", note },
      { status: 201 }
    )
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
