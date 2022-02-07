import { useState, useEffect, useContext, createContext } from 'react'
import fetchUser from '../services/user'

// Create the context we want to use
const UserContext = createContext()

// Create the userProvider to provide the context value
const UserProvider = ({ children }) => {
  const [user, setUser] = useState({})

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
}

// Create custom hook to expose the context value
const useUser = () => {
  const context = useContext(UserContext)

  // Create a check to make sure we are using the correct Provider
  if (context === undefined) {
    throw new Error('useUser must be used within a UserContext provider')
  }
  return context
}

export { UserProvider, useUser }
