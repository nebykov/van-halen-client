'use client'

import AuthorCard from '@/components/Search/AuthorCard'
import AuthorLoader from '@/components/Search/AuthorLoader'
import SearchInput from '@/components/Search/SearchInput'
import TrackListCard from '@/components/Search/TrackListCard'
import { ITrack, IUser } from '@/types/types'
import { globalSearch } from '@/utils/api/searchApi'
import styles from '../../../styles/search.module.scss'
import React from 'react'

const Search = () => {
  const [authorResult, setAuthorResult] = React.useState<IUser | null>(null)
  const [tracksResult, setTracksResult] = React.useState<ITrack[]>([])
  const [isLoading, setIsLoading] = React.useState(false)
  const [query, setQuery] = React.useState('');

  React.useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      const search = async () => {
        try {
          globalSearch(query)
            .then((result) => {
              const { author, tracks } = result;
              setAuthorResult(author)
              setTracksResult(tracks)
            })
            .catch((error) => {
              console.error('Ошибка поиска:', error);
            });
            setIsLoading(false)
        } catch (e) {
          console.log(`Search Error ${e}`);
        }
      };

      if (query) {
        search();
      } else {
        setAuthorResult(null)
        setTracksResult([])
        setIsLoading(false)
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
      <div className='ml-[28px] flex gap-7'>
        <div>
          {isLoading ? <AuthorLoader/> : <AuthorCard author={authorResult} />}
        </div>
        {tracksResult && !isLoading &&
          <div className='w-full py-1'>
            {tracksResult.map((track) => (
              <TrackListCard key={track._id} track={track} />
            ))}
          </div>}
      </div>
    </div>
  )
}

export default Search