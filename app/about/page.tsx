import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#121212] text-[#f4f4f4]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#00f5d5] px-3 py-1 text-sm text-[#121212] font-medium">
                  About Us / من نحن
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Forofor</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Learn about our story, our team, and our mission to create exceptional digital experiences.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content sections would go here */}

        <section className="w-full py-12 md:py-24 bg-[#f4f4f4]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-[#121212]">
                  Ready to start your project?
                </h2>
                <p className="max-w-[600px] text-[#121212]/70 md:text-xl/relaxed">
                  Let's create something amazing together.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-[#00f5d5] text-[#121212] hover:bg-[#00f5d5]/80">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-[#121212] text-[#121212] hover:bg-[#121212]/10">
                  View Our Work
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
