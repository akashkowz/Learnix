import { NextResponse } from "next/server"
import { connect } from "@/dbConnect/dbConnect"
import User from "@/models/user-model"

export async function GET(req: Request) {
  try {
    await connect()

    const { searchParams } = new URL(req.url)
    const username = searchParams.get("username")

    if (!username) {
      return NextResponse.json(
        { error: "username is required" },
        { status: 400 }
      )
    }

    const user = await User.findOne({ username }).select("_id")

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      )
    }

    return NextResponse.json({ _id: user._id })
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch user" },
      { status: 500 }
    )
  }
}
