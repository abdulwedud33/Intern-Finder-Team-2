"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Users, Building } from "lucide-react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react";

export default function SignUpPage() {
  const [jobSeekerData, setJobSeekerData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    location: "",
    experience: "",
    agreeToTerms: false,
  })

  const [companyData, setCompanyData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    website: "",
    industry: "",
    companySize: "",
    agreeToTerms: false,
  })

  const handleJobSeekerSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Job seeker signup:", jobSeekerData)
  }

  const handleCompanySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Company signup:", companyData)
  }

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="absolute top-4 left-4">
        <Link href="/" className="flex items-center gap-1 text-black hover:underline ">
          <ArrowLeft className="w-4 h-4" />
          <span>Go Back</span>
        </Link>
      </div>
      {/* Left - Signup Form */}
      <div className="flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl w-full">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Join InternFinder</h1>
            <p className="text-gray-600">Create your account and start your journey today</p>
          </div>

          <Card>
            <CardContent className="p-6">
              <Tabs defaultValue="jobseeker" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="jobseeker" className="flex items-center space-x-2">
                    <Users className="h-4 w-4" />
                    <span>Job Seeker</span>
                  </TabsTrigger>
                  <TabsTrigger value="company" className="flex items-center space-x-2">
                    <Building className="h-4 w-4" />
                    <span>Company</span>
                  </TabsTrigger>
                </TabsList>

                {/* Job Seeker Form */}
                <TabsContent value="jobseeker">
                  <form onSubmit={handleJobSeekerSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        required
                        placeholder="First Name"
                        value={jobSeekerData.firstName}
                        onChange={(e) =>
                          setJobSeekerData({ ...jobSeekerData, firstName: e.target.value })
                        }
                      />
                      <Input
                        required
                        placeholder="Last Name"
                        value={jobSeekerData.lastName}
                        onChange={(e) =>
                          setJobSeekerData({ ...jobSeekerData, lastName: e.target.value })
                        }
                      />
                    </div>
                    <Input
                      required
                      type="email"
                      placeholder="Email Address"
                      value={jobSeekerData.email}
                      onChange={(e) =>
                        setJobSeekerData({ ...jobSeekerData, email: e.target.value })
                      }
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        required
                        type="password"
                        placeholder="Password"
                        value={jobSeekerData.password}
                        onChange={(e) =>
                          setJobSeekerData({ ...jobSeekerData, password: e.target.value })
                        }
                      />
                      <Input
                        required
                        type="password"
                        placeholder="Confirm Password"
                        value={jobSeekerData.confirmPassword}
                        onChange={(e) =>
                          setJobSeekerData({
                            ...jobSeekerData,
                            confirmPassword: e.target.value,
                          })
                        }
                      />
                    </div>
                    <Input
                      placeholder="Phone Number"
                      value={jobSeekerData.phone}
                      onChange={(e) =>
                        setJobSeekerData({ ...jobSeekerData, phone: e.target.value })
                      }
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        placeholder="Location"
                        value={jobSeekerData.location}
                        onChange={(e) =>
                          setJobSeekerData({ ...jobSeekerData, location: e.target.value })
                        }
                      />
                      <Select
                        value={jobSeekerData.experience}
                        onValueChange={(value) =>
                          setJobSeekerData({ ...jobSeekerData, experience: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Experience Level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="entry">Entry</SelectItem>
                          <SelectItem value="mid">Mid</SelectItem>
                          <SelectItem value="senior">Senior</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        checked={jobSeekerData.agreeToTerms}
                        onCheckedChange={(checked) =>
                          setJobSeekerData({ ...jobSeekerData, agreeToTerms: !!checked })
                        }
                      />
                      <label className="text-sm text-gray-600">
                        I agree to the{" "}
                        <Link href="/terms" className="text-teal-600 underline">
                          Terms
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy" className="text-teal-600 underline">
                          Privacy
                        </Link>
                      </label>
                    </div>
                    <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700">
                      Create Job Seeker Account
                    </Button>
                  </form>
                </TabsContent>

                {/* Company Form */}
                <TabsContent value="company">
                  <form onSubmit={handleCompanySubmit} className="space-y-4">
                    <Input
                      required
                      placeholder="Company Name"
                      value={companyData.companyName}
                      onChange={(e) =>
                        setCompanyData({ ...companyData, companyName: e.target.value })
                      }
                    />
                    <Input
                      required
                      placeholder="Contact Person"
                      value={companyData.contactName}
                      onChange={(e) =>
                        setCompanyData({ ...companyData, contactName: e.target.value })
                      }
                    />
                    <Input
                      required
                      type="email"
                      placeholder="Company Email"
                      value={companyData.email}
                      onChange={(e) =>
                        setCompanyData({ ...companyData, email: e.target.value })
                      }
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        required
                        type="password"
                        placeholder="Password"
                        value={companyData.password}
                        onChange={(e) =>
                          setCompanyData({ ...companyData, password: e.target.value })
                        }
                      />
                      <Input
                        required
                        type="password"
                        placeholder="Confirm Password"
                        value={companyData.confirmPassword}
                        onChange={(e) =>
                          setCompanyData({
                            ...companyData,
                            confirmPassword: e.target.value,
                          })
                        }
                      />
                    </div>
                    <Input
                      placeholder="Phone"
                      value={companyData.phone}
                      onChange={(e) =>
                        setCompanyData({ ...companyData, phone: e.target.value })
                      }
                    />
                    <Input
                      type="url"
                      placeholder="Company Website"
                      value={companyData.website}
                      onChange={(e) =>
                        setCompanyData({ ...companyData, website: e.target.value })
                      }
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Select
                        value={companyData.industry}
                        onValueChange={(value) =>
                          setCompanyData({ ...companyData, industry: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="tech">Tech</SelectItem>
                          <SelectItem value="finance">Finance</SelectItem>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                        </SelectContent>
                      </Select>

                      <Select
                        value={companyData.companySize}
                        onValueChange={(value) =>
                          setCompanyData({ ...companyData, companySize: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Company Size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1-10</SelectItem>
                          <SelectItem value="11-50">11-50</SelectItem>
                          <SelectItem value="51-200">51-200</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        checked={companyData.agreeToTerms}
                        onCheckedChange={(checked) =>
                          setCompanyData({ ...companyData, agreeToTerms: !!checked })
                        }
                      />
                      <label className="text-sm text-gray-600">
                        I agree to the{" "}
                        <Link href="/terms" className="text-teal-600 underline">
                          Terms
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy" className="text-teal-600 underline">
                          Privacy
                        </Link>
                      </label>
                    </div>
                    <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700">
                      Create Company Account
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>

              <div className="text-center mt-6 pt-6 border-t">
                <p className="text-gray-600">
                  Already have an account?{" "}
                  <Link href="/login" className="text-teal-600 font-medium underline">
                    login here
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Right Panel */}
      <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-teal-600 to-blue-700 text-white px-10">
        <div className="text-center space-y-4 max-w-md">
          <h2 className="text-2xl font-semibold leading-snug">
            “Creativity is intelligence having fun.”
          </h2>
          <p className="text-white/80">— Albert Einstein</p>
        </div>
      </div>
    </div>
  )
}
