import { IAlbum } from "@/types/types";




export async function getAlbum(albumId: string): Promise<IAlbum> {
      const data = await fetch(`http://localhost:5000/albums/${albumId}`)

      return data.json()
}