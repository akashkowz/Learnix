"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"

type Course = {
  cid: string
  name: string
  faculty: string
}

export default function Dashboard() {
  const router = useRouter()
  const params = useParams()
  const student = params.username as string

  const [courses, setCourses] = useState<Course[]>([])
  const [enrolled, setEnrolled] = useState<string[]>([])
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch("/api/courses")
        if (!res.ok) throw new Error("Failed to fetch courses")
        const data = await res.json()
        setCourses(data)
      } catch (err) {
        setError("Unable to load courses")
      } finally {
        setLoading(false)
      }
    }

    fetchCourses()
  }, [])

  const toggleEnroll = (cid: string) => {
    setEnrolled(prev =>
      prev.includes(cid)
        ? prev.filter(id => id !== cid)
        : [...prev, cid]
    )
    setError("")
  }

  const handleContinue = () => {
    if (enrolled.length === 0) {
      setError("Please select at least one course")
      return
    }

    router.push(`/${student}/home`)
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10">
      <div className="max-w-6xl mx-auto space-y-10">

        {/* Header */}
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">
            Welcome back, {student}
          </h1>
          <p className="text-sm text-slate-500">
            Select courses to start learning
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <p className="text-sm text-slate-500">Loading courses...</p>
        )}

        {/* Error */}
        {error && !loading && (
          <p className="text-sm text-red-600 font-medium">{error}</p>
        )}

        {/* Courses Grid */}
        {!loading && courses.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map(course => {
              const isEnrolled = enrolled.includes(course.cid)

              return (
                <div
                  key={course.cid}
                  className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <h3 className="text-base font-semibold text-slate-900">
                      {course.name}
                    </h3>
                    <p className="text-xs text-slate-500">
                      Faculty:{" "}
                      <span className="font-medium">{course.faculty}</span>
                    </p>
                  </div>

                  <button
                    onClick={() => toggleEnroll(course.cid)}
                    className={`mt-5 h-10 rounded-lg text-sm font-medium transition
                      ${
                        isEnrolled
                          ? "border border-red-500 text-red-600 hover:bg-red-50"
                          : "bg-emerald-600 text-white hover:bg-emerald-700"
                      }`}
                  >
                    {isEnrolled ? "Unenroll" : "Enroll"}
                  </button>
                </div>
              )
            })}
          </div>
        )}

        {/* Action */}
        <div className="text-center">
          <button
            onClick={handleContinue}
            className={`h-11 px-10 rounded-lg font-medium transition
              ${
                enrolled.length > 0
                  ? "bg-emerald-600 text-white hover:bg-emerald-700"
                  : "bg-slate-300 text-white cursor-not-allowed"
              }`}
          >
            Continue
          </button>
        </div>

      </div>
    </main>
  )
}