import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Laptop, BookOpen, Trophy, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80"
            alt="Students studying"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1E90FF] to-[#FFD700] mb-6">
            Excel in Mathematics
          </h1>
          <p className="text-gray-200 text-xl md:text-2xl mb-8">
            Join Mishra Maths Classes - where mathematical excellence begins
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-[#1E90FF] hover:bg-[#1E90FF]/90 text-white w-full md:w-auto"
            >
              <Link href="/enroll">Book a Trial Class</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black w-full md:w-auto"
            >
              <Link href="/courses">Explore Courses</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Laptop className="w-10 h-10 text-[#1E90FF]" />,
                title: "Modern Learning",
                description:
                  "State-of-the-art digital resources and interactive learning platforms",
              },
              {
                icon: <BookOpen className="w-10 h-10 text-[#1E90FF]" />,
                title: "Expert Teachers",
                description:
                  "Learn from experienced educators passionate about student success",
              },
              {
                icon: <Trophy className="w-10 h-10 text-[#FFD700]" />,
                title: "Proven Results",
                description:
                  "Consistent track record of academic excellence and achievements",
              },
              {
                icon: <Users className="w-10 h-10 text-[#FFD700]" />,
                title: "Small Batches",
                description:
                  "Personalized attention with limited students per batch",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="p-6 bg-gray-900 border-gray-800 hover:border-[#1E90FF] transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  {feature.icon}
                  <h3 className="mt-4 mb-2 text-xl font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}