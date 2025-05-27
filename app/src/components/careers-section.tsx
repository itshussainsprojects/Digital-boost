"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  MapPin,
  DollarSign,
  Users,
  Briefcase,
  GraduationCap,
  Star,
  Upload,
  CheckCircle,
  X,
  ArrowRight,
  Zap,
  Code,
  Palette,
  BarChart3,
  Target,
  Heart,
} from "lucide-react"

const jobPositions = [
  {
    id: 1,
    title: "Senior Digital Marketing Strategist",
    department: "Marketing",
    type: "Full-time",
    location: "Remote / New York",
    salary: "$80,000 - $120,000",
    experience: "3-5 years",
    skills: ["SEO", "PPC", "Analytics", "Strategy"],
    description: "Lead digital marketing campaigns for Fortune 500 clients and drive measurable growth.",
    requirements: [
      "5+ years in digital marketing",
      "Google Ads & Analytics certified",
      "Experience with enterprise clients",
      "Strong analytical skills",
    ],
    benefits: ["Health Insurance", "Remote Work", "Stock Options", "Learning Budget"],
    icon: Target,
    color: "from-violet-500 to-purple-500",
  },
  {
    id: 2,
    title: "Frontend Developer",
    department: "Engineering",
    type: "Full-time",
    location: "San Francisco / Remote",
    salary: "$90,000 - $140,000",
    experience: "2-4 years",
    skills: ["React", "TypeScript", "Next.js", "Tailwind"],
    description: "Build stunning, interactive web experiences that convert visitors into customers.",
    requirements: [
      "3+ years React experience",
      "TypeScript proficiency",
      "Modern CSS frameworks",
      "Performance optimization",
    ],
    benefits: ["Health Insurance", "Flexible Hours", "Equipment Budget", "Conference Tickets"],
    icon: Code,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    department: "Design",
    type: "Full-time",
    location: "Los Angeles / Remote",
    salary: "$70,000 - $110,000",
    experience: "2-4 years",
    skills: ["Figma", "Prototyping", "User Research", "Design Systems"],
    description: "Create beautiful, user-centered designs that drive engagement and conversions.",
    requirements: [
      "Portfolio of digital products",
      "Figma & design tools expertise",
      "User research experience",
      "Design system knowledge",
    ],
    benefits: ["Creative Freedom", "Design Tools Budget", "Flexible Schedule", "Health Insurance"],
    icon: Palette,
    color: "from-pink-500 to-rose-500",
  },
  {
    id: 4,
    title: "Data Analyst Intern",
    department: "Analytics",
    type: "Internship",
    location: "Remote",
    salary: "$25 - $35/hour",
    experience: "Student/Graduate",
    skills: ["Python", "SQL", "Tableau", "Statistics"],
    description: "Analyze marketing data to uncover insights that drive strategic decisions.",
    requirements: [
      "Currently pursuing degree",
      "Basic Python/SQL knowledge",
      "Statistics background",
      "Curious mindset",
    ],
    benefits: ["Mentorship", "Real Projects", "Learning Opportunities", "Potential Full-time"],
    icon: BarChart3,
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: 5,
    title: "Content Marketing Specialist",
    department: "Marketing",
    type: "Full-time",
    location: "Chicago / Remote",
    salary: "$55,000 - $75,000",
    experience: "1-3 years",
    skills: ["Content Strategy", "SEO Writing", "Social Media", "Analytics"],
    description: "Create compelling content that tells our clients' stories and drives engagement.",
    requirements: [
      "Excellent writing skills",
      "Content strategy experience",
      "SEO knowledge",
      "Social media expertise",
    ],
    benefits: ["Creative Projects", "Professional Development", "Flexible Hours", "Health Insurance"],
    icon: Heart,
    color: "from-orange-500 to-red-500",
  },
  {
    id: 6,
    title: "Growth Hacker Intern",
    department: "Growth",
    type: "Internship",
    location: "Remote",
    salary: "$20 - $30/hour",
    experience: "Student/Graduate",
    skills: ["Experimentation", "Analytics", "Marketing", "Creativity"],
    description: "Experiment with innovative growth strategies and help scale our clients' businesses.",
    requirements: [
      "Entrepreneurial mindset",
      "Basic marketing knowledge",
      "Analytical thinking",
      "Willingness to experiment",
    ],
    benefits: ["Startup Experience", "Mentorship", "Growth Opportunities", "Networking"],
    icon: Zap,
    color: "from-indigo-500 to-purple-500",
  },
]

