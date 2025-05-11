import { Card, CardContent } from "@/components/ui/card"
import { colleges } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function CollegesPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <Link
        href="/"
        className="flex items-center text-muted-foreground hover:text-foreground mb-4 w-fit"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Link>
      <h1 className="text-3xl font-bold mb-8">College Listing</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {colleges.map((college) => (
          <Link
            key={college.id}
            href={`/colleges/${college.id}/students`}
            className="group"
          >
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg ">
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={college.image || "/placeholder.svg"}
                  alt={college.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-4 transition-colors duration-300 group-hover:bg-slate-50">
                <h2 className="font-semibold text-lg transition-colors duration-300 group-hover:text-primary">
                  {college.name}
                </h2>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
