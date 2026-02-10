"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"

type Course = {
  _id: string
  cid: string
  name: string
  faculty: string
}

export default function UploadNotes() {
  const params = useParams()
  const username = params?.username as string

  const [userId, setUserId] = useState<string>("")
  const [courses, setCourses] = useState<Course[]>([])
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null)
  const [loading, setLoading] = useState(true)

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [file, setFile] = useState<File | null>(null)
  const [success, setSuccess] = useState(false)

  // 1️⃣ Resolve username → userId
  useEffect(() => {
    if (!username) return

    fetch(`/api/users?username=${username}`)
      .then((res) => res.json())
      .then((data) => setUserId(data._id))
  }, [username])

  // 2️⃣ Fetch courses owned by this user
  useEffect(() => {
    if (!userId) return

    fetch(`/api/courses?userId=${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setCourses(data)
        setLoading(false)
      })
  }, [userId])
  useEffect(() => {
  console.log("courses from API:", courses)
}, [courses])

  const generateFakeCloudUrl = (fileName: string) => {
    const ext = fileName.split(".").pop()
    return `https://cloud-storage.app/notes/${crypto.randomUUID()}.${ext}`
  }

  const handleUpload = async () => {
    if (!title || !file || !selectedCourse) return

    const payload = {
      name: title,
      description,
      link: generateFakeCloudUrl(file.name),
      user: userId,
      course: selectedCourse._id,
    }

    await fetch("/api/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })

    setSuccess(true)
    setTitle("")
    setDescription("")
    setFile(null)
    setSelectedCourse(null)
    setTimeout(() => setSuccess(false), 2000)
  }

  const disabled = !title || !file || !selectedCourse

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-8 space-y-8">

        <h1 className="text-3xl font-bold">Upload Notes</h1>

        {success && (
          <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm">
            ✅ Notes uploaded successfully
          </div>
        )}

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Notes title"
          className="w-full border rounded-lg px-4 py-2.5"
        />

        <textarea
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="w-full border rounded-lg px-4 py-2.5 resize-none"
        />

        {loading ? (
          <p className="text-sm text-gray-400">Loading courses...</p>
        ) : (
          <div className="flex flex-wrap gap-2">
            {courses.map((course) => (
              <button
                key={course._id}
                onClick={() => setSelectedCourse(course)}
                className={`px-4 py-2 rounded-full border text-sm ${
                  selectedCourse?._id === course._id
                    ? "bg-black text-white"
                    : "bg-white text-gray-600"
                }`}
              >
                {course.name}
              </button>
            ))}
          </div>
        )}

        <label className="flex items-center justify-center h-32 border-2 border-dashed rounded-xl cursor-pointer">
          <span className="text-sm text-gray-500">
            {file ? file.name : "Upload PDF / PPT / DOC"}
          </span>
          <input
            type="file"
            hidden
            onChange={(e) => setFile(e.target.files?.[0] || null)}
          />
        </label>

        <button
          disabled={disabled}
          onClick={handleUpload}
          className={`w-full py-4 rounded-xl font-semibold ${
            disabled ? "bg-gray-300" : "bg-black text-white"
          }`}
        >
          🚀 Upload Notes
        </button>
      </div>
    </main>
  )
}
