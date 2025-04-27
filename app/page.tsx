import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Code, Globe, Layers, Mail, MessageSquare, Phone, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-[#00f5d5]">forofor</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#services" className="text-sm font-medium hover:text-[#00f5d5] transition-colors">
              Services
            </Link>
            <Link href="#work" className="text-sm font-medium hover:text-[#00f5d5] transition-colors">
              Work
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-[#00f5d5] transition-colors">
              About
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-[#00f5d5] transition-colors">
              Testimonials
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-[#00f5d5] transition-colors">
              Contact
            </Link>
          </nav>
          <Button className="hidden md:inline-flex bg-[#00f5d5] text-[#121212] hover:bg-[#00f5d5]/80">
            Get Started
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
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
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#121212] text-[#f4f4f4]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    We Build Digital <span className="text-[#00f5d5]">Experiences</span> That Matter
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    forofor is a digital agency specializing in creating stunning websites, powerful applications, and
                    memorable brands.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-[#00f5d5] text-[#121212] hover:bg-[#00f5d5]/80">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="border-[#f4f4f4] text-[#f4f4f4] hover:bg-[#f4f4f4]/10">
                    Our Work
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-[350px] md:h-[450px] md:w-[450px]">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00f5d5] to-transparent opacity-30 blur-3xl"></div>
                  <Image
                    src="/placeholder.svg?height=450&width=450"
                    alt="Hero Image"
                    width={450}
                    height={450}
                    className="relative z-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-[#f4f4f4]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#00f5d5] px-3 py-1 text-sm text-[#121212] font-medium">
                  Services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#121212]">What We Offer</h2>
                <p className="max-w-[900px] text-[#121212]/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We provide end-to-end digital solutions to help your business thrive in the digital landscape.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-[#00f5d5]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#00f5d5]/10">
                  <Globe className="h-6 w-6 text-[#00f5d5]" />
                </div>
                <h3 className="text-xl font-bold text-[#121212]">Web Development</h3>
                <p className="mt-2 text-[#121212]/70">
                  Custom websites built with the latest technologies to deliver exceptional user experiences.
                </p>
              </div>
              <div className="rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-[#00f5d5]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#00f5d5]/10">
                  <Layers className="h-6 w-6 text-[#00f5d5]" />
                </div>
                <h3 className="text-xl font-bold text-[#121212]">UI/UX Design</h3>
                <p className="mt-2 text-[#121212]/70">
                  Intuitive and engaging user interfaces that enhance user experience and drive conversions.
                </p>
              </div>
              <div className="rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-[#00f5d5]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#00f5d5]/10">
                  <Code className="h-6 w-6 text-[#00f5d5]" />
                </div>
                <h3 className="text-xl font-bold text-[#121212]">App Development</h3>
                <p className="mt-2 text-[#121212]/70">
                  Native and cross-platform mobile applications that deliver seamless experiences.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="w-full py-12 md:py-24 lg:py-32 bg-[#121212] text-[#f4f4f4]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#00f5d5] px-3 py-1 text-sm text-[#121212] font-medium">
                  Portfolio
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Recent Work</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out some of our latest projects and see how we've helped our clients achieve their goals.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="group relative overflow-hidden rounded-lg">
                  <Image
                    src={`/placeholder.svg?height=400&width=600`}
                    alt={`Project ${item}`}
                    width={600}
                    height={400}
                    className="aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-80"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <h3 className="text-xl font-bold text-white">Project Title {item}</h3>
                    <p className="mt-2 text-center text-white/80">Web Development</p>
                    <Button variant="link" className="mt-4 text-[#00f5d5]">
                      View Project
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <Button className="bg-[#00f5d5] text-[#121212] hover:bg-[#00f5d5]/80">View All Projects</Button>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-[#f4f4f4]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-[#00f5d5] px-3 py-1 text-sm text-[#121212] font-medium">
                    About Us
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#121212]">
                    We're a team of digital experts
                  </h2>
                  <p className="max-w-[600px] text-[#121212]/70 md:text-xl/relaxed">
                    Founded in 2020, forofor has quickly established itself as a leading digital agency. Our team of
                    designers, developers, and strategists work together to create digital solutions that drive results.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-[#00f5d5] text-[#121212] hover:bg-[#00f5d5]/80">Meet Our Team</Button>
                  <Button variant="outline" className="border-[#121212] text-[#121212] hover:bg-[#121212]/10">
                    Our Process
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4">
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src="/placeholder.svg?height=300&width=300"
                      alt="Team at work"
                      width={300}
                      height={300}
                      className="aspect-square object-cover"
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src="/placeholder.svg?height=300&width=300"
                      alt="Office space"
                      width={300}
                      height={300}
                      className="aspect-square object-cover"
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src="/placeholder.svg?height=300&width=300"
                      alt="Team meeting"
                      width={300}
                      height={300}
                      className="aspect-square object-cover"
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src="/placeholder.svg?height=300&width=300"
                      alt="Design process"
                      width={300}
                      height={300}
                      className="aspect-square object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-[#121212] text-[#f4f4f4]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#00f5d5] px-3 py-1 text-sm text-[#121212] font-medium">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Clients Say</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Don't just take our word for it. Here's what our clients have to say about working with us.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              {[
                {
                  name: "Sarah Johnson",
                  role: "CEO, TechStart",
                  quote:
                    "Working with forofor was a game-changer for our business. They delivered a website that exceeded our expectations and has significantly improved our online presence.",
                },
                {
                  name: "Michael Chen",
                  role: "Marketing Director, GrowthLabs",
                  quote:
                    "The team at forofor is incredibly talented and professional. They took the time to understand our needs and delivered a solution that perfectly aligned with our vision.",
                },
                {
                  name: "Emma Williams",
                  role: "Founder, CreativeMinds",
                  quote:
                    "I've worked with many agencies over the years, but forofor stands out for their creativity, technical expertise, and commitment to delivering exceptional results.",
                },
              ].map((testimonial, index) => (
                <div key={index} className="rounded-lg border border-[#f4f4f4]/10 bg-[#121212] p-6 shadow-sm">
                  <div className="flex items-start space-x-4">
                    <div className="rounded-full bg-[#00f5d5]/10 p-2">
                      <MessageSquare className="h-6 w-6 text-[#00f5d5]" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-[#f4f4f4]/80">"{testimonial.quote}"</p>
                      <div className="pt-4">
                        <p className="font-medium text-[#00f5d5]">{testimonial.name}</p>
                        <p className="text-sm text-[#f4f4f4]/60">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-[#f4f4f4]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-[#00f5d5] px-3 py-1 text-sm text-[#121212] font-medium">
                    Contact Us
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#121212]">
                    Let's Start a Project Together
                  </h2>
                  <p className="max-w-[600px] text-[#121212]/70 md:text-xl/relaxed">
                    Ready to take your digital presence to the next level? Get in touch with us today to discuss your
                    project.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00f5d5]/10">
                      <Mail className="h-5 w-5 text-[#00f5d5]" />
                    </div>
                    <div>
                      <p className="text-sm text-[#121212]/60">Email</p>
                      <p className="font-medium text-[#121212]">hello@forofor.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00f5d5]/10">
                      <Phone className="h-5 w-5 text-[#00f5d5]" />
                    </div>
                    <div>
                      <p className="text-sm text-[#121212]/60">Phone</p>
                      <p className="font-medium text-[#121212]">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00f5d5]/10">
                      <Zap className="h-5 w-5 text-[#00f5d5]" />
                    </div>
                    <div>
                      <p className="text-sm text-[#121212]/60">Social</p>
                      <div className="flex space-x-2">
                        <Link href="#" className="text-[#121212] hover:text-[#00f5d5]">
                          Twitter
                        </Link>
                        <span>•</span>
                        <Link href="#" className="text-[#121212] hover:text-[#00f5d5]">
                          LinkedIn
                        </Link>
                        <span>•</span>
                        <Link href="#" className="text-[#121212] hover:text-[#00f5d5]">
                          Instagram
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-sm font-medium leading-none text-[#121212]">
                        First name
                      </label>
                      <input
                        id="first-name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00f5d5] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-sm font-medium leading-none text-[#121212]">
                        Last name
                      </label>
                      <input
                        id="last-name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00f5d5] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium leading-none text-[#121212]">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00f5d5] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium leading-none text-[#121212]">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00f5d5] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your message"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-[#00f5d5] text-[#121212] hover:bg-[#00f5d5]/80">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-[#121212] py-6 text-[#f4f4f4]">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-[#00f5d5]">forofor</span>
          </div>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2023 forofor. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-[#f4f4f4] hover:text-[#00f5d5]">
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
                className="h-5 w-5"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-[#f4f4f4] hover:text-[#00f5d5]">
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
                className="h-5 w-5"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="text-[#f4f4f4] hover:text-[#00f5d5]">
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
                className="h-5 w-5"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
