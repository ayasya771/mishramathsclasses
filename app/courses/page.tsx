import { CourseList } from "@/components/courses/course-list"
import { PageHeader } from "@/components/page-header"

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-black pt-16">
      <PageHeader 
        title="Our Courses"
        description="Comprehensive courses designed to help you excel in your academic journey"
      />
      <CourseList />
    </main>
  )
}