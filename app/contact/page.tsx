import { PageHeader } from "@/components/page-header"
import { ContactForm } from "@/components/contact/contact-form"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black pt-16">
      <PageHeader 
        title="Contact Us"
        description="Get in touch with us for any queries or support"
      />
      <div className="max-w-4xl mx-auto py-12 px-4">
        <ContactForm />
      </div>
    </main>
  )
}