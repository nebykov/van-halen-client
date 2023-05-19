'use client'

import AuthorCard from '@/components/Search/AuthorCard'
import SearchInput from '@/components/Search/SearchInput'
import { ITrack, IUser } from '@/types/types'
import { globalSearch } from '@/utils/api/searchApi'
import React from 'react'

const Search = () => {
  const [authorResult, setAuthorResult] = React.useState<IUser | null>(null)
  const [tracksResult, setTracksResult] = React.useState<ITrack[]>([])
  const [query, setQuery] = React.useState('');

  React.useEffect(() => {
    const timer = setTimeout(() => {
      const search = async () => {
        try {
          globalSearch(query)
            .then((result) => {
              const { author, tracks } = result;
              setAuthorResult(author)
              setTracksResult(tracks)
              console.log('Автор:', authorResult);
              console.log('Песни:', tracksResult);
            })
            .catch((error) => {
              console.error('Ошибка поиска:', error);
            });
        } catch (e) {
          console.log(`Search Error ${e}`);
        }
      };
  
      if (query) {
        search();
      } else {
            setAuthorResult(null)
            setTracksResult([])
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [query]);

  const handleSearch = (inputValue: string) => {
    setQuery(inputValue);
  };

  return (
    <div className='bg-[#181818] min-h-screen pt-2'>
      <div className='mb-6'>
        <SearchInput onSearch={handleSearch} />
        </div>
      <div className='ml-[28px]'>
         <AuthorCard author={authorResult}/>
      </div>
    </div>
  )
}

export default Search