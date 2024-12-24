"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Users } from "lucide-react"
import { Course } from "@/lib/courses-data"
import Link from "next/link"

interface CourseCardProps {
  course: Course
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="bg-gray-900 border-gray-800 hover:border-[#1E90FF] transition-all duration-300">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <Badge variant="secondary" className="bg-[#1E90FF]/10 text-[#1E90FF] hover:bg-[#1E90FF]/20">
            {course.subject}
          </Badge>
          <Badge variant="outline" className="border-[#FFD700] text-[#FFD700]">
            {course.level}
          </Badge>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">{course.title}</h3>
        <p className="text-gray-400 mb-4">{course.description}</p>
        <div className="space-y-2 mb-6">
          <div className="flex items-center text-gray-400">
            <Clock className="w-4 h-4 mr-2" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center text-gray-400">
            <Users className="w-4 h-4 mr-2" />
            <span>{course.batchSize === 1 ? "One-on-One Training" : `${course.batchSize} students per batch`}</span>
          </div>
        </div>
        <Button className="w-full bg-[#1E90FF] hover:bg-[#1E90FF]/90 text-white">
          <Link href={`/enroll?course=${course.id}`}>Enroll Now</Link>
        </Button>
      </div>
    </Card>
  )
}