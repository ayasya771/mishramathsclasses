import { PageHeader } from "@/components/page-header"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black pt-16">
      <PageHeader 
        title="About Us"
        description="Dedicated to nurturing academic excellence and personal growth"
      />
      <div className="max-w-4xl mx-auto py-12 px-4">
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Mishra Maths Classes has been at the forefront of educational excellence since its inception. Our mission is to provide high-quality education that empowers students to achieve their academic goals and beyond.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            We have helped thousands of students excel in their academic journey. Our approach combines traditional teaching methods with modern technology to create an engaging and effective learning environment.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            We believe in small batch sizes, personalized attention, and continuous assessment to ensure that every student receives the support they need to succeed.
          </p>
        </div>
      </div>
    </main>
  )
}