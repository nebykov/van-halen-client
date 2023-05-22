import React from 'react'



const AuthorLoader: React.FC = () => {
    return (
      <div className='w-96 min-h-52 bg-[#242424] rounded-lg flex flex-col p-4 gap-4 animate-pulse'>
        <span className='w-20 h-20 rounded-full bg-[#181818]' />
            <span className='text-white text-3xl font-bold'/>
            <span className='bg-[#181818] w-28 text-white py-2 flex justify-center rounded-2xl hover:scale-110 duration-150 cursor-pointer'/>
      </div>
    )
  }
  
  export default AuthorLoader