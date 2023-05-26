'use client'
import { useFilter } from '@/hooks/useFilter'
import { useGenres } from '@/hooks/useGenres'
import { filterType } from '@/types/filter-type'

interface Genre {
  id: string
  name: string
}

export default function Options() {
  const { type, setType } = useFilter()
  const genres = useGenres(type)

  const handleOptionClick = (value: filterType) => {
    setType(value)
  }

  return (
    <div className="mx-4 mt-20 flex flex-wrap items-center gap-6 md:mx-20 md:gap-10">
      <ul className="flex space-x-4 font-sans font-medium text-white">
        <li
          onClick={() => handleOptionClick(filterType.MOVIE)}
          className={`${
            type === filterType.MOVIE
              ? ' border-b-2 border-selectedColor text-selectedColor transition duration-300 hover:border-hoverColor'
              : 'text-unselectedColor'
          } cursor-pointer transition duration-300 hover:text-hoverColor `}
        >
          Filmes
        </li>
        <li
          onClick={() => handleOptionClick(filterType.SHOW)}
          className={`${
            type === filterType.SHOW
              ? 'border-b-2 border-selectedColor text-selectedColor transition duration-300 hover:border-hoverColor'
              : 'text-unselectedColor'
          } cursor-pointer transition duration-300 hover:text-hoverColor`}
        >
          Séries
        </li>
      </ul>
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

      <button className="rounded-md bg-selectedColor px-4 py-[2px] font-sans font-bold">
        Buscar
      </button>
    </div>
  )
}
