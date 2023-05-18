import axios from "axios";


export async function login(email: string, password: string) {
    try {
        const {data} = await axios.post('http://localhost:5000/auth/login', {email: email, password: password})
        localStorage.setItem('token', data.token)
        return data
    } catch (e) {
         localStorage.removeItem('token')
    }
}


export async function auth() {
    try {
         const { data } = await axios.get('http://localhost:5000/auth', {
           headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
         })
         localStorage.setItem('token', data.token)
         return data
    } catch(e) {
       localStorage.removeItem('token')
    }
}


// export async function trackToFav(trackId: string) {
//     try {
//          const { data } = await axios.get(`http://localhost:5000//users/favorite/tracks/add/${trackId}`, {
//            headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
//          })
//          return data
//     } catch(e) {
//        localStorage.removeItem('token')
//        return e
//     }
// }


// export async function removeTrackFromFav() {
//     try {
//          const { data } = await axios.get('http://localhost:5000/auth', {
//            headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
//          })
//          localStorage.setItem('token', data.token)
//          return data
//     } catch(e) {
//        localStorage.removeItem('token')
//        return e
//     }
// }