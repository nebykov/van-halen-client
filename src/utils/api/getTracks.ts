import { ITrack } from "@/types/types"
import axios from "axios"

export async function getTracks(): Promise<ITrack[]> {
  const data = await fetch('http://localhost:5000/tracks', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })

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