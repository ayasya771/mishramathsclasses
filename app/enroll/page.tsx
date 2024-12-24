"use client"

import { useSearchParams } from "next/navigation"
import { PageHeader } from "@/components/page-header"
import { EnrollmentForm } from "@/components/enrollment/enrollment-form"
import { CourseDetails } from "@/components/enrollment/course-details"
import { courses } from "@/lib/courses-data"

export default function EnrollPage() {
  const searchParams = useSearchParams()
  const courseId = searchParams.get("course")
  const selectedCourse = courseId ? courses.find(course => course.id === courseId) : null

  return (
    <main className="min-h-screen bg-black pt-16">
      <PageHeader 
        title="Enroll Now"
        description="Begin your journey towards academic excellence"
      />
      <div className="max-w-6xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <EnrollmentForm selectedCourse={selectedCourse} />
          <CourseDetails course={selectedCourse} />
        </div>
      </div>
    </main>
  )
}