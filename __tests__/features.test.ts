import { describe, it, expect, beforeEach, afterEach } from 'vitest'

describe('Feature Flags', () => {
  const originalEnv = process.env

  beforeEach(() => {
    jest.resetModules()
    process.env = { ...originalEnv }
  })

  afterEach(() => {
    process.env = originalEnv
  })

  it('should enable waitlist when env variable is true', () => {
    process.env.NEXT_PUBLIC_WAITLIST_ENABLED = 'true'
    const { FEATURES } = require('@/lib/features')
    expect(FEATURES.WAITLIST_ENABLED).toBe(true)
  })

  it('should disable waitlist when env variable is false', () => {
    process.env.NEXT_PUBLIC_WAITLIST_ENABLED = 'false'
    const { FEATURES } = require('@/lib/features')
    expect(FEATURES.WAITLIST_ENABLED).toBe(false)
  })

  it('should disable waitlist when env variable is not set', () => {
    process.env.NEXT_PUBLIC_WAITLIST_ENABLED = undefined
    const { FEATURES } = require('@/lib/features')
    expect(FEATURES.WAITLIST_ENABLED).toBe(false)
  })
}) 