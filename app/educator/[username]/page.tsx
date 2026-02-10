import Link from "next/link"


export default async function Dashboard({
  params,
}: {
  params: Promise<{ username: string }>
}) {
  const { username } = await params
  const teacher = decodeURIComponent(username)

  const actions = [
    {
      title: "Live Lectures",
      description: "Start and manage live classes",
      href: `/educator/${teacher}/live-lectures`,
    },
    {
      title: "Recorded Lectures",
      description: "Upload and manage recorded videos",
      href: `/educator/${teacher}/upload-lec`,
    },
    {
      title: "Notes",
      description: "Upload notes and study material",
      href: `/educator/${teacher}/upload-notes`,
    },
    {
      title: "Quiz",
      description: "Create quizzes and upload results",
      href: `/educator/${teacher}/upload-quiz`,
    },
  ]

  return (
    <main className="min-h-screen bg-slate-50">
     

      <div className="pt-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto space-y-10">

          <div>
            <h1 className="text-3xl font-semibold text-slate-900">
              Welcome, {teacher}
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Manage your classes and content from here
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {actions.map((item) => (
              <Link key={item.title} href={item.href}>
                <div className="rounded-lg border border-slate-200 bg-white p-5
                                hover:border-emerald-500 hover:shadow-sm transition">
                  <h3 className="text-base font-medium text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </main>
  )
}
