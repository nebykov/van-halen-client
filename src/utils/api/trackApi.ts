import { ITrack } from "@/types/types"
import axios from "axios"


export async function getFavoriteTracks(userId: string): Promise<ITrack[]> {
    const {data} = await axios.get(`http://localhost:5000/tracks/favorite/${userId}`)
    
    return data
  }