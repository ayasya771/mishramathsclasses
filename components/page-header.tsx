interface PageHeaderProps {
  title: string
  description?: string
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="bg-gradient-to-b from-black to-gray-900 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1E90FF] to-[#FFD700] mb-4">
          {title}
        </h1>
        {description && (
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>
    </div>
  )
}