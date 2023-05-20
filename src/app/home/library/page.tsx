'use client'

import { useRouter } from 'next/navigation'

const Search = () => {
  const router = useRouter()
  return (
    <div className='bg-[#181818] min-h-screen'>
       <div onClick={() => router.push('/home/library/favorite')} className='group/item w-40 h-40 bg-black ml-[28px] rounded-md flex justify-center items-center cursor-pointer'>
        <h3 className='text-white font-bold group-hover/item:scale-125 duration-200'>Favorite</h3>
       </div>
    </div>
  )
}

export default Search