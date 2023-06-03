import AlbumHead from "@/components/Album/AlbumHead"
import AlbumTrackList from "@/components/Album/AlbumTrackList"
import { getAlbum } from "@/utils/api/albumApi"

type Params = {
    params: {
        albumId: string
    }
}


export default async function AlbumPage({params: {albumId}}: Params) {
       const album = await getAlbum(albumId)
    return (
      <>
          <div className="mx-[28px]">
            <AlbumHead user={album.author} title={album.name || ''} image={album.picture} album={album}/>
            <AlbumTrackList tracks={album.tracks}/>
          </div>
      </>
    )
}



