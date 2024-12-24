import { Test, CourseProgress } from "@/types/dashboard"

export const mockTests: Test[] = [
  {
    title: "Mathematics Mock Test",
    date: "April 15, 2024",
    time: "10:00 AM",
    topic: "Calculus"
  },
  {
    title: "Weekly Assessment",
    date: "April 18, 2024",
    time: "2:00 PM",
    topic: "Algebra"
  }
]

export const mockProgress: CourseProgress = {
  subject: "Mathematics",
  progress: 75,
  totalLessons: 32,
  completedLessons: 24,
  hoursSpent: 48,
  score: 85
}