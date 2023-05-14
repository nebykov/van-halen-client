import axios from "axios";


export async function login(email: string, password: string) {
    try {
        const {data} = await axios.post('http://localhost:5000/auth/login', {email: email, password: password})
        console.log(data)
        localStorage.setItem('token', data.token)
    } catch (e) {
         localStorage.removeItem('token')
    }
}