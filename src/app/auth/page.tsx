import { Inter } from 'next/font/google'
import Image from 'next/image';

const inter = Inter({
    weight: ['400', '700'],
    subsets: ['latin'],
    display: 'swap',
});


const Auth = () => {
    return (
        <div>
            <div className={`${inter.className} flex items-center justify-center h-20 bg-white border-b-[1px] border-solid border-b-[#D9DADC]`}>
                <h1 className="font-bold text-2xl">Van Halen Wave</h1>
            </div>
            <div className='w-[450px] m-auto'>
                <div className='flex flex-col items-start gap-4 border-b-[1px] border-solid border-b-[#D9DADC] mt-10'>
                    <Image src='http://localhost:3000/van-halen.png' alt='Logo' height={44} width={450} />
                    <h3 className={`${inter.className} ml-4 font-bold mt-4 text-xs`}>Email address or username</h3>
                    <input className='w-[450px] placeholder:text-[13px]  h-8 p-5 border-[1px] border-solid border-[#D9DADC] outline-none rounded-[4px]' placeholder='Email address or username' />
                    <h3 className={`${inter.className} ml-4 font-bold text-xs`}>Email address or username</h3>
                    <input className='w-[450px] placeholder:text-[13px]  h-8 p-5 border-[1px] border-solid border-[#D9DADC] outline-none rounded-[4px]' placeholder='Password' />
                    <button className='self-end bg-violet-700 h-12 w-28 rounded-3xl hover:scale-110 duration-150 ease-in-out text-white mb-4'>LOG IN</button>
                </div>
                <div className='flex flex-col gap-4 mt-4'>
                    <h3 className='self-center'>Don't have an account?</h3>
                    <button className='w-full bg-white p-3 border-[2px] hover:scale-105 duration-150 ease-in-out border-solid rounded-3xl border-[#D9DADC]'>SIGN UP FOR VH WAVE</button>
                </div>
            </div>
        </div>
    )
}

export default Auth;