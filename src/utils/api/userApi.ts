import { IApiRequestUser, IUser } from "@/types/types";
import axios, { AxiosError } from "axios";


export async function login(email: string, password: string): Promise<IApiRequestUser> {
    try {
        const { data } = await axios.post('http://localhost:5000/auth/login', { email: email, password: password })
        localStorage.setItem('token', data.token)
        return data
    } catch (error) {
        localStorage.removeItem('token')
        throw error
    }
}


export async function registration(email: string, username: string, password: string): Promise<IApiRequestUser> {
    try {
        const { data } = await axios.post('http://localhost:5000/auth/registration', { email: email, username: username, password: password })
        localStorage.setItem('token', data.token)
        return data
    } catch (error) {
        localStorage.removeItem('token')
        throw error
    }
}



export async function auth(): Promise<IApiRequestUser> {
    try {
        const { data } = await axios.get<IApiRequestUser>('http://localhost:5000/auth', {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });

        localStorage.setItem('token', data.token);
        return data;
    } catch (error) {
        localStorage.removeItem('token');
        throw error;
    }
}


export async function becomeCreator(userId: string): Promise<IUser> {
    try {
        const { data } = await axios.post(`http://localhost:5000/users/roles/add/${userId}`, { role: 'AUTHOR' })
        return data
    } catch (error) {
        throw error
    }
}


export async function trackToFav(trackId: string) {
    try {
        const { data } = await axios.get(`http://localhost:5000/users/favorite/tracks/add/${trackId}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        return data
    } catch (e) {
        alert(e)
    }
}


export async function removeTrackFromFav(trackId: string) {
    try {
        const { data } = await axios.get(`http://localhost:5000/users/favorite/tracks/remove/${trackId}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        return data
    } catch (e) {
        alert(e)
    }
}