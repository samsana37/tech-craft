"use client"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  getDepartmentsByCollegeId,
  getStudentsByCollegeId,
  sections,
} from "@/lib/data"
import { useRouter } from "next/navigation"
import { useMemo, useState } from "react"

export function StudentTable({ collegeId }: { collegeId: string }) {
  const router = useRouter()
  const [departmentFilter, setDepartmentFilter] = useState<string>("")
  const [sectionFilter, setSectionFilter] = useState<string>("")
  const [searchQuery, setSearchQuery] = useState<string>("")

  const students = useMemo(() => {
    return getStudentsByCollegeId(collegeId)
  }, [collegeId])

  const collegeDepartments = useMemo(() => {
    return getDepartmentsByCollegeId(collegeId)
  }, [collegeId])

  const filteredStudents = useMemo(() => {
    return students.filter((student) => {
      // Apply department filter
      if (
        departmentFilter &&
        departmentFilter !== "all" &&
        student.department !== departmentFilter
      ) {
        return false
      }

      // Apply section filter
      if (
        sectionFilter &&
        sectionFilter !== "all" &&
        student.section !== sectionFilter
      ) {
        return false
      }

      // Apply search filter (case insensitive)
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        return (
          student.name.toLowerCase().includes(query) ||
          student.rollNo.toLowerCase().includes(query)
        )
      }

      return true
    })
  }, [students, departmentFilter, sectionFilter, searchQuery])

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <Input
          placeholder="Search by name or roll number..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="sm:max-w-sm"
        />
        <div className="flex gap-4">
          <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Dept Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Departments</SelectItem>
              {collegeDepartments.map((dept) => (
                <SelectItem key={dept.id} value={dept.name}>
                  {dept.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={sectionFilter} onValueChange={setSectionFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Section Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Sections</SelectItem>
              {sections.map((section) => (
                <SelectItem key={section.id} value={section.name}>
                  {section.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Roll No</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Dept</TableHead>
              <TableHead>Section</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student) => (
                <TableRow
                  key={student.id}
                  className="cursor-pointer"
                  onClick={() =>
                    router.push(`/colleges/${collegeId}/students/${student.id}`)
                  }
                >
                  <TableCell>{student.rollNo}</TableCell>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.department}</TableCell>
                  <TableCell>{student.section}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
