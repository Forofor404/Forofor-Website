import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#121212]">
      <header className="sticky top-0 z-40 border-b border-[#00f5d5] bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-[0_0_20px_#00f5d5]">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/logos/FOROFOR_LOGO_-07.svg" alt="Forofor Logo" width={200} height={200} />
          </div>
          <nav className="hidden md:flex gap-6">
            <Link className="text-sm font-medium hover:text-[#00f5d5] transition-colors" href="#about">About</Link>
            <Link className="text-sm font-medium hover:text-[#00f5d5] transition-colors" href="#services">Services</Link>
            <Link className="text-sm font-medium hover:text-[#00f5d5] transition-colors" href="#work">Portfolio</Link>
            <Link className="text-sm font-medium hover:text-[#00f5d5] transition-colors" href="#testimonials">Testimonials</Link>
            <Link className="text-sm font-medium hover:text-[#00f5d5] transition-colors" href="#contact">Contact</Link>
          </nav>
          <Button className="hidden md:inline-flex bg-[#00f5d5] text-[#121212] hover:bg-[#00f5d5]/80 hover:shadow-[0_0_20px_#00f5d5] rounded-none">Get Started</Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-32 lg:py-48 bg-[#121212] text-[#f4f4f4]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2 my-8">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Fill the Void<span className="text-[#00f5d5] animate-pulse">▮</span></h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">We create. We automate. We host. We make your “Where did it go?” moments a thing of the past.</p>
                </div>
                <div className="flex flex-col gap-4 min-[400px]:flex-row">
                  <Button className="bg-[#f4f4f4] border-[#f4f4f4] text-[#121212] hover:text-[#f4f4f4] hover:bg-[#f4f4f4]/10 hover:shadow-[0_0_10px_#00f5d5] rounded-none" variant="outline">Our Work</Button>
                  <Button className="bg-[#00f5d5] text-[#121212] hover:bg-[#00f5d5]/80 hover:shadow-[0_0_20px_#00f5d5] rounded-none">Get Started<ArrowRight className="ml-2 h-4 w-4" /></Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-[350px] md:h-[450px] md:w-[450px]">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00f5d5] to-transparent opacity-30 blur-3xl"></div>
                  <Image src="/logos/FOROFOR_LOGO_-11.svg" alt="Hero Image" width={450} height={450} className="relative z-10" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-[#f4f4f4]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 lg:">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block bg-[#00f5d5] px-3 py-1 text-sm text-[#121212] font-medium hover:shadow-[0_0_10px_#00f5d5] mb-8">About Us</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#121212]">The Crew Behind the Code.</h2>
                  <p className="max-w-[600px] text-[#121212]/70 md:text-xl/relaxed">Forofor was founded in 2024 in Lebanon with a simple mission: turn digital chaos into clarity. Behind every line of code and pixel-perfect design is a tight-knit team that lives for solving problems and does it with precision, creativity, and just the right amount of caffeine.</p>
                </div>
                <div className="flex flex-col gap-2 min-[800px]:flex-row">
                  <Button className="bg-[#00f5d5] text-[#121212] hover:bg-[#00f5d5]/80 hover:shadow-[0_0_20px_#00f5d5] rounded-none">Meet the humans</Button>
                  <Button className="bg-[#121212] border-[#121212] text-[#f4f4f4] hover:text-[#121212] hover:bg-[#121212]/10 hover:shadow-[0_0_10px_#00f5d5] rounded-none" variant="outline">Learn how we build (and why it works)</Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4">
                  <div className="overflow-hidden">
                    <Image src="/logos/FOROFOR_LOGO_-11.svg" alt="Team at work" width={300} height={300} className="aspect-square object-cover"/>
                  </div>
                  <div className="overflow-hidden">
                    <Image src="/logos/FOROFOR_LOGO_-09.svg" alt="Office space" width={300} height={300} className="aspect-square object-cover"/>
                  </div>
                  <div className="overflow-hidden">
                    <Image src="/logos/FOROFOR_LOGO_-09.svg" alt="Team meeting" width={300} height={300} className="aspect-square object-cover"/>
                  </div>
                  <div className="overflow-hidden">
                    <Image src="/logos/FOROFOR_LOGO_-11.svg" alt="Design process" width={300} height={300} className="aspect-square object-cover"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-[#121212]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block bg-[#00f5d5] px-3 py-1 text-sm text-[#121212] font-medium hover:shadow-[0_0_10px_#00f5d5] mb-8">Services</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#f4f4f4]">What We Ship</h2>
                <p className="max-w-[900px] text-[#f4f4f4]/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">No fluff. Just digital builds that work.<br></br>From zero to launch without a single 404.</p>
              </div>
            </div>
            <div className="mx-auto grid grid-cols-1 max-w-5xl items-center gap-8 py-16">
              <div className="border p-6 transition-all border-[#00f5d5] shadow-[0_0_10px_#00f5d5] hover:shadow-[5px_5px_30px_#00f5d5]">
                <h3 className="text-xl font-bold text-[#f4f4f4]">UI/UX Design</h3>
                <p className="mt-2 text-[#00f5d5]">We don't guess what looks good — we engineer experiences that users love and can't stop clicking.</p>
                <p className="mt-4 text-[#f4f4f4]/70"> From wireframes to high-fidelity magic, we obsess over every pixel and micro-interaction. Expect intuitive, beautiful designs that guide your users exactly where you want them — without the rage clicks.</p>
              </div>
              <div className="border p-6 transition-all border-[#00f5d5] shadow-[0_0_10px_#00f5d5] hover:shadow-[0_0_30px_#00f5d5]">
                <h3 className="text-xl font-bold text-[#f4f4f4]">Web Development</h3>
                <p className="mt-2 text-[#00f5d5]">Not your average “looks fine on desktop” builds.</p>
                <p className="mt-4 text-[#f4f4f4]/70"> We craft web platforms that are lightning-fast, fully responsive, and built to scale without breaking a sweat. Think custom code that's clean, optimized, and doesn't mysteriously crash when traffic spikes.</p>
              </div>
              <div className="border p-6 transition-all border-[#00f5d5] shadow-[0_0_10px_#00f5d5] hover:shadow-[0_0_30px_#00f5d5]">
                <h3 className="text-xl font-bold text-[#f4f4f4]">App Development</h3>
                <p className="mt-2 text-[#00f5d5]">The world's gone mobile — and so should you.</p>
                <p className="mt-2 text-[#f4f4f4]/70">We build apps that glide like butter, stay rock-solid under pressure, and deliver top-tier experiences across iOS and Android. Whether you need a native powerhouse or a cross-platform beast, we've got the keys.</p>
              </div>
              <div className="border p-6 transition-all border-[#00f5d5] shadow-[0_0_10px_#00f5d5] hover:shadow-[0_0_30px_#00f5d5]">
                <h3 className="text-xl font-bold text-[#f4f4f4]">Admin Interfaces</h3>
                <p className="mt-2 text-[#00f5d5]">Let's be real: most admin dashboards are ugly, clunky, and a pain to use. Not here.</p>
                <p className="mt-2 text-[#f4f4f4]/70">We build sleek, no-nonsense control panels that make managing your business feel good. Fast-loading, foolproof, and powerful enough to make your team say: “Wait, that's it? That was easy.”</p>
              </div>
              <div className="border p-6 transition-all border-[#00f5d5] shadow-[0_0_10px_#00f5d5] hover:shadow-[0_0_30px_#00f5d5]">
                <h3 className="text-xl font-bold text-[#f4f4f4]">Cloud Setup & Management</h3>
                <p className="mt-2 text-[#00f5d5]">Cloud isn't magic. It's just tech — and we make it work for you.</p>
                <p className="mt-2 text-[#f4f4f4]/70">We handle everything from server setup to scaling strategies, backups, and bulletproof security. Whether you're launching your first app or juggling a fleet of services, we keep your infrastructure smooth, secure, and stress-free.</p>
              </div>
              <div className="border p-6 transition-all border-[#00f5d5] shadow-[0_0_10px_#00f5d5] hover:shadow-[0_0_30px_#00f5d5]">
                <h3 className="text-xl font-bold text-[#f4f4f4]">Domain Hosting</h3>
                <p className="mt-2 text-[#00f5d5]">Your online home deserves a solid foundation.</p>
                <p className="mt-2 text-[#f4f4f4]/70">We register, manage, and host your domain with the same precision we bring to everything else. Reliable, fast, and fully secured — because if your site's down, your business is too. And we don't let that happen.</p>
              </div>
              <div className="border p-6 transition-all border-[#00f5d5] shadow-[0_0_10px_#00f5d5] hover:shadow-[0_0_30px_#00f5d5]">
                <h3 className="text-xl font-bold text-[#f4f4f4]">Email Hosting</h3>
                <p className="mt-2 text-[#00f5d5]">If your emails aren't landing, your deals aren't closing.</p>
                <p className="mt-2 text-[#f4f4f4]/70">We run robust, enterprise-grade email hosting with ironclad deliverability. No more missed messages, no more support tickets that “mysteriously disappeared.” Fully managed, fully secured — and always landing in the inbox.</p>
              </div>
              <div className="border p-6 transition-all border-[#00f5d5] shadow-[0_0_10px_#00f5d5] hover:shadow-[0_0_30px_#00f5d5]">
                <h3 className="text-xl font-bold text-[#f4f4f4]">Secure Code Reviews</h3>
                <p className="mt-2 text-[#00f5d5]">We love breaking things — before the bad guys do.</p>
                <p className="mt-2 text-[#f4f4f4]/70">Our security team digs deep into your codebase, hunting for vulnerabilities and patching them fast. Whether it's a new build or legacy code held together with duct tape, we've got eyes on it. Because your reputation (and data) deserves the best defense.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="w-full py-12 md:py-24 lg:py-32 bg-[#f4f4f4] text-[#121212]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block bg-[#00f5d5] px-3 py-1 text-sm text-[#121212] font-medium hover:shadow-[0_0_10px_#00f5d5] mb-8">Portfolio</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Work We're Proud Of</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">Every project here tells a story. We're lucky to collaborate with incredible clients who trust us to bring their visions to life — and we don't take that lightly.</p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((item) => (
                <div key={item} className="group relative overflow-hidden">
                  <Image src={`/placeholder.svg?height=400&width=600`} alt={`Project ${item}`} width={600} height={400} className="aspect-video object-cover transition-transform duration-300 group-hover:scale-105"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-80"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <h3 className="text-xl font-bold text-white">Project Title {item}</h3>
                    <p className="mt-2 text-center text-white/80">Web Development</p>
                    <Button variant="link" className="mt-4 text-[#00f5d5]">View Project</Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <Button className="bg-[#00f5d5] text-[#121212] hover:bg-[#00f5d5]/80 hover:shadow-[0_0_20px_#00f5d5] rounded-none">See What All the Fuss Is About</Button>
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-[#121212] text-[#f4f4f4]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block bg-[#00f5d5] px-3 py-1 text-sm text-[#121212] font-medium hover:shadow-[0_0_10px_#00f5d5] mb-8">Testimonials</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Don't Just Take Our Word for It</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">We could talk all day about what we do—but nothing beats hearing it straight from the people we build for. Here's what our awesome clients have to say about working with us.</p>
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
                <div key={index} className="border border-[#00f5d5] bg-[#121212] p-6 shadow-[0_0_10px_#00f5d5] hover:shadow-[0_0_20px_#00f5d5]">
                  <div className="flex items-start space-x-4">
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
                  <div className="inline-block bg-[#00f5d5] px-3 py-1 text-sm text-[#121212] font-medium hover:shadow-[0_0_10px_#00f5d5] mb-8">Contact Us</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#121212]">Ready to Build Something Awesome?</h2>
                  <p className="max-w-[600px] text-[#121212]/70 md:text-xl/relaxed">Big idea? Tiny idea? Half-baked idea? We're all ears. Slide into our inbox, hit us up by phone, or stalk us on socials (we don't judge).</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center">
                      <Image src="/logos/FOROFOR_LOGO_-11.svg" alt="Mail Icon" width={240} height={240}/>
                    </div>
                    <div>
                      <p className="text-sm text-[#121212]/60">Email</p>
                      <p className="font-medium text-[#121212]">hello@forofor.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center">
                      <Image src="/logos/FOROFOR_LOGO_-11.svg" alt="Phone Icon" width={240} height={240}/>
                    </div>
                    <div>
                      <p className="text-sm text-[#121212]/60">Phone</p>
                      <p className="font-medium text-[#121212]">+961 76 134 434</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center">
                      <Image src="/logos/FOROFOR_LOGO_-11.svg" alt="Socials Icon" width={240} height={240}/>
                    </div>
                    <div>
                      <p className="text-sm text-[#121212]/60">Social</p>
                      <div className="flex space-x-2">
                        <Link href="#" className="text-[#121212] hover:text-[#00f5d5]">Instagram</Link>
                        <span className="text-[#00f5d5]">•</span>
                        <Link href="#" className="text-[#121212] hover:text-[#00f5d5]">Facebook</Link>
                        <span className="text-[#00f5d5]">•</span>
                        <Link href="#" className="text-[#121212] hover:text-[#00f5d5]">LinkedIn</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border border-[#00f5d5] bg-white p-6 shadow-[0_0_10px_#00f5d5]">
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-sm font-medium leading-none text-[#121212]">First name:</label>
                      <input id="first-name" className="flex h-10 w-full border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00f5d5] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="John"/>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-sm font-medium leading-none text-[#121212]">Last name</label>
                      <input id="last-name" className="flex h-10 w-full border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00f5d5] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Doe"/>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium leading-none text-[#121212]">Email</label>
                    <input id="email" type="email" className="flex h-10 w-full border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00f5d5] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="email@example.com"/>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium leading-none text-[#121212]">Message</label>
                    <textarea id="message" className="flex min-h-[120px] w-full border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00f5d5] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="No spam, promise!"></textarea>
                  </div>
                  <Button className="w-full bg-[#121212] text-[#f4f4f4] hover:bg-[#00f5d5] hover:text-[#121212] rounded-none">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-[#121212] py-6 text-[#f4f4f4]">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
          <div className="flex items-center gap-2">
            <Image src="/logos/FOROFOR_LOGO_-02.svg" alt="Forofor Logo" width={200} height={200} />
          </div>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">© 2024 Forofor. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="text-[#f4f4f4] hover:text-[#00f5d5]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
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
