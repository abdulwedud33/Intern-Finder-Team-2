"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin, Clock, Filter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const jobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120k - $150k",
    posted: "2 days ago",
    logo: "/placeholder.svg?height=40&width=40&text=TC",
    description: "We are looking for a senior frontend developer to join our team...",
  },
  {
    id: 2,
    title: "UX Designer",
    company: "Design Studio",
    location: "New York, NY",
    type: "Remote",
    salary: "$90k - $120k",
    posted: "1 day ago",
    logo: "/placeholder.svg?height=40&width=40&text=DS",
    description: "Join our creative team as a UX Designer and help shape amazing user experiences...",
  },
  {
    id: 3,
    title: "Data Scientist",
    company: "Analytics Pro",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$110k - $140k",
    posted: "3 days ago",
    logo: "/placeholder.svg?height=40&width=40&text=AP",
    description: "We need a data scientist to help us make sense of complex data...",
  },
  {
    id: 4,
    title: "Backend Developer",
    company: "ServerTech",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$100k - $130k",
    posted: "1 week ago",
    logo: "/placeholder.svg?height=40&width=40&text=ST",
    description: "Looking for a backend developer with expertise in Node.js and databases...",
  },
  {
    id: 5,
    title: "Product Manager",
    company: "InnovateCorp",
    location: "Los Angeles, CA",
    type: "Full-time",
    salary: "$130k - $160k",
    posted: "5 days ago",
    logo: "/placeholder.svg?height=40&width=40&text=IC",
    description: "Lead product development and strategy for our growing platform...",
  },
  {
    id: 6,
    title: "DevOps Engineer",
    company: "CloudSys",
    location: "Remote",
    type: "Full-time",
    salary: "$115k - $145k",
    posted: "4 days ago",
    logo: "/placeholder.svg?height=40&width=40&text=CS",
    description: "Help us build and maintain scalable cloud infrastructure...",
  },
]

export default function JobsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [location, setLocation] = useState("")
  const [jobType, setJobType] = useState("")

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Your Perfect Job</h1>
          <p className="text-gray-600">Discover amazing opportunities from top companies</p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Job title or keywords"
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Location"
                  className="pl-10"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <Select value={jobType} onValueChange={setJobType}>
                <SelectTrigger>
                  <SelectValue placeholder="Job Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="full-time">Full-time</SelectItem>
                  <SelectItem value="part-time">Part-time</SelectItem>
                  <SelectItem value="remote">Remote</SelectItem>
                  <SelectItem value="contract">Contract</SelectItem>
                </SelectContent>
              </Select>
              <Button className="bg-teal-600 hover:bg-teal-700">
                <Filter className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results Header */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">{jobs.length} jobs found</p>
          <Select defaultValue="newest">
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="salary-high">Salary: High to Low</SelectItem>
              <SelectItem value="salary-low">Salary: Low to High</SelectItem>
              <SelectItem value="relevance">Most Relevant</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Job Listings */}
        <div className="space-y-4">
          {jobs.map((job) => (
            <Card key={job.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <Image
                      src={job.logo || "/placeholder.svg"}
                      alt={job.company}
                      width={48}
                      height={48}
                      className="rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        <Link href={`/jobs/${job.id}`} className="hover:text-teal-600">
                          {job.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 mb-2">{job.company}</p>
                      <p className="text-gray-700 mb-3">{job.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {job.posted}
                        </div>
                        <Badge variant="secondary">{job.type}</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold text-teal-600 mb-3">{job.salary}</p>
                    <Button asChild>
                      <Link href={`/jobs/${job.id}`}>View Details</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            <Button variant="outline">Previous</Button>
            <Button variant="outline" className="bg-teal-600 text-white">
              1
            </Button>
            <Button variant="outline">2</Button>
            <Button variant="outline">3</Button>
            <Button variant="outline">Next</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
