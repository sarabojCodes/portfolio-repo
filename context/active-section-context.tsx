'use client'
import type { SectionName } from '@/lib/types'
import React, { createContext, useContext, useState } from 'react'


type ActiveContextProps = {
  children: React.ReactNode
}


type ActiveHeaderContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>,
  timeOfLastClick: number,
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
}

const ActiveHeaderSectionContext = createContext<ActiveHeaderContextType | null>(null)

const AcitveSectiionContextProvider = ({ children }: ActiveContextProps) => {
  const [activeSection, setActiveSection] = useState<SectionName>('Home')
  const [timeOfLastClick, setTimeOfLastClick] = useState(0)
  return (<ActiveHeaderSectionContext.Provider value={{ activeSection, setActiveSection, timeOfLastClick, setTimeOfLastClick }}>
    {children}
  </ActiveHeaderSectionContext.Provider>)
}

export function useAcitveSectionContext() {
  const context = useContext(ActiveHeaderSectionContext)
  if (context === null) {
    throw new Error(
      "useAciveSections"
    )
  }
  return context
}

export default AcitveSectiionContextProvider