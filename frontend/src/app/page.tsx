import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, MapPin, Star, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const featuredJobs = [
  {
    id: 1,
    title: "UI/UX Designer",
    company: "Google Inc.",
    location: "California, USA",
    type: "Full-time",
    salary: "$20,000 - $25,000",
    logo: "/placeholder.svg?height=40&width=40&text=G",
    posted: "11 hours ago",
  },
  {
    id: 2,
    title: "Technical Support Specialist",
    company: "Apple Inc.",
    location: "California, USA",
    type: "Full-time",
    salary: "$20,000 - $25,000",
    logo: "/placeholder.svg?height=40&width=40&text=A",
    posted: "14 hours ago",
  },
  {
    id: 3,
    title: "Senior UX Designer",
    company: "Google Inc.",
    location: "California, USA",
    type: "Full-time",
    salary: "$20,000 - $25,000",
    logo: "/placeholder.svg?height=40&width=40&text=G",
    posted: "21 hours ago",
  },
  {
    id: 4,
    title: "Product Designer",
    company: "Dribbble Inc.",
    location: "California, USA",
    type: "Full-time",
    salary: "$20,000 - $25,000",
    logo: "/placeholder.svg?height=40&width=40&text=D",
    posted: "1 day ago",
  },
]

const categories = [
  { name: "Design", count: "235 Jobs", icon: "🎨" },
  { name: "Sales", count: "756 Jobs", icon: "💼" },
  { name: "Marketing", count: "140 Jobs", icon: "📈" },
  { name: "Finance", count: "325 Jobs", icon: "💰" },
  { name: "Technology", count: "436 Jobs", icon: "💻" },
  { name: "Engineering", count: "542 Jobs", icon: "⚙️" },
  { name: "Business", count: "211 Jobs", icon: "🏢" },
  { name: "Human Resource", count: "346 Jobs", icon: "👥" },
]

const companies = [
  { name: "Google", logo: "/placeholder.svg?height=60&width=120&text=Google" },
  { name: "Microsoft", logo: "/placeholder.svg?height=60&width=120&text=Microsoft" },
  { name: "Apple", logo: "/placeholder.svg?height=60&width=120&text=Apple" },
  { name: "Meta", logo: "/placeholder.svg?height=60&width=120&text=Meta" },
  { name: "Netflix", logo: "/placeholder.svg?height=60&width=120&text=Netflix" },
  { name: "Adobe", logo: "/placeholder.svg?height=60&width=120&text=Adobe" },
]

const testimonials = [
  {
    name: "Robert Fox",
    role: "UI/UX Designer",
    company: "Corner Stone",
    image: "/placeholder.svg?height=60&width=60&text=RF",
    content: "Ut ullamcorper hendrerit tempor. Aliquam in rutrum dui. Maecenas ac placerat metus, in faucibus est.",
    rating: 5,
  },
  {
    name: "Bessie Cooper",
    role: "Creative Director",
    company: "Bright Agency",
    image: "/placeholder.svg?height=60&width=60&text=BC",
    content: "Ut ullamcorper hendrerit tempor. Aliquam in rutrum dui. Maecenas ac placerat metus, in faucibus est.",
    rating: 5,
  },
]

const blogPosts = [
  {
    title: "How to win any job you want. Get started with 5 steps.",
    excerpt: "Ut ullamcorper hendrerit tempor. Aliquam in rutrum dui. Maecenas ac placerat metus, in faucibus est.",
    image: "/placeholder.svg?height=200&width=300&text=Blog1",
    date: "Jan 15, 2024",
    author: "John Doe",
  },
  {
    title: "The secrets to finding the perfect job in 2024.",
    excerpt: "Ut ullamcorper hendrerit tempor. Aliquam in rutrum dui. Maecenas ac placerat metus, in faucibus est.",
    image: "/placeholder.svg?height=200&width=300&text=Blog2",
    date: "Jan 12, 2024",
    author: "Jane Smith",
  },
]

export default function Homepage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Find Your Dream Job Today!</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              connecting talent with opportunity: your gateway to career success.
            </p>

            {/* Search Bar */}
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input placeholder="Job title, keywords, or company" className="pl-10 h-12 text-gray-900" />
                </div>
                <div className="flex-1 relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input placeholder="Location" className="pl-10 h-12 text-gray-900" />
                </div>
                <Button className="h-12 px-8 bg-teal-500 hover:bg-teal-600">Search Jobs</Button>
              </div>
            </div>

            {/* Popular Searches */}
            <div className="mt-6">
              <p className="text-gray-400 mb-3">Popular Searches:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {["Designer", "Developer", "Web", "IOS", "PHP", "Senior", "Engineer"].map((term) => (
                  <Badge key={term} variant="secondary" className="bg-gray-800 text-gray-300 hover:bg-gray-700">
                    {term}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Jobs</h2>
              <p className="text-gray-600">Know your worth and find the job that qualify your life</p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/jobs">Show all jobs</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredJobs.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <Image
                        src={job.logo || "/placeholder.svg"}
                        alt={job.company}
                        width={48}
                        height={48}
                        className="rounded-lg"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                        <p className="text-gray-600">{job.company}</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      {job.type}
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {job.location}
                    </div>
                    <span>{job.posted}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-teal-600">{job.salary}</span>
                    <Button className="bg-teal-500 hover:bg-teal-600" asChild>
                      <Link href={`/jobs/${job.id}`}>Apply</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Browse by Category */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Category</h2>
            <p className="text-gray-600">Find the job that's perfect for you. about 800+ new jobs everyday</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Card key={category.name} className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="text-3xl mb-3">{category.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-600">{category.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Companies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Companies</h2>
            <p className="text-gray-600">We help you find the right job from top companies</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {companies.map((company) => (
              <div key={company.name} className="flex justify-center">
                <Image
                  src={company.logo || "/placeholder.svg"}
                  alt={company.name}
                  width={120}
                  height={60}
                  className="opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Testimonials From Our Customers</h2>
            <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">News and Blog</h2>
            <p className="text-gray-600">Get the latest news, updates and tips</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>By {post.author}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Button variant="ghost" className="p-0 h-auto text-teal-600 hover:text-teal-700">
                    Read More <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
