import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Mail, Lock, User, GraduationCap, MapPin, Calendar } from 'lucide-react'
import { useAuth } from '../../hooks/useAuth'
import { supabase } from '../../lib/supabase'

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [mode, setMode] = useState<'signin' | 'signup' | 'onboarding'>('signin')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { signIn, signUp } = useAuth()

  // Auth form state
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Onboarding form state
  const [profile, setProfile] = useState({
    full_name: '',
    university: '',
    major: '',
    graduation_year: new Date().getFullYear() + 4,
    location: '',
    bio: '',
    skills: [] as string[],
    interests: [] as string[]
  })

  const [newSkill, setNewSkill] = useState('')
  const [newInterest, setNewInterest] = useState('')

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      if (mode === 'signin') {
        const { error } = await signIn(email, password)
        if (error) throw error
        onClose()
      } else if (mode === 'signup') {
        const { data, error } = await signUp(email, password)
        if (error) throw error
        if (data.user) {
          setMode('onboarding')
        }
      }
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleOnboarding = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) throw new Error('No user found')

      const { error } = await supabase
        .from('profiles')
        .insert({
          id: user.id,
          email: user.email!,
          ...profile
        })

      if (error) throw error
      onClose()
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const addSkill = () => {
    if (newSkill.trim() && !profile.skills.includes(newSkill.trim())) {
      setProfile(prev => ({
        ...prev,
        skills: [...prev.skills, newSkill.trim()]
      }))
      setNewSkill('')
    }
  }

  const removeSkill = (skill: string) => {
    setProfile(prev => ({
      ...prev,
      skills: prev.skills.filter(s => s !== skill)
    }))
  }

  const addInterest = () => {
    if (newInterest.trim() && !profile.interests.includes(newInterest.trim())) {
      setProfile(prev => ({
        ...prev,
        interests: [...prev.interests, newInterest.trim()]
      }))
      setNewInterest('')
    }
  }

  const removeInterest = (interest: string) => {
    setProfile(prev => ({
      ...prev,
      interests: prev.interests.filter(i => i !== interest)
    }))
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <img 
                  src="/logo_clean.png"
                  alt="Milo"
                  className="w-8 h-8 object-contain"
                />
                <h2 className="text-xl font-semibold text-gray-900">
                  {mode === 'signin' ? 'Welcome back' : 
                   mode === 'signup' ? 'Join Milo' : 
                   'Complete your profile'}
                </h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-gray-500 rounded-lg hover:bg-gray-100"
              >
                <X size={20} />
              </button>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                {error}
              </div>
            )}

            {mode === 'onboarding' ? (
              <form onSubmit={handleOnboarding} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="text"
                      value={profile.full_name}
                      onChange={(e) => setProfile(prev => ({ ...prev, full_name: e.target.value }))}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    University
                  </label>
                  <div className="relative">
                    <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="text"
                      value={profile.university}
                      onChange={(e) => setProfile(prev => ({ ...prev, university: e.target.value }))}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Yale University"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Major
                    </label>
                    <input
                      type="text"
                      value={profile.major}
                      onChange={(e) => setProfile(prev => ({ ...prev, major: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Computer Science"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Graduation Year
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <input
                        type="number"
                        value={profile.graduation_year}
                        onChange={(e) => setProfile(prev => ({ ...prev, graduation_year: parseInt(e.target.value) }))}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        min={new Date().getFullYear()}
                        max={new Date().getFullYear() + 10}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="text"
                      value={profile.location}
                      onChange={(e) => setProfile(prev => ({ ...prev, location: e.target.value }))}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="New Haven, CT"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Skills
                  </label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {profile.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm flex items-center gap-1"
                      >
                        {skill}
                        <button
                          type="button"
                          onClick={() => removeSkill(skill)}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <X size={14} />
                        </button>
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={newSkill}
                      onChange={(e) => setNewSkill(e.target.value)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Add a skill"
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())}
                    />
                    <button
                      type="button"
                      onClick={addSkill}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      Add
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Interests
                  </label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {profile.interests.map((interest) => (
                      <span
                        key={interest}
                        className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm flex items-center gap-1"
                      >
                        {interest}
                        <button
                          type="button"
                          onClick={() => removeInterest(interest)}
                          className="text-emerald-600 hover:text-emerald-800"
                        >
                          <X size={14} />
                        </button>
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={newInterest}
                      onChange={(e) => setNewInterest(e.target.value)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Add an interest"
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addInterest())}
                    />
                    <button
                      type="button"
                      onClick={addInterest}
                      className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
                    >
                      Add
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Bio (Optional)
                  </label>
                  <textarea
                    value={profile.bio}
                    onChange={(e) => setProfile(prev => ({ ...prev, bio: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    rows={3}
                    placeholder="Tell us about yourself..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Creating Profile...' : 'Complete Setup'}
                </button>
              </form>
            ) : (
              <form onSubmit={handleAuth} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="your.email@yale.edu"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="••••••••"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Loading...' : mode === 'signin' ? 'Sign In' : 'Sign Up'}
                </button>

                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => setMode(mode === 'signin' ? 'signup' : 'signin')}
                    className="text-blue-600 hover:text-blue-700 text-sm"
                  >
                    {mode === 'signin' 
                      ? "Don't have an account? Sign up" 
                      : "Already have an account? Sign in"
                    }
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}