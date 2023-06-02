import { IAlbum, ITrack } from "@/types/types"

export async function getTracks(): Promise<ITrack[]> {
  const data = await fetch('http://localhost:5000/tracks')

  return data.json()
}



// export async function getFavoriteTracks(userId: string): Promise<ITrack[]> {
//   const data = await fetch(`http://localhost:5000/tracks/favorite/${userId}`, {
//     next: {revalidate: 3}
//   })

//   return data.json()
// }


export async function getCreatedTracks(userId: string) {
  const data = await fetch(`http://localhost:5000/tracks/author/${userId}`)

  return data.json()
}


export async function getAlbums(): Promise<IAlbum[]> {
  const data = await fetch(`http://localhost:5000/albums`)

  return data.json()
}