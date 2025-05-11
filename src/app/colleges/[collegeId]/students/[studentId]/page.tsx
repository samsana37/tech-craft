import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { getCollegeById, getStudentById } from "@/lib/data"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

export default async function StudentDetailPage({
  params,
}: {
  params: Promise<{ collegeId: string; studentId: string }>
}) {
  const { studentId, collegeId } = await params
  const student = getStudentById(studentId)
  const college = getCollegeById(collegeId)

  if (!student || !college) {
    notFound()
  }

  return (
    <div className="container mx-auto py-8 px-4 max-w-6xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <Link
            href={`/colleges/${collegeId}/students`}
            className="flex items-center text-muted-foreground hover:text-foreground mb-2 w-fit"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Students
          </Link>
          <h1 className="text-3xl font-bold">{college.name}</h1>
        </div>

        <Avatar className="h-32 w-32 border-2 border-primary/10 shadow-lg">
          <AvatarImage
            src={
              student.profileImage || "/placeholder.svg?height=128&width=128"
            }
            alt={student.name}
          />
          <AvatarFallback className="text-4xl">
            {student.name.charAt(0)}
          </AvatarFallback>
        </Avatar>
      </div>

      <div className="bg-card p-6 rounded-lg shadow-sm border">
        <h2 className="text-2xl font-semibold mb-6">{student.name}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">Roll No</p>
            <p className="text-lg">{student.rollNo}</p>
          </div>

          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">
              Department
            </p>
            <p className="text-lg">{student.department}</p>
          </div>

          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">Section</p>
            <p className="text-lg">{student.section}</p>
          </div>

          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">2nd PUC</p>
            <p className="text-lg">{student.secondPUC}</p>
          </div>

          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">3rd Sem</p>
            <p className="text-lg">{student.thirdSem}</p>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-card p-6 rounded-lg shadow-sm border">
        <h2 className="text-xl font-medium mb-4">Achievements</h2>
        <ul className="list-disc pl-5 space-y-2">
          {student.achievements.map((achievement, index) => (
            <li key={index} className="text-base">
              {achievement}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
