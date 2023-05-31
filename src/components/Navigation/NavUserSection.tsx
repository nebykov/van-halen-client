import { useImage } from '@/hooks/useImage'
import { useAppDispatch } from '@/hooks/useRedux'
import { logoutUser, setUser } from '@/store/actions/userReducer'
import { IUser } from '@/types/types'
import { becomeCreator } from '@/utils/api/userApi'
import { defaultImage } from '@/utils/constants'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import UploadFile from '../Forms/Input/UploadFile'
import axios from 'axios'

interface NavUserSectionProps {
    active: boolean,
    onActive: (active: boolean) => void,
    user: IUser,
}

const NavUserSection: React.FC<NavUserSectionProps> = ({ active, onActive, user }) => {
    const router = useRouter()
    const imgSrc = useImage(user?.avatar, defaultImage.USER)
    const isAuthor = user && user?.roles?.includes('AUTHOR')
    const [userPicture, setUserPicture] = React.useState(null)
    const dispatch = useAppDispatch()

    const logout = () => {
        dispatch(logoutUser())
        router.push('/auth')
    }

    const handleBecomeCreator = () => {
        if (!isAuthor) {
            becomeCreator(user._id).then(data => console.log(data))
        }
        router.push('/auth/create/track')
    }

    const setAvatar = () => {
         const formData = new FormData()
         formData.append('userId', user._id)
         formData.append('avatar', userPicture || '')
         axios.post<IUser>('http://localhost:5000/users/add_avatar', formData).then((data) => dispatch(setUser(data.data))).catch(e => console.log(e))
    }

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
                    <li onClick={handleBecomeCreator} className="hover:bg-slate-400 cursor-pointer rounded-lg p-1">{!isAuthor ? 'Become a Creator' : 'Create new Track'}</li>
                    {isAuthor && <Link href='/auth/create/album'><li className="hover:bg-slate-400 cursor-pointer rounded-lg p-1">Create an Album</li></Link>}
                    <li className="hover:bg-slate-400 cursor-pointer rounded-lg p-1 flex gap-4">
                        <UploadFile setFile={setUserPicture} accept='image/*'>
                            <span>Set Avatar</span>
                        </UploadFile>
                        {userPicture !== null && <span onClick={setAvatar} className='bg-white rounded-sm px-1 text-black font-semibold hover:scale-105 active:scale-100'>accept</span>}
                    </li>
                    <li className="mt-3 border-t-[1px]  hover:bg-slate-400 cursor-pointer rounded-lg p-1" onClick={logout}>Log out</li>
                </ul>
            </div>}
        </div>
    )
}

export default NavUserSection