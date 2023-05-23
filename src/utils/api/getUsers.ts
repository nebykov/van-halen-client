import { IUser } from "@/types/types"


export async function getUserById(id: string): Promise<IUser> {
    const data = await fetch(`http://localhost:5000/users/${id}`)
    return data.json()
 }