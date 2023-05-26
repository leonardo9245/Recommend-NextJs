'use client'
import { ReactNode, createContext, useState } from 'react'
import { filterType } from '@/types/filter-type'

export const FilterContext = createContext({
  type: filterType.MOVIE,
  setType: (value: filterType) => {},
})

interface ProviderProps {
  children: ReactNode
}

export function FilterContextProvider({ children }: ProviderProps) {
  const [type, setType] = useState(filterType.MOVIE)

  return (
    <FilterContext.Provider value={{ type, setType }}>
      {children}
    </FilterContext.Provider>
  )
}
