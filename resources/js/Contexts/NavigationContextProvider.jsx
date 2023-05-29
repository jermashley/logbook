import { createContext, useState } from 'react'

export const NavigationContext = createContext(null)

export const NavigationContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <NavigationContext.Provider
      value={{
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </NavigationContext.Provider>
  )
}
