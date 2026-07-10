import { useState, useEffect, useCallback } from 'react'

const AUTH_KEY = 'pms_auth_session'

/**
 * Lightweight authentication hook.
 * Since this is a frontend-only project (no backend / no database),
 * the session is simulated using localStorage.
 */
export function useAuth() {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const stored = localStorage.getItem(AUTH_KEY)
    if (stored) {
      try {
        setUser(JSON.parse(stored))
      } catch {
        localStorage.removeItem(AUTH_KEY)
      }
    }
    setIsLoading(false)
  }, [])

  const login = useCallback((username, password) => {
    // Demo credentials — frontend only, no real authentication backend.
    if (username?.trim().toLowerCase() === 'admin' && password === 'admin123') {
      const sessionUser = {
        name: 'Admin User',
        username: 'admin',
        role: 'Administrator',
        loggedInAt: new Date().toISOString(),
      }
      localStorage.setItem(AUTH_KEY, JSON.stringify(sessionUser))
      setUser(sessionUser)
      return { success: true }
    }
    return { success: false, message: 'Invalid username or password.' }
  }, [])

  const logout = useCallback(() => {
    localStorage.removeItem(AUTH_KEY)
    setUser(null)
  }, [])

  return { user, isLoading, isAuthenticated: !!user, login, logout }
}
