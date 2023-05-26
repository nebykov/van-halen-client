import Link from "next/link"


const Library = () => {
  return (
    <Link href='/home/library/favorite'>
      <div className='bg-[#181818]'>
        <div className='group/item w-40 h-40 bg-black ml-[28px] rounded-md flex justify-center items-center cursor-pointer'>
          <h3 className='text-white font-bold group-hover/item:scale-125 duration-200'>Favorite</h3>
        </div>
      </div>
    </Link>
  )
}

export default Library