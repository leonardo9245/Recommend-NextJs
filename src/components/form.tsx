import { useFilter } from '@/hooks/useFilter'
import { useGenres } from '@/hooks/useGenres'
import * as React from 'react'

export interface IFormProps {}

interface Genre {
  id: string
  name: string
}

export function Form(props: IFormProps) {
  const { type } = useFilter()
  const genres = useGenres(type)
  return (
    <form>
      <select
        defaultValue="select-genre"
        className="text- rounded-md bg-unselectedColor px-2 py-[2px] font-sans text-selectedColor"
        onChange={(val) => console.log(val.target.value)}
      >
        <option value="select-genre">Selecione um Gênero</option>
        {genres.map((val: Genre) => (
          <option key={val.id} value={val.id}>
            {val.name}
          </option>
        ))}
      </select>
    </form>
  )
}
