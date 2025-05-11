import { getCollegeById } from "@/lib/data"
import { notFound } from "next/navigation"
import { StudentTable } from "./student-table"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default async function StudentsPage({
  params,
}: {
  params: Promise<{ collegeId: string }>
}) {
  const { collegeId } = await params
  const college = getCollegeById(collegeId)

  if (!college) {
    notFound()
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <Link
        href="/colleges"
        className="flex items-center text-muted-foreground hover:text-foreground mb-4 w-fit"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Colleges
      </Link>
      <h1 className="text-3xl font-bold mb-5">{college.name}</h1>
      <StudentTable collegeId={collegeId} />
    </div>
  )
}
