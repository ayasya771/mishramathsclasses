"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Course, courses } from "@/lib/courses-data"

interface EnrollmentFormProps {
  selectedCourse: Course | null
}

export function EnrollmentForm({ selectedCourse }: EnrollmentFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    course: selectedCourse?.id || "",
    name: "",
    email: "",
    phone: "",
    grade: ""
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Enrollment submission logic would go here
    setTimeout(() => setIsSubmitting(false), 1000)
  }

  return (
    <Card className="p-6 bg-gray-900 border-gray-800">
      <h2 className="text-2xl font-semibold text-white mb-6">Student Information</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-200">
            Select Course
          </label>
          <Select
            value={formData.course}
            onValueChange={(value) => setFormData({ ...formData, course: value })}
          >
            <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
              <SelectValue placeholder="Select a course" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-700">
              {courses.map((course) => (
                <SelectItem 
                  key={course.id} 
                  value={course.id}
                  className="text-white hover:bg-gray-700"
                >
                  {course.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-200">
            Full Name
          </label>
          <Input
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="bg-gray-800 border-gray-700 text-white"
            placeholder="Enter your full name"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-200">
            Email
          </label>
          <Input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="bg-gray-800 border-gray-700 text-white"
            placeholder="Enter your email"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-200">
            Phone Number
          </label>
          <Input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="bg-gray-800 border-gray-700 text-white"
            placeholder="Enter your phone number"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-200">
            Grade/Class
          </label>
          <Select
            value={formData.grade}
            onValueChange={(value) => setFormData({ ...formData, grade: value })}
          >
            <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
              <SelectValue placeholder="Select your grade" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-700">
              {["8th", "9th", "10th", "11th", "12th"].map((grade) => (
                <SelectItem 
                  key={grade} 
                  value={grade}
                  className="text-white hover:bg-gray-700"
                >
                  {grade} Grade
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button
          type="submit"
          className="w-full bg-[#1E90FF] hover:bg-[#1E90FF]/90 text-white"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Processing..." : "Submit Enrollment"}
        </Button>
      </form>
    </Card>
  )
}