export function CareersSection() {
  const [selectedJob, setSelectedJob] = useState<number | null>(null)
  const [applicationStep, setApplicationStep] = useState(0)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    portfolio: "",
    coverLetter: "",
    resume: null as File | null,
  })
  const [filter, setFilter] = useState("all")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const filteredJobs = jobPositions.filter((job) => {
    if (filter === "all") return true
    if (filter === "internship") return job.type === "Internship"
    if (filter === "full-time") return job.type === "Full-time"
    return job.department.toLowerCase() === filter
  })

  const handleApply = (jobId: number) => {
    setSelectedJob(jobId)
    setApplicationStep(1)
  }

  const handleSubmitApplication = async () => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setSubmitted(true)
    setTimeout(() => {
      setSelectedJob(null)
      setApplicationStep(0)
      setSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        experience: "",
        portfolio: "",
        coverLetter: "",
        resume: null,
      })
    }, 3000)
  }

  const selectedJobData = jobPositions.find((job) => job.id === selectedJob)

  return (
    <section id="careers" className="py-16 sm:py-20 lg:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <Badge className="bg-green-500/10 text-green-400 border-green-500/20 mb-4 sm:mb-6 text-xs sm:text-sm font-medium">
            Join Our Team
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 sm:mb-8 font-poppins">
            <span className="bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">Build Your</span>
            <br />
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Dream Career
            </span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed">
            Join a team of passionate innovators who are shaping the future of digital marketing. We offer incredible
            opportunities for both experienced professionals and ambitious interns.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 sm:mb-16">
          {[
            { key: "all", label: "All Positions" },
            { key: "full-time", label: "Full-time" },
            { key: "internship", label: "Internships" },
            { key: "marketing", label: "Marketing" },
            { key: "engineering", label: "Engineering" },
            { key: "design", label: "Design" },
          ].map((filterOption) => (
            <Button
              key={filterOption.key}
              onClick={() => setFilter(filterOption.key)}
              variant={filter === filterOption.key ? "default" : "outline"}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300 hover:scale-105 ${
                filter === filterOption.key
                  ? "bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white border-0"
                  : "bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white border-0"
              }`}
            >
              {filterOption.label}
            </Button>
          ))}
        </div>

        {/* Job Listings */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {filteredJobs.map((job, index) => {
            const Icon = job.icon
            return (
              <Card
                key={job.id}
                className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 group cursor-pointer overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-start justify-between mb-4 sm:mb-6">
                    <div
                      className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-r ${job.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <Badge
                      className={`${
                        job.type === "Internship"
                          ? "bg-green-500/20 text-green-300 border-green-500/30"
                          : "bg-blue-500/20 text-blue-300 border-blue-500/30"
                      }`}
                    >
                      {job.type}
                    </Badge>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-violet-300 transition-colors font-poppins">
                    {job.title}
                  </h3>

                  <p className="text-white/70 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{job.description}</p>

                  <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                    <div className="flex items-center text-xs sm:text-sm text-white/60">
                      <MapPin className="w-4 h-4 mr-2 sm:mr-3 text-violet-400" />
                      {job.location}
                    </div>
                    <div className="flex items-center text-xs sm:text-sm text-white/60">
                      <DollarSign className="w-4 h-4 mr-2 sm:mr-3 text-green-400" />
                      {job.salary}
                    </div>
                    <div className="flex items-center text-xs sm:text-sm text-white/60">
                      <Briefcase className="w-4 h-4 mr-2 sm:mr-3 text-blue-400" />
                      {job.experience}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                    {job.skills.slice(0, 3).map((skill, idx) => (
                      <Badge
                        key={idx}
                        className="bg-gradient-to-r from-violet-500/20 to-purple-500/20 text-violet-300 border-violet-500/30 text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                    {job.skills.length > 3 && (
                      <Badge className="bg-white/10 text-white/60 border-white/20 text-xs">
                        +{job.skills.length - 3} more
                      </Badge>
                    )}
                  </div>

                  <Button
                    onClick={() => handleApply(job.id)}
                    className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white py-3 rounded-full transition-all duration-300 hover:scale-105 group/btn"
                  >
                    Apply Now
                    <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Company Culture */}
        <div className="text-center mb-16 sm:mb-20">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-6 sm:mb-8 font-poppins">
            Why Work With Us?
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: Users,
                title: "Amazing Team",
                description: "Work with passionate, talented people who inspire each other",
              },
              {
                icon: GraduationCap,
                title: "Growth Opportunities",
                description: "Continuous learning and career advancement programs",
              },
              {
                icon: Heart,
                title: "Work-Life Balance",
                description: "Flexible schedules and remote work options",
              },
              {
                icon: Star,
                title: "Competitive Benefits",
                description: "Health insurance, stock options, and learning budgets",
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <benefit.icon className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-4 text-violet-400" />
                  <h4 className="text-lg font-bold text-white mb-2 font-poppins">{benefit.title}</h4>
                  <p className="text-white/70 text-sm leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="bg-black/90 backdrop-blur-xl border-white/20 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white font-poppins">
                  {submitted ? "Application Submitted!" : `Apply for ${selectedJobData?.title}`}
                </h3>
                <Button
                  onClick={() => setSelectedJob(null)}
                  variant="ghost"
                  size="sm"
                  className="text-white/60 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {submitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2">Thank you for applying!</h4>
                  <p className="text-white/70">
                    We've received your application and will get back to you within 48 hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    handleSubmitApplication()
                  }}
                  className="space-y-6"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white font-medium mb-2">Full Name *</label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-violet-500"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">Email *</label>
                      <Input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-violet-500"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white font-medium mb-2">Phone</label>
                      <Input
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-violet-500"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">Years of Experience</label>
                      <Input
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                        className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-violet-500"
                        placeholder="3 years"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Portfolio/LinkedIn URL</label>
                    <Input
                      value={formData.portfolio}
                      onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-violet-500"
                      placeholder="https://linkedin.com/in/johndoe"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Cover Letter *</label>
                    <Textarea
                      required
                      value={formData.coverLetter}
                      onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-violet-500 resize-none"
                      rows={4}
                      placeholder="Tell us why you're perfect for this role..."
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Resume *</label>
                    <div className="border-2 border-dashed border-white/20 rounded-lg p-6 text-center hover:border-violet-500/50 transition-colors">
                      <Upload className="w-8 h-8 text-white/50 mx-auto mb-2" />
                      <p className="text-white/70 text-sm">
                        Drop your resume here or <span className="text-violet-400 cursor-pointer">browse files</span>
                      </p>
                      <p className="text-white/50 text-xs mt-1">PDF, DOC, DOCX up to 10MB</p>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white py-3 rounded-full transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        Submitting Application...
                      </div>
                    ) : (
                      "Submit Application"
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </section>
  )
}
