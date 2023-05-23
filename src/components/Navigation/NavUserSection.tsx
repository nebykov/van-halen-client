import { useImage } from '@/hooks/useImage'
import { IUser } from '@/types/types'
import { defaultImage } from '@/utils/constants'
import Link from 'next/link'
import React from 'react'

interface NavUserSectionProps {
    active: boolean,
    onActive: (active: boolean) => void,
    user: IUser,
}

const NavUserSection: React.FC<NavUserSectionProps> = ({ active, onActive, user}) => {
    const imgSrc = useImage(user?.avatar, defaultImage.USER)
    const isAuthor = user && user?.roles?.includes('AUTHOR')

    return (
        <div className="absolute right-0 mr-7">
            <img src={imgSrc.image} onError={imgSrc.handleError} alt="" className="w-8 h-8 rounded-full cursor-pointer"
                onClick={(e) => {
                    e.stopPropagation()
                    onActive(!active)
                }
                } />
            {active && <div className="flex flex-col absolute right-0 mt-2">
                <ul onClick={(e) => { e.stopPropagation() }}
                    className="bg-[#282828] text-slate-100 w-52 rounded-lg p-2 overflow-hidden">
                    <li className="p-1 border-b border-solid border-b-slate-400">{user?.email}</li>
                    <Link href={`/home/author/${user?._id}`}>
                        <li className="hover:bg-slate-400 cursor-pointer rounded-lg p-1 mt-1">Account</li>
                    </Link>
                    <li className="hover:bg-slate-400 cursor-pointer rounded-lg p-1">{!isAuthor ? 'Become a Creator' : 'Create new Track'}</li>
                    <li className="mt-3 border-t-[1px]  hover:bg-slate-400 cursor-pointer rounded-lg p-1">Log out</li>
                </ul>
            </div>}
        </div>
    )
}

export default NavUserSection