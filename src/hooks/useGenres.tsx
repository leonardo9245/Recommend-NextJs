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
    const typeGenre = type === filterType.MOVIE ? 'movie' : 'tv'

    const fetchGenres = async () => {
      try {
        const response = await api.get(
          `/genre/${typeGenre}/list?language=pt-BR`,
          {
            headers: {
              Authorization: `Bearer ${process.env.AUTHORIZATION_API}`,
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
