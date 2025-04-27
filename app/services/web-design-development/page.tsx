import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function WebDesignPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#121212] text-[#f4f4f4]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-[#00f5d5] px-3 py-1 text-sm text-[#121212] font-medium">
                    Web Design & Development / تصميم وتطوير المواقع الإلكترونية
                  </div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Web Design & Development</h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                    Custom websites that blend stunning design with powerful functionality.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-[#00f5d5] text-[#121212] hover:bg-[#00f5d5]/80">
                    Start Your Website Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="border-[#f4f4f4] text-[#f4f4f4] hover:bg-[#f4f4f4]/10">
                    View Web Portfolio
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Web Design & Development"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
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
                  Ready to create your website?
                </h2>
                <p className="max-w-[600px] text-[#121212]/70 md:text-xl/relaxed">
                  Let's discuss your project and bring your vision to life.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-[#00f5d5] text-[#121212] hover:bg-[#00f5d5]/80">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-[#121212] text-[#121212] hover:bg-[#121212]/10">
                  Request a Website Audit
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
