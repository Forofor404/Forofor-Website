import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, User } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#121212] text-[#f4f4f4]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#00f5d5] px-3 py-1 text-sm text-[#121212] font-medium">
                  Insights / المدونة
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Blog</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Insights, tips, and industry trends from our team of experts.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-[#f4f4f4]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <Link
                  href="#"
                  key={item}
                  className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md hover:border-[#00f5d5]"
                >
                  <div className="aspect-video w-full overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=300&width=500`}
                      alt={`Blog Post ${item}`}
                      width={500}
                      height={300}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-[#121212]/60 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>Jan 15, 2024</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>Forofor Team</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-[#121212] group-hover:text-[#00f5d5] transition-colors">
                      Blog Post Title {item}
                    </h3>
                    <p className="mt-2 text-[#121212]/70">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.
                    </p>
                    <div className="mt-4 flex items-center text-[#00f5d5]">
                      <span className="text-sm font-medium">Read more</span>
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-[#121212] text-[#f4f4f4]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Subscribe to our newsletter</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  Stay updated with the latest insights and news from our team.
                </p>
              </div>
              <div className="flex w-full max-w-md flex-col gap-2 min-[400px]:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button className="bg-[#00f5d5] text-[#121212] hover:bg-[#00f5d5]/80">Subscribe</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
