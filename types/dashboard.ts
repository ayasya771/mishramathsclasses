export interface Test {
  title: string
  date: string
  time: string
  topic: string
}

export interface CourseProgress {
  subject: string
  progress: number
  totalLessons: number
  completedLessons: number
  hoursSpent: number
  score: number
}

export interface Resource {
  id: string
  title: string
  type: string
  subject: string
  uploadDate: string
  downloadUrl: string
}