import React from 'react'
import { useAuth } from '../../hooks/useAuth'
import { AuthModal } from './AuthModal'

interface AuthGuardProps {
  children: React.ReactNode
}

export function AuthGuard({ children }: AuthGuardProps) {
  const { user, loading } = useAuth()
  const [showAuthModal, setShowAuthModal] = React.useState(false)

  React.useEffect(() => {
    if (!loading && !user) {
      setShowAuthModal(true)
    } else {
      setShowAuthModal(false)
    }
  }, [user, loading])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex items-center gap-3">
          <img 
            src="/logo_clean.png"
            alt="Milo"
            className="w-8 h-8 object-contain animate-pulse"
          />
          <span className="text-lg font-medium text-gray-600">Loading...</span>
        </div>
      </div>
    )
  }

  return (
    <>
      {children}
      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)} 
      />
    </>
  )
}