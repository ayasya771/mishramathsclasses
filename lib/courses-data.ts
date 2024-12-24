export interface Course {
  id: string;
  title: string;
  description: string;
  subject: string;
  level: string;
  duration: string;
  batchSize: number;
  price: number;
  board: "CBSE" | "ICSE" | "SAT" | "CUET";
  grade: string[];
}

export const courses: Course[] = [
  {
    id: "cbse-math-9",
    title: "CBSE Mathematics (IX)",
    description: "Comprehensive mathematics course for CBSE class 9 students",
    subject: "Mathematics",
    level: "Secondary",
    duration: "12 months",
    batchSize: 12,
    price: 24999,
    board: "CBSE",
    grade: ["9th"]
  },
  {
    id: "cbse-math-10",
    title: "CBSE Mathematics (X)",
    description: "Complete mathematics preparation for CBSE class 10 board exams",
    subject: "Mathematics",
    level: "Secondary",
    duration: "12 months",
    batchSize: 12,
    price: 24999,
    board: "CBSE",
    grade: ["10th"]
  },
  {
    id: "cbse-math-11",
    title: "CBSE Mathematics (XI)",
    description: "Advanced mathematics for CBSE class 11 students",
    subject: "Mathematics",
    level: "Senior Secondary",
    duration: "12 months",
    batchSize: 12,
    price: 29999,
    board: "CBSE",
    grade: ["11th"]
  },
  {
    id: "cbse-math-12",
    title: "CBSE Mathematics (XII)",
    description: "Comprehensive mathematics preparation for CBSE class 12 board exams",
    subject: "Mathematics",
    level: "Senior Secondary",
    duration: "12 months",
    batchSize: 12,
    price: 29999,
    board: "CBSE",
    grade: ["12th"]
  },
  {
    id: "sat-math",
    title: "SAT Mathematics",
    description: "Personalized one-on-one SAT Math preparation course",
    subject: "Mathematics",
    level: "Advanced",
    duration: "Flexible",
    batchSize: 1,
    price: 39999,
    board: "SAT",
    grade: ["11th", "12th"]
  },
  {
    id: "cuet-math",
    title: "CUET Mathematics",
    description: "Intensive mathematics preparation for CUET",
    subject: "Mathematics",
    level: "Advanced",
    duration: "2 months",
    batchSize: 12,
    price: 19999,
    board: "CUET",
    grade: ["12th"]
  }
];