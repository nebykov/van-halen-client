import AlbumHead from "@/components/Album/AlbumHead"
import AlbumTrackList from "@/components/Album/AlbumTrackList"
import { getCreatedTracks, getFavoriteTracks } from "@/utils/api/getTracks"
import { getUserById } from "@/utils/api/getUsers"

type Params = {
    params: {
        userId: string
    }
}


export default async function AuthorPage({params: {userId}}: Params) {
    const user = await getUserById(userId)
    const tracks = await getCreatedTracks(userId)
  
  
    return (
      <>
        {user &&
          <div className="mx-[28px]">
            <AlbumHead user={user} title={user?.username || ''} userPage={true}/>
            <AlbumTrackList tracks={tracks}/>
          </div>
        }
      </>
    )
}