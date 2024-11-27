'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { AnimatedBackground } from '@/components/animated-background'
import Image from 'next/image'
import { FEATURES } from '@/lib/features'
import { useRouter } from 'next/navigation'

export default function WaitlistPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (!FEATURES.WAITLIST_ENABLED) {
      router.replace('/')
    }
  }, [router])

  // If waitlist is disabled, don't render the page
  if (!FEATURES.WAITLIST_ENABLED) {
    return null
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setMessage('Thanks for joining our waitlist!')
        setEmail('')
      } else {
        throw new Error(data.message || 'Something went wrong')
      }
    } catch {
      setStatus('error')
      setMessage('Sorry, something went wrong. Please try again.')
    }
  }

  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden">
      <AnimatedBackground />
      
      <main className="flex-1 relative">
        <section className="w-full min-h-screen flex items-center justify-center py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col justify-center space-y-4 max-w-3xl mx-auto text-center">
              <div className="space-y-2">
                {/* App Icon */}
                <div className="flex justify-center mb-8">
                  <Image
                    src="/app-icon.png"
                    alt="Choresaurus App Icon"
                    width={96}
                    height={96}
                    className="rounded-2xl shadow-lg"
                  />
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-[#21C97D] drop-shadow-sm">
                  Coming Soon to iOS
                </h1>
                <p className="max-w-[600px] text-gray-600 md:text-xl mx-auto">
                  We&apos;re working hard to bring you Choresaurus for iPhone - The smart way to manage household chores. Join our waitlist to be notified when we launch!
                </p>
              </div>
              
              <div className="mt-8">
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:border-[#21C97D] focus:outline-none focus:ring-2 focus:ring-[#21C97D] focus:ring-offset-2 bg-white/80 backdrop-blur-sm"
                    required
                  />
                  <Button
                    type="submit"
                    disabled={status === 'loading'}
                    className="bg-[#21C97D] text-white hover:bg-[#1ba167] transition-colors shadow-lg hover:shadow-xl"
                  >
                    {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
                  </Button>
                </form>

                {message && (
                  <div className={`mt-4 rounded-lg p-3 backdrop-blur-sm ${
                    status === 'success' ? 'bg-green-100/80 text-green-700' : 'bg-red-100/80 text-red-700'
                  }`}>
                    {message}
                  </div>
                )}
              </div>

              <div className="mt-12 grid gap-6 sm:grid-cols-3">
                <div className="rounded-lg bg-white/80 backdrop-blur-sm p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="mb-2 font-semibold text-[#21C97D]">Smart Scheduling</h3>
                  <p className="text-gray-600">Intelligent chore scheduling that works for your household</p>
                </div>
                <div className="rounded-lg bg-white/80 backdrop-blur-sm p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="mb-2 font-semibold text-[#21C97D]">Family Friendly</h3>
                  <p className="text-gray-600">Easy to use interface for the whole family</p>
                </div>
                <div className="rounded-lg bg-white/80 backdrop-blur-sm p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="mb-2 font-semibold text-[#21C97D]">Rewards System</h3>
                  <p className="text-gray-600">Motivate and track progress with our built-in rewards</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
