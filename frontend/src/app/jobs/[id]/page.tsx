import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { MapPin, Clock, DollarSign, Share2, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// This would typically come from an API or database
const jobData = {
  id: 1,
  title: "Senior Frontend Developer",
  company: "TechCorp Inc.",
  location: "San Francisco, CA",
  type: "Full-time",
  salary: "$120,000 - $150,000",
  posted: "2 days ago",
  logo: "/placeholder.svg?height=80&width=80&text=TC",
  description: `We are looking for a Senior Frontend Developer to join our dynamic team. You will be responsible for developing user-facing web applications and working closely with our design and backend teams to create seamless user experiences.`,
  requirements: [
    "5+ years of experience in frontend development",
    "Expert knowledge of React, TypeScript, and modern JavaScript",
    "Experience with state management libraries (Redux, Zustand)",
    "Proficiency in CSS frameworks (Tailwind, Styled Components)",
    "Experience with testing frameworks (Jest, Cypress)",
    "Knowledge of build tools and bundlers (Webpack, Vite)",
    "Understanding of web performance optimization",
    "Experience with version control (Git)",
  ],
  responsibilities: [
    "Develop and maintain high-quality web applications",
    "Collaborate with designers to implement pixel-perfect UIs",
    "Write clean, maintainable, and well-documented code",
    "Participate in code reviews and mentor junior developers",
    "Optimize applications for maximum speed and scalability",
    "Stay up-to-date with the latest frontend technologies",
    "Work closely with backend developers to integrate APIs",
  ],
  benefits: [
    "Competitive salary and equity package",
    "Comprehensive health, dental, and vision insurance",
    "Flexible work arrangements and remote options",
    "Professional development budget",
    "Unlimited PTO policy",
    "Modern office with free meals and snacks",
    "Team building events and company retreats",
  ],
  companyInfo: {
    size: "100-500 employees",
    industry: "Technology",
    founded: "2015",
    website: "https://techcorp.com",
  },
}

export default function JobDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Job Header */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-4">
                    <Image
                      src={jobData.logo || "/placeholder.svg"}
                      alt={jobData.company}
                      width={80}
                      height={80}
                      className="rounded-lg"
                    />
                    <div>
                      <h1 className="text-2xl font-bold text-gray-900 mb-2">{jobData.title}</h1>
                      <p className="text-lg text-gray-600 mb-2">{jobData.company}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {jobData.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {jobData.posted}
                        </div>
                        <Badge variant="secondary">{jobData.type}</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Heart className="h-4 w-4 mr-1" />
                      Save
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="h-4 w-4 mr-1" />
                      Share
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-lg font-semibold text-teal-600">
                    <DollarSign className="h-5 w-5 mr-1" />
                    {jobData.salary}
                  </div>
                  <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                    Apply Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Job Description */}
            <Card>
              <CardHeader>
                <CardTitle>Job Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{jobData.description}</p>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card>
              <CardHeader>
                <CardTitle>Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {jobData.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-teal-600 mr-2">•</span>
                      <span className="text-gray-700">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Responsibilities */}
            <Card>
              <CardHeader>
                <CardTitle>Responsibilities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {jobData.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-teal-600 mr-2">•</span>
                      <span className="text-gray-700">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card>
              <CardHeader>
                <CardTitle>Benefits & Perks</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {jobData.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-teal-600 mr-2">•</span>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Apply Card */}
            <Card>
              <CardContent className="p-6">
                <Button size="lg" className="w-full bg-teal-600 hover:bg-teal-700 mb-4">
                  Apply Now
                </Button>
                <Button variant="outline" size="lg" className="w-full bg-transparent">
                  Save Job
                </Button>
              </CardContent>
            </Card>

            {/* Company Info */}
            <Card>
              <CardHeader>
                <CardTitle>About {jobData.company}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Company Size</span>
                  <span className="font-medium">{jobData.companyInfo.size}</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Industry</span>
                  <span className="font-medium">{jobData.companyInfo.industry}</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Founded</span>
                  <span className="font-medium">{jobData.companyInfo.founded}</span>
                </div>
                <Separator />
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href={jobData.companyInfo.website} target="_blank">
                    Visit Website
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Similar Jobs */}
            <Card>
              <CardHeader>
                <CardTitle>Similar Jobs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="border-b pb-4 last:border-b-0">
                    <h4 className="font-medium text-gray-900 mb-1">Frontend Developer</h4>
                    <p className="text-sm text-gray-600 mb-2">Company Name</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Remote</span>
                      <span className="text-teal-600 font-medium">$90k - $120k</span>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href="/jobs">View All Jobs</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
