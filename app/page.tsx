import Link from "next/link"
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { ExperienceItem } from "@/components/experience-item"
import { ContactForm } from "@/components/contact-form"
import { ThemeToggle } from "@/components/theme-toggle"



export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <ThemeToggle />
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            <span className="text-primary">Portfolio</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#experience" className="text-sm font-medium hover:text-primary transition-colors">
              Experience
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <Button asChild size="sm">
            <Link href="https://wa.me/2348033921615" target="_blank">
              Let's Talk
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Hi, I'm <span className="text-primary">Precious Enuagwune</span>
                  </h1>
                  <p className="text-xl text-muted-foreground">
                    Backend Developer specializing in building exceptional digital experiences
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="#projects">View My Work</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/resume.pdf" target="_blank">
                      <Download className="mr-2 h-4 w-4" />
                      Download Resume
                    </Link>
                  </Button>
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <Link
                    href="https://github.com/PreciousIfeaka"
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground hover:text-primary"
                  >
                    <Github className="h-6 w-6" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/precious-enuagwune-029b311b3/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground hover:text-primary"
                  >
                    <Linkedin className="h-6 w-6" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link href="mailto:preciousifeaka@gmail.com" className="text-muted-foreground hover:text-primary">
                    <Mail className="h-6 w-6" />
                    <span className="sr-only">Email</span>
                  </Link>
                  <Link
                    href="https://wa.me/2348033921615"
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground hover:text-primary"
                  >
                    <img src="/whatsapp.svg" alt="WhatsApp" className="h-6 w-6" />
                    <span className="sr-only">WhatsApp</span>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative aspect-square overflow-hidden rounded-full border-8 border-muted bg-muted w-[280px] h-[280px] md:w-[400px] md:h-[400px]">
                  <img
                    src="/port-photo.webp?height=400&width=400"
                    alt="Profile"
                    className="object-cover"
                    width={400}
                    height={400}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">About Me</h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 mb-6">
              I am a skilled backend developer with proven expertise in Node.js, Express.js, Nestjs, TypeScript, Java and
              Spring, specializing in building scalable, efficient, and secure server-side applications. 
              With over 2 years of experience, I've worked on a variety of projects ranging from small business websites to
                large-scale enterprise applications.
              </p>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">Lagos, Nigeria</span>
              </div>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8">
                <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                  <div className="rounded-full bg-primary/10 p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Reliable</h3>
                  <p className="text-sm text-muted-foreground text-center">
                    I deliver projects on time and ensure they meet the highest standards of quality.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                  <div className="rounded-full bg-primary/10 p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z" />
                      <path d="M12 13v8" />
                      <path d="M5 13v6a2 2 0 0 0 2 2h8" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Creative</h3>
                  <p className="text-sm text-muted-foreground text-center">
                    I approach problems with innovative solutions and think outside the box.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                  <div className="rounded-full bg-primary/10 p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Collaborative</h3>
                  <p className="text-sm text-muted-foreground text-center">
                    I work effectively with teams and communicate clearly throughout the development process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Skills & Expertise</h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 mb-10">
                I've worked with a variety of technologies and frameworks to create responsive and efficient
                applications.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-4xl">
                <SkillBadge name="JavaScript" level={90} />
                <SkillBadge name="TypeScript" level={85} />
                <SkillBadge name="Express.js" level={90} />
                <SkillBadge name="Nest.js" level={85} />
                <SkillBadge name="Node.js" level={80} />
                <SkillBadge name="Java" level={95} />
                <SkillBadge name="Spring" level={80} />
                <SkillBadge name="Linux" level={75} />
                <SkillBadge name="SQL" level={80} />
                <SkillBadge name="MongoDB" level={75} />
                <SkillBadge name="Git" level={85} />
                <SkillBadge name="Docker" level={70} />
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Featured Projects</h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 mb-10">
                Here are some of the projects I've worked on that showcase my skills and expertise.
              </p>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                <ProjectCard
                  title="E-commerce API"
                  description="An extensive e-commerce API with product management, cart functionality, and payment processing."
                  tags={["Node.js", "Express.js", "PostgreSQL", "TypeORM", "Stripe"]}
                  imageUrl="/e-commerce.webp?height=300&width=400"
                  demoUrl="https://e-commerce-0-n25c.onrender.com/"
                  codeUrl="https://github.com/PreciousIfeaka/E-Commerce_0"
                />
                <ProjectCard
                  title="Order Management API"
                  description="A collaborative order management application with real-time communication features."
                  tags={["Nest.js", "TypeScript", "Prisma", "Socket.io"]}
                  imageUrl="/order-chat.webp?height=300&width=400"
                  demoUrl="https://order-management-0rp4.onrender.com"
                  codeUrl="https://github.com/PreciousIfeaka/order_management"
                />
                <ProjectCard
                  title="Quizzar"
                  description="A responsive interactive trivia quiz platform where users can take quiz based on selected field."
                  tags={["HTML", "CSS", "JavaScript"]}
                  imageUrl="/quizzar.webp?height=300&width=400"
                  demoUrl="https://quizzar-two.vercel.app/"
                  codeUrl="https://github.com/PreciousIfeaka/QUIZzar"
                />
                <ProjectCard
                  title="HomeworkAi"
                  description="A software the uses AI to help student with their homework, help teachers with grading
                                and help parents monitor their children’s academic work."
                  tags={["Express.js", "Next.js", "PostgreSQL"]}
                  imageUrl="/homeworkai.webp?height=300&width=400"
                  demoUrl="https://aiforhomework.com/"
                  codeUrl="#"
                />
                <ProjectCard
                  title="Telex Movie Recommender"
                  description="An integration API that provides movie recommendations for users in a channel at set intervals based on selected genre."
                  tags={["Express.js", "TMDB API", "Telex"]}
                  imageUrl="/telex-movie.webp?height=300&width=400"
                  demoUrl="https://telex.im/"
                  codeUrl="https://github.com/PreciousIfeaka/telex-movie-recommender"
                />
                <ProjectCard
                  title="Music Booking API"
                  description="An API that that simulates a music booking system and event management."
                  tags={["Nest.js", "PostgreSQL", "Socket.io", "Stripe"]}
                  imageUrl="/music-booking.webp?height=300&width=400"
                  demoUrl="https://github.com/PreciousIfeaka/music-booking-api"
                  codeUrl="https://github.com/PreciousIfeaka/music-booking-api"
                />
              </div>
              <Button variant="outline" className="mt-8">
                <Link href="#projects" className="flex items-center">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Work Experience</h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 mb-10">
                My professional journey and the companies I've had the pleasure to work with.
              </p>
              <div className="space-y-8 w-full max-w-3xl">
              <ExperienceItem
                  title="Backend Developer"
                  company="Peterx Digital Solutions"
                  period="November, 2024 - Present"
                  description="Developed and maintained full-stack applications for various clients. Collaborated with design and product teams to deliver high-quality software solutions."
                  skills={["Nest.js", "Express.js", "TypeScript", "PostgreSQL", "TypeORM", "AWS EC2"]}
                />
                <ExperienceItem
                  title="Backend Developer (Contract)"
                  company="Teknesis Limited"
                  period="August, 2024 - April, 2025"
                  description="Collaborating with cross-functional teams to ensure smooth delivery of custom software solutions, following Agile methodologies."
                  skills={["Nest.js", "Express.js", "TypeScript", "PostgreSQL", "AWS EC2"]}
                />
                <ExperienceItem
                  title="Backend Development Intern (Finalist)"
                  company="HNG Tech"
                  period="June, 2024 - September, 2024"
                  description="Developed and maintained full-stack applications for various clients. Collaborated with design and product teams to deliver high-quality software solutions."
                  skills={["TypeScript", "Node.js", "Express", "PostgreSQL"]}
                />
                <ExperienceItem
                  title="IT Support & Networking Intern"
                  company="Asset and Resource Management (ARM)"
                  period="June, 2023 - August, 2023"
                  description="I was taken through the basic operations of system networking where I had the opportunity to work with the networking engineer who was my supervisor. I also Learnt how to perform basic and advanced activities relating to IT support to employees."
                  skills={["Kali-Linux", "Networking", "DNS", "SysAdmin"]}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Get In Touch</h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 mb-10">
                Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
              </p>
              <div className="grid w-full max-w-3xl gap-8 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold">Contact Information</h3>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <a href="mailto:your.email@example.com" className="hover:text-primary transition-colors">
                        preciousifeaka@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span>Lagos, Nigeria</span>
                    </div>
                    <div className="flex items-center gap-3 mt-6">
                      <Link
                        href="https://github.com/PreciousIfeaka"
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted-foreground hover:text-primary"
                      >
                        <Github className="h-6 w-6" />
                        <span className="sr-only">GitHub</span>
                      </Link>
                      <Link
                        href="https://www.linkedin.com/in/precious-enuagwune-029b311b3/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted-foreground hover:text-primary"
                      >
                        <Linkedin className="h-6 w-6" />
                        <span className="sr-only">LinkedIn</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Precious Enuagwune. All rights reserved.</p>
          <p className="text-sm text-muted-foreground">Built with Next.js, Tailwind CSS, and shadcn/ui</p>
        </div>
      </footer>
    </div>
  )
}
