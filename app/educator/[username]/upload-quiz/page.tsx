"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"

type Course = {
  _id: string
  name: string
}

export default function UploadQuiz() {
  const params = useParams()
  const username = params?.username as string

  const [userId, setUserId] = useState("")
  const [courses, setCourses] = useState<Course[]>([])
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null)
  const [loading, setLoading] = useState(true)

  const [title, setTitle] = useState("")
  const [maxMarks, setMaxMarks] = useState("")
  const [file, setFile] = useState<File | null>(null)
  const [success, setSuccess] = useState(false)

  // resolve user
  useEffect(() => {
    if (!username) return
    fetch(`/api/users?username=${username}`)
      .then((r) => r.json())
      .then((d) => setUserId(d._id))
  }, [username])

  // fetch courses
  useEffect(() => {
    if (!userId) return
    fetch(`/api/courses?userId=${userId}`)
      .then((r) => r.json())
      .then((data) => {
        setCourses(data)
        setLoading(false)
      })
  }, [userId])

  const generateFakePdfUrl = () =>
    `https://cloud-storage.app/quizzes/${crypto.randomUUID()}.pdf`

  const handleUpload = async () => {
    if (!title || !maxMarks || !file || !selectedCourse) return

    const payload = {
      title,
      maxMarks: Number(maxMarks),
      pdfUrl: generateFakePdfUrl(),
      user: userId,
      course: selectedCourse._id,
    }

    await fetch("/api/quiz", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })

    setSuccess(true)
    setTitle("")
    setMaxMarks("")
    setFile(null)
    setSelectedCourse(null)
    setTimeout(() => setSuccess(false), 2000)
  }

  const disabled = !title || !maxMarks || !file || !selectedCourse

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8 space-y-8">

        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Upload Quiz</h1>
          <p className="text-sm text-slate-500 mt-1">
            Upload quiz PDF and configure marks
          </p>
        </div>

        {success && (
          <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm">
            ✅ Quiz uploaded successfully
          </div>
        )}

        {/* Title */}
        <input
          placeholder="Quiz title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded-lg px-4 py-2.5"
        />

        {/* Max marks */}
        <input
          type="number"
          placeholder="Maximum marks"
          value={maxMarks}
          onChange={(e) => setMaxMarks(e.target.value)}
          className="w-full border rounded-lg px-4 py-2.5"
        />

        {/* File upload */}
        <label className="flex items-center justify-center h-32 border-2 border-dashed rounded-xl cursor-pointer hover:bg-slate-50 transition">
          <span className="text-sm text-slate-500">
            {file ? file.name : "Upload Quiz PDF"}
          </span>
          <input
            type="file"
            accept="application/pdf"
            hidden
            onChange={(e) => setFile(e.target.files?.[0] || null)}
          />
        </label>

        {/* Courses */}
        {loading ? (
          <p className="text-sm text-slate-400">Loading courses...</p>
        ) : (
          <div className="flex flex-wrap gap-2">
            {courses.map((course) => (
              <button
                key={course._id}
                onClick={() => setSelectedCourse(course)}
                className={`px-4 py-2 rounded-full border text-sm transition ${
                  selectedCourse?._id === course._id
                    ? "bg-black text-white"
                    : "bg-white text-slate-600 hover:border-slate-400"
                }`}
              >
                {course.name}
              </button>
            ))}
          </div>
        )}

        {/* Submit */}
        <button
          disabled={disabled}
          onClick={handleUpload}
          className={`w-full py-4 rounded-xl font-semibold transition ${
            disabled
              ? "bg-slate-300 cursor-not-allowed"
              : "bg-black text-white hover:bg-slate-800"
          }`}
        >
          🚀 Upload Quiz
        </button>
      </div>
    </main>
  )
}
