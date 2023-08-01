import { useEffect, useState } from 'react'
import { api } from '@/lib/api'
import { filterType } from '@/types/filter-type'

interface Genre {
  id: string
  name: string
}

export function useGenres(type: filterType) {
  const [genres, setGenres] = useState<Genre[]>([])

  useEffect(() => {
    const fetchGenres = async () => {
      const typeGenre = type === filterType.MOVIE ? 'movie' : 'tv'
      try {
        const response = await api.get(
          `/genre/${typeGenre}/list?language=pt-BR`,
          {
            headers: {
              Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
            },
          },
        )
        setGenres(response.data.genres)
      } catch (error) {
        console.error('Error fetching genres:', error)
      }
    }

    fetchGenres()
  }, [type])

  return genres
}
