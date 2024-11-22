import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Choresaurus - Coming Soon',
  description: 'Join the waitlist for Choresaurus - The smart way to manage household chores',
}

export default function WaitlistLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
