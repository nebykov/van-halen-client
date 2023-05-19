import React from 'react'

interface SearchInputProps {
   onSearch: (value: string) => void
}

const SearchInput: React.FC<SearchInputProps> = ({onSearch}) => {
  const [query, setQuery] = React.useState('')
  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value
        setQuery(inputValue)
        onSearch(inputValue)
  }
 
  return (
    <input
    className='bg-[#242424] w-[450px] placeholder:text-[13px] text-white h-8 p-5 outline-none ml-[28px] focus:outline-slate-400 hover:outline-slate-700 rounded-3xl' 
    placeholder='What Do You Want To Listen To?' 
    value={query}
    onChange={(e) => handleSearchInput(e)}
    />
  )
}

export default SearchInput;