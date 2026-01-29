"use client";

import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();
  const handleStudent = () =>{
    router.push("/auth/student");
  }
  const handleEducator = () =>{
    router.push("/auth/educator");
  }
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md bg-white rounded-xl border border-slate-200 px-8 py-10 space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
            Learnix
          </h1>
          <p className="text-sm text-slate-500">
            A modern platform for focused learning
          </p>
        </div>

        {/* Actions */}
        <div className="space-y-4">
          <button
            onClick={handleStudent }
            className="w-full h-12 rounded-lg bg-emerald-600 text-white text-sm font-medium
                       hover:bg-emerald-700 transition"
          >
            Continue as Student
          </button>

          <button
            onClick={handleEducator}
            className="w-full h-12 rounded-lg border border-slate-300 text-slate-700
                       text-sm font-medium hover:bg-slate-100 transition"
          >
            Continue as Educator
          </button>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-slate-400">
          © {new Date().getFullYear()} Learnix
        </p>
      </div>
    </main>
  );
}