import { Inter } from 'next/font/google'
import Link from 'next/link';

const inter = Inter({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function Home() {
  return (
    <div className={`${inter.className} flex wei`}>
      <video className="w-screen z-[-1] h-screen object-cover" src="http://localhost:3000/synth.mp4" muted loop autoPlay />
      <div className="absolute top-0 flex flex-col m-auto w-[100%] h-[100%] justify-center items-center">
        <p>Van Halen Wave</p>
        <h1
          className='text-3xl mb-4 font-bold'>Make Your Life Sound</h1>
        <Link href='/home'>
          <button
            className='bg-white 
        p-2 font-semibold 
        text-neutral-900 
        rounded-3xl 
        hover:scale-105 
        active:scale-100'>
            Try It For Free
          </button>
        </Link>
      </div>
    </div>
  )
}