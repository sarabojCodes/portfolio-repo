'use client'
import React, { createContext, useContext, useState } from 'react'
import { links } from '@/lib/data'


type SectionName = typeof links[number]["name"];

type ActiveContextProps = {
  children: React.ReactNode
}


type ActiveHeaderContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>
}

  const ActiveHeaderSectionContext = createContext<ActiveHeaderContextType | null>(null)

const AcitveSectiionContextProvider = ({ children }: ActiveContextProps) => {
  const [activeSection, setActiveSection] = useState<SectionName>('Home')
  return (<ActiveHeaderSectionContext.Provider value={{ activeSection,setActiveSection}}>
    {children}
  </ActiveHeaderSectionContext.Provider>)
}

export function useAcitveSectionContext(){
  const context = useContext(ActiveHeaderSectionContext)
  if(context === null){
    throw new Error(
      "useAciveSections"
    )
  }
  return context
}

export default AcitveSectiionContextProvider