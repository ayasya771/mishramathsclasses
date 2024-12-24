import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, BookOpen, CircleDollarSign } from "lucide-react"
import { Course } from "@/lib/courses-data"

interface CourseDetailsProps {
  course: Course | null
}

export function CourseDetails({ course }: CourseDetailsProps) {
  if (!course) {
    return (
      <Card className="p-6 bg-gray-900 border-gray-800">
        <div className="text-center text-gray-400">
          <p>Please select a course to view details</p>
        </div>
      </Card>
    )
  }

  return (
    <Card className="p-6 bg-gray-900 border-gray-800">
      <h2 className="text-2xl font-semibold text-white mb-6">Course Details</h2>
      
      <div className="space-y-6">
        <div>
          <div className="flex justify-between items-start mb-4">
            <Badge variant="secondary" className="bg-[#1E90FF]/10 text-[#1E90FF]">
              {course.subject}
            </Badge>
            <Badge variant="outline" className="border-[#FFD700] text-[#FFD700]">
              {course.level}
            </Badge>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">{course.title}</h3>
          <p className="text-gray-400">{course.description}</p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center text-gray-400">
            <Clock className="w-5 h-5 mr-3 text-[#1E90FF]" />
            <span>Duration: {course.duration}</span>
          </div>
          <div className="flex items-center text-gray-400">
            <Users className="w-5 h-5 mr-3 text-[#1E90FF]" />
            <span>Batch Size: {course.batchSize} students</span>
          </div>
          <div className="flex items-center text-gray-400">
            <BookOpen className="w-5 h-5 mr-3 text-[#1E90FF]" />
            <span>Total Lessons: {course.lessons}</span>
          </div>
          <div className="flex items-center text-gray-400">
            <CircleDollarSign className="w-5 h-5 mr-3 text-[#FFD700]" />
            <span>Course Fee: ${course.price}</span>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 mt-6">
          <h4 className="text-lg font-semibold text-white mb-3">What You'll Get</h4>
          <ul className="space-y-2 text-gray-400">
            <li>• Personalized attention in small batches</li>
            <li>• Regular assessments and progress tracking</li>
            <li>• Access to digital learning resources</li>
            <li>• Practice materials and assignments</li>
            <li>• Doubt clearing sessions</li>
          </ul>
        </div>
      </div>
    </Card>
  )
}