import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function PortfolioPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#121212] text-[#f4f4f4]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#00f5d5] px-3 py-1 text-sm text-[#121212] font-medium">
                  Portfolio / أعمالنا
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Work</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our latest projects and see how we've helped our clients achieve their goals.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-[#f4f4f4]">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-[#121212] text-[#f4f4f4]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Ready to start your project?</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  Let's create something amazing together.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-[#00f5d5] text-[#121212] hover:bg-[#00f5d5]/80">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
