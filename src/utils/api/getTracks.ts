import { ITrack } from "@/types/types"
import axios from "axios"

export async function getTracks(): Promise<ITrack[]> {
    const {data} = await axios.get('http://localhost:5000/tracks', {
      headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}
    })
  
    return data
  }