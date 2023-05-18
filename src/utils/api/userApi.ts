import axios from "axios";


export async function login(email: string, password: string) {
    try {
        const { data } = await axios.post('http://localhost:5000/auth/login', { email: email, password: password })
        localStorage.setItem('token', data.token)
        return data
    } catch (e) {
        localStorage.removeItem('token')
    }
}


export async function auth() {
    try {
        const { data } = await axios.get('http://localhost:5000/auth', {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        localStorage.setItem('token', data.token)
        return data
    } catch (e) {
        localStorage.removeItem('token')
        alert('Auth Error ' + e)
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