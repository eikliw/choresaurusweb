import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Home, Users, Calendar, Gift, Apple } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Choresaurus - The Fun Family Chore Management App',
  description: 'Choresaurus is the fun and easy way to manage family chores. Roar into responsibility with our intuitive app designed for the whole family.',
  openGraph: {
    title: 'Choresaurus - Make Chores Fun for the Whole Family',
    description: 'Manage family chores easily with Choresaurus. Features include easy scheduling, reward systems, and family-friendly design.',
    url: 'https://www.choresaurus.com/',
    siteName: 'Choresaurus',
    images: [
      {
        url: 'https://www.choresaurus.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Choresaurus - The Fun Family Chore Management App',
    description: 'Manage family chores easily with Choresaurus. Features include easy scheduling, reward systems, and family-friendly design.',
    images: ['https://www.choresaurus.com/og-image.jpg'],
  },
}

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F9F7F4]">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-white">
        <div className="container mx-auto flex items-center justify-between">
          <Link className="flex items-center justify-center" href="#">
            <Home className="h-6 w-6 text-[#21C97D]" />
            <span className="sr-only">Choresaurus</span>
          </Link>
          <nav className="flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium hover:text-[#21C97D]" href="#features">
              Features
            </Link>
            <Link className="text-sm font-medium hover:text-[#21C97D]" href="#how-it-works">
              How It Works
            </Link>
            <Link className="text-sm font-medium hover:text-[#21C97D]" href="#pricing">
              Pricing
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[#F9F7F4]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-[#21C97D]">
                    Welcome to Choresaurus
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    The fun and easy way to manage family chores. Roar into responsibility!
                  </p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Button className="w-full sm:w-auto bg-[#21C97D] text-white hover:bg-[#1AB06E]">
                    <Apple className="mr-2 h-5 w-5" />
                    Download on App Store
                  </Button>
                </div>
              </div>
              <div className="lg:pl-10 flex items-center justify-center">
                <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                  <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
                  <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                  <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                  <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                  <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                    <Image
                      src="/image1.png"
                      width={272}
                      height={572}
                      alt="Choresaurus app interface"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-[#21C97D]">Features</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              <Card className="bg-[#F9F7F4]">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Users className="h-12 w-12 text-[#FF9500]" />
                  <h3 className="text-2xl font-bold text-center text-[#21C97D]">Family Friendly</h3>
                  <p className="text-gray-500 text-center">
                    Designed for the whole family, from kids to parents.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-[#F9F7F4]">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Calendar className="h-12 w-12 text-[#FF9500]" />
                  <h3 className="text-2xl font-bold text-center text-[#21C97D]">Easy Scheduling</h3>
                  <p className="text-gray-500 text-center">
                    Set up and manage chores with our intuitive calendar.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-[#F9F7F4]">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Gift className="h-12 w-12 text-[#FF9500]" />
                  <h3 className="text-2xl font-bold text-center text-[#21C97D]">Reward System</h3>
                  <p className="text-gray-500 text-center">
                    Motivate with fun rewards for completed tasks.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="screenshots" className="w-full py-12 md:py-24 lg:py-32 bg-[#F9F7F4]">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-[#21C97D]">App Screenshots</h2>
            <div className="flex justify-center overflow-x-auto space-x-4 pb-4">
              {[1, 2, 3, 4].map((i) => (
                <Image
                  key={i}
                  src="/placeholder.svg"
                  width={300}
                  height={600}
                  alt={`App screenshot ${i}`}
                  className="rounded-lg shadow-lg flex-none w-[300px] h-[600px] object-cover"
                />
              ))}
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-[#21C97D]">How It Works</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F9F7F4] text-[#21C97D]">1</div>
                <h3 className="text-xl font-bold text-[#21C97D]">Create Your Family</h3>
                <p className="text-gray-500 text-center">Set up your family profile and add members.</p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F9F7F4] text-[#21C97D]">2</div>
                <h3 className="text-xl font-bold text-[#21C97D]">Assign Chores</h3>
                <p className="text-gray-500 text-center">Create and assign tasks to family members.</p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F9F7F4] text-[#21C97D]">3</div>
                <h3 className="text-xl font-bold text-[#21C97D]">Track Progress</h3>
                <p className="text-gray-500 text-center">Monitor completion and celebrate achievements.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-[#F9F7F4]">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-[#21C97D]">Pricing Plans</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <h3 className="text-2xl font-bold text-[#21C97D]">Basic</h3>
                  <p className="text-4xl font-bold text-[#FF9500]">Free</p>
                  <ul className="space-y-2 text-center">
                    <li className="flex items-center"><CheckCircle2 className="mr-2 h-4 w-4 text-[#21C97D]" /> Up to 5 family members</li>
                    <li className="flex items-center"><CheckCircle2 className="mr-2 h-4 w-4 text-[#21C97D]" /> Basic chore management</li>
                    <li className="flex items-center"><CheckCircle2 className="mr-2 h-4 w-4 text-[#21C97D]" /> Simple rewards system</li>
                  </ul>
                  <Button className="w-full bg-[#21C97D] text-white hover:bg-[#1AB06E]">Get Started</Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <h3 className="text-2xl font-bold text-[#21C97D]">Pro</h3>
                  <p className="text-4xl font-bold text-[#FF9500]">$9.99/mo</p>
                  <ul className="space-y-2 text-center">
                    <li className="flex items-center"><CheckCircle2 className="mr-2 h-4 w-4 text-[#21C97D]" /> Unlimited family members</li>
                    <li className="flex items-center"><CheckCircle2 className="mr-2 h-4 w-4 text-[#21C97D]" /> Advanced chore scheduling</li>
                    <li className="flex items-center"><CheckCircle2 className="mr-2 h-4 w-4 text-[#21C97D]" /> Custom rewards</li>
                  </ul>
                  <Button className="w-full bg-[#FF9500] text-white hover:bg-[#E68600]">Upgrade to Pro</Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <h3 className="text-2xl font-bold text-[#21C97D]">Family</h3>
                  <p className="text-4xl font-bold text-[#FF9500]">$19.99/mo</p>
                  <ul className="space-y-2 text-center">
                    <li className="flex items-center"><CheckCircle2 className="mr-2 h-4 w-4 text-[#21C97D]" /> Everything in Pro</li>
                    <li className="flex items-center"><CheckCircle2 className="mr-2 h-4 w-4 text-[#21C97D]" /> Family goal setting</li>
                    <li className="flex items-center"><CheckCircle2 className="mr-2 h-4 w-4 text-[#21C97D]" /> Priority support</li>
                  </ul>
                  <Button className="w-full bg-[#007AFF] text-white hover:bg-[#0066CC]">Choose Family Plan</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#21C97D]">
                Ready to Roar into Responsibility?
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                Download Choresaurus now and start making chores fun for the whole family!
              </p>
              <Button className="w-full sm:w-auto bg-[#21C97D] text-white hover:bg-[#1AB06E]">
                <Apple className="mr-2 h-5 w-5" />
                Download on App Store
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 px-4 md:px-6 border-t">
        <div className="container mx-auto flex flex-col gap-2 sm:flex-row items-center justify-between">
          <p className="text-xs text-gray-500">© 2024 Choresaurus. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6">
            <Link className="text-xs hover:text-[#21C97D]" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:text-[#21C97D]" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}