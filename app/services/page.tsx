import Link from "next/link"
import { ArrowRight, Globe, Layers, Smartphone, PenTool, LineChart } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#121212] text-[#f4f4f4]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#00f5d5] px-3 py-1 text-sm text-[#121212] font-medium">
                  Services / خدماتنا
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Comprehensive digital solutions tailored to your needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-[#f4f4f4]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Link
                href="/services/web-design-development"
                className="group relative overflow-hidden rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-[#00f5d5]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#00f5d5]/10">
                  <Globe className="h-6 w-6 text-[#00f5d5]" />
                </div>
                <h3 className="text-xl font-bold text-[#121212]">Web Design & Development</h3>
                <p className="mt-2 text-[#121212]/70">Custom websites built with the latest technologies.</p>
                <div className="mt-4 flex items-center text-[#00f5d5]">
                  <span className="text-sm font-medium">Learn more</span>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </Link>

              <Link
                href="/services/mobile-app-development"
                className="group relative overflow-hidden rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-[#00f5d5]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#00f5d5]/10">
                  <Smartphone className="h-6 w-6 text-[#00f5d5]" />
                </div>
                <h3 className="text-xl font-bold text-[#121212]">Mobile App Development</h3>
                <p className="mt-2 text-[#121212]/70">iOS & Android applications that deliver seamless experiences.</p>
                <div className="mt-4 flex items-center text-[#00f5d5]">
                  <span className="text-sm font-medium">Learn more</span>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </Link>

              <Link
                href="/services/branding-identity"
                className="group relative overflow-hidden rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-[#00f5d5]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#00f5d5]/10">
                  <PenTool className="h-6 w-6 text-[#00f5d5]" />
                </div>
                <h3 className="text-xl font-bold text-[#121212]">Branding & Identity</h3>
                <p className="mt-2 text-[#121212]/70">Create a memorable brand that resonates with your audience.</p>
                <div className="mt-4 flex items-center text-[#00f5d5]">
                  <span className="text-sm font-medium">Learn more</span>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </Link>

              <Link
                href="/services/ui-ux-design"
                className="group relative overflow-hidden rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-[#00f5d5]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#00f5d5]/10">
                  <Layers className="h-6 w-6 text-[#00f5d5]" />
                </div>
                <h3 className="text-xl font-bold text-[#121212]">UI/UX Design</h3>
                <p className="mt-2 text-[#121212]/70">Intuitive interfaces that enhance user experience.</p>
                <div className="mt-4 flex items-center text-[#00f5d5]">
                  <span className="text-sm font-medium">Learn more</span>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </Link>

              <Link
                href="/services/seo-digital-marketing"
                className="group relative overflow-hidden rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-[#00f5d5]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#00f5d5]/10">
                  <LineChart className="h-6 w-6 text-[#00f5d5]" />
                </div>
                <h3 className="text-xl font-bold text-[#121212]">SEO & Digital Marketing</h3>
                <p className="mt-2 text-[#121212]/70">Increase your online visibility and drive targeted traffic.</p>
                <div className="mt-4 flex items-center text-[#00f5d5]">
                  <span className="text-sm font-medium">Learn more</span>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